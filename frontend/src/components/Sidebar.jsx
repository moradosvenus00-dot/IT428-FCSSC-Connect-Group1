import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../data/navigation.js'

function Sidebar({ isOpen, onNavigate, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus()
  }, [isOpen])

  return (
    <aside className={`sidebar${isOpen ? ' is-open' : ''}`} id="primary-navigation">
      <div className="sidebar-brand-row d-flex align-items-center justify-content-between">
        <NavLink to="/" className="sidebar-brand d-flex align-items-center text-decoration-none" onClick={onNavigate}>
          <span className="brand-mark" aria-hidden="true">FC</span>
          <span><span className="brand-name">FCSSC <span>Connect</span></span><span className="brand-subtitle">Student Council</span></span>
        </NavLink>
        <button ref={closeButtonRef} className="sidebar-close btn" type="button" aria-label="Close navigation" onClick={onClose}><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="sidebar-divider" />
      <span className="nav-label">Workspace</span>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigationItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
