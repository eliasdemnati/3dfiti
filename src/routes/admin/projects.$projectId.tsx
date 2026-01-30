import { createFileRoute } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { getProjectById } from '@/server/projects'

export const Route = createFileRoute('/admin/projects/$projectId')({
  loader: ({ params: { projectId } }) => getProjectById({ data: projectId }),
  component: RouteComponent,
})

function RouteComponent() {
  const project = Route.useLoaderData()

  return (
    <div className="p-4">
      <Breadcrumb className="space-y-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {project.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
