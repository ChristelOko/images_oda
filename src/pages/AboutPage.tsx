import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-ivory relative">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url('/images/mosaique-oda-fond-clair.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="pt-56 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">🪶 Notre Histoire – Là où tout commence</h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-serif italic">
                🌿 Il y a des projets qui naissent d'un besoin. ODA est né d'un amour.
              </p>
              <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Lauriane's Story */}
              <div className="mb-16">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  C'est l'histoire de Lauriane, une femme enracinée.
                  Pas seulement dans une terre. Mais dans une culture, dans des gestes anciens, dans des odeurs de cuisine qu'on n'oublie jamais.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 font-serif">Une enfance aux parfums rouges et fumés</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Lauriane a grandi au rythme des marchés du samedi, des rires sous les manguiers, des marmites qui mijotent pendant des heures.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Elle se souvient du feu de bois, du son des pilons dans les mortiers, du goût profond du Nyembwè…
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Mais elle se souvient aussi du regard de sa mère, intransigeante sur la qualité, soucieuse de transmettre le bon, le vrai, le sain.
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/images/notre-promesse.png"
                      alt="Cuisine traditionnelle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-16">
                  <h2 className="text-2xl font-bold mb-6 font-serif">Un double amour : nourrir et faire du bien</h2>
                  <p className="text-gray-700 mb-6">
                    Quand elle a commencé à cuisiner pour les siens, Lauriane n'a jamais triché :
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Des produits frais, locaux, choisis avec soin
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Des recettes anciennes, respectées à la lettre
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Une volonté inébranlable : manger doit faire du bien, au corps, au cœur, et à la culture
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Mais très vite, elle s'est heurtée aux réalités modernes : le temps, la vitesse, les contraintes alimentaires, les exils urbains...
                  </p>
                </div>

                <div className="text-center mb-16">
                  <p className="text-2xl font-serif italic text-gray-800">
                    "Et si on congelait l'amour ?"
                  </p>
                </div>

                <div className="bg-black/90 backdrop-blur-sm text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-bold mb-8 font-serif">🔥 Ainsi est née ODA</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "ODA", ce mot myènè qui signifie "vieille plantation", n'a pas été choisi par hasard.
                    Il dit tout :
                  </p>
                  <ul className="space-y-4 mb-8 text-white/90">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      La terre nourricière
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      L'héritage rural
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Le respect des saisons, des cultures, du temps qu'il faut
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mission Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 font-serif text-center">✨ Authenticité & Modernité – Une même recette</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4 font-serif">Avec ODA, Lauriane a voulu réconcilier deux mondes :</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">👉🏾</span>
                        Celui des anciens, des plats partagés, des recettes chuchotées…
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">👉🏾</span>
                        Et celui des nouveaux, des vies rapides, des besoins pratiques, des choix sains et conscients
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4 font-serif">Chez ODA, tout est pensé comme un équilibre :</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Le goût intact des plats traditionnels, cuisinés avec respect
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Une technologie moderne de surgélation douce, qui garde les nutriments, les textures, l'âme
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Une charte graphique contemporaine, mais ancrée dans les symboles du pagne Okorwè
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        Des histoires racontées dans chaque emballage, pour que la mémoire se transmette aussi par les mots
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Section */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-8 font-serif">🧡 Ce n'est pas juste une marque. C'est une mission.</h2>
                <div className="prose prose-lg mx-auto text-gray-700">
                  <p className="mb-4">
                    Pour que ceux qui ont quitté leur village y retrouvent un goût.
                  </p>
                  <p className="mb-4">
                    Pour que les enfants connaissent autre chose que les chips et les nuggets.
                  </p>
                  <p className="mb-4">
                    Pour que le Gabon culinaire respire, voyage et rayonne.
                  </p>
                  <p className="text-xl font-serif italic">
                    Et surtout, pour que manger reste un acte d'amour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;