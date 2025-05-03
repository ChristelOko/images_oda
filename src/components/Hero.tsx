import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative min-h-screen">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.pexels.com/photos/5852325/pexels-photo-5852325.jpeg"
          alt="Cuisine traditionnelle gabonaise" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2">
        <span className="text-red-600 font-serif italic mb-4">Cuisiner le passé pour nourrir demain</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight font-serif">
          Bienvenue chez ODA
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed font-serif italic">
          Il y a, dans chaque plat ODA, l'âme d'un village, le rire d'une grand-mère autour d'un feu
          l'odeur du manioc qui mijote lentement, et cette main invisible qui sait quand c'est prêt.
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
          Plats gabonais surgelés. Ancrés dans la terre. Inspirés par les ancêtres. Pensés pour aujourd'hui.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#produits" 
            className="px-8 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Découvrir nos plats
          </a>
          <a 
            href="#newsletter" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Suivre l'aventure ODA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;