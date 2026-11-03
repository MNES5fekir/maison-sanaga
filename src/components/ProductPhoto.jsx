// Photo d'un produit, en vignette légère par défaut pour économiser les données mobiles.
// `full` pour les grandes images, `eager` pour celles visibles dès l'ouverture de la page.
export default function ProductPhoto({ slug, alt = '', full = false, eager = false }) {
  return (
    <img
      className="product-photo"
      src={full ? `photos/${slug}.webp` : `photos/thumbs/${slug}.webp`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
