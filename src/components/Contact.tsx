import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="bg-red-600 p-3 rounded-full text-white flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-Nous</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Pour toute question concernant nos produits, n'hésitez pas à nous contacter. Nous sommes à votre disposition pour vous aider.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                Envoyer
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <ContactInfo 
              icon={<MapPin size={24} />} 
              title="Adresse" 
              content={
                <div>
                  <p>123 Avenue des Saveurs</p>
                  <p>Libreville, Gabon</p>
                </div>
              } 
            />
            
            <ContactInfo 
              icon={<Phone size={24} />} 
              title="Téléphone" 
              content={
                <p>+241 74 XX XX XX</p>
              } 
            />
            
            <ContactInfo 
              icon={<Mail size={24} />} 
              title="Email" 
              content={
                <p>contact@oda-gabon.com</p>
              } 
            />
            
            <ContactInfo 
              icon={<Clock size={24} />} 
              title="Horaires" 
              content={
                <div>
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 9h00 - 12h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              } 
            />
            
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 mt-8">
              <h3 className="font-bold text-lg mb-3">Commandes et Livraisons</h3>
              <p className="text-gray-600 mb-4">
                Pour commander nos produits, contactez-nous par téléphone ou email. Nous livrons dans toute la ville de Libreville et ses environs.
              </p>
              <a 
                href="tel:+24174XXXX" 
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
              >
                <Phone size={16} className="mr-2" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;