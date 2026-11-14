export function validateRequired(value) {
  return value !== null && value !== undefined && String(value).trim().length > 0
}

export function validateEmail(value) {
  if (typeof value !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}
