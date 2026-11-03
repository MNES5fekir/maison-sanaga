import { useEffect, useRef } from 'react'
import { store } from '../config.js'
import { findProduct } from '../catalog/products.js'
import { useCart } from '../lib/cart.jsx'
import { lineKey } from '../lib/cart-logic.js'
import { formatPrice } from '../lib/format.js'
import ProductPhoto from './ProductPhoto.jsx'
import QtyStepper from './QtyStepper.jsx'

export default function CartDrawer() {
  const cart = useCart()
  const dialogRef = useRef(null)

  // <dialog> apporte le piège de focus et la fermeture par Échap.
  useEffect(() => {
    const dialog = dialogRef.current
    if (cart.isOpen && !dialog.open) dialog.showModal()
    if (!cart.isOpen && dialog.open) dialog.close()
  }, [cart.isOpen])

  const remaining = store.freeShippingFrom - cart.subtotal

  return (
    <dialog
      ref={dialogRef}
      className="drawer"
      aria-label="Panier"
      onClose={cart.close}
      onClick={(event) => event.target === dialogRef.current && cart.close()}
    >
      <div className="drawer-inner">
        <header className="drawer-head">
          <h2>Panier <span className="muted">({cart.count})</span></h2>
          <button type="button" className="icon-btn" onClick={cart.close} aria-label="Fermer le panier">✕</button>
        </header>

        {cart.lines.length === 0 ? (
          <div className="drawer-empty">
            <p>Votre panier est vide.</p>
            <a className="btn" href="#/boutique" onClick={cart.close}>Voir la boutique</a>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {cart.lines.map((line) => {
                const product = findProduct(line.slug)
                const key = lineKey(line)
                return (
                  <li key={key} className="cart-line">
                    <div className="photo-box">
                      <ProductPhoto slug={product.slug} />
                    </div>
                    <div className="cart-line-body">
                      <a href={`#/produit/${product.slug}`} onClick={cart.close}>{product.name}</a>
                      {line.size && <p className="muted">Taille {line.size}</p>}
                      <div className="cart-line-row">
                        <QtyStepper
                          value={line.qty}
                          onChange={(qty) => cart.updateQty(key, qty)}
                          label={`Quantité de ${product.name}`}
                        />
                        <strong>{formatPrice(product.price * line.qty)}</strong>
                      </div>
                      <button type="button" className="link-btn" onClick={() => cart.remove(key)}>
                        Retirer<span className="visually-hidden"> {product.name}</span>
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
            <footer className="drawer-foot">
              <p className="muted shipping-hint">
                {remaining > 0
                  ? `Plus que ${formatPrice(remaining)} pour la livraison offerte à Douala et Yaoundé.`
                  : 'Livraison offerte à Douala et Yaoundé.'}
              </p>
              <p className="summary-row summary-total"><span>Sous-total</span><span>{formatPrice(cart.subtotal)}</span></p>
              <a className="btn btn-block" href="#/commande" onClick={cart.close}>Passer la commande</a>
            </footer>
          </>
        )}
      </div>
    </dialog>
  )
}
