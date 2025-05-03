import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LogoColorOnBlack, LogoColorOnWhite } from '../assets';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Produits', path: '/produits' },
    { name: 'Notre Histoire', path: '/notre-histoire' },
    { name: 'Engagements', path: '/engagements' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-black/95 py-4 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="hidden md:block">
            <img 
              src={LogoColorOnBlack}
              alt="ODA - Gabonais, Surgelés & Savoureux" 
              className="h-20 w-auto transition-all duration-300" 
            />
          </Link>

          <Link to="/" className="md:hidden">
            <img 
              src={LogoColorOnWhite}
              alt="ODA - Gabonais, Surgelés & Savoureux" 
              className="h-16 w-auto transition-all duration-300" 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-white hover:text-red-600 font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-red-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`text-white hover:text-red-600 py-2 font-medium tracking-wide transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-red-600' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;