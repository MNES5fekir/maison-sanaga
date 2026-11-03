import { MAX_QTY } from '../lib/cart-logic.js'

export default function QtyStepper({ value, onChange, label }) {
  return (
    <div className="stepper" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Retirer un article">−</button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= MAX_QTY} aria-label="Ajouter un article">+</button>
    </div>
  )
}
