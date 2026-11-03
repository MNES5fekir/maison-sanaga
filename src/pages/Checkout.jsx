import { useState } from 'react'
import { ordersEnabled, store } from '../config.js'
import { findProduct } from '../catalog/products.js'
import { useCart } from '../lib/cart.jsx'
import { isCameroonPhone, lineKey, shippingCost, shippingZone } from '../lib/cart-logic.js'
import { formatPrice } from '../lib/format.js'
import { navigate } from '../lib/router.js'
import { saveOrder } from './orders.js'

const FIELDS = [
  { name: 'fullName', label: 'Nom complet', autoComplete: 'name', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', autoComplete: 'tel', placeholder: '6XX XX XX XX', required: true },
  { name: 'district', label: 'Quartier', required: true, placeholder: 'Ex. : Akwa, Bastos…' },
  { name: 'landmark', label: 'Point de repère (facultatif)', wide: true, placeholder: 'Ex. : face à la pharmacie, portail bleu' },
]

function validate(form) {
  const errors = {}
  for (const { name, label, required } of FIELDS) {
    if (required && !form[name]?.trim()) errors[name] = `${label} : champ obligatoire.`
  }
  if (!errors.phone && !isCameroonPhone(form.phone)) {
    errors.phone = 'Saisissez un numéro camerounais à 9 chiffres, par exemple 6XX XX XX XX.'
  }
  if (!form.city) errors.city = 'Ville : champ obligatoire.'
  if (!form.consent) errors.consent = 'Acceptez les conditions pour confirmer la commande.'
  return errors
}

export default function Checkout() {
  const cart = useCart()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const [payment, setPayment] = useState('orange')

  if (cart.lines.length === 0) {
    return (
      <div className="section empty">
        <h1 className="page-title">Votre panier est vide</h1>
        <a className="btn" href="#/boutique">Voir la boutique</a>
      </div>
    )
  }

  const zone = form.city ? shippingZone(form.city) : null
  const shipping = zone ? shippingCost(cart.subtotal, zone) : null

  const submit = (event) => {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    const firstInvalid = [...FIELDS.map(({ name }) => name), 'city', 'consent'].find((name) => found[name])
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus()
      return
    }
    const order = saveOrder({
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      city: form.city,
      district: form.district.trim(),
      landmark: form.landmark?.trim() ?? '',
      payment,
      zone,
      shipping,
      subtotal: cart.subtotal,
      lines: cart.lines.map((line) => ({
        key: lineKey(line),
        name: findProduct(line.slug).name,
        variant: line.size ? `Taille ${line.size}` : '',
        qty: line.qty,
        total: findProduct(line.slug).price * line.qty,
      })),
    })
    cart.clear()
    navigate(`/confirmation/${order.id}`)
  }

  const fieldProps = (name) => ({
    id: `field-${name}`,
    value: form[name] ?? '',
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `error-${name}` : undefined,
    onChange: (event) => setForm({ ...form, [name]: event.target.value }),
  })

  return (
    <div className="section">
      <h1 className="page-title">Commande</h1>

      {!ordersEnabled && (
        <p className="notice">Site de démonstration : aucune commande n’est transmise ni livrée, et rien ne vous sera facturé.</p>
      )}

      <form className="checkout" onSubmit={submit} noValidate>
        <div className="checkout-main">
          <fieldset className="panel">
            <legend>Vos coordonnées</legend>
            <div className="form-grid">
              {FIELDS.map(({ name, label, type = 'text', autoComplete, placeholder, wide }) => (
                <div key={name} className={wide ? 'field wide' : 'field'}>
                  <label htmlFor={`field-${name}`}>{label}</label>
                  <input type={type} autoComplete={autoComplete} placeholder={placeholder} {...fieldProps(name)} />
                  {errors[name] && <p id={`error-${name}`} className="error">{errors[name]}</p>}
                </div>
              ))}
              <div className="field">
                <label htmlFor="field-city">Ville</label>
                <select {...fieldProps('city')}>
                  <option value="">Choisir…</option>
                  {[...store.localCities, ...store.otherCities].map((city) => <option key={city}>{city}</option>)}
                </select>
                {errors.city && <p id="error-city" className="error">{errors.city}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset className="panel">
            <legend>Paiement à la réception</legend>
            {Object.entries(store.payments).map(([id, label]) => (
              <label key={id} className="choice">
                <input type="radio" name="payment" checked={payment === id} onChange={() => setPayment(id)} />
                <span className="grow"><strong>{label}</strong></span>
              </label>
            ))}
            <p className="muted payment-note">Vous payez le livreur à la réception. Le site ne vous demande jamais de code secret.</p>
          </fieldset>
        </div>

        <aside className="panel checkout-summary" aria-label="Récapitulatif">
          <h2>Récapitulatif</h2>
          <ul className="summary-lines">
            {cart.lines.map((line) => {
              const product = findProduct(line.slug)
              return (
                <li key={lineKey(line)}>
                  <span>
                    {line.qty} × {product.name}
                    {line.size && <span className="muted choice-note">Taille {line.size}</span>}
                  </span>
                  <span>{formatPrice(product.price * line.qty)}</span>
                </li>
              )
            })}
          </ul>
          <p className="summary-row"><span>Sous-total</span><span>{formatPrice(cart.subtotal)}</span></p>
          <p className="summary-row">
            <span>
              Livraison
              {zone && <span className="muted choice-note">{store.shipping[zone].delay}</span>}
            </span>
            <span>
              {shipping === null ? 'Selon la ville' : shipping === 0 ? 'Offerte' : formatPrice(shipping)}
            </span>
          </p>
          <p className="summary-row summary-total"><span>Total</span><span>{formatPrice(cart.subtotal + (shipping ?? 0))}</span></p>
          <label className="consent">
            <input
              id="field-consent"
              type="checkbox"
              checked={Boolean(form.consent)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
              onChange={(event) => setForm({ ...form, consent: event.target.checked })}
            />
            <span>
              J’accepte les <a href="#/conditions-de-vente" target="_blank">conditions de vente</a> et l’utilisation de mes
              données pour traiter ma commande, décrite dans la <a href="#/confidentialite" target="_blank">politique de confidentialité</a>.
            </span>
          </label>
          {errors.consent && <p id="error-consent" className="error consent-error">{errors.consent}</p>}
          <button type="submit" className="btn btn-block">Confirmer la commande</button>
        </aside>
      </form>
    </div>
  )
}
