import { store } from '../config.js'
import { formatPrice } from './format.js'

// Le client envoie lui-même sa commande : le message est prêt, il n'a qu'à le valider.
export function whatsappLink(order, number = store.whatsapp) {
  const message = [
    `Bonjour, voici ma commande ${order.id} :`,
    ...order.lines.map((line) =>
      `- ${line.qty} × ${line.name}${line.variant ? ` (${line.variant})` : ''} : ${formatPrice(line.total)}`),
    `Livraison : ${order.shipping === 0 ? 'offerte' : formatPrice(order.shipping)}`,
    `Total : ${formatPrice(order.subtotal + order.shipping)}`,
    `Paiement : ${store.payments[order.payment]}`,
    `Nom : ${order.fullName}`,
    `Téléphone : ${order.phone}`,
    `Adresse : ${order.district}, ${order.city}${order.landmark ? ` (${order.landmark})` : ''}`,
  ].join('\n')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
