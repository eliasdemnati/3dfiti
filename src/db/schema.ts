import * as t from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm'
import { v4 as uuidv4 } from 'uuid'

export const projects = t.sqliteTable('projects', {
  id: t.text('id', { length: 16 }).$defaultFn(() => uuidv4()).primaryKey(),
  nb_prints: t.integer({ mode: 'number' }).default(0),
  name: t.text().notNull(),
  status: t.text({ enum: ['draft', 'pre-drop', 'available', 'for_sale', 'archived'] }).notNull(),
  createdAt: t.integer('created_at', { mode: 'timestamp' }).default(
    sql`(unixepoch())`,
  ),
})

export const items = t.sqliteTable('items', {
  id: t.text('id', { length: 16 }).$defaultFn(() => uuidv4()).primaryKey(),
  project_id: t.text('project_id', { length: 16 }).$defaultFn(() => uuidv4()),
  iid: t.integer({ mode: 'number' }).default(0),
  status: t.text({ enum: ['draft', 'pre-drop', 'dropped', 'claimed', 'purchased', 'lost'] }).notNull(),
  createdAt: t.integer('created_at', { mode: 'timestamp' }).default(
    sql`(unixepoch())`,
  ),
})

export const itemsRelation = relations(items, ({ one }) => ({
  project: one(projects, {
      fields: [items.project_id],
      references: [projects.id],
  }),
}))
