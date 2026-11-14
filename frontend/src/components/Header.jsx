import { Bell, CircleUserRound, Menu } from 'lucide-react'

function Header({ title, onMenuClick, menuOpen, menuButtonRef }) {
  return (
    <header className="topbar d-flex align-items-center justify-content-between">
      <div className="topbar-left d-flex align-items-center">
        <button ref={menuButtonRef} className="menu-button btn" type="button" onClick={onMenuClick} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={menuOpen}>
          <Menu size={23} aria-hidden="true" />
        </button>
        <h1 className="topbar-title">{title}</h1>
      </div>
      <div className="topbar-icons d-flex align-items-center">
        <span className="topbar-icon" role="img" aria-label="Notifications"><Bell size={18} strokeWidth={1.9} aria-hidden="true" /></span>
        <span className="topbar-icon topbar-icon-profile" role="img" aria-label="Account profile"><CircleUserRound size={19} strokeWidth={1.9} aria-hidden="true" /></span>
      </div>
    </header>
  )
}

export default Header
