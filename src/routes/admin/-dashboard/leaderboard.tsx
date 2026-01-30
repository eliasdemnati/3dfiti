import { Crown, Flame, Medal, TrendingDown, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type LeaderboardEntry = {
  rank: number
  user: { name: string; initials: string; avatar?: string }
  score: number
  claims: number
  streak: number
  change: number // positive = moved up, negative = moved down, 0 = no change
  badges: Array<string>
}

const leaderboardData: Array<LeaderboardEntry> = [
  {
    rank: 1,
    user: { name: 'alice_92', initials: 'A9' },
    score: 2450,
    claims: 34,
    streak: 3,
    change: 2,
    badges: ['Night Owl', 'Speed Demon'],
  },
  {
    rank: 2,
    user: { name: 'bob_mtl', initials: 'BM' },
    score: 2180,
    claims: 50,
    streak: 5,
    change: 0,
    badges: ['Seasoned Hunter'],
  },
  {
    rank: 3,
    user: { name: 'charlie_x', initials: 'CX' },
    score: 1975,
    claims: 28,
    streak: 0,
    change: -1,
    badges: ['Explorer'],
  },
  {
    rank: 4,
    user: { name: 'dave_nantes', initials: 'DN' },
    score: 1640,
    claims: 22,
    streak: 2,
    change: 1,
    badges: [],
  },
  {
    rank: 5,
    user: { name: 'emma_lyon', initials: 'EL' },
    score: 1520,
    claims: 19,
    streak: 0,
    change: -2,
    badges: ['Early Bird'],
  },
  {
    rank: 6,
    user: { name: 'frank_bdx', initials: 'FB' },
    score: 1340,
    claims: 15,
    streak: 1,
    change: 0,
    badges: [],
  },
  {
    rank: 7,
    user: { name: 'gina_mars', initials: 'GM' },
    score: 1210,
    claims: 12,
    streak: 0,
    change: 3,
    badges: ['Newcomer'],
  },
  {
    rank: 8,
    user: { name: 'hugo_tlse', initials: 'HT' },
    score: 980,
    claims: 10,
    streak: 0,
    change: -1,
    badges: [],
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-4 w-4 text-yellow-500" />
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />
    case 3:
      return <Medal className="h-4 w-4 text-amber-600" />
    default:
      return (
        <span className="text-muted-foreground w-4 text-center text-sm font-medium">
          {rank}
        </span>
      )
  }
}

function Leaderboard() {
  const [period, setPeriod] = useState('all')

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>Top hunters by score</CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={period}
            onValueChange={(v) => v && setPeriod(v)}
            variant="outline"
          >
            <ToggleGroupItem value="7d">7d</ToggleGroupItem>
            <ToggleGroupItem value="30d">30d</ToggleGroupItem>
            <ToggleGroupItem value="all">All</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent className="overflow-y-auto">
        <div className="space-y-1">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                entry.rank <= 3
                  ? 'bg-muted/50'
                  : 'hover:bg-muted/30'
              }`}
            >
              {/* Rank */}
              <div className="flex w-6 shrink-0 justify-center">
                {getRankIcon(entry.rank)}
              </div>

              {/* Avatar */}
              <Avatar className="h-7 w-7">
                <AvatarImage src={entry.user.avatar || '/placeholder.svg'} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                  {entry.user.initials}
                </AvatarFallback>
              </Avatar>

              {/* Name + badges */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-foreground truncate text-sm font-medium">
                    {entry.user.name}
                  </span>
                  {entry.streak > 0 && (
                    <span className="flex items-center gap-0.5 text-xs text-orange-500">
                      <Flame className="h-3 w-3" />
                      {entry.streak}
                    </span>
                  )}
                </div>
                {entry.badges.length > 0 && (
                  <div className="mt-0.5 flex gap-1">
                    {entry.badges.slice(0, 2).map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="text-right shrink-0">
                <div className="text-foreground text-sm font-semibold tabular-nums">
                  {entry.score.toLocaleString()}
                </div>
                <div className="text-muted-foreground text-xs">
                  {entry.claims} claims
                </div>
              </div>

              {/* Change indicator */}
              <div className="w-8 shrink-0 text-right">
                {entry.change > 0 && (
                  <span className="inline-flex items-center gap-0.5 text-xs text-green-500">
                    <TrendingUp className="h-3 w-3" />
                    {entry.change}
                  </span>
                )}
                {entry.change < 0 && (
                  <span className="inline-flex items-center gap-0.5 text-xs text-red-500">
                    <TrendingDown className="h-3 w-3" />
                    {Math.abs(entry.change)}
                  </span>
                )}
                {entry.change === 0 && (
                  <span className="text-muted-foreground text-xs">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export { Leaderboard }
