// Logique pure du panier. Les prix sont toujours relus dans le catalogue :
// un prix modifié dans le localStorage n'a donc aucun effet.
import { store } from '../config.js'
import { findProduct } from '../catalog/products.js'

export const MAX_QTY = 10

const clampQty = (qty) => Math.min(MAX_QTY, Math.max(1, Math.trunc(qty) || 1))

export const lineKey = ({ slug, size }) => `${slug}|${size ?? ''}`

export function addItem(lines, item) {
  const key = lineKey(item)
  if (lines.some((line) => lineKey(line) === key)) {
    return lines.map((line) =>
      lineKey(line) === key ? { ...line, qty: clampQty(line.qty + item.qty) } : line,
    )
  }
  return [...lines, { ...item, qty: clampQty(item.qty) }]
}

export function setQty(lines, key, qty) {
  return lines.map((line) => (lineKey(line) === key ? { ...line, qty: clampQty(qty) } : line))
}

export function removeLine(lines, key) {
  return lines.filter((line) => lineKey(line) !== key)
}

// Écarte tout ce qui ne correspond plus au catalogue (panier ancien ou altéré).
export function sanitizeLines(raw) {
  if (!Array.isArray(raw)) return []
  return raw.flatMap((line) => {
    const product = findProduct(line?.slug)
    if (!product) return []
    if (product.sizes ? !product.sizes.includes(line.size) : line.size != null) return []
    return [{ slug: line.slug, size: line.size ?? null, qty: clampQty(line.qty) }]
  })
}

export const countItems = (lines) => lines.reduce((sum, line) => sum + line.qty, 0)

export const subtotal = (lines) =>
  lines.reduce((sum, line) => sum + findProduct(line.slug).price * line.qty, 0)

export const shippingZone = (city) => (store.localCities.includes(city) ? 'local' : 'national')

// La livraison est offerte à partir du seuil, à Douala et Yaoundé seulement.
export function shippingCost(amount, zone) {
  if (zone === 'local' && amount >= store.freeShippingFrom) return 0
  return store.shipping[zone].price
}

// Accepte 6XXXXXXXX ou 2XXXXXXXX, avec ou sans +237, espaces et tirets.
export function isCameroonPhone(value) {
  const digits = value.replace(/[\s.()-]/g, '').replace(/^(\+|00)?237/, '')
  return /^[26]\d{8}$/.test(digits)
}
