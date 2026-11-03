// Refuse la mise en ligne tant que la boutique contient des réglages d'exemple.
import { readFile } from 'node:fs/promises'
import { store } from '../src/config.js'
import { products } from '../src/catalog/products.js'

const errors = []
const warnings = []

if (!/^237[26]\d{8}$/.test(store.whatsapp)) {
  errors.push('whatsapp : renseignez votre numéro, chiffres seuls avec l\'indicatif (ex. 2376XXXXXXXX).')
}
if (!/^https:\/\/[^/\s]+$/.test(store.siteUrl)) {
  errors.push('siteUrl : renseignez l\'adresse publique du site, sans barre finale (ex. https://www.maboutique.cm).')
}
if (!store.email || store.email.endsWith('@example.com')) {
  errors.push('email : remplacez contact@example.com par votre adresse.')
}
for (const [field, label] of [['owner', 'le nom du vendeur ou de la société'], ['address', 'l\'adresse'], ['rccm', 'le numéro RCCM'], ['niu', 'le numéro NIU']]) {
  if (!store.legal[field]) errors.push(`legal.${field} : renseignez ${label}.`)
}

const credits = JSON.parse(await readFile(new URL('../src/catalog/photo-credits.json', import.meta.url), 'utf-8'))
const borrowed = Object.keys(credits).length
if (borrowed) warnings.push(`${borrowed} photos ne sont pas les vôtres (Wikimedia Commons) : remplacez-les par vos articles et retirez leur entrée de photo-credits.json.`)
const promos = products.filter((product) => product.compareAt).length
if (promos) warnings.push(`${promos} prix barrés : gardez seulement ceux qui correspondent à un ancien prix réel.`)
warnings.push(`Vérifiez le stock, les prix et les descriptions des ${products.length} produits, ainsi que le délai de retour (${store.returnDays} jours).`)
warnings.push('Faites relire les pages légales par un juriste camerounais.')

for (const warning of warnings) console.log(`À vérifier : ${warning}`)
if (errors.length) {
  console.error(`\nMise en ligne refusée, à corriger dans src/config.js :`)
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}
console.log('\nRéglages complets.')
