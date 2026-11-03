import { readJson, writeJson } from '../lib/storage.js'

// Seule la dernière commande est gardée, dans le navigateur du client, pour la
// page de confirmation. La boutique la reçoit quand le client l'envoie sur WhatsApp.
const STORAGE_KEY = 'boutique.lastOrder'

export function saveOrder(data) {
  const suffix = crypto.getRandomValues(new Uint32Array(1))[0].toString(36).toUpperCase().padStart(7, '0')
  const order = { ...data, id: `CMD-${suffix}` }
  writeJson(STORAGE_KEY, order)
  return order
}

export function loadOrder(id) {
  const order = readJson(STORAGE_KEY, null)
  return order?.id === id ? order : null
}
