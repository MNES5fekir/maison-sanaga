// Catalogue de la boutique. Pour ajouter un produit : copier une entrée, changer son
// `slug` (unique) et déposer sa photo dans public/photos/<slug>.webp.
// Les montants sont en FCFA.

export const categories = [
  { id: 'vetements', label: 'Vêtements', blurb: 'Pagne, toghu, coupes européennes et accessoires.', photo: 'robes-wax' },
  { id: 'chaussures', label: 'Chaussures', blurb: 'Richelieus, ballerines, sandales perlées et baskets.', photo: 'richelieus-patines' },
  { id: 'decoration', label: 'Décoration', blurb: 'Porcelaine, verre coloré, vannerie et bois sculpté.', photo: 'service-the-fleuri' },
]

export const collections = [
  { id: 'europe', label: 'Style européen' },
  { id: 'afrique', label: 'Créations africaines' },
]

const CLOTHES = ['S', 'M', 'L', 'XL', 'XXL']
const MEN_SHOES = ['40', '41', '42', '43', '44', '45']
const WOMEN_SHOES = ['36', '37', '38', '39', '40', '41']
const ALL_SHOES = ['37', '38', '39', '40', '41', '42', '43', '44']
const BELTS = ['85', '90', '95', '100', '105', '110']
const HATS = ['56', '57', '58', '59', '60']

