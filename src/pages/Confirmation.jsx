import { ordersEnabled, store } from '../config.js'
import { formatPrice } from '../lib/format.js'
import { whatsappLink } from '../lib/whatsapp.js'
import NotFound from './NotFound.jsx'
import { loadOrder } from './orders.js'

export default function Confirmation({ id }) {
  const order = loadOrder(id)
  if (!order) return <NotFound />

  return (
    <div className="section confirmation">
      <h1 className="page-title">{ordersEnabled ? 'Dernière étape' : 'Récapitulatif de la commande'}</h1>
      <p>Commande <strong>{order.id}</strong> au nom de {order.fullName}.</p>

      {ordersEnabled ? (
        <div className="notice whatsapp-box">
          <p>Votre commande n’est prise en compte qu’une fois envoyée sur WhatsApp.</p>
          <a className="btn" href={whatsappLink(order)} target="_blank" rel="noreferrer">Envoyer sur WhatsApp</a>
        </div>
      ) : (
        <p className="notice">Site de démonstration : cette commande n’a pas été transmise et ne sera pas livrée.</p>
      )}

      <div className="panel">
        <ul className="summary-lines">
          {order.lines.map((line) => (
            <li key={line.key}>
              <span>
                {line.qty} × {line.name}
                {line.variant && <span className="muted choice-note">{line.variant}</span>}
              </span>
              <span>{formatPrice(line.total)}</span>
            </li>
          ))}
        </ul>
        <p className="summary-row">
          <span>
            Livraison à {order.district}, {order.city}
            <span className="muted choice-note">{store.shipping[order.zone].delay}</span>
          </span>
          <span>{order.shipping === 0 ? 'Offerte' : formatPrice(order.shipping)}</span>
        </p>
        <p className="summary-row summary-total">
          <span>À régler à la réception ({store.payments[order.payment]})</span>
          <span>{formatPrice(order.subtotal + order.shipping)}</span>
        </p>
      </div>

      <a className="btn btn-ghost-dark" href="#/boutique">Continuer mes achats</a>
    </div>
  )
}
