import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Training Equipment',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
    description: 'Premium gear for maximum performance',
  },
  {
    title: 'Recovery Tools',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    description: 'Accelerate your recovery journey',
  },
  {
    title: 'Nutrition',
    image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
    description: 'Fuel your body with premium supplements',
  },
  {
    title: 'Activewear',
    image: 'https://images.pexels.com/photos/6550839/pexels-photo-6550839.jpeg',
    description: 'Performance gear for every workout',
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 rounded-l-[3rem]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Curated Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of premium fitness essentials, carefully selected for quality and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
              
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-[400px] object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{category.title}</h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{category.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-teal-400 font-medium group/link"
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;