import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

interface Props {
  text: string
  icon: ReactNode
  to: string
}

function HeaderItem({ text, icon, to }: Props) {
  return (
    <Link
      to={to}
      className="rounded-lg p-3 flex items-center gap-2 text-sm cursor-pointer font-semibold hover:bg-white/10 transition-all duration-300"
      activeProps={{ className: 'bg-white/10' }}
    >
      {icon}
      {text}
    </Link>
  )
}

export { HeaderItem }