const catalog = [
  // Vêtements : créations africaines
  {
    slug: 'chemise-wax-etoiles', name: 'Chemise wax à étoiles', category: 'vetements', collection: 'afrique',
    price: 12000, sizes: CLOTHES, isNew: true,
    description: 'Une chemise à manches courtes taillée dans un pagne wax jaune et rouge, facile à porter au bureau comme le week-end.',
    details: ['Pagne wax 100 % coton', 'Manches courtes', 'Col classique'],
  },
  {
    slug: 'chemise-wax-manches-longues', name: 'Chemise wax à manches longues', category: 'vetements', collection: 'afrique',
    price: 15000, sizes: CLOTHES,
    description: 'Une chemise cintrée aux motifs bleus et crème, avec des poignets contrastés, pour les rendez-vous et les cérémonies.',
    details: ['Pagne wax 100 % coton', 'Manches longues', 'Coupe cintrée'],
  },
  {
    slug: 'robes-wax', name: 'Robe ceinturée en pagne', category: 'vetements', collection: 'afrique',
    price: 18000, compareAt: 22000, sizes: CLOTHES, isNew: true,
    description: 'La robe bleue au centre de la photo : décolleté bateau, taille marquée par une large ceinture noire et jupe ample.',
    details: ['Pagne wax', 'Ceinture incluse', 'Retouches possibles sur demande'],
  },
  {
    slug: 'tunique-toghu', name: 'Tunique toghu brodée', category: 'vetements', collection: 'afrique',
    price: 65000, sizes: CLOTHES,
    description: 'La tenue des grandes cérémonies du Nord-Ouest : un velours noir couvert de broderies aux couleurs vives.',
    details: ['Velours noir', 'Broderies à la main', 'Bonnet non inclus'],
  },
  {
    slug: 'robe-toghu', name: 'Robe toghu longue', category: 'vetements', collection: 'afrique',
    price: 55000, sizes: CLOTHES,
    description: 'Une robe longue en velours noir, relevée par un col et des motifs brodés, pour les mariages et les dots.',
    details: ['Velours noir', 'Col brodé', 'Longueur chevilles'],
  },
  {
    slug: 'boubou-ndop', name: 'Boubou en ndop', category: 'vetements', collection: 'afrique',
    price: 35000, sizes: CLOTHES,
    description: 'Le ndop, tissu teint à l’indigo de l’Ouest et du Nord-Ouest, en boubou ample bordé de franges.',
    details: ['Coton teint à l’indigo', 'Coupe ample', 'Finition à franges'],
  },
  {
    slug: 'pagne-fleurs', name: 'Pagne wax à fleurs, 6 yards', category: 'vetements', collection: 'afrique',
    price: 15000,
    description: 'Un pagne aux grandes fleurs bleues, jaunes et rouges, à faire coudre chez votre couturier.',
    details: ['Coton imprimé', 'Pièce de 6 yards', 'Vendu non cousu'],
  },
  {
    slug: 'pagne-geometrique', name: 'Pagne wax géométrique, 6 yards', category: 'vetements', collection: 'afrique',
    price: 12000, compareAt: 15000,
    description: 'Un motif tressé bleu, rose et jaune, qui se prête aussi bien aux robes qu’aux chemises.',
    details: ['Coton imprimé', 'Pièce de 6 yards', 'Vendu non cousu'],
  },
  {
    slug: 'tissu-toghu', name: 'Tissu toghu brodé, 2 mètres', category: 'vetements', collection: 'afrique',
    price: 25000,
    description: 'Un coupon de velours noir brodé de motifs traditionnels, pour une veste, une jupe ou un sac sur mesure.',
    details: ['Velours noir', 'Broderies colorées', 'Coupon de 2 mètres'],
  },
  {
    slug: 'kente-colore', name: 'Bande de kente multicolore', category: 'vetements', collection: 'afrique',
    price: 28000, isNew: true,
    description: 'Un kente tissé aux motifs rouges, violets et jaunes, à porter en étole ou à intégrer dans une tenue de cérémonie.',
    details: ['Tissage traditionnel', 'Motif variable selon la pièce', 'Vendu non cousu'],
  },
  {
    slug: 'kente-rose', name: 'Kente rose et bordeaux', category: 'vetements', collection: 'afrique',
    price: 26000,
    description: 'Des bandes tissées aux rayures fines, dans des tons de rose et de bordeaux, élégantes pour une dot ou un mariage.',
    details: ['Tissage en bandes', 'Rayures fines', 'Vendu non cousu'],
  },
  {
    slug: 'kente-bleu', name: 'Kente bleu et vert', category: 'vetements', collection: 'afrique',
    price: 26000, compareAt: 32000,
    description: 'Un tissage aux motifs géométriques bleus, verts et violets, plus discret que les kentes rouges et tout aussi festif.',
    details: ['Tissage en bandes', 'Motifs géométriques', 'Vendu non cousu'],
  },
  {
    slug: 'colliers-perles', name: 'Collier plastron en perles', category: 'vetements', collection: 'afrique',
    price: 9000,
    description: 'Un long collier tissé de perles colorées, qui suffit à habiller une robe unie. Couleurs au choix selon l’arrivage.',
    details: ['Perles de verre', 'Montage à la main', 'Couleurs variables'],
  },
  {
    slug: 'collier-massai', name: 'Collier ras-de-cou en perles', category: 'vetements', collection: 'afrique',
    price: 7500,
    description: 'Un ras-de-cou souple aux rayures de perles rouges, blanches et bleues, avec son pendant central.',
    details: ['Perles de verre', 'Montage à la main', 'Fermoir ajustable'],
  },
  {
    slug: 'sacs-pagne', name: 'Sac bandoulière en pagne', category: 'vetements', collection: 'afrique',
    price: 9500,
    description: 'Un sac plat à porter en bandoulière, cousu dans un pagne imprimé. Le modèle change selon les tissus disponibles.',
    details: ['Pagne de coton', 'Bandoulière réglable', 'Motif variable'],
  },

  // Vêtements : style européen
  {
    slug: 'mariniere-bleue', name: 'Marinière à rayures bleues', category: 'vetements', collection: 'europe',
    price: 18000, sizes: CLOTHES, isNew: true,
    description: 'Le grand classique du bord de mer français : un col bateau, des rayures bleu vif sur fond blanc et une coupe nette.',
    details: ['Coton', 'Col bateau', 'Manches longues'],
  },
  {
    slug: 'pull-raye-noir', name: 'Pull rayé noir et écru', category: 'vetements', collection: 'europe',
    price: 22000, sizes: CLOTHES,
    description: 'Un pull léger aux rayures marines, à porter avec un jean le week-end ou sous une veste au bureau.',
    details: ['Maille de coton', 'Coupe droite', 'Pochette en photo non incluse'],
  },
  {
    slug: 'trench-beige', name: 'Trench beige', category: 'vetements', collection: 'europe',
    price: 65000, compareAt: 79000, sizes: CLOTHES, isNew: true,
    description: 'Un long manteau léger à la coupe intemporelle, idéal pendant la saison des pluies et les matinées fraîches de Bafoussam.',
    details: ['Toile déperlante', 'Coupe longue', 'Boutonnage simple'],
  },
  {
    slug: 'duffle-coat-camel', name: 'Duffle-coat camel', category: 'vetements', collection: 'europe',
    price: 75000, sizes: CLOTHES,
    description: 'Une allure très britannique : un manteau chaud à capuche, fermé par des brandebourgs et de grandes poches plaquées.',
    details: ['Drap de laine', 'Fermeture à brandebourgs', 'Capuche'],
  },
  {
    slug: 'duffle-coat-noir', name: 'Duffle-coat noir', category: 'vetements', collection: 'europe',
    price: 75000, sizes: CLOTHES,
    description: 'Le duffle-coat en version noire, plus habillée, pour les voyages en Europe ou les soirées fraîches en altitude.',
    details: ['Drap de laine', 'Fermeture à brandebourgs', 'Capuche'],
  },
  {
    slug: 'gilet-torsades', name: 'Gilet à torsades écru', category: 'vetements', collection: 'europe',
    price: 32000, sizes: CLOTHES,
    description: 'Un gilet boutonné inspiré des mailles irlandaises, avec de belles torsades en relief et une matière enveloppante.',
    details: ['Grosse maille', 'Torsades en relief', 'Boutons ton sur ton'],
  },
  {
    slug: 'robe-cocktail-noire', name: 'Robe de cocktail noire', category: 'vetements', collection: 'europe',
    price: 48000, compareAt: 58000, sizes: CLOTHES,
    description: 'Un buste cintré, des manches trois-quarts et une jupe drapée qui prend du volume : la robe des grandes soirées.',
    details: ['Tissu satiné', 'Jupe drapée', 'Manches trois-quarts'],
  },
  {
    slug: 'polo-bleu', name: 'Polo bleu roi', category: 'vetements',
    collection: 'europe', price: 14000, sizes: CLOTHES,
    description: 'Un polo sobre à poche poitrine, dans un bleu franc, aussi à l’aise au bureau qu’en week-end.',
    details: ['Maille piquée', 'Col à boutons', 'Poche poitrine'],
  },
  {
    slug: 'noeud-soie-ecossais', name: 'Foulard-nœud écossais', category: 'vetements', collection: 'europe',
    price: 8500,
    description: 'Un nœud souple aux carreaux bleu marine et rouge, qui se noue autour du cou ou sur un sac.',
    details: ['Soie', 'Motif écossais', 'Se noue librement'],
  },
  {
    slug: 'ceinture-cuir-noir', name: 'Ceinture en cuir noir', category: 'vetements', collection: 'europe',
    price: 12000, sizes: BELTS,
    description: 'Une ceinture lisse à boucle argentée, assez discrète pour accompagner un costume comme un jean.',
    details: ['Cuir', 'Boucle argentée', 'Taille en centimètres'],
  },
  {
    slug: 'ceinture-cuir-marron', name: 'Ceinture large en cuir marron', category: 'vetements', collection: 'europe',
    price: 14000, sizes: BELTS,
    description: 'Un cuir épais et une grande boucle en métal bruni, pour donner du caractère à un jean ou à un chino.',
    details: ['Cuir épais', 'Boucle en métal bruni', 'Taille en centimètres'],
  },
  {
    slug: 'sacoche-cuir-triskele', name: 'Sacoche en cuir fauve', category: 'vetements', collection: 'europe',
    price: 58000, isNew: true,
    description: 'Une sacoche artisanale en cuir fauve, ornée d’un triskèle gravé sur le rabat : une pièce qui se patine avec le temps.',
    details: ['Cuir pleine fleur', 'Motif gravé', 'Fermeture à sangle'],
  },
  {
    slug: 'sac-cuir-repousse', name: 'Sac à main en cuir repoussé', category: 'vetements', collection: 'europe',
    price: 42000, compareAt: 50000,
    description: 'Un sac structuré de style vintage, aux motifs travaillés dans le cuir et aux deux anses arrondies.',
    details: ['Cuir repoussé', 'Deux anses', 'Fermoir métallique'],
  },
  {
    slug: 'chapeau-panama', name: 'Chapeau en paille clair', category: 'vetements', collection: 'europe',
    price: 16000, sizes: HATS,
    description: 'Un chapeau d’été élégant au ruban plissé, à porter sur la Riviera comme à la plage de Limbe.',
    details: ['Paille tressée', 'Ruban plissé', 'Tour de tête en centimètres'],
  },
  {
    slug: 'chapeau-paille', name: 'Chapeau de paille à ruban noir', category: 'vetements', collection: 'europe',
    price: 13000, sizes: HATS,
    description: 'Une paille dorée et un ruban noir contrastant, pour protéger du soleil sans renoncer au style.',
    details: ['Paille tressée', 'Ruban noir', 'Tour de tête en centimètres'],
  },

  // Chaussures : créations africaines et usage courant
  {
    slug: 'sandales-cuir-noires', name: 'Sandales artisanales noires', category: 'chaussures', collection: 'afrique',
    price: 8000, sizes: ALL_SHOES,
    description: 'Des sandales en cuir noir à brides et anneau d’orteil, fabriquées de façon artisanale.',
    details: ['Cuir noir', 'Anneau d’orteil', 'Fabrication artisanale'],
  },
  {
    slug: 'sandales-perles', name: 'Mules en cuir perlées', category: 'chaussures', collection: 'afrique',
    price: 11000, sizes: WOMEN_SHOES, isNew: true,
    description: 'Une semelle en cuir surpiqué et une bride entièrement perlée, pour relever une tenue simple.',
    details: ['Cuir', 'Bride perlée à la main', 'Semelle plate'],
  },
  {
    slug: 'sandales-perles-couleur', name: 'Sandales à entrelacs perlés', category: 'chaussures', collection: 'afrique',
    price: 12500, sizes: WOMEN_SHOES,
    description: 'Des entrelacs de perles bleues, orange et jaunes sur une semelle noire : une paire qui ne passe pas inaperçue.',
    details: ['Semelle en cuir', 'Perles de verre', 'Bride arrière'],
  },
  {
    slug: 'sandales-perles-motifs', name: 'Sandales perlées à motifs', category: 'chaussures', collection: 'afrique',
    price: 13500, compareAt: 16000, sizes: WOMEN_SHOES,
    description: 'De larges brides couvertes de perles aux motifs géométriques, finies par une semelle dorée.',
    details: ['Semelle en cuir', 'Perles multicolores', 'Fait main'],
  },
  {
    slug: 'babouches-rouges', name: 'Babouches rouges', category: 'chaussures', collection: 'afrique',
    price: 9000, sizes: ALL_SHOES,
    description: 'Des babouches à bout pointu en cuir souple, venues du Maghreb, à porter à la maison ou sur une tenue traditionnelle.',
    details: ['Cuir souple', 'Bout pointu', 'Se portent talon rabattu'],
  },
  {
    slug: 'babouches-couleurs', name: 'Babouches colorées', category: 'chaussures', collection: 'afrique',
    price: 8500, sizes: ALL_SHOES,
    description: 'Le même modèle souple dans une palette de couleurs vives. Précisez votre couleur préférée au moment de la commande.',
    details: ['Cuir souple', 'Plusieurs couleurs', 'Couleur à préciser sur WhatsApp'],
  },
  {
    slug: 'babouches-perlees', name: 'Babouches brodées de perles', category: 'chaussures', collection: 'afrique',
    price: 12000, sizes: WOMEN_SHOES,
    description: 'Des babouches ornées de perles et de broderies sur le dessus, pour les fêtes et les occasions spéciales.',
    details: ['Dessus brodé', 'Perles', 'Motif variable'],
  },
  {
    slug: 'baskets-blanches', name: 'Baskets blanches à lacets', category: 'chaussures',
    price: 15000, sizes: ALL_SHOES, isNew: true,
    description: 'Une basket basse toute simple, blanche à doublure noire, qui s’accorde avec le jean comme avec le pagne.',
    details: ['Tige souple', 'Doublure noire', 'Semelle en caoutchouc'],
  },
  {
    slug: 'sandales-cuir-marron', name: 'Sandales homme en cuir', category: 'chaussures',
    price: 12000, sizes: MEN_SHOES,
    description: 'Des sandales à larges brides croisées et à scratch, faciles à enfiler et assez solides pour tous les jours.',
    details: ['Cuir marron', 'Fermeture à scratch', 'Semelle épaisse'],
  },
  {
    slug: 'tongs', name: 'Tongs à motifs', category: 'chaussures',
    price: 2500, sizes: ALL_SHOES,
    description: 'Des tongs légères à brides bleues et semelle imprimée, pour la maison et la plage de Kribi.',
    details: ['Semelle en mousse', 'Brides bleues', 'Séchage rapide'],
  },
  {
    slug: 'tongs-bleues', name: 'Tongs bleues', category: 'chaussures',
    price: 2000, sizes: ALL_SHOES,
    description: 'Une paire de tongs simple et résistante, toute bleue, qui sèche en quelques minutes.',
    details: ['Semelle en mousse', 'Légères', 'Séchage rapide'],
  },

  // Chaussures : style européen
  {
    slug: 'richelieus-patines', name: 'Richelieus patinés multicolores', category: 'chaussures', collection: 'europe',
    price: 85000, sizes: MEN_SHOES, isNew: true,
    description: 'Une patine dégradée de bleu, de violet et d’orange, réalisée à la main : la paire qui fait tourner les têtes aux mariages.',
    details: ['Cuir patiné à la main', 'Semelle en cuir', 'Laçage fermé'],
  },
  {
    slug: 'richelieus-bleus', name: 'Richelieus bleu nuit', category: 'chaussures', collection: 'europe',
    price: 69000, sizes: MEN_SHOES,
    description: 'Une paire à bout fleuri perforé, dans un bleu nuit profond qui change agréablement du noir avec un costume.',
    details: ['Cuir pleine fleur', 'Perforations décoratives', 'Semelle en cuir'],
  },
  {
    slug: 'richelieus-bordeaux', name: 'Richelieus bordeaux', category: 'chaussures', collection: 'europe',
    price: 62000, compareAt: 75000, sizes: MEN_SHOES,
    description: 'Le cuir bordeaux poli et le bout rapporté perforé en font une chaussure de ville classique, à entretenir longtemps.',
    details: ['Cuir poli', 'Bout rapporté', 'Semelle en cuir'],
  },
  {
    slug: 'richelieus-bicolores', name: 'Richelieus bicolores', category: 'chaussures', collection: 'europe',
    price: 68000, sizes: MEN_SHOES,
    description: 'Le mariage du blanc et du marron, façon années 1930, pour ceux qui aiment s’habiller avec panache.',
    details: ['Cuir bicolore', 'Perforations décoratives', 'Style années 1930'],
  },
  {
    slug: 'mocassins-glands', name: 'Mocassins à glands', category: 'chaussures', collection: 'europe',
    price: 52000, sizes: MEN_SHOES,
    description: 'Un cuir brun brillant et deux petits glands sur le dessus : un mocassin à l’italienne, à porter avec ou sans chaussettes.',
    details: ['Cuir brillant', 'Glands décoratifs', 'Sans lacets'],
  },
  {
    slug: 'mocassins-creme', name: 'Mocassins crème', category: 'chaussures', collection: 'europe',
    price: 38000, sizes: MEN_SHOES,
    description: 'Une chaussure claire à bout carré, parfaite avec un costume en lin ou un boubou blanc lors d’une cérémonie.',
    details: ['Finition crème', 'Sans lacets', 'Petit talon'],
  },
  {
    slug: 'chaussures-olive', name: 'Chaussures olive à élastiques', category: 'chaussures', collection: 'europe',
    price: 45000, compareAt: 55000, sizes: MEN_SHOES,
    description: 'Un cuir vert olive patiné et des perforations sur le bout, pour une touche originale avec un costume sombre.',
    details: ['Cuir patiné', 'Élastiques latéraux', 'Bout perforé'],
  },
  {
    slug: 'mocassins-noirs', name: 'Mocassins noirs habillés', category: 'chaussures', collection: 'europe',
    price: 22000, compareAt: 28000, sizes: MEN_SHOES,
    description: 'Des mocassins noirs brillants sans lacets, sur semelle confortable, pour le bureau et les cérémonies.',
    details: ['Dessus brillant', 'Sans lacets', 'Semelle crantée'],
  },
  {
    slug: 'mocassins-marron', name: 'Mocassins marron à petit talon', category: 'chaussures', collection: 'europe',
    price: 25000, sizes: WOMEN_SHOES,
    description: 'Des mocassins lustrés avec bride sur le dessus et petit talon, élégants sans être inconfortables.',
    details: ['Finition lustrée', 'Bride sur le dessus', 'Talon de 5 cm'],
  },
  {
    slug: 'escarpins-rouges', name: 'Escarpins rouges vernis', category: 'chaussures', collection: 'europe',
    price: 18000, sizes: WOMEN_SHOES,
    description: 'Des escarpins rouge métallisé à talon fin et bout pointu, pour les soirées et les grandes occasions.',
    details: ['Finition métallisée', 'Talon aiguille', 'Bout pointu'],
  },
  {
    slug: 'escarpins-vintage', name: 'Escarpins rétro bleu nuit', category: 'chaussures', collection: 'europe',
    price: 36000, sizes: WOMEN_SHOES,
    description: 'Un talon galbé et une petite bride décorative sur le dessus : une silhouette années 1950 pleine de charme.',
    details: ['Cuir bleu nuit', 'Talon galbé', 'Style années 1950'],
  },
  {
    slug: 'ballerines-rouges', name: 'Ballerines rouges à rose', category: 'chaussures', collection: 'europe',
    price: 26000, sizes: WOMEN_SHOES, isNew: true,
    description: 'Un rouge verni éclatant et une grande rose sur le dessus : la ballerine qui suffit à faire une tenue.',
    details: ['Finition vernie', 'Rose décorative', 'Petit talon'],
  },
  {
    slug: 'ballerines-pois', name: 'Ballerines bleues à pois', category: 'chaussures', collection: 'europe',
    price: 22000, sizes: WOMEN_SHOES,
    description: 'Une paire légère à bout fin, dans un bleu ciel à pois blancs, facile à porter tous les jours.',
    details: ['Tissu imprimé', 'Bout fin', 'Semelle plate'],
  },
  {
    slug: 'ballerines-noires', name: 'Trotteurs noirs', category: 'chaussures', collection: 'europe',
    price: 24000, compareAt: 29000, sizes: WOMEN_SHOES,
    description: 'Un petit talon carré et un cuir noir lisse : la chaussure confortable des longues journées de travail.',
    details: ['Cuir lisse', 'Talon carré', 'Semelle souple'],
  },
  {
    slug: 'ballerines-tressees', name: 'Ballerines tressées bronze', category: 'chaussures', collection: 'europe',
    price: 27000, sizes: WOMEN_SHOES,
    description: 'Un dessus tressé couleur bronze et une étoile brodée sur le bout, pour une touche habillée sans talon.',
    details: ['Dessus tressé', 'Étoile brodée', 'Semelle plate'],
  },
  {
    slug: 'espadrilles-olive', name: 'Espadrilles kaki', category: 'chaussures', collection: 'europe',
    price: 15000, sizes: ALL_SHOES,
    description: 'La chaussure d’été du Pays basque : une toile légère sur une semelle tressée, confortable dès le premier jour.',
    details: ['Toile de coton', 'Semelle tressée', 'Enfilage facile'],
  },
  {
    slug: 'espadrilles-brodees', name: 'Espadrilles brodées à lacets', category: 'chaussures', collection: 'europe',
    price: 19000, sizes: WOMEN_SHOES,
    description: 'De fines broderies rouges et des rubans à nouer autour de la cheville, pour une allure méditerranéenne.',
    details: ['Toile brodée', 'Rubans à nouer', 'Semelle tressée'],
  },
  {
    slug: 'compenses-ecru', name: 'Compensées en lin écru', category: 'chaussures', collection: 'europe',
    price: 24000, sizes: WOMEN_SHOES,
    description: 'Une compensée légère qui allonge la silhouette tout en restant stable, à porter avec une robe claire.',
    details: ['Lin', 'Talon compensé', 'Finition perforée'],
  },
  {
    slug: 'bottes-cavalieres', name: 'Bottes cavalières noires', category: 'chaussures', collection: 'europe',
    price: 78000, sizes: ALL_SHOES,
    description: 'Une tige haute et droite en cuir noir, héritée de l’équitation, à porter sur un pantalon slim ou une jupe.',
    details: ['Cuir noir', 'Tige haute', 'Style équestre'],
  },
  {
    slug: 'bottes-hautes-noires', name: 'Bottes hautes zippées', category: 'chaussures', collection: 'europe',
    price: 64000, compareAt: 78000, sizes: WOMEN_SHOES,
    description: 'Une botte montante facile à enfiler grâce à son zip, avec une semelle crantée qui accroche bien.',
    details: ['Cuir noir', 'Zip sur le côté', 'Semelle crantée'],
  },
  {
    slug: 'bottines-chelsea', name: 'Bottines chelsea grises', category: 'chaussures', collection: 'europe',
    price: 49000, sizes: MEN_SHOES,
    description: 'Un classique londonien à élastiques latéraux, dans un cuir gris souple qui se patine joliment.',
    details: ['Cuir souple', 'Élastiques latéraux', 'Tirette arrière'],
  },
  {
    slug: 'baskets-cuir-blanches', name: 'Baskets blanches épurées', category: 'chaussures', collection: 'europe',
    price: 32000, sizes: ALL_SHOES,
    description: 'Une ligne minimaliste toute blanche, comme on en voit dans les rues de Paris et de Milan.',
    details: ['Dessus blanc lisse', 'Lacets ton sur ton', 'Semelle plate'],
  },

  // Décoration : créations africaines
  {
    slug: 'grand-panier', name: 'Grand panier tressé', category: 'decoration', collection: 'afrique',
    price: 7500, dimensions: 'Environ 40 cm de diamètre', isNew: true,
    description: 'Un panier en fibres naturelles, avec une grande ouverture : pratique pour le linge, les pagnes ou les jouets.',
    details: ['Fibres végétales', 'Tressé à la main', 'Deux anses'],
  },
  {
    slug: 'corbeilles-murales', name: 'Corbeilles murales, lot de 5', category: 'decoration', collection: 'afrique',
    price: 20000, dimensions: 'De 20 à 40 cm de diamètre',
    description: 'Cinq corbeilles plates aux motifs tressés, à accrocher en composition sur un mur du salon.',
    details: ['Vannerie traditionnelle', 'Lot de 5 tailles', 'Fixations non fournies'],
  },
  {
    slug: 'pot-orange', name: 'Pot décoratif orange', category: 'decoration', collection: 'afrique',
    price: 5000, dimensions: 'Environ 25 cm de haut',
    description: 'Un pot rond à large ouverture, orné d’une tache sombre. Chaque pièce est unique et présente de légères variations.',
    details: ['Pièce artisanale', 'Usage décoratif', 'Fragile : emballage renforcé'],
  },
  {
    slug: 'bols-peints', name: 'Calebasse décorée', category: 'decoration', collection: 'afrique',
    price: 4000, compareAt: 5000, dimensions: 'Environ 20 cm de diamètre',
    description: 'Une calebasse peinte en rouge et blanc, à poser sur une table ou à disposer en groupe sur une étagère.',
    details: ['Calebasse naturelle', 'Décor peint', 'Vendue à l’unité, motif variable'],
  },
  {
    slug: 'bols-calebasse', name: 'Bols en calebasse, lot de 4', category: 'decoration', collection: 'afrique',
    price: 10000, dimensions: 'De 12 à 20 cm de diamètre',
    description: 'Quatre bols emboîtables aux couleurs chaudes, peints à la main, jolis en décoration et pour servir des fruits secs.',
    details: ['Calebasse naturelle', 'Décor peint à la main', 'Ne passe pas au lave-vaisselle'],
  },
  {
    slug: 'calebasse-gravee', name: 'Calebasse gravée à suspendre', category: 'decoration', collection: 'afrique',
    price: 12000, dimensions: 'Environ 30 cm de diamètre',
    description: 'Une grande calebasse aux motifs gravés, avec ses cordes de suspension, pour habiller un coin de la pièce.',
    details: ['Calebasse naturelle', 'Gravure à la main', 'Cordes incluses'],
  },
  {
    slug: 'tabouret-sculpte', name: 'Siège sculpté au lion', category: 'decoration', collection: 'afrique',
    price: 60000, dimensions: 'Environ 45 cm de haut',
    description: 'Un siège traditionnel d’une seule pièce, en bois sombre sculpté d’un lion, aussi beau en assise qu’en objet de décoration.',
    details: ['Bois massif sculpté', 'Pièce unique', 'Livraison à convenir'],
  },
  {
    slug: 'bogolan-bleu', name: 'Tenture bogolan bleue', category: 'decoration', collection: 'afrique',
    price: 28000, dimensions: 'Environ 100 × 150 cm', isNew: true,
    description: 'Une grande tenture aux motifs géométriques bleus et ocre, qui suffit à donner du caractère à un mur.',
    details: ['Coton', 'Motifs géométriques', 'À fixer au mur ou à poser sur un canapé'],
  },
  {
    slug: 'bogolan-ocre', name: 'Tenture bogolan ocre', category: 'decoration', collection: 'afrique',
    price: 26000, compareAt: 32000, dimensions: 'Environ 100 × 150 cm',
    description: 'Le bogolan dans ses couleurs de terre, d’inspiration malienne, chaleureux dans un salon ou une chambre.',
    details: ['Coton', 'Teinture à l’argile', 'Pièce artisanale'],
  },
  {
    slug: 'bogolan-noir', name: 'Tenture bogolan noire et jaune', category: 'decoration', collection: 'afrique',
    price: 30000, dimensions: 'Environ 90 × 160 cm',
    description: 'Des motifs clairs sur fond noir, très graphiques, qui se prêtent aussi à un intérieur contemporain.',
    details: ['Coton', 'Motifs graphiques', 'Pièce artisanale'],
  },
  {
    slug: 'cadres-sculptes', name: 'Cadre en bois sculpté', category: 'decoration', collection: 'afrique',
    price: 14000, dimensions: 'Environ 30 × 40 cm',
    description: 'Un cadre artisanal aux reliefs travaillés et à la peinture patinée. Le modèle varie selon les pièces disponibles.',
    details: ['Bois sculpté', 'Finition patinée', 'Modèle variable'],
  },
  {
    slug: 'girafes-sculptees', name: 'Girafes décoratives, la paire', category: 'decoration', collection: 'afrique',
    price: 45000, dimensions: 'Environ 120 cm de haut',
    description: 'Deux grandes girafes ajourées pour une entrée, une terrasse ou un jardin. Tapis en arrière-plan non inclus.',
    details: ['Grand format', 'Finition artisanale', 'Livraison à convenir'],
  },
  {
    slug: 'djembe', name: 'Djembé décoratif', category: 'decoration', collection: 'afrique',
    price: 35000, dimensions: 'Environ 60 cm de haut',
    description: 'Un djembé en bois tendu de peau et de cordes, aussi agréable à jouer qu’à exposer dans un salon.',
    details: ['Bois massif', 'Peau naturelle', 'Cordes de tension'],
  },
  {
    slug: 'djembes-sculptes', name: 'Djembé gravé', category: 'decoration', collection: 'afrique',
    price: 42000, compareAt: 50000, dimensions: 'Environ 60 cm de haut',
    description: 'Un djembé au fût sombre couvert de gravures. Chaque pièce est différente : le motif varie selon l’arrivage.',
    details: ['Bois gravé', 'Peau naturelle', 'Motif variable'],
  },

  // Décoration : style européen
  {
    slug: 'service-the-fleuri', name: 'Service à thé fleuri et doré', category: 'decoration', collection: 'europe',
    price: 95000, compareAt: 115000, dimensions: 'Théière, sucrier, crémier et tasses', isNew: true,
    description: 'Une porcelaine blanche ornée de scènes fleuries et de filets dorés, digne des plus belles tables européennes.',
    details: ['Porcelaine', 'Filets dorés', 'Lavage à la main'],
  },
  {
    slug: 'service-the-jaune', name: 'Service à thé jaune', category: 'decoration', collection: 'europe',
    price: 72000, dimensions: 'Tasses, soucoupes, pot à lait et sucrier',
    description: 'Un jaune lumineux, une ligne élégante et des filets dorés, pour servir le thé avec un peu de cérémonie.',
    details: ['Porcelaine', 'Filets dorés', 'Lavage à la main'],
  },
  {
    slug: 'tasses-blanches', name: 'Tasses en porcelaine blanche, lot de 6', category: 'decoration', collection: 'europe',
    price: 28000, dimensions: 'Environ 8 cm de diamètre',
    description: 'Six petites tasses blanches à bord fin, simples et élégantes, pour le café ou le thé du matin.',
    details: ['Porcelaine', 'Lot de 6', 'Passe au lave-vaisselle'],
  },
  {
    slug: 'theiere-ornee', name: 'Théière ornée à anse dorée', category: 'decoration', collection: 'europe',
    price: 48000, dimensions: 'Environ 20 cm de haut',
    description: 'Une pièce décorative très travaillée, avec sa grande anse dorée et son plateau assorti, à exposer dans une vitrine.',
    details: ['Céramique', 'Décor doré', 'Plateau inclus'],
  },
  {
    slug: 'cremier-sucrier-vert', name: 'Crémier et sucrier vert céladon', category: 'decoration', collection: 'europe',
    price: 34000, dimensions: 'Environ 10 cm de haut',
    description: 'Un duo aux formes de feuille, d’un vert tendre souligné d’or, au charme ancien.',
    details: ['Porcelaine', 'Liseré doré', 'Lavage à la main'],
  },
  {
    slug: 'vase-bleu-delft', name: 'Vase bleu et blanc, style Delft', category: 'decoration', collection: 'europe',
    price: 52000, dimensions: 'Environ 35 cm de haut',
    description: 'Un long col et une panse ronde, couverts de motifs bleus inspirés de la faïence hollandaise.',
    details: ['Faïence', 'Décor bleu et blanc', 'Usage décoratif'],
  },
  {
    slug: 'potiche-bleue', name: 'Potiche couverte bleue et blanche', category: 'decoration', collection: 'europe',
    price: 68000, compareAt: 82000, dimensions: 'Environ 40 cm de haut',
    description: 'Une grande potiche à couvercle, ornée d’oiseaux et de fleurs, qui trône dans une entrée ou sur une console.',
    details: ['Faïence', 'Couvercle inclus', 'Fragile : emballage renforcé'],
  },
  {
    slug: 'vase-chinoiserie', name: 'Vase à décor de chinoiserie', category: 'decoration', collection: 'europe',
    price: 62000, dimensions: 'Environ 35 cm de haut',
    description: 'Une panse généreuse et des scènes peintes en bleu, dans le goût des faïences européennes du XVIIe siècle.',
    details: ['Faïence', 'Décor peint', 'Usage décoratif'],
  },
  {
    slug: 'vase-mosaique', name: 'Vase en verre mosaïque, style Murano', category: 'decoration', collection: 'europe',
    price: 89000, dimensions: 'Environ 30 cm de haut', isNew: true,
    description: 'Des centaines d’éclats de couleur pris dans le verre et deux anses transparentes : une vraie pièce de collection.',
    details: ['Verre soufflé', 'Effet mosaïque', 'Fragile : emballage renforcé'],
  },
  {
    slug: 'pichet-verre-bleu', name: 'Pichet en verre bleu, style Murano', category: 'decoration', collection: 'europe',
    price: 46000, dimensions: 'Environ 18 cm de haut',
    description: 'Un bleu profond parsemé de petites fleurs de verre, pour une touche vénitienne sur une table ou une étagère.',
    details: ['Verre soufflé', 'Inclusions colorées', 'Usage décoratif'],
  },
  {
    slug: 'vase-verre-rose', name: 'Vase en verre rosé', category: 'decoration', collection: 'europe',
    price: 32000, compareAt: 39000, dimensions: 'Environ 30 cm de haut',
    description: 'Un verre laiteux aux reflets roses, avec un col ondulé, très beau garni de fleurs fraîches.',
    details: ['Verre', 'Col ondulé', 'Fragile : emballage renforcé'],
  },
  {
    slug: 'coucou-chalet', name: 'Horloge à coucou en chalet', category: 'decoration', collection: 'europe',
    price: 78000, dimensions: 'Environ 35 cm de haut',
    description: 'La petite maison en bois inspirée de la Forêt-Noire, avec ses poids en forme de pomme de pin.',
    details: ['Bois', 'Poids en forme de pomme de pin', 'À fixer au mur'],
  },
  {
    slug: 'coucou-sculpte', name: 'Horloge à coucou sculptée', category: 'decoration', collection: 'europe',
    price: 110000, dimensions: 'Environ 50 cm de haut',
    description: 'Des feuilles de chêne et un aigle sculptés en relief : la version la plus spectaculaire de l’horloge à coucou.',
    details: ['Bois sculpté', 'Décor de feuillage', 'À fixer au mur'],
  },
  {
    slug: 'horloge-murale', name: 'Horloge murale ancienne', category: 'decoration', collection: 'europe',
    price: 85000, compareAt: 99000, dimensions: 'Environ 50 cm de haut',
    description: 'Un boîtier de bois foncé et de grands chiffres romains, pour donner un air de maison de campagne européenne.',
    details: ['Bois', 'Chiffres romains', 'À fixer au mur'],
  },
  {
    slug: 'cheval-dala-mini', name: 'Petit cheval suédois rouge', category: 'decoration', collection: 'europe',
    price: 12000, dimensions: 'Environ 10 cm de haut',
    description: 'Le célèbre cheval de Dalécarlie, peint de couleurs vives, symbole de la Suède et jolie idée de cadeau.',
    details: ['Bois peint', 'Petit format', 'Idée cadeau'],
  },
  {
    slug: 'cheval-dala', name: 'Grand cheval suédois peint', category: 'decoration', collection: 'europe',
    price: 32000, dimensions: 'Environ 30 cm de haut',
    description: 'La version grand format du cheval de Dalécarlie, à poser sur une console ou dans une chambre d’enfant.',
    details: ['Bois peint', 'Grand format', 'Décor floral'],
  },
  {
    slug: 'cheval-bois-naturel', name: 'Cheval scandinave en bois clair', category: 'decoration', collection: 'europe',
    price: 26000, dimensions: 'Environ 30 cm de haut',
    description: 'La même silhouette, sans peinture : le veinage du bois suffit, pour un intérieur épuré d’esprit scandinave.',
    details: ['Bois naturel', 'Veinage apparent', 'Finition brute'],
  },
  {
    slug: 'casseroles-cuivre', name: 'Casseroles en cuivre, le lot', category: 'decoration', collection: 'europe',
    price: 98000, dimensions: 'Plusieurs tailles, bouilloire incluse',
    description: 'Le charme d’une cuisine française d’autrefois : des casseroles et une bouilloire en cuivre, à suspendre ou à utiliser.',
    details: ['Cuivre', 'Plusieurs tailles', 'S’entretient au citron et au sel'],
  },
  {
    slug: 'sabots-hollandais', name: 'Sabots hollandais décoratifs', category: 'decoration', collection: 'europe',
    price: 18000, dimensions: 'Environ 28 cm de long',
    description: 'Des sabots en bois peints, souvenir typique des Pays-Bas, à accrocher au mur ou à garnir de fleurs séchées.',
    details: ['Bois peint', 'Usage décoratif', 'Couleurs variables'],
  },

  // Décoration : autres origines
  {
    slug: 'tapis-persan', name: 'Tapis d’Orient à médaillon', category: 'decoration',
    price: 125000, dimensions: 'Environ 150 × 200 cm',
    description: 'Un riche motif central et de fines bordures, dans des tons de bleu et d’or, pour réchauffer un grand salon.',
    details: ['Laine', 'Motif à médaillon', 'Livraison à convenir'],
  },
  {
    slug: 'tapis-rosace', name: 'Tapis à rosace', category: 'decoration',
    price: 110000, compareAt: 135000, dimensions: 'Environ 150 × 200 cm',
    description: 'Une grande rosace centrale qui rayonne dans toute la pièce, sur un fond clair très lumineux.',
    details: ['Laine', 'Rosace centrale', 'Livraison à convenir'],
  },
]

// Alterne les rayons et les collections pour que la première page montre toute la boutique.
function interleave(items) {
  const groups = new Map()
  for (const item of items) {
    const key = `${item.category}/${item.collection ?? ''}`
    groups.set(key, [...(groups.get(key) ?? []), item])
  }
  const queues = [...groups.values()]
  const longest = Math.max(...queues.map((queue) => queue.length))
  return Array.from({ length: longest }, (_, i) => queues.flatMap((queue) => (i < queue.length ? [queue[i]] : []))).flat()
}

export const products = interleave(catalog)

export const findProduct = (slug) => products.find((p) => p.slug === slug)
export const categoryLabel = (id) => categories.find((cat) => cat.id === id)?.label ?? ''
export const collectionLabel = (id) => collections.find((col) => col.id === id)?.label ?? ''
