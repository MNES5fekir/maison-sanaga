import credits from '../catalog/photo-credits.json'

// Mention exigée par les licences des photos empruntées. Une photo sans entrée dans
// photo-credits.json (vos propres photos) ou libre de toute mention n'affiche rien.
export default function PhotoCredit({ slug }) {
  const credit = credits[slug]
  if (!credit || /^(CC0|Public domain)/.test(credit.license)) return null
  return (
    <figcaption className="photo-credit">
      Photo : <a href={credit.source} target="_blank" rel="noreferrer">{credit.author}</a>,{' '}
      <a href={credit.licenseUrl} target="_blank" rel="noreferrer">{credit.license}</a>, recadrée
    </figcaption>
  )
}
