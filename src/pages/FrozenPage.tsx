import React from 'react';

const FrozenPage: React.FC = () => {
  return (
    <section className="pt-56 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Le Surgelé Autrement</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Découvrez comment nous réinventons la conservation des plats traditionnels gabonais grâce à une technologie de surgélation innovante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg"
              alt="Processus de surgélation" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Pourquoi le surgelé ?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Préservation des saveurs</h3>
                <p className="text-gray-600">
                  La surgélation rapide permet de préserver les qualités nutritionnelles et gustatives des aliments, garantissant une expérience authentique à chaque dégustation.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Praticité au quotidien</h3>
                <p className="text-gray-600">
                  Nos plats surgelés vous permettent de savourer une cuisine traditionnelle de qualité en quelques minutes, sans compromis sur le goût.
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Réduction du gaspillage</h3>
                <p className="text-gray-600">
                  La surgélation permet de conserver les aliments plus longtemps tout en maintenant leur qualité, contribuant ainsi à la réduction du gaspillage alimentaire.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre processus de surgélation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sélection des ingrédients</h3>
              <p className="text-gray-600">
                Nous choisissons méticuleusement des ingrédients frais et de qualité pour nos recettes traditionnelles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Préparation traditionnelle</h3>
              <p className="text-gray-600">
                Nos chefs préparent chaque plat selon les recettes ancestrales gabonaises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Surgélation rapide</h3>
              <p className="text-gray-600">
                Une technologie de pointe pour préserver toutes les saveurs et la qualité nutritionnelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrozenPage;