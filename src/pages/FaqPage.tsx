import React from 'react';

const FaqPage: React.FC = () => {
  return (
    <section className="pt-56 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Questions Fréquentes</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Retrouvez les réponses aux questions les plus fréquentes sur nos produits et services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Comment conserver nos produits ?",
              answer: "Nos produits doivent être conservés au congélateur à -18°C. Une fois décongelés, ils doivent être consommés dans les 24 heures."
            },
            {
              question: "Comment réchauffer nos plats ?",
              answer: "Nos plats peuvent être réchauffés au micro-ondes ou à la poêle. Suivez les instructions sur l'emballage pour des résultats optimaux."
            },
            {
              question: "Quelle est la zone de livraison ?",
              answer: "Nous livrons actuellement dans toute la ville de Libreville et ses environs. Contactez-nous pour plus de détails sur votre zone."
            },
            {
              question: "Les produits contiennent-ils des conservateurs ?",
              answer: "Non, nos produits ne contiennent aucun conservateur. La surgélation naturelle préserve toutes les qualités nutritionnelles."
            },
            {
              question: "Quel est le délai de livraison ?",
              answer: "Les livraisons sont effectuées sous 24 à 48 heures après votre commande, du lundi au samedi."
            },
            {
              question: "Comment sont emballés les produits ?",
              answer: "Nos produits sont conditionnés dans des emballages écologiques qui préservent leur qualité pendant le transport."
            }
          ].map((faq, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
              <div className="mt-4 border-b border-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;