import { useEffect } from 'react'
import { store } from './config.js'
import { categories, findProduct } from './catalog/products.js'
import CartDrawer from './components/CartDrawer.jsx'
import { useCart } from './lib/cart.jsx'
import { useRoute } from './lib/router.js'
import Catalog from './pages/Catalog.jsx'
import Checkout from './pages/Checkout.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Home from './pages/Home.jsx'
import Legal, { legalPages } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductPage from './pages/ProductPage.jsx'

function resolve({ path, params }) {
  const [, section, id] = path.split('/')
  if (!section) return { page: <Home /> }
  if (section === 'boutique') {
    const label = categories.find((category) => category.id === params.get('cat'))?.label
    return { page: <Catalog params={params} />, title: label ?? 'Boutique' }
  }
  // La clé réinitialise le coloris et la taille d'un produit à l'autre.
  if (section === 'produit') return { page: <ProductPage key={id} slug={id} />, title: findProduct(id)?.name }
  if (section === 'commande') return { page: <Checkout />, title: 'Commande' }
  if (section === 'confirmation') return { page: <Confirmation id={id} />, title: 'Confirmation' }
  if (legalPages[section]) return { page: <Legal id={section} />, title: legalPages[section].title }
  return { page: <NotFound />, title: 'Page introuvable' }
}

export default function App() {
  const route = useRoute()
  const cart = useCart()
  const { page, title } = resolve(route)

  useEffect(() => {
    document.title = title ? `${title} · ${store.name}` : store.name
  }, [title])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route.path])

  return (
    <>
      <a className="skip-link" href="#contenu" onClick={(event) => {
        event.preventDefault()
        document.getElementById('contenu').focus()
      }}>Aller au contenu</a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="logo" href="#/">{store.name}</a>
          <nav className="site-nav" aria-label="Rayons">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#/boutique?cat=${category.id}`}
                aria-current={route.params.get('cat') === category.id ? 'true' : undefined}
              >
                {category.label}
              </a>
            ))}
            <a href="#/boutique?col=europe" aria-current={route.params.get('col') === 'europe' ? 'true' : undefined}>Europe</a>
          </nav>
          <button type="button" className="cart-btn" onClick={cart.open}>
            Panier <span className="cart-count" aria-label={`${cart.count} article${cart.count > 1 ? 's' : ''}`}>{cart.count}</span>
          </button>
        </div>
      </header>

      <main id="contenu" tabIndex={-1}>{page}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="logo">{store.name}</p>
          <nav aria-label="Pied de page">
            {categories.map((category) => (
              <a key={category.id} href={`#/boutique?cat=${category.id}`}>{category.label}</a>
            ))}
            {Object.entries(legalPages).map(([id, { title }]) => (
              <a key={id} href={`#/${id}`}>{title}</a>
            ))}
          </nav>
          <a href={`mailto:${store.email}`}>{store.email}</a>
        </div>
      </footer>

      <CartDrawer />
    </>
  )
}
