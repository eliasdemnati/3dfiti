import { drizzle } from 'drizzle-orm/better-sqlite3'

import * as projectsSchema from './projects'
import * as itemsSchema from './items'
import * as authSchema from './auth.ts'
import * as mediaSchema from './media.ts'

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...projectsSchema,
    ...itemsSchema,
    ...authSchema,
    ...mediaSchema,
  }
})
