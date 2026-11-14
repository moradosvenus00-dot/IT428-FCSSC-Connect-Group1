function SummaryCard({ title, value, icon: Icon, supportingText }) {
  return (
    <article className="summary-card card h-100 border-0">
      <div className="summary-card-top">
        <div>
          <p className="summary-title">{title}</p>
          <strong className="summary-value">{value}</strong>
        </div>
        {Icon && <span className="summary-icon"><Icon size={19} aria-hidden="true" /></span>}
      </div>
      {supportingText && <p className="summary-support">{supportingText}</p>}
    </article>
  )
}

export default SummaryCard
