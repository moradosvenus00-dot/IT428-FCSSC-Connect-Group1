import {
  LayoutDashboard, UserRoundPlus, UsersRound, CalendarDays,
  ClipboardCheck, ShieldAlert, Megaphone, UserRound,
} from 'lucide-react'

export const navigationItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/registration', label: 'Membership Registration', icon: UserRoundPlus },
  { path: '/members', label: 'Member Directory', icon: UsersRound },
  { path: '/activities', label: 'Activities / Events', icon: CalendarDays },
  { path: '/attendance', label: 'Attendance', icon: ClipboardCheck },
  { path: '/penalties', label: 'Penalties', icon: ShieldAlert },
  { path: '/announcements', label: 'Announcements', icon: Megaphone },
  { path: '/member-view', label: 'Member View', icon: UserRound },
]
