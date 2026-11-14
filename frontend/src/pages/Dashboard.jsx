import {
  ArrowUpRight, CalendarDays, ClipboardCheck, GraduationCap,
  ShieldAlert, UserRoundPlus, UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SummaryCard from '../components/SummaryCard.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { activities, members, penalties } from '../data/mockData.js'

const quickLinks = [
  { to: '/registration', label: 'Register Member', icon: UserRoundPlus },
  { to: '/members', label: 'View Members', icon: UsersRound },
  { to: '/activities', label: 'Browse Activities', icon: CalendarDays },
  { to: '/attendance', label: 'Manage Attendance', icon: ClipboardCheck },
]

const currentDate = new Date()
const today = [currentDate.getFullYear(), String(currentDate.getMonth() + 1).padStart(2, '0'), String(currentDate.getDate()).padStart(2, '0')].join('-')

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function Dashboard() {
  const upcoming = activities.filter(({ date, status }) => date >= today && status !== 'completed').sort((a, b) => a.date.localeCompare(b.date))
  const recent = activities.filter(({ date }) => date < today).sort((a, b) => b.date.localeCompare(a.date))
  const pendingCount = members.filter(({ status }) => status === 'pending').length
  const unresolvedCount = penalties.filter(
  ({ status }) => status === 'for review' || status === 'pending',
).length

  return (
    <>
      <section className="welcome-banner rounded-4 position-relative overflow-hidden mb-4" aria-labelledby="welcome-title">
        <div className="welcome-content position-relative">
          <p className="welcome-label mb-3">IT 428 <span aria-hidden="true">|</span> Module 1 – Front-End Prototype</p>
          <h2 id="welcome-title" className="welcome-title">Welcome to<br /><span>FCSSC Connect</span></h2>
          <p className="welcome-text mb-0">Your centralized workspace for managing student organization membership, council activities, attendance, and announcements.</p>
        </div>
        <div className="welcome-emblem" aria-hidden="true"><GraduationCap size={74} strokeWidth={1.25} /></div>
      </section>

      <section aria-labelledby="overview-title" className="mb-4">
        <div className="section-head d-flex align-items-end justify-content-between gap-2">
          <div><p className="section-kicker mb-1">Workspace overview</p><h2 id="overview-title" className="section-heading">At a glance</h2></div>
          <span className="sample-label">Sample data</span>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
          <div className="col"><SummaryCard title="Total Members" value={members.length} icon={UsersRound} supportingText="Fictional member records" /></div>
          <div className="col"><SummaryCard title="Pending Registrations" value={pendingCount} icon={UserRoundPlus} supportingText="Awaiting review" /></div>
          <div className="col"><SummaryCard title="Upcoming Activities" value={upcoming.length} icon={CalendarDays} supportingText="Planned from today onward" /></div>
          <div className="col"><SummaryCard title="Unresolved Penalties" value={unresolvedCount} icon={ShieldAlert} supportingText="Awaiting resolution" /></div>
        </div>
      </section>

      <section aria-labelledby="quick-title" className="mb-4">
        <div className="section-head"><p className="section-kicker mb-1">Go to a workspace</p><h2 id="quick-title" className="section-heading">Quick navigation</h2></div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
          {quickLinks.map(({ to, label, icon: Icon }) => (
            <div className="col" key={to}>
              <Link className="quick-link btn d-flex align-items-center justify-content-between w-100 h-100 text-start" to={to}>
                <span className="d-flex align-items-center gap-2"><Icon size={18} aria-hidden="true" />{label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="row g-4 mb-4">
        <section className="col-12 col-xl-6" aria-labelledby="recent-title">
          <div className="surface-panel card border-0 h-100">
            <div className="panel-heading d-flex align-items-center justify-content-between gap-2">
              <div><p className="section-kicker mb-1">Latest records</p><h2 id="recent-title" className="section-heading mb-0">Recent activity</h2></div>
              <span className="panel-icon"><ClipboardCheck size={18} aria-hidden="true" /></span>
            </div>
            {recent.length ? (
              <ul className="record-list list-unstyled mb-0">
                {recent.map((activity) => (
                  <li className="record-item d-flex align-items-center justify-content-between gap-3" key={activity.id}>
                    <div><strong>{activity.title}</strong><span>{formatDate(activity.date)}</span></div>
                    <StatusBadge status={activity.status} variant={activity.status === 'completed' ? 'success' : 'neutral'} />
                  </li>
                ))}
              </ul>
            ) : <p className="panel-empty mb-0">No past activities in the sample data.</p>}
          </div>
        </section>
        <section className="col-12 col-xl-6" aria-labelledby="upcoming-title">
          <div className="surface-panel card border-0 h-100">
            <div className="panel-heading d-flex align-items-center justify-content-between gap-2">
              <div><p className="section-kicker mb-1">On the calendar</p><h2 id="upcoming-title" className="section-heading mb-0">Upcoming events</h2></div>
              <span className="panel-icon"><CalendarDays size={18} aria-hidden="true" /></span>
            </div>
            {upcoming.length ? (
              <ul className="record-list list-unstyled mb-0">
                {upcoming.map((activity) => (
                  <li className="record-item d-flex align-items-center justify-content-between gap-3" key={activity.id}>
                    <div><strong>{activity.title}</strong><span>{formatDate(activity.date)} · {activity.location}</span></div>
                    <StatusBadge status={activity.status} variant="warning" />
                  </li>
                ))}
              </ul>
            ) : <p className="panel-empty mb-0">No upcoming events in the sample data.</p>}
          </div>
        </section>
      </div>

      <div className="prototype-notice alert d-flex align-items-start gap-3 mb-0" role="note">
        <span className="notice-icon"><GraduationCap size={19} aria-hidden="true" /></span>
        <p className="mb-0">This application currently uses fictional sample data for front-end demonstration. Backend integration and persistent data storage will be introduced in a later module.</p>
      </div>
    </>
  )
}

export default Dashboard
