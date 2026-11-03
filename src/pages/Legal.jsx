import { store } from '../config.js'
import { formatPrice } from '../lib/format.js'

// Une information légale n'est affichée que si elle est renseignée dans config.js.
function Notice() {
  const { owner, address, rccm, niu } = store.legal
  return (
    <>
      <h1 className="page-title">Mentions légales</h1>
      <h2>Vendeur</h2>
      <p>
        {owner || store.name}<br />
        {address && <>Adresse : {address}<br /></>}
        {rccm && <>RCCM : {rccm}<br /></>}
        {niu && <>NIU : {niu}<br /></>}
        Téléphone : <a href={`tel:+${store.whatsapp}`}>{store.phone}</a><br />
        E-mail : <a href={`mailto:${store.email}`}>{store.email}</a>
      </p>
      <h2>Hébergement</h2>
      <p>Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.</p>
      <h2>Photos</h2>
      <p>Les photos non produites par le vendeur portent une mention indiquant leur auteur et leur licence.</p>
    </>
  )
}

function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <p>Une question sur un produit, une commande, une livraison ou un remboursement ? Écrivez-nous.</p>
      <ul className="legal-list">
        <li>WhatsApp : <a href={`https://wa.me/${store.whatsapp}`} target="_blank" rel="noreferrer">{store.phone}</a></li>
        <li>Téléphone : <a href={`tel:+${store.whatsapp}`}>{store.phone}</a></li>
        <li>E-mail : <a href={`mailto:${store.email}`}>{store.email}</a></li>
        {store.legal.address && <li>Adresse : {store.legal.address}</li>}
      </ul>
    </>
  )
}

function Terms() {
  return (
    <>
      <h1 className="page-title">Conditions de vente</h1>
      <p>Ces conditions s’appliquent aux commandes passées sur le site {store.name} et livrées au Cameroun.</p>
      <h2>Produits et prix</h2>
      <p>
        Les prix sont indiqués en francs CFA (FCFA), hors frais de livraison. Les photos sont données à titre
        d’illustration : couleurs et motifs peuvent varier, notamment pour les pièces artisanales.
      </p>
      <h2>Commande</h2>
      <p>
        Le client envoie sa commande sur WhatsApp depuis la page de confirmation. La vente est conclue lorsque
        le vendeur confirme par message la disponibilité des articles, le montant total et la livraison. Si un article
        n’est pas disponible, le client en est informé et ne paie rien pour cet article.
      </p>
      <h2>Paiement</h2>
      <p>
        Le client paie à la réception du colis, par Orange Money, MTN Mobile Money ou en espèces. Le site n’encaisse
        aucun paiement et ne demande jamais de code secret : ne le communiquez à personne, pas même au livreur.
      </p>
      <h2>Livraison</h2>
      <ul className="legal-list">
        {Object.values(store.shipping).map((option) => (
          <li key={option.label}>{option.label} : {formatPrice(option.price)}, sous {option.delay}.</li>
        ))}
        <li>Livraison offerte à Douala et Yaoundé à partir de {formatPrice(store.freeShippingFrom)} d’achat.</li>
      </ul>
      <p>Les délais sont indicatifs et courent à partir de la confirmation de la commande.</p>
      <h2>Retours, échanges et remboursements</h2>
      <p>
        Vous pouvez demander un retour ou un échange dans les {store.returnDays} jours suivant la réception, pour un article
        non porté, non lavé et dans son état d’origine. Un article défectueux ou non conforme est échangé ou remboursé aux frais
        du vendeur. Contactez-nous au <a href={`https://wa.me/${store.whatsapp}`} target="_blank" rel="noreferrer">{store.phone}</a> sur
        WhatsApp ou à <a href={`mailto:${store.email}`}>{store.email}</a>.
      </p>
      <p>
        Un remboursement accepté est versé sous {store.refundDays} jours après réception de l’article retourné, sur le compte
        mobile money utilisé pour le paiement ou, pour un paiement en espèces, sur le compte mobile money que vous indiquez.
      </p>
      <h2>Droit applicable</h2>
      <p>
        Ces conditions sont soumises au droit camerounais, notamment à la loi n° 2010/021 sur le commerce électronique et à
        la loi-cadre n° 2011/012 sur la protection du consommateur. Elles ne limitent pas les droits que ces textes accordent au client.
      </p>
    </>
  )
}

function Privacy() {
  return (
    <>
      <h1 className="page-title">Politique de confidentialité</h1>
      <p>
        Responsable du traitement : {store.legal.owner || store.name}. Cette politique tient compte de la loi n° 2024/017
        relative à la protection des données à caractère personnel.
      </p>
      <h2>Données collectées</h2>
      <p>Pour livrer une commande, nous utilisons votre nom, votre téléphone, votre ville, votre quartier, votre point de repère et le contenu de la commande.</p>
      <h2>Où vont ces données</h2>
      <ul className="legal-list">
        <li>Le panier et la dernière commande restent dans votre navigateur.</li>
        <li>Le formulaire n’envoie rien à nos serveurs : vos données ne nous parviennent que lorsque vous envoyez vous-même le message préparé sur WhatsApp.</li>
        <li>WhatsApp, service de Meta, traite alors ce message, y compris hors du Cameroun.</li>
        <li>Nos livreurs reçoivent les informations nécessaires à la livraison.</li>
        <li>Notre hébergeur peut traiter des données techniques de connexion, comme l’adresse IP, pour faire fonctionner et protéger le site.</li>
      </ul>
      <h2>Publicité et cookies</h2>
      <p>Le site n’utilise ni cookie publicitaire ni outil de mesure d’audience.</p>
      <h2>Durée de conservation</h2>
      <p>Nous conservons les données de commande le temps de les traiter, puis pendant la durée imposée par nos obligations légales et comptables.</p>
      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès à vos données, leur correction ou leur suppression, et retirer votre consentement,
        en écrivant à <a href={`mailto:${store.email}`}>{store.email}</a>.
      </p>
    </>
  )
}

export const legalPages = {
  contact: { title: 'Contact', Page: Contact },
  'mentions-legales': { title: 'Mentions légales', Page: Notice },
  'conditions-de-vente': { title: 'Conditions de vente', Page: Terms },
  confidentialite: { title: 'Confidentialité', Page: Privacy },
}

export default function Legal({ id }) {
  const { Page } = legalPages[id]
  return <div className="section legal"><Page /></div>
}
