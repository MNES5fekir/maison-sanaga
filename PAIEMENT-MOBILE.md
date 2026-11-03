# Paiement mobile par un agrégateur

Aujourd'hui, le site n'encaisse rien : le client paie à la réception. Cette note prépare le passage
au paiement Orange Money et MTN Mobile Money en ligne, par un agrégateur.

Les exigences varient selon les agrégateurs et leur liste exacte n'est pas toujours publiée :
demandez-la à celui que vous choisissez avant de déposer le dossier.

## 1. Préparer le dossier

- [ ] RCCM et NIU actif
- [ ] Pièce d'identité du gérant
- [ ] Coordonnées bancaires, si l'agrégateur les demande
- [ ] Mêmes nom et adresse partout : RCCM, NIU, pièce d'identité, site (`src/config.js`)

Si le nom de la société n'est pas « Maison Sanaga », indiquez-le dans `legal.owner` et, s'il le faut, changez `name`.

## 2. Préparer le site

- [ ] `legal.owner`, `legal.address`, `legal.rccm` et `legal.niu` remplis, si l'agrégateur veut les voir sur le site (seuls les champs remplis s'affichent)
- [ ] Site publié en `https`, si possible sur votre nom de domaine (`siteUrl`)
- [ ] Vos vrais produits, photos, prix et stock
- [ ] Délais de retour et de remboursement (`returnDays`, `refundDays`) conformes à ce que vous appliquez
- [ ] Pages légales relues par un juriste camerounais
- [ ] Contact testé : WhatsApp, téléphone et e-mail répondent

## 3. Comparer les agrégateurs

Demandez à chacun : les frais, le délai de versement, les opérateurs couverts, les pièces exigées,
la clause d'exclusivité éventuelle, l'existence d'un environnement de test et la gestion des remboursements.

## 4. Brancher le paiement après réception des clés

Ce travail reste à faire, et dépend de l'agrégateur choisi.

**La clé secrète ne doit jamais se trouver dans ce code** : le dépôt est public et tout ce qui est envoyé
au navigateur est lisible. Elle ira dans les variables chiffrées de l'hébergeur, et jamais dans `src/config.js`.
Si une clé secrète est publiée par erreur, révoquez-la immédiatement.

Le site est aujourd'hui purement statique. Le paiement demandera une petite partie serveur, par exemple
des Cloudflare Pages Functions, et un stockage des commandes :

1. Le client confirme sa commande. Le serveur **recalcule le total à partir du catalogue**, sans croire le navigateur.
2. Le serveur enregistre la commande « en attente » et demande le paiement à l'agrégateur.
3. Le client valide sur son téléphone, sans jamais saisir son code secret sur le site.
4. L'agrégateur prévient le serveur. Le serveur **vérifie la signature** et le montant, puis marque la commande « payée ».
5. Le site et WhatsApp confirment au client. Seule la notification vérifiée fait foi, pas la page de retour.

À mettre à jour en même temps : les règles de sécurité (`public/_headers`), les conditions de vente et la
politique de confidentialité, qui indiquent aujourd'hui que le paiement se fait à la réception et que le formulaire n'envoie rien au serveur.
