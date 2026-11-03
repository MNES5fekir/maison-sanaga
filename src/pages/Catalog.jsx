import { useMemo, useState } from 'react'
import { categories, categoryLabel, collections, products } from '../catalog/products.js'
import ProductCard from '../components/ProductCard.jsx'
import { navigate } from '../lib/router.js'

const PAGE_SIZE = 24

const sorters = {
  featured: () => 0,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name, 'fr'),
}

const normalize = (text) => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

const buildPath = ({ cat, col, promo }) => {
  const query = new URLSearchParams()
  if (cat) query.set('cat', cat)
  if (col) query.set('col', col)
  if (promo) query.set('promo', '1')
  const text = query.toString()
  return text ? `/boutique?${text}` : '/boutique'
}

export default function Catalog({ params }) {
  // Le rayon, la collection et le filtre promo vivent dans l'URL : la page reste partageable.
  const cat = categories.find((category) => category.id === params.get('cat'))?.id ?? null
  const col = collections.find((collection) => collection.id === params.get('col'))?.id ?? null
  const promo = params.get('promo') === '1'
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')

  const filterKey = [cat, col, promo, search, sort].join('|')
  const [shown, setShown] = useState({ key: filterKey, count: PAGE_SIZE })
  const count = shown.key === filterKey ? shown.count : PAGE_SIZE

  const results = useMemo(() => {
    const words = normalize(search).split(/\s+/).filter(Boolean)
    return products
      .filter((product) => !cat || product.category === cat)
      .filter((product) => !col || product.collection === col)
      .filter((product) => !promo || product.compareAt)
      .filter((product) => {
        const text = normalize(`${product.name} ${categoryLabel(product.category)} ${product.description}`)
        return words.every((word) => text.includes(word))
      })
      .sort(sorters[sort])
  }, [cat, col, promo, search, sort])

  const title = [
    categories.find((category) => category.id === cat)?.label,
    collections.find((collection) => collection.id === col)?.label,
  ].filter(Boolean).join(' · ') || 'Toute la boutique'

  const reset = () => {
    setSearch('')
    navigate('/boutique')
  }

  return (
    <div className="section catalog">
      <h1 className="page-title">{title}</h1>

      <div className="pills" role="group" aria-label="Rayons">
        <a href={`#${buildPath({ col, promo })}`} className="pill" aria-current={!cat ? 'true' : undefined}>Tous les rayons</a>
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${buildPath({ cat: category.id, col, promo })}`}
            className="pill"
            aria-current={cat === category.id ? 'true' : undefined}
          >
            {category.label}
          </a>
        ))}
      </div>

      <div className="pills" role="group" aria-label="Collections">
        <a href={`#${buildPath({ cat, promo })}`} className="pill" aria-current={!col ? 'true' : undefined}>Toutes les collections</a>
        {collections.map((collection) => (
          <a
            key={collection.id}
            href={`#${buildPath({ cat, col: collection.id, promo })}`}
            className="pill"
            aria-current={col === collection.id ? 'true' : undefined}
          >
            {collection.label}
          </a>
        ))}
      </div>

      <div className="toolbar">
        <label className="field-inline grow">
          <span className="visually-hidden">Rechercher un produit</span>
          <input type="search" placeholder="Rechercher un produit…" value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
        <label className="check">
          <input type="checkbox" checked={promo} onChange={(event) => navigate(buildPath({ cat, col, promo: event.target.checked }))} />
          Promotions
        </label>
        <label className="field-inline">
          <span className="muted">Trier</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Sélection</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="name">Nom</option>
          </select>
        </label>
      </div>

      <p className="muted" role="status">{results.length} produit{results.length > 1 ? 's' : ''}</p>

      {results.length > 0 ? (
        <>
          <div className="product-grid">
            {results.slice(0, count).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          {results.length > count && (
            <div className="load-more">
              <button type="button" className="btn btn-ghost-dark" onClick={() => setShown({ key: filterKey, count: count + PAGE_SIZE })}>
                Afficher plus ({results.length - count} restants)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty">
          <p>Aucun produit ne correspond à votre recherche.</p>
          <button type="button" className="btn" onClick={reset}>Effacer les filtres</button>
        </div>
      )}
    </div>
  )
}
