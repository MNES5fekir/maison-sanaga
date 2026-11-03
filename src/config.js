// Réglages de la boutique : nom, contact, livraison. Les montants sont en FCFA.
// `npm run check:prod` liste ce qu'il reste à remplir avant la mise en ligne.
export const store = {
  name: 'Maison Sanaga',
  description: 'Créations africaines et style européen : vêtements, chaussures et décoration livrés partout au Cameroun.',
  email: 'contact@example.com',
  // Adresse publique du site, sans barre finale (ex. https://www.maboutique.cm).
  siteUrl: '',
  locale: 'fr-CM',
  currency: 'XAF',
  // Numéro WhatsApp qui reçoit les commandes, chiffres seuls avec l'indicatif
  // (ex. 2376XXXXXXXX). Tant qu'il est vide, le site s'annonce comme démonstration.
  whatsapp: '',
  // Identité du vendeur, affichée dans les mentions légales.
  legal: {
    owner: '',
    address: '',
    rccm: '',
    niu: '',
  },
  returnDays: 7,
  freeShippingFrom: 50000,
  shipping: {
    local: { label: 'Livraison à Douala ou Yaoundé', delay: '24 à 48 h', price: 2000 },
    national: { label: 'Expédition vers les autres villes', delay: '2 à 5 jours', price: 5000 },
  },
  localCities: ['Douala', 'Yaoundé'],
  otherCities: ['Bafoussam', 'Bamenda', 'Bertoua', 'Buea', 'Ebolowa', 'Garoua', 'Kribi', 'Limbe', 'Maroua', 'Ngaoundéré'],
  payments: {
    orange: 'Orange Money',
    mtn: 'MTN Mobile Money',
    cash: 'Espèces',
  },
}

export const ordersEnabled = Boolean(store.whatsapp)
