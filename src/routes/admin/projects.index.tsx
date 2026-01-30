import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { format } from 'date-fns'
import { getProjects } from "@/server/projects"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export const Route = createFileRoute('/admin/projects/')({
  loader: () => getProjects(),
  component: RouteComponent,
})

function RouteComponent() {
  const projects = Route.useLoaderData()
  const navigate = useNavigate()

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Prints</TableHead>
            <TableHead>Creation date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => {
            return (
              <TableRow
                key={project.id}
                className="cursor-pointer"
                onClick={() => navigate({ to: '/admin/projects/$projectId', params: { projectId: project.id } })}
              >
                <TableCell>
                  <Avatar>
                    <AvatarImage src='/placeholder.svg' />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                      XX
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{project.nb_prints}</TableCell>
                <TableCell>{format(project.createdAt, 'dd/MM/yyyy')}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
