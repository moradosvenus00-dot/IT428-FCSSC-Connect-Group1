const variants = ['neutral', 'success', 'warning', 'error']

function StatusBadge({ status, variant = 'neutral' }) {
  const safeVariant = variants.includes(variant) ? variant : 'neutral'
  return <span className={`badge rounded-pill badge-${safeVariant}`}>{status}</span>
}

export default StatusBadge
