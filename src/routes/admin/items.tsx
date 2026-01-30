import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/items')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/items"!</div>
}
