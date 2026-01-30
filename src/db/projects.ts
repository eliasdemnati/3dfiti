import * as t from "drizzle-orm/sqlite-core";
import { relations, sql } from 'drizzle-orm'
import { items } from './items'

export const projects = t.sqliteTable('projects', {
  id: t.text('id', { length: 36 }).$defaultFn(() => crypto.randomUUID()).primaryKey(),
  nb_prints: t.integer({ mode: 'number' }).default(0),
  name: t.text().notNull(),
  status: t.text({ enum: ['draft', 'pre-drop', 'available', 'for_sale', 'archived'] }).notNull(),
  createdAt: t.integer('created_at', { mode: 'timestamp' }).default(
    sql`(unixepoch())`,
  ).notNull(),
})

export const projectsRelations = relations(projects, ({ many }) => ({
  items: many(items),
}))
