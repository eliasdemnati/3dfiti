import {
  Crown,
  Filter,
  Flag,
  Flame,
  Footprints,
  Globe,
  Heart,
  MapPin,
  Medal,
  MessageSquare,
  ScanLine,
  Skull,
  Timer,
  Trophy,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

type ActivityItem = {
  id: string
  type: string
  user: { name: string; initials: string; avatar?: string }
  action: string
  target?: string
  timestamp: string
  date: string
  status?: { text: string; color: string }
  comment?: string
  tags?: Array<{ text: string; color: string }>
  meta?: string
  reaction?: string
}

const activityData: Array<ActivityItem> = [
  // --- SUNDAY ---
  {
    id: '1',
    type: 'item_claimed',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'claimed',
    target: 'Gold Sneaker #247',
    status: { text: 'Claimed', color: 'green' },
    meta: 'Hunt duration: 26 min · Traveled 2.3km',
    timestamp: '06:38 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '2',
    type: 'check_in',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'checked in at',
    target: 'Gold Sneaker #247',
    tags: [
      { text: 'Rank #1', color: 'yellow' },
      { text: '+100 pts', color: 'green' },
    ],
    meta: 'New score: 2,450',
    timestamp: '06:39 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '3',
    type: 'leaderboard_change',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'overtook',
    target: 'charlie_x',
    meta: 'Now #3 on the leaderboard · 2,450 pts',
    timestamp: '06:39 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '4',
    type: 'comment',
    user: { name: 'bob_mtl', initials: 'BM' },
    action: 'commented on',
    target: 'Gold Sneaker #247',
    comment:
      'So close! I was literally 5 min away when it got snagged. GG alice.',
    timestamp: '06:45 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '5',
    type: 'reaction',
    user: { name: 'charlie_x', initials: 'CX' },
    action: 'reacted',
    reaction: '🔥',
    target: "alice_92's claim",
    timestamp: '06:52 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '6',
    type: 'item_dropped',
    user: { name: 'System', initials: '3D' },
    action: 'new drop went live in',
    target: 'Paris 11e',
    tags: [
      { text: 'Sephora Summer', color: 'pink' },
      { text: 'Hint available', color: 'blue' },
    ],
    meta: '4 hunters nearby',
    timestamp: '05:04 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '7',
    type: 'approaching',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'is approaching a drop in',
    target: 'Paris 11e',
    meta: '200m away (was 2.3km 19min ago)',
    timestamp: '05:31 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '8',
    type: 'scan',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'scanned the QR code for',
    target: 'Gold Sneaker #247',
    timestamp: '05:38 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '9',
    type: 'streak',
    user: { name: 'bob_mtl', initials: 'BM' },
    action: 'is on a',
    target: '5-claim streak',
    meta: '5 items in 3 days · 340 pts/day',
    timestamp: '03:10 PM',
    date: 'SUNDAY, 06 MARCH',
  },
  {
    id: '10',
    type: 'badge',
    user: { name: 'alice_92', initials: 'A9' },
    action: 'unlocked',
    target: 'Night Owl',
    meta: 'Claimed 5 items after 10pm',
    timestamp: '11:05 PM',
    date: 'SUNDAY, 06 MARCH',
  },

  // --- SATURDAY ---
  {
    id: '11',
    type: 'item_lost',
    user: { name: 'System', initials: '3D' },
    action: 'item marked as',
    target: 'Silver Ring #102',
    status: { text: 'Lost', color: 'red' },
    meta: 'Survived 5d 12h · Viewed by 34 users · 0 claims',
    timestamp: '03:00 PM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '12',
    type: 'report',
    user: { name: 'dave_nantes', initials: 'DN' },
    action: 'reported',
    target: 'Silver Ring #102',
    comment:
      "Walked around the whole square twice, can't find it anywhere. Might have been moved?",
    tags: [{ text: 'GPS confirmed', color: 'green' }],
    timestamp: '11:20 AM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '13',
    type: 'new_city',
    user: { name: 'dave_nantes', initials: 'DN' },
    action: 'claimed in a new city:',
    target: 'Lyon',
    tags: [
      { text: 'Nantes', color: 'blue' },
      { text: 'Paris', color: 'blue' },
      { text: 'Lyon', color: 'green' },
    ],
    meta: '3 cities explored',
    timestamp: '02:30 PM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '14',
    type: 'level_up',
    user: { name: 'bob_mtl', initials: 'BM' },
    action: 'reached Level 5 —',
    target: 'Seasoned Hunter',
    meta: 'Total claims: 50 · Joined 3 months ago',
    timestamp: '10:00 AM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '15',
    type: 'login_streak',
    user: { name: 'charlie_x', initials: 'CX' },
    action: 'logged in',
    target: '30 consecutive days',
    meta: 'Longest streak in Zone: Paris',
    timestamp: '08:00 AM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '16',
    type: 'near_miss',
    user: { name: 'System', initials: '3D' },
    action: '',
    target: '',
    comment:
      'alice_92 and bob_mtl claimed items within 50m of each other near Rue Oberkampf. Possible encounter!',
    tags: [{ text: 'Near miss', color: 'orange' }],
    timestamp: '05:40 PM',
    date: 'SATURDAY, 05 MARCH',
  },
  {
    id: '17',
    type: 'stale_warning',
    user: { name: 'System', initials: '3D' },
    action: 'item',
    target: 'Bronze Cap #88',
    status: { text: '48h no claim', color: 'orange' },
    meta: 'Viewed 12 times · 0 scans · Consider broadening hint',
    timestamp: '09:00 AM',
    date: 'SATURDAY, 05 MARCH',
  },
]

const getStatusColor = (color: string) => {
  switch (color) {
    case 'green':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    case 'blue':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
    case 'red':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    case 'orange':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
    case 'pink':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }
}

const getTagDotColor = (color: string) => {
  switch (color) {
    case 'red':
      return 'bg-red-500'
    case 'blue':
      return 'bg-blue-500'
    case 'green':
      return 'bg-green-500'
    case 'yellow':
      return 'bg-yellow-500'
    case 'orange':
      return 'bg-orange-500'
    case 'pink':
      return 'bg-pink-500'
    default:
      return 'bg-gray-500'
  }
}

const getActivityIcon = (type: string) => {
  const cls = 'text-muted-foreground h-4 w-4'
  switch (type) {
    case 'item_dropped':
      return <MapPin className={cls} />
    case 'item_claimed':
      return <Trophy className={cls} />
    case 'item_lost':
      return <Skull className={cls} />
    case 'check_in':
      return <Footprints className={cls} />
    case 'scan':
      return <ScanLine className={cls} />
    case 'comment':
      return <MessageSquare className={cls} />
    case 'reaction':
      return <Heart className={cls} />
    case 'streak':
      return <Flame className={cls} />
    case 'leaderboard_change':
      return <Crown className={cls} />
    case 'report':
      return <Flag className={cls} />
    case 'badge':
    case 'level_up':
      return <Medal className={cls} />
    case 'approaching':
      return <Timer className={cls} />
    case 'new_city':
      return <Globe className={cls} />
    case 'login_streak':
      return <Flame className={cls} />
    case 'near_miss':
      return <Footprints className={cls} />
    case 'stale_warning':
      return <Timer className={cls} />
    default:
      return null
  }
}

const useIconOnly = (type: string) =>
  [
    'item_dropped',
    'item_lost',
    'scan',
    'approaching',
    'near_miss',
    'stale_warning',
  ].includes(type)

function Activity() {
  let currentDate = ''

  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto min-w-0 max-w-md max-h-full">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
        <h1 className="text-foreground text-xl font-semibold md:text-2xl">
          Activity log
        </h1>
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-xs md:text-sm">
              Show mentioned only
            </span>
            <Switch />
          </div>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4 md:space-y-6">
        {activityData.map((item) => {
          const showDate = currentDate !== item.date
          if (showDate) {
            currentDate = item.date
          }

          const iconOnly = useIconOnly(item.type)

          return (
            <div key={item.id}>
              {/* Date Header */}
              {showDate && (
                <div className="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase md:mb-4 md:text-sm">
                  {item.date}
                </div>
              )}

              {/* Activity Item */}
              <div className="relative flex gap-2 md:gap-3">
                {/* Timeline Line */}
                <div className="bg-border absolute top-10 bottom-0 left-3 w-px md:top-12 md:left-4" />

                {/* Avatar or Icon */}
                <div className="relative z-10">
                  {iconOnly ? (
                    <div className="bg-muted flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8">
                      {getActivityIcon(item.type)}
                    </div>
                  ) : (
                    <Avatar className="h-6 w-6 md:h-8 md:w-8">
                      <AvatarImage
                        src={item.user.avatar || '/placeholder.svg'}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                        {item.user.initials}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 text-xs sm:flex-row sm:items-center sm:gap-2 md:text-sm">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      {!iconOnly && (
                        <span className="text-foreground font-medium">
                          {item.user.name}
                        </span>
                      )}
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                      {item.target && (
                        <span className="text-foreground font-medium">
                          {item.target}
                        </span>
                      )}
                      {item.reaction && (
                        <span className="text-lg">{item.reaction}</span>
                      )}
                      {item.status && (
                        <>
                          <Badge
                            variant="secondary"
                            className={`${getStatusColor(item.status.color)} text-xs`}
                          >
                            <div
                              className={`mr-1 h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${getTagDotColor(item.status.color)}`}
                            />
                            {item.status.text}
                          </Badge>
                        </>
                      )}
                    </div>
                    <span className="text-muted-foreground text-xs sm:ml-auto md:text-sm">
                      {item.timestamp}
                    </span>
                  </div>

                  {/* Meta info */}
                  {item.meta && (
                    <div className="text-muted-foreground mt-1 text-xs md:text-sm">
                      {item.meta}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <div
                            className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${getTagDotColor(tag.color)}`}
                          />
                          <span className="text-muted-foreground text-xs md:text-sm">
                            {tag.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comment */}
                  {item.comment && (
                    <div className="bg-muted text-muted-foreground mt-2 rounded-lg p-2 text-xs leading-relaxed md:mt-3 md:p-3 md:text-sm">
                      {item.comment}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Activity }
