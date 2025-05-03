import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { LogoWhiteOnBlack } from '../assets';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <img 
              src={LogoWhiteOnBlack}
              alt="ODA - Gabonais, Surgelés & Savoureux" 
              className="h-24 w-auto mb-6" 
            />
            <p className="text-white/90 mb-6 max-w-md">
              ODA vous propose des plats traditionnels gabonais surgelés, préparés avec passion et authenticité pour préserver toutes leurs saveurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              <span className="relative z-10">Liens Rapides</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 z-0"></span>
            </h3>
            <ul className="space-y-3">
              {['Accueil', 'Produits', 'À Propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/90 hover:text-white transition-colors duration-200 hover:pl-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-600 z-0"></span>
            </h3>
            <ul className="space-y-3 text-white/90">
              <li>123 Avenue des Saveurs, Libreville</li>
              <li>+241 74 XX XX XX</li>
              <li>contact@oda-gabon.com</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ODA. Tous droits réservés.
          </p>
          <p className="text-white/80 text-sm">
            Site conçu et développé par <a href="#" className="text-red-600 hover:text-white">OKO</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;