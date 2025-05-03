import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
            Suivre l'aventure ODA
          </h2>
          
          <p className="text-lg mb-8 text-white/90">
            Tu veux faire partie de la communauté ODA ?<br/>
            Recevoir nos histoires, nos recettes et nos offres en avant-première ?<br/>
            Découvrir les coulisses de notre lancement ?
          </p>
          
          <form className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Je m'inscris
              </button>
            </div>
          </form>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
              Facebook
            </a>
          </div>
          
          <p className="mt-12 text-lg italic text-white/80">
            ODA, c'est un retour aux sources qui regarde vers l'avenir.<br/>
            C'est l'art de conjuguer le feu de bois au surgelé, la mémoire à l'innovation, le Gabon au monde.
          </p>
          
          <p className="mt-6 text-xl font-serif">
            Bienvenue chez toi.<br/>
            Bienvenue chez ODA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;