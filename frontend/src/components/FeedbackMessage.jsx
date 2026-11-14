import { CircleCheck, TriangleAlert, CircleX } from 'lucide-react'

const feedbackVariants = {
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
}

function FeedbackMessage({ variant = 'success', children }) {
  const safeVariant = feedbackVariants[variant] ? variant : 'success'
  const Icon = feedbackVariants[safeVariant]
  return (
    <div className={`feedback alert feedback-${safeVariant} mb-0`} role={safeVariant === 'error' ? 'alert' : 'status'}>
      <Icon size={17} aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

export default FeedbackMessage
