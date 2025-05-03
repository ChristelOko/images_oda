import React from 'react';

const About: React.FC = () => {
  return (
    <section id="à-propos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            
            <p className="mb-6 text-white/80 leading-relaxed">
              ODA est né d'une passion pour la cuisine gabonaise et d'une volonté de la faire découvrir au plus grand nombre. Notre mission est de préserver l'authenticité des recettes traditionnelles tout en les rendant accessibles grâce à des produits surgelés de haute qualité.
            </p>
            
            <p className="mb-8 text-white/80 leading-relaxed">
              Chaque plat est préparé par nos chefs expérimentés, selon des recettes transmises de génération en génération, avec des ingrédients soigneusement sélectionnés pour leur qualité et leur goût authentique.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-bold text-xl mb-2">Notre Mission</h3>
                <p className="text-white/80">Partager la richesse culinaire du Gabon à travers des produits surgelés de qualité.</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-bold text-xl mb-2">Notre Vision</h3>
                <p className="text-white/80">Devenir la référence des saveurs africaines authentiques dans le monde entier.</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Nous Contacter
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5852325/pexels-photo-5852325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cuisine traditionnelle gabonaise" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{maxHeight: '500px'}}
              />
              
              <div className="absolute -bottom-12 -left-12 hidden lg:block">
                <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-lg font-serif italic">
                    "Notre objectif est de vous faire voyager au Gabon à travers nos saveurs authentiques."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;