import React, { useState } from 'react';
import { Shield, Leaf, Heart, Users } from 'lucide-react';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  image: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon, title, description, items, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-[280px] mx-auto perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="w-full h-full"
        style={{ 
          transform: `rotateY(${isFlipped ? '180deg' : '0'})`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
      >
        {/* Front */}
        <div className={`absolute inset-0 rounded-lg overflow-hidden shadow-lg backface-hidden ${isFlipped ? 'invisible' : ''}`}>
          {/* Image Container */}
          <div className="relative h-full">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with Content */}
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col items-center justify-end text-white">
              <div className="bg-red-600 p-3 rounded-full mb-3">
                {icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-center">{title}</h3>
              <p className="text-white/90 italic font-serif text-center text-sm mb-4">{description}</p>
              <div className="text-xs text-white/70">
                Survolez pour plus de détails
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className={`absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg backface-hidden ${!isFlipped ? 'invisible' : ''}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-lg font-bold font-serif mb-4 text-center">{title}</h3>
          <ul className="space-y-4 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const EngagementsPage: React.FC = () => {
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
      <div className="relative pt-56 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              🤝 Nos Engagements
            </h1>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-xl text-gray-700 mb-4 font-serif italic">
              ✨ "Chez ODA, chaque plat est une promesse."
            </p>
            <p className="max-w-3xl mx-auto text-gray-700">
              Une promesse faite à ceux qui mangent.<br/>
              Mais aussi à ceux qui cultivent, préparent, emballent, transmettent.
            </p>
          </div>

          {/* Founder Quote with Image */}
          <div className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-black/90 backdrop-blur-sm text-white p-8 rounded-lg">
              <p className="text-lg mb-4">
                Pour Lauriane, fondatrice d'ODA et mère de deux enfants, la qualité n'est pas une option. C'est un devoir.
              </p>
              <p className="text-xl italic font-serif">
                "Je ne mettrais jamais sur le marché ce que je ne donnerais pas à mes propres enfants."
              </p>
            </div>
            <div className="relative h-[400px] mx-auto rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/mon-histoire.png"
                alt="Lauriane, fondatrice d'ODA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Engagements Grid with Flip Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FlipCard
              icon={<Shield size={24} />}
              title="Qualité, hygiène et sécurité"
              description="Surgelé ne veut pas dire industriel. Chez ODA, c'est l'artisanal… sécurisé."
              image="/images/qualite.jpg"
              items={[
                'Respect strict des normes HACCP',
                'Surgélation douce préservant nutriments',
                'Traçabilité complète des ingrédients',
                'Production en laboratoire certifié'
              ]}
            />

            <FlipCard
              icon={<Leaf size={24} />}
              title="Produits locaux & circuits courts"
              description="Un plat ODA, c'est un geste pour notre terroir."
              image="/images/local.jpg"
              items={[
                'Poulet fermier local certifié',
                'Fruits de producteurs gabonais',
                'Impact économique direct',
                'Emballages éco-responsables'
              ]}
            />

            <FlipCard
              icon={<Heart size={24} />}
              title="Valeurs & Culture"
              description="La tradition dans votre assiette."
              image="/images/culture.jpg"
              items={[
                'Recettes authentiques préservées',
                'Transmission intergénérationnelle',
                'Éducation alimentaire locale',
                'Valorisation du patrimoine'
              ]}
            />

            <FlipCard
              icon={<Users size={24} />}
              title="Engagement familial"
              description="La qualité accessible à tous."
              image="/images/famille.jpg"
              items={[
                'Portions familiales adaptées',
                'Prix justes et accessibles',
                'Service client personnalisé',
                'Conseils nutritionnels'
              ]}
            />
          </div>

          {/* Final Promise */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 font-serif">✅ Notre promesse est simple</h2>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Authenticité', 'Sécurité', 'Transmission', 'Responsabilité'].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mx-auto mb-2"></div>
                    <p className="font-serif">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-gray-700 font-serif italic">
                <p>C'est notre manière de cuisiner.</p>
                <p>C'est notre manière de vivre.</p>
                <p>C'est ODA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementsPage;