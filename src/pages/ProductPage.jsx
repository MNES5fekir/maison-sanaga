import { useState } from 'react'
import { categoryLabel, findProduct, products } from '../catalog/products.js'
import PhotoCredit from '../components/PhotoCredit.jsx'
import ProductCard, { Badge, Price } from '../components/ProductCard.jsx'
import ProductPhoto from '../components/ProductPhoto.jsx'
import QtyStepper from '../components/QtyStepper.jsx'
import { useCart } from '../lib/cart.jsx'
import NotFound from './NotFound.jsx'

export default function ProductPage({ slug }) {
  const product = findProduct(slug)
  const cart = useCart()
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [sizeError, setSizeError] = useState(false)

  if (!product) return <NotFound />

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .sort((a, b) => Number(b.collection === product.collection) - Number(a.collection === product.collection))
    .slice(0, 4)

  const addToCart = () => {
    if (product.sizes && !size) {
      setSizeError(true)
      return
    }
    cart.add({ slug: product.slug, size, qty })
    setQty(1)
  }

  return (
    <div className="section">
      <nav className="crumbs" aria-label="Fil d’Ariane">
        <a href={`#/boutique?cat=${product.category}`}>{categoryLabel(product.category)}</a>
        <span aria-hidden="true"> / </span>
        <span>{product.name}</span>
      </nav>

      <div className="product-layout">
        <figure className="product-figure">
          <div className="photo-box product-hero">
            <Badge product={product} />
            <ProductPhoto slug={product.slug} alt={product.name} full eager />
          </div>
          <PhotoCredit slug={product.slug} />
        </figure>

        <div className="product-info">
          <h1 className="page-title">{product.name}</h1>
          <p className="product-price"><Price product={product} /></p>
          <p>{product.description}</p>

          {product.sizes && (
            <fieldset className="option" aria-describedby={sizeError ? 'size-error' : undefined}>
              <legend>Taille{size ? <> : <strong>{size}</strong></> : ''}</legend>
              <div className="option-row">
                {product.sizes.map((item) => (
                  <label key={item} className="size-chip">
                    <input
                      type="radio"
                      name="size"
                      className="visually-hidden"
                      checked={item === size}
                      onChange={() => {
                        setSize(item)
                        setSizeError(false)
                      }}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
              {sizeError && <p id="size-error" className="error" role="alert">Choisissez une taille pour continuer.</p>}
            </fieldset>
          )}

          {product.dimensions && <p className="muted">Dimensions : {product.dimensions}</p>}

          <div className="buy-row">
            <QtyStepper value={qty} onChange={setQty} label="Quantité" />
            <button type="button" className="btn grow" onClick={addToCart}>Ajouter au panier</button>
          </div>

          <ul className="details">
            {product.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Dans le même rayon</h2>
        <div className="product-grid">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </section>
    </div>
  )
}
