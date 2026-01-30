import * as t from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm'
import { user } from './auth'

export const media = t.sqliteTable('media', {
  id: t.text('id', { length: 36 }).$defaultFn(() => crypto.randomUUID()).primaryKey(),
  filename: t.text().notNull(),
  originalName: t.text('original_name').notNull(),
  mimeType: t.text('mime_type').notNull(),
  size: t.integer({ mode: 'number' }).notNull(),
  width: t.integer({ mode: 'number' }),
  height: t.integer({ mode: 'number' }),
  folder: t.text().default('/'),
  alt: t.text(),
  path: t.text().notNull(),
  uploadedBy: t.text('uploaded_by').references(() => user.id),
  createdAt: t.integer('created_at', { mode: 'timestamp' }).default(
    sql`(unixepoch())`,
  ).notNull(),
})

export const mediaAttachments = t.sqliteTable('media_attachments', {
  id: t.text('id', { length: 36 }).$defaultFn(() => crypto.randomUUID()).primaryKey(),
  mediaId: t.text('media_id').notNull().references(() => media.id, { onDelete: 'cascade' }),
  entityType: t.text('entity_type').notNull(),
  entityId: t.text('entity_id').notNull(),
  role: t.text(),
  order: t.integer({ mode: 'number' }).default(0),
})

export const mediaRelations = relations(media, ({ one, many }) => ({
  uploader: one(user, {
    fields: [media.uploadedBy],
    references: [user.id],
  }),
  attachments: many(mediaAttachments),
}))

export const mediaAttachmentsRelations = relations(mediaAttachments, ({ one }) => ({
  media: one(media, {
    fields: [mediaAttachments.mediaId],
    references: [media.id],
  }),
}))
