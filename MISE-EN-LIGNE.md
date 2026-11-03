# Mettre la boutique en ligne

Hébergeur conseillé : **Cloudflare Pages**, offre gratuite. Le site n'a pas de serveur : il suffit
de publier le dossier `dist/`. Seul le nom de domaine est payant.

## 1. Remplir les réglages

Dans `src/config.js`, renseignez `whatsapp`, `email`, `siteUrl`, `legal` (vendeur, adresse, RCCM, NIU),
et vérifiez `name`, `returnDays` et les frais de livraison. Puis lancez :

```bash
npm run check:prod
```

La commande liste ce qui manque. La compilation de production refuse de se lancer tant que
les réglages obligatoires ne sont pas remplis.

## 2. Remplacer les photos et vérifier le catalogue

1. Déposez vos photos dans `public/photos/`, sous le nom `<slug du produit>.jpg`.
2. Lancez `npm run photos` (Python et Pillow requis) pour créer les WebP et les vignettes.
3. Retirez l'entrée de chaque photo remplacée dans `src/catalog/photo-credits.json` : sa mention disparaît.
4. Dans `src/catalog/products.js`, retirez ce que vous n'avez pas en stock et corrigez prix et descriptions.

Faites aussi relire les pages légales par un juriste camerounais.

## 3. Publier sur Cloudflare Pages

1. Créez un compte sur [cloudflare.com](https://www.cloudflare.com).
2. Ouvrez **Workers & Pages**, créez une application **Pages** et connectez le dépôt GitHub `maison-sanaga`.
3. Renseignez :

| Réglage | Valeur |
| --- | --- |
| Branche de production | `main` |
| Répertoire racine | laisser vide |
| Commande de build | `npm run build:prod` |
| Répertoire de sortie | `dist` |

Le site est alors publié sur une adresse en `.pages.dev`, et republié à chaque envoi sur `main`.

**Pour une simple démonstration**, utilisez `npm run build` comme commande de build : le site affiche
le bandeau de démonstration et demande à ne pas être référencé.

**Sans GitHub**, Cloudflare accepte aussi le dépôt du dossier `dist/` par glisser-déposer. Un projet
créé ainsi ne peut pas être relié à Git ensuite, et il faudra refaire le dépôt à chaque modification.

## 4. Brancher le nom de domaine

1. Achetez le domaine : un `.cm` auprès d'un bureau d'enregistrement agréé par l'ANTIC, ou un `.com`.
2. Dans le projet Pages, ouvrez **Custom domains** et ajoutez `www.votre-domaine`.
3. Suivez les indications de Cloudflare pour le DNS.
4. Mettez cette adresse dans `siteUrl`, puis republiez.

## 5. Vérifier après la mise en ligne

Depuis un téléphone, en données mobiles :

- le site s'ouvre en `https` et le bandeau de démonstration a disparu ;
- une commande de test arrive bien sur votre WhatsApp, avec l'adresse et le total ;
- les frais de livraison sont bons pour Douala et pour une autre ville ;
- les trois pages légales sont complètes, sans mention « [à compléter] » ;
- un lien partagé sur WhatsApp affiche l'image et le nom de la boutique.

## Limites actuelles

- **Référencement :** les pages sont générées dans le navigateur et leurs adresses contiennent `#`.
  Les moteurs de recherche verront surtout l'accueil : comptez aussi sur WhatsApp et les réseaux sociaux.
- **Commandes :** elles arrivent sur WhatsApp et ne sont enregistrées dans aucune base de données.
  Conservez ces messages, car la loi sur le commerce électronique impose de garder les données de transaction.
- **Paiement en ligne :** voir [PAIEMENT-MOBILE.md](PAIEMENT-MOBILE.md).
