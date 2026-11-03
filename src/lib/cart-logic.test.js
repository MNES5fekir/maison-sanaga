import test from 'node:test'
import assert from 'node:assert/strict'
import {
  MAX_QTY, addItem, countItems, isCameroonPhone, lineKey, removeLine, sanitizeLines, setQty,
  shippingCost, shippingZone, subtotal,
} from './cart-logic.js'
import { categories, collections, products } from '../catalog/products.js'
import { store } from '../config.js'
import { whatsappLink } from './whatsapp.js'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

const shirt = { slug: 'chemise-wax-etoiles', size: 'M', qty: 1 }
const basket = { slug: 'grand-panier', size: null, qty: 2 }

test('ajouter la même variante cumule les quantités', () => {
  const lines = addItem(addItem([], shirt), { ...shirt, qty: 2 })
  assert.equal(lines.length, 1)
  assert.equal(lines[0].qty, 3)
})

test('une autre taille crée une nouvelle ligne', () => {
  assert.equal(addItem([shirt], { ...shirt, size: 'L' }).length, 2)
})

test('la quantité reste entre 1 et le maximum', () => {
  const key = lineKey(shirt)
  assert.equal(setQty([shirt], key, 0)[0].qty, 1)
  assert.equal(setQty([shirt], key, 999)[0].qty, MAX_QTY)
  assert.equal(addItem([{ ...shirt, qty: MAX_QTY }], shirt)[0].qty, MAX_QTY)
})

test('retirer une ligne ne touche pas aux autres', () => {
  assert.deepEqual(removeLine([shirt, basket], lineKey(shirt)), [basket])
})

test('le sous-total vient du catalogue, pas du panier enregistré', () => {
  assert.equal(subtotal(sanitizeLines([{ ...shirt, price: 1 }])), 12000)
  assert.equal(subtotal([shirt, basket]), 12000 + 2 * 7500)
  assert.equal(countItems([shirt, basket]), 3)
})

test('un panier altéré est nettoyé', () => {
  assert.deepEqual(sanitizeLines('pas un tableau'), [])
  assert.deepEqual(sanitizeLines([null, { slug: 'inconnu', qty: 1 }]), [])
  assert.deepEqual(sanitizeLines([{ ...shirt, size: '99' }]), [])
  assert.deepEqual(sanitizeLines([{ ...basket, size: 'M' }]), [])
  assert.equal(sanitizeLines([{ ...shirt, qty: -4 }])[0].qty, 1)
})

test('la livraison dépend de la ville, et n’est offerte qu’à Douala et Yaoundé', () => {
  assert.equal(shippingZone('Douala'), 'local')
  assert.equal(shippingZone('Garoua'), 'national')
  assert.equal(shippingCost(49999, 'local'), 2000)
  assert.equal(shippingCost(50000, 'local'), 0)
  assert.equal(shippingCost(50000, 'national'), 5000)
})

test('les numéros camerounais sont reconnus', () => {
  for (const ok of ['677123456', '+237 677 12 34 56', '00237-699-123-456', '222123456']) {
    assert.ok(isCameroonPhone(ok), ok)
  }
  for (const bad of ['', '12345', '577123456', '67712345', '6771234567', '+33 612345678']) {
    assert.ok(!isCameroonPhone(bad), bad)
  }
})

test('le lien WhatsApp contient la commande complète', () => {
  const link = whatsappLink({
    id: 'CMD-1', fullName: 'Test Client', phone: '677123456', city: 'Douala', district: 'Akwa', landmark: 'Face pharmacie',
    payment: 'orange', shipping: 2000, subtotal: 12000,
    lines: [{ key: 'a', name: 'Chemise', variant: 'Taille M', qty: 1, total: 12000 }],
  }, '237600000000')
  assert.ok(link.startsWith('https://wa.me/237600000000?text='))
  const text = decodeURIComponent(link.split('text=')[1])
  for (const part of ['CMD-1', 'Test Client', 'Akwa', 'Face pharmacie', 'Orange Money', '1 × Chemise', 'Taille M']) {
    assert.ok(text.includes(part), part)
  }
})

test('chaque produit a une photo et une vignette', () => {
  for (const { slug } of products) {
    assert.ok(existsSync(new URL(`../../public/photos/${slug}.webp`, import.meta.url)), slug)
    assert.ok(existsSync(new URL(`../../public/photos/thumbs/${slug}.webp`, import.meta.url)), slug)
  }
  assert.ok(store.payments.orange)
})

test('chaque mention de photo correspond à une photo et cite auteur et licence', async () => {
  const credits = JSON.parse(await readFile(new URL('../catalog/photo-credits.json', import.meta.url), 'utf-8'))
  for (const [slug, credit] of Object.entries(credits)) {
    assert.ok(existsSync(new URL(`../../public/photos/${slug}.webp`, import.meta.url)), slug)
    assert.ok(credit.author && credit.source && credit.license, slug)
    assert.ok(credit.licenseUrl || /^(CC0|Public domain)/.test(credit.license), slug)
  }
})

test('le catalogue est cohérent', () => {
  assert.ok(products.length > 90)
  assert.equal(new Set(products.map((p) => p.slug)).size, products.length)
  const europe = products.filter((p) => p.collection === 'europe')
  assert.ok(europe.length >= 40)
  for (const p of products) {
    assert.ok(categories.some((c) => c.id === p.category), p.slug)
    assert.ok(!p.collection || collections.some((c) => c.id === p.collection), p.slug)
    assert.ok(Number.isInteger(p.price) && p.price > 0, p.slug)
    assert.ok(!p.compareAt || p.compareAt > p.price, p.slug)
    assert.ok(p.description && p.details.length > 0, p.slug)
  }
})
