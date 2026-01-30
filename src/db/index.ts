import { drizzle } from 'drizzle-orm/better-sqlite3'

import * as schema from './schema.ts'
import * as authSchema from './auth-schema.ts'

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...schema,
    ...authSchema
  }
})
