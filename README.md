# Boutique en ligne pour le Cameroun

Site de vente de vêtements, de chaussures et d'articles de décoration (React + Vite), en FCFA.

## Lancer le site

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:5180. `npm test` lance les tests ;
`npm run build` produit dans `dist/` un site statique à déposer sur n'importe quel hébergeur.
Pour publier le site, suivez [MISE-EN-LIGNE.md](MISE-EN-LIGNE.md).

## Personnaliser

| Quoi | Où |
| --- | --- |
| Nom, contact, numéro WhatsApp, villes, frais de livraison | `src/config.js` |
| Produits, prix en FCFA, tailles | `src/catalog/products.js` |
| Photos (`<slug>.webp`, puis `npm run photos`) | `public/photos/` |
| Auteur et licence des photos | `src/catalog/photo-credits.json` |
| Couleurs et polices | haut de `src/styles.css` |

## Recevoir de vraies commandes

Renseignez `whatsapp` dans `src/config.js`. Le bandeau « Site de démonstration » disparaît
et le client envoie sa commande sur ce numéro depuis la page de confirmation.
Le paiement (Orange Money, MTN MoMo ou espèces) se règle à la réception : le site n'encaisse rien.

## Avant de vendre pour de vrai

- **Remplacer les photos par celles de vos articles.** Celles du site viennent de Wikimedia Commons :
  elles ne montrent pas votre stock, et certaines licences (CC BY-SA) imposent de citer l'auteur.
  Retirez aussi l'entrée de chaque photo remplacée dans `photo-credits.json`.
- **Vérifier le catalogue.** Noms, descriptions, matières, dimensions et prix sont des exemples.
  N'affichez un prix barré (`compareAt`) que s'il correspond à un ancien prix réel, et retirez
  les produits que vous n'avez pas en stock.
- **Vérifier la collection « Style européen ».** Elle désigne un style, pas une provenance :
  n'écrivez « importé d'Europe » ou « fabriqué en Italie » que si vous pouvez le prouver.
  Plusieurs photos montrent des pièces anciennes ou de musée, à remplacer par vos articles.
- **Vérifier les prix et les frais de livraison** auprès de vos fournisseurs et transporteurs :
  ce sont des ordres de grandeur tirés de sources peu détaillées.
- **Faire relire les pages légales** (`src/pages/Legal.jsx`) par un juriste camerounais.
- **Paiement en ligne** : voir [PAIEMENT-MOBILE.md](PAIEMENT-MOBILE.md).
