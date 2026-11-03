import { store } from '../config.js'
import { categories, products } from '../catalog/products.js'
import PhotoCredit from '../components/PhotoCredit.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductPhoto from '../components/ProductPhoto.jsx'
import { formatPrice } from '../lib/format.js'

export default function Home() {
  const newest = products.filter((product) => product.isNew).slice(0, 4)
  const onSale = products.filter((product) => product.compareAt).slice(0, 4)
  const european = products.filter((product) => product.collection === 'europe').slice(0, 8)
  const african = products.filter((product) => product.collection === 'afrique').slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Du pagne à la porcelaine, commandez sans quitter le quartier.</h1>
          <p>Créations africaines et style européen : vêtements, chaussures et décoration livrés partout au Cameroun.</p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#/boutique">Découvrir la boutique</a>
            <a className="btn btn-ghost" href="#/boutique?promo=1">Voir les promotions</a>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="hero-photo">
            <ProductPhoto slug="boutique-pagnes" alt="Étagères d’une boutique remplies de pagnes wax colorés" full eager />
          </div>
          <PhotoCredit slug="boutique-pagnes" />
        </figure>
      </section>

      <ul className="promises">
        <li><strong>Livraison offerte</strong> dès {formatPrice(store.freeShippingFrom)} à Douala et Yaoundé</li>
        <li><strong>Livré en {store.shipping.local.delay}</strong> dans ces deux villes</li>
        <li><strong>Orange Money, MTN MoMo</strong> ou espèces à la livraison</li>
      </ul>

      <section className="section">
        <h2 className="section-title">Nos rayons</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <a key={category.id} href={`#/boutique?cat=${category.id}`} className="category-tile">
              <ProductPhoto slug={category.photo} />
              <div className="category-text">
                <h3>{category.label}</h3>
                <p>{category.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <a className="europe-banner" href="#/boutique?col=europe">
          <div className="europe-banner-text">
            <h2>L’élégance européenne, livrée au Cameroun</h2>
            <p>Richelieus patinés, marinières, porcelaine fleurie et verre coloré : une sélection au style européen.</p>
            <span className="btn btn-accent">Découvrir la sélection</span>
          </div>
          <div className="europe-banner-photos">
            <ProductPhoto slug="richelieus-patines" />
            <ProductPhoto slug="vase-mosaique" />
            <ProductPhoto slug="mariniere-bleue" />
          </div>
        </a>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Style européen</h2>
          <a href="#/boutique?col=europe">Tout voir →</a>
        </div>
        <div className="product-grid">
          {european.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Créations africaines</h2>
          <a href="#/boutique?col=afrique">Tout voir →</a>
        </div>
        <div className="product-grid">
          {african.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Nouveautés</h2>
          <a href="#/boutique">Tout voir →</a>
        </div>
        <div className="product-grid">
          {newest.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">En promotion</h2>
          <a href="#/boutique?promo=1">Tout voir →</a>
        </div>
        <div className="product-grid">
          {onSale.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </>
  )
}
