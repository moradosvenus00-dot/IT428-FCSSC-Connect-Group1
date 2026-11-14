function PageHeader({ title, description, kicker }) {
  return (
    <div className="page-header">
      {kicker && <p className="page-kicker">{kicker}</p>}
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  )
}

export default PageHeader
