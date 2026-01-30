import * as t from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm'
import { projects } from './projects'

export const items = t.sqliteTable('items', {
  id: t.text('id', { length: 36 }).$defaultFn(() => crypto.randomUUID()).primaryKey(),
  project_id: t.text('project_id', { length: 36 }).references(() => projects.id),
  iid: t.integer({ mode: 'number' }).default(0),
  status: t.text({ enum: ['draft', 'pre-drop', 'dropped', 'claimed', 'purchased', 'lost'] }).notNull(),
  createdAt: t.integer('created_at', { mode: 'timestamp' }).default(
    sql`(unixepoch())`,
  ).notNull(),
})

export const itemsRelations = relations(items, ({ one }) => ({
  project: one(projects, {
    fields: [items.project_id],
    references: [projects.id],
  }),
}))
