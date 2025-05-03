import React, { useState } from 'react';

const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plat');
  
  return (
    <section className="pt-56 pb-20 bg-ivory relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/mosaique-oda-fond-clair.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">🥘 Plats Cuisinés – Les racines mijotées</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 italic text-xl font-serif mb-4">
            🧡 "Le Nyembwè, c'est une déclaration. Pas à la mode. À la mémoire."
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab('plat')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'plat'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Plat Signature
            </button>
            <button
              onClick={() => setActiveTab('smoothies')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'smoothies'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Smoothies
            </button>
          </div>
        </div>

        {/* Main Dish Section */}
        {activeTab === 'plat' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[500px] lg:h-full">
                  <img 
                    src="/images/section5-nyemwe.png"
                    alt="Nyembwè au Poulet fumé" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 font-serif">Nyembwè au poulet fumé</h2>
                    <div className="prose prose-lg">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Ici, on ne triche pas.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        On commence par la noix de palme. Pas n'importe laquelle : celle qu'on va chercher au fond du verger, celle qui a mûri dans le silence chaud des terres gabonaises.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        On la cuit doucement, on l'écrase entre les doigts comme on presse un souvenir. Puis on récupère sa pulpe : épaisse, rouge, onctueuse, gorgée d'arômes.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Et là, le feu. Le vrai feu de bois. Celui qui laisse sa marque sur la peau du poulet.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Le poulet de ferme, élevé en liberté, nourri au maïs, à l'eau claire, au soleil. On ne l'achète pas, on le connaît. Il a un goût. Une vie. Et une âme.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        On le fume lentement, sur place, avec les écorces qu'utilisait déjà la grand-mère. Juste assez pour que la chair prenne le parfum du bois. Pas plus. Pas moins.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Puis tout se rejoint dans la marmite.
                        La pulpe, le feu, le fumé, et ce silence sacré qui précède le premier frémissement.
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed font-serif italic">
                        Le Nyembwè d'ODA, ce n'est pas un plat.
                        C'est un rite. Une offrande. Un baiser ancestral.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-8">
                    <h3 className="text-xl font-bold mb-3 font-serif">Composition</h3>
                    <p className="text-gray-600">
                      📝 Pulpe de noix de palme fraîche, poulet de ferme fumé maison, oignon, ail, piment, sel, huile de palme, patience.
                    </p>
                    <p className="text-gray-600 mt-2 italic">
                      ❄️ Surgelé artisanalement. Prêt à réchauffer. Prêt à réveiller.
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 text-sm">Prix</span>
                      <p className="text-2xl font-bold text-gray-900">4 800 FCFA</p>
                    </div>
                    <button 
                      className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
                    >
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Smoothies Section */}
        {activeTab === 'smoothies' && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">🍹 Smoothies Tropicaux – Le fruit de nos terres</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700 italic text-xl font-serif">
                Dans un souffle frais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mangue & Passion",
                  emoji: "☀️",
                  quote: "Ce smoothie est une étreinte. Douce, dorée, un peu sauvage.",
                  description: "La mangue vient du Sud. Elle est charnue, parfumée, récoltée à pleine maturité, quand la peau commence à tacher de sucre. Le fruit de la passion, lui, est plus nerveux. Il pique, il réveille. Ensemble, ils créent une tension parfaite : la tendresse de l'un, le feu de l'autre. À boire les yeux fermés. Le cœur ouvert.",
                  price: "3 500 FCFA",
                  image: "/images/mangue-passion.png"
                },
                {
                  name: "Ananas & Coco",
                  emoji: "🌴",
                  quote: "Le souvenir d'un marché du samedi. Le goût d'un après-midi qui ne veut pas finir.",
                  description: "L'ananas est juteux, tranchant, acide comme un éclat de rire. La noix de coco est douce, crémeuse, elle apaise. Quand ils se mélangent, on entend presque les pas dans le sable, les voix sous les arbres. Ce smoothie est un voyage. Pas en avion. En émotion.",
                  price: "3 500 FCFA",
                  image: "/images/ananas-coco.png"
                },
                {
                  name: "Papaye & Gingembre",
                  emoji: "🔥",
                  quote: "Il y a des matins où le monde a besoin de toi. Ce smoothie aussi.",
                  description: "La papaye est lente, ronde, presque méditative. Mais le gingembre, lui, est une explosion maîtrisée. Il entre comme un tambour dans une cérémonie. Il réveille tout. Ce smoothie, c'est une dose de vie. Un concentré d'élan. De vitalité. De puissance tranquille. Pour celles et ceux qui ne veulent pas juste boire. Mais ressentir.",
                  price: "3 500 FCFA",
                  image: "/images/papaye-gingembre.png"
                }
              ].map((smoothie, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-xl"
                >
                  <div className="h-[300px] relative overflow-hidden">
                    <img 
                      src={smoothie.image}
                      alt={smoothie.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 font-serif flex items-center gap-2">
                      {smoothie.name} <span>{smoothie.emoji}</span>
                    </h3>
                    
                    <p className="text-gray-700 italic mb-4 font-serif">
                      "{smoothie.quote}"
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {smoothie.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{smoothie.price}</span>
                      <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
                        Commander
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;