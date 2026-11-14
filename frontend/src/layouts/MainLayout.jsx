import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { navigationItems } from '../data/navigation.js'

function MainLayout() {
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState(null)
  const menuButtonRef = useRef(null)
  const menuOpen = menuPath === pathname
  const title = navigationItems.find(({ path }) => path === pathname)?.label || 'Page not found'

  const closeMenu = () => {
    setMenuPath(null)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return undefined
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuPath(null)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  return (
    <div className="app-shell d-flex">
      <Sidebar isOpen={menuOpen} onNavigate={() => setMenuPath(null)} onClose={closeMenu} />
      <button className={`mobile-backdrop${menuOpen ? ' is-open' : ''}`} type="button" aria-label="Close navigation" onClick={closeMenu} />
      <div className="app-main flex-grow-1">
        <Header title={title} menuOpen={menuOpen} menuButtonRef={menuButtonRef} onMenuClick={() => setMenuPath(menuOpen ? null : pathname)} />
        <main className="content container-fluid" id="main-content"><Outlet /></main>
      </div>
    </div>
  )
}

export default MainLayout
