import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <section className="pt-56 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Histoires</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Découvrez les histoires qui accompagnent nos plats, nos traditions culinaires et notre culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "L'histoire du Poulet Nyembwè",
              excerpt: "Découvrez l'origine de ce plat emblématique de la culture Galoa et son importance dans la gastronomie gabonaise.",
              image: "https://images.pexels.com/photos/5718029/pexels-photo-5718029.jpeg",
              date: "15 Mars 2024"
            },
            {
              title: "Les fruits tropicaux du Gabon",
              excerpt: "Un voyage gustatif à travers les saveurs exotiques qui composent nos smoothies.",
              image: "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg",
              date: "10 Mars 2024"
            },
            {
              title: "La tradition culinaire gabonaise",
              excerpt: "Plongez dans l'histoire riche et variée de notre patrimoine gastronomique.",
              image: "https://images.pexels.com/photos/5852325/pexels-photo-5852325.jpeg",
              date: "5 Mars 2024"
            }
          ].map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Lire la suite
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;