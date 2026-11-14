import { Construction } from 'lucide-react'

function FeaturePlaceholder({ title, owner }) {
  return (
    <section className="surface-panel placeholder-panel card border-0" aria-label={`${title} development status`}>
      <span className="placeholder-icon"><Construction size={22} aria-hidden="true" /></span>
      <div>
        <h2 className="placeholder-title">Feature in development</h2>
        <p className="placeholder-text">{owner} will build this Module 1 feature here. This page currently provides its route and shared layout only; no workflow or data changes are available yet.</p>
      </div>
    </section>
  )
}

export default FeaturePlaceholder
