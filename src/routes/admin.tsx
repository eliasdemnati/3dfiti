import { Outlet, createFileRoute } from '@tanstack/react-router'
import {
  Binary,
  Cog,
  House,
  PencilRuler,
  Shapes,
  UsersRound,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

const items = [
  {
    title: 'Overview',
    url: '/admin',
    icon: House,
  },
  {
    title: 'Projects',
    url: '/admin/projects',
    icon: Shapes,
  },
  {
    title: 'Items',
    url: '/admin/items',
    icon: PencilRuler,
  },
  {
    title: 'Gee-Codes',
    url: '/admin/geecodes',
    icon: Binary,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: UsersRound,
  },
  {
    title: 'Global Settings',
    url: '/admin/settings',
    icon: Cog,
  },
]

function RouteComponent() {
  return (
    <div className="pt-28 px-4 pb-4 h-screen">
      <div className="relative h-full">
        <SidebarProvider className="absolute left-0 top-0 h-full min-h-full">
          <Sidebar variant="floating" className="absolute h-full">
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
          <div className="p-4 pl-8 w-full max-h-full overflow-y-auto">
            <Outlet />
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
