import { createFileRoute } from '@tanstack/react-router'
import { NumberTrends } from './-dashboard/number-trends'
import { Charts } from './-dashboard/charts'
import { Activity } from './-dashboard/activity'
import { Leaderboard } from './-dashboard/leaderboard'

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex gap-4 justify-between md:gap-6 h-full overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <NumberTrends />
        <div className="px-4 lg:px-6">
          <Charts />
        </div>
        <div className="px-4 lg:px-6 min-h-0 flex-1">
          <Leaderboard />
        </div>
      </div>
      <Activity />
    </div>
  )
}
