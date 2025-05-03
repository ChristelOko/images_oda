import React from 'react';

const Promise: React.FC = () => {
  const cards = [
    {
      title: "Recettes Authentiques",
      description: "Transmises de génération en génération, nos recettes préservent l'essence de la cuisine gabonaise.",
      image: "/images/recettes-authentiques.png"
    },
    {
      title: "Ingrédients Locaux",
      description: "Sélectionnés avec soin auprès de producteurs locaux pour garantir qualité et authenticité.",
      image: "/images/ingredients-locaux.png"
    },
    {
      title: "Méthode Moderne",
      description: "Une technologie de surgélation innovante qui préserve les saveurs authentiques.",
      image: "/images/methode-moderne.png"
    }
  ];

  return (
    <section className="py-20 bg-ivory relative">
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif">
            Un goût de chez nous, sans compromis
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => (
              <div key={index} className="group relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"/>
                </div>
                <div className="relative h-full p-8 flex flex-col items-center justify-center text-center text-white">
                  <h3 className="text-2xl font-bold mb-4 font-serif">{card.title}</h3>
                  <p className="text-white/90">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl italic text-gray-700 font-serif leading-relaxed">
              On ne cuisine pas seulement pour nourrir.<br/>
              On cuisine pour relier, pour raconter, pour honorer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;