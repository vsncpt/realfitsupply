import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'strength',
    name: 'Strength Equipment',
    description: 'Professional-grade weights and strength training equipment',
    image: 'https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg',
    accent: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 'cardio',
    name: 'Cardio Equipment',
    description: 'High-performance cardio and endurance training gear',
    image: 'https://images.pexels.com/photos/4162529/pexels-photo-4162529.jpeg',
    accent: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'recovery',
    name: 'Recovery & Wellness',
    description: 'Premium recovery tools and wellness accessories',
    image: 'https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg',
    accent: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    description: 'Clean, effective supplements for optimal performance',
    image: 'https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg',
    accent: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential workout accessories and training tools',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
    accent: 'from-yellow-500/20 to-amber-500/20'
  },
  {
    id: 'apparel',
    name: 'Performance Apparel',
    description: 'Technical workout gear for maximum comfort',
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
    accent: 'from-teal-500/20 to-cyan-500/20'
  }
];

const Collections: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of premium fitness and wellness products, designed to elevate your training experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              <div className="relative p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-teal-500 font-medium">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;