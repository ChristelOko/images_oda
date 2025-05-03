import React, { useState } from 'react';
import { products } from '../data/products';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'plat' | 'smoothie'>('plat');
  const [isHovered, setIsHovered] = useState<string | null>(null);
  
  const filteredProducts = products.filter(product => product.type === activeTab);
  const mainProduct = filteredProducts[0];

  return (
    <section id="produits" className="py-20 bg-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Une expérience culinaire authentique, prête en quelques minutes</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Nos produits sont soigneusement préparés avec des ingrédients de qualité, en respectant les recettes traditionnelles du Gabon. Grâce à notre technologie de surgélation, nous préservons la saveur, la texture et la richesse nutritionnelle de chaque plat.
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
              onClick={() => setActiveTab('smoothie')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'smoothie'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Smoothies
            </button>
          </div>
        </div>

        {/* Main Dish Section */}
        {activeTab === 'plat' && mainProduct && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 font-serif">🥘 Notre Plat Signature</h3>
            <div 
              className="group relative h-[600px] w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="absolute inset-0">
                <img 
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black/70 p-8 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-white">
                    Plat Signature
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{mainProduct.name}</h3>
                <p className="text-white/90 mb-6 whitespace-pre-line">
                  {mainProduct.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {mainProduct.features?.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/80 text-sm">Prix</span>
                    <p className="text-2xl font-bold text-white">{mainProduct.price.toLocaleString()} FCFA</p>
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
        )}

        {/* Smoothies Section */}
        {activeTab === 'smoothie' && (
          <>
            <h3 className="text-3xl font-bold text-center mb-8 font-serif">🍹 Nos Smoothies Tropicaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((smoothie, index) => (
                <div 
                  key={smoothie.id}
                  className="group relative h-[600px] w-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onMouseEnter={() => setIsHovered(smoothie.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <img 
                      src={smoothie.image}
                      alt={smoothie.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered === smoothie.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/70 p-6 flex flex-col justify-end transform transition-transform duration-500 ${
                      isHovered === smoothie.id ? 'translate-y-0' : 'translate-y-[70%]'
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      {smoothie.name} <span>{smoothie.emoji}</span>
                    </h3>
                    
                    <p className="text-white/90 italic mb-4 font-serif">
                      "{smoothie.quote}"
                    </p>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {smoothie.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{smoothie.price.toLocaleString()} FCFA</span>
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

export default Products;