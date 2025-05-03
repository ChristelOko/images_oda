interface Product {
  id: string;
  name: string;
  type: 'plat' | 'smoothie';
  emoji: string;
  quote: string;
  description: string;
  price: number;
  image: string;
  composition?: string[];
  features?: string[];
}

export const products: Product[] = [
  {
    id: 'nyembwe',
    name: 'Nyembwè au poulet fumé',
    type: 'plat',
    emoji: '🥘',
    quote: 'Le Nyembwè, c\'est une déclaration. Pas à la mode. À la mémoire.',
    description: `Ici, on ne triche pas.

On commence par la noix de palme. Pas n'importe laquelle : celle qu'on va chercher au fond du verger, celle qui a mûri dans le silence chaud des terres gabonaises.

On la cuit doucement, on l'écrase entre les doigts comme on presse un souvenir. Puis on récupère sa pulpe : épaisse, rouge, onctueuse, gorgée d'arômes.

Et là, le feu. Le vrai feu de bois. Celui qui laisse sa marque sur la peau du poulet.

Le poulet de ferme, élevé en liberté, nourri au maïs, à l'eau claire, au soleil. On ne l'achète pas, on le connaît. Il a un goût. Une vie. Et une âme.

On le fume lentement, sur place, avec les écorces qu'utilisait déjà la grand-mère. Juste assez pour que la chair prenne le parfum du bois. Pas plus. Pas moins.

Puis tout se rejoint dans la marmite.
La pulpe, le feu, le fumé, et ce silence sacré qui précède le premier frémissement.

Le Nyembwè d'ODA, ce n'est pas un plat.
C'est un rite. Une offrande. Un baiser ancestral.`,
    price: 4800,
    image: '/images/section5-nyemwe.png',
    composition: [
      'Pulpe de noix de palme fraîche',
      'Poulet de ferme fumé maison',
      'Oignon',
      'Ail',
      'Piment',
      'Sel',
      'Huile de palme',
      'Patience'
    ],
    features: [
      'Texture tendre, saveurs authentiques',
      'Prêt à réchauffer en quelques minutes',
      'Recette traditionnelle authentique'
    ]
  },
  {
    id: 'mangue-passion',
    name: 'Mangue & Passion',
    type: 'smoothie',
    emoji: '☀️',
    quote: 'Ce smoothie est une étreinte. Douce, dorée, un peu sauvage.',
    description: 'La mangue vient du Sud. Elle est charnue, parfumée, récoltée à pleine maturité, quand la peau commence à tacher de sucre. Le fruit de la passion, lui, est plus nerveux. Il pique, il réveille. Ensemble, ils créent une tension parfaite : la tendresse de l\'un, le feu de l\'autre. À boire les yeux fermés. Le cœur ouvert.',
    price: 3500,
    image: '/images/mangue-passion.png'
  },
  {
    id: 'ananas-coco',
    name: 'Ananas & Coco',
    type: 'smoothie',
    emoji: '🌴',
    quote: 'Le souvenir d\'un marché du samedi. Le goût d\'un après-midi qui ne veut pas finir.',
    description: 'L\'ananas est juteux, tranchant, acide comme un éclat de rire. La noix de coco est douce, crémeuse, elle apaise. Quand ils se mélangent, on entend presque les pas dans le sable, les voix sous les arbres. Ce smoothie est un voyage. Pas en avion. En émotion.',
    price: 3500,
    image: '/images/ananas-coco.png'
  },
  {
    id: 'papaye-gingembre',
    name: 'Papaye & Gingembre',
    type: 'smoothie',
    emoji: '🔥',
    quote: 'Il y a des matins où le monde a besoin de toi. Ce smoothie aussi.',
    description: 'La papaye est lente, ronde, presque méditative. Mais le gingembre, lui, est une explosion maîtrisée. Il entre comme un tambour dans une cérémonie. Il réveille tout. Ce smoothie, c\'est une dose de vie. Un concentré d\'élan. De vitalité. De puissance tranquille. Pour celles et ceux qui ne veulent pas juste boire. Mais ressentir.',
    price: 3500,
    image: '/images/papaye-gingembre.png'
  }
];