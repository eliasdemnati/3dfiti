import { Map, Shapes, Trophy } from 'lucide-react'

import { HeaderItem } from './header-item'

export default function Header() {
  return (
    <header className="p-4 flex items-center gap-4 bg-black/90 text-white shadow-lg rounded-lg fixed left-4 right-4 top-4">
      <HeaderItem
        text='Map'
        icon={<Map />}
        to='/'
      />
      <HeaderItem
        text='Projects'
        icon={<Shapes />}
        to='/projects'
      />
      <HeaderItem
        text='Scoreboard'
        icon={<Trophy />}
        to='/scoreboard'
      />
      <HeaderItem
        text='Scoreboard'
        icon={<Map />}
        to='/scoreboard'
      />
    </header>
  )
}
