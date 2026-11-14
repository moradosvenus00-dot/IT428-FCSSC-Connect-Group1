import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <section className="surface-panel">
        <h2 className="placeholder-title">Let's get you back on track.</h2>
        <p className="placeholder-text">Check the address or return to the dashboard to choose a page from the navigation.</p>
        <Link className="return-link" to="/"><ArrowLeft size={16} aria-hidden="true" />Return to dashboard</Link>
      </section>
    </>
  )
}

export default NotFound
