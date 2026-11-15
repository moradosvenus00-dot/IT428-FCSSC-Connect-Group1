import PageHeader from '../components/PageHeader.jsx'
import { announcements } from '../data/mockData.js'

function Announcements() {
  const publishedAnnouncements = announcements
    .filter(({ status }) => status === 'published')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  return (
    <>
      <PageHeader
        title="Announcements"
        description="Read the latest updates from the FCSSC."
      />

      <div className="row row-cols-1 row-cols-md-2 g-3">
        {publishedAnnouncements.map(({ id, title, publishedAt, body }) => (
          <div className="col" key={id}>
            <article className="surface-panel card border-0 h-100 p-4">
              <h2 className="h5">{title}</h2>
              <time className="text-body-secondary mb-2" dateTime={publishedAt}>
                {publishedAt}
              </time>
              <p className="mb-0">{body}</p>
            </article>
          </div>
        ))}
      </div>
    </>
  )
}

export default Announcements