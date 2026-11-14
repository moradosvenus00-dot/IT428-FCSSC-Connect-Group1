import { useId } from 'react'

function FormField({ label, id, error, hint, required = false, as = 'input', options = [], ...props }) {
  const generatedId = useId()
  const fieldId = id || generatedId
  const helpId = `${fieldId}-help`
  const errorId = `${fieldId}-error`
  const describedBy = [props['aria-describedby'], hint && helpId, error && errorId].filter(Boolean).join(' ') || undefined
  const { className = '', ...controlProps } = props
  const controlClass = as === 'select' ? 'form-select' : 'form-control'
  const sharedProps = { ...controlProps, id: fieldId, required, className: `${controlClass}${error ? ' is-invalid' : ''} ${className}`.trim(), 'aria-invalid': Boolean(error), 'aria-describedby': describedBy }

  return (
    <div className="form-field">
      <label className="form-label" htmlFor={fieldId}>{label}{required && <span className="required-mark" aria-hidden="true"> *</span>}</label>
      {as === 'textarea' ? <textarea {...sharedProps} /> : as === 'select' ? (
        <select {...sharedProps}>
          {options.map(({ value, label: optionLabel }) => <option key={value} value={value}>{optionLabel}</option>)}
        </select>
      ) : <input {...sharedProps} />}
      {hint && <span className="form-help form-text" id={helpId}>{hint}</span>}
      {error && <span className="form-error invalid-feedback d-block" id={errorId}>{error}</span>}
    </div>
  )
}

export default FormField
