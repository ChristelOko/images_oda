import React from 'react';
import { Flame, Heart, Leaf } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/images/mosaique-oda-fond-clair.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Notre Vision</h2>
            
            <div className="mb-12">
              <p className="text-2xl mb-4 text-white/90 font-serif italic">
                En langue myènè, "ODA" signifie vieille plantation.
              </p>
              <p className="text-xl text-white/80 font-serif">
                Un lieu d'origine. Un point de départ. Un héritage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Transmettre */}
            <div className="relative group h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img 
                  src="/images/vision-oda-transmettre.png"
                  alt="Transmettre - Préserver notre héritage culinaire"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"/>
              </div>
              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <Flame className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Transmettre</h3>
                <p className="text-lg text-white/80">ce qui se perd mérite d'être préservé</p>
              </div>
            </div>

            {/* Partager */}
            <div className="relative group h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img 
                  src="/images/vision-oda-partager.png"
                  alt="Partager - La cuisine comme lien social"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"/>
              </div>
              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <Heart className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Partager</h3>
                <p className="text-lg text-white/80">ce qui nous lie se partage autour d'un plat</p>
              </div>
            </div>

            {/* Adapter */}
            <div className="relative group h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img 
                  src="/images/vision-oda-adapter.png"
                  alt="Adapter - Innovation dans la tradition"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"/>
              </div>
              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <Leaf className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Adapter</h3>
                <p className="text-lg text-white/80">ce qui nous nourrit s'adapte sans s'oublier</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl italic text-white/90 font-serif leading-relaxed">
              Parce que dans un monde qui va vite,<br/>
              nous croyons qu'il faut savoir ralentir pour se souvenir,<br/>
              et innover pour mieux transmettre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;