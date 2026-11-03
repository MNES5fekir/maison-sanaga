import { collectionLabel } from '../catalog/products.js'
import { discountPercent, formatPrice } from '../lib/format.js'
import ProductPhoto from './ProductPhoto.jsx'

export function Price({ product }) {
  return (
    <span className="price">
      <span className={product.compareAt ? 'price-now is-sale' : 'price-now'}>{formatPrice(product.price)}</span>
      {product.compareAt && (
        <s className="price-was">
          <span className="visually-hidden">Au lieu de </span>
          {formatPrice(product.compareAt)}
        </s>
      )}
    </span>
  )
}

export function Badge({ product }) {
  if (product.compareAt) return <span className="badge badge-sale">−{discountPercent(product)} %</span>
  if (product.isNew) return <span className="badge">Nouveau</span>
  return null
}

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <a href={`#/produit/${product.slug}`} className="card-link">
        <div className="photo-box">
          <Badge product={product} />
          <ProductPhoto slug={product.slug} />
        </div>
        {product.collection && <span className="collection-tag">{collectionLabel(product.collection)}</span>}
        <h3 className="card-title">{product.name}</h3>
      </a>
      <div className="card-meta">
        <Price product={product} />
      </div>
    </article>
  )
}
