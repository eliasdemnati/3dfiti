import { createServerFn } from '@tanstack/react-start'
import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { projects } from '@/db/schema'

export const getProjects = createServerFn({ method: 'GET' }).handler(
  async () => {
    return db.select().from(projects)
  },
)

export const getProjectById = createServerFn({ method: 'GET' })
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, id))
    return project
  })
