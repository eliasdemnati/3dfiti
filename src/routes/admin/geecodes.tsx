import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/geecodes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/geecodes"!</div>
}
