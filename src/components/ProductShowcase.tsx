import React, { useState } from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Daily Essentials Multivitamin',
    price: 54.99,
    image: 'https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg',
    tags: ['New', 'Bestseller'],
    description: 'Complete daily nutrition with premium, bioavailable ingredients.',
  },
  {
    id: 2,
    name: 'Plant Protein Complex',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7195157/pexels-photo-7195157.jpeg',
    tags: ['Vegan', 'Nutrition'],
    description: 'Clean, plant-based protein formula with essential amino acids.',
  },
  {
    id: 3,
    name: 'Pre-Workout Energy+',
    price: 44.99,
    image: 'https://images.pexels.com/photos/7195123/pexels-photo-7195123.jpeg',
    tags: ['Featured', 'Performance'],
    description: 'Clean energy formula for enhanced workout performance.',
  },
  {
    id: 4,
    name: 'Recovery Complex',
    price: 59.99,
    image: 'https://images.pexels.com/photos/7195179/pexels-photo-7195179.jpeg',
    tags: ['Premium', 'Recovery'],
    description: 'Advanced recovery blend with adaptogens and amino acids.',
  },
];

const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium supplements formulated with clean, effective ingredients for optimal results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            {/* Bubble effect background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-teal-500/20 rounded-[50%] blur-[60px] opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
            
            {/* Main product display */}
            <div className="relative overflow-hidden p-12">
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                {selectedProduct.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`py-1 px-3 rounded-full text-xs font-medium ${
                      tag === 'Bestseller' ? 'bg-yellow-100 text-yellow-800' :
                      tag === 'New' ? 'bg-blue-100 text-blue-800' :
                      tag === 'Featured' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="relative aspect-square">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)]"
                  style={{
                    filter: 'drop-shadow(0 10px 15px rgba(20, 184, 166, 0.2))'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-gray-900">${selectedProduct.price}</span>
                <span className="ml-2 text-sm text-gray-500">USD</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="group">
                  Subscribe & Save
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  One-time Purchase
                </Button>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-gray-900 font-medium mb-4">More Products</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    className={`relative overflow-hidden transition-all duration-300 p-4 rounded-[30px] ${
                      selectedProduct.id === product.id 
                        ? 'ring-2 ring-teal-500 shadow-lg bg-gradient-to-b from-teal-50/30 to-emerald-50/30' 
                        : 'hover:shadow-lg hover:bg-gradient-to-b hover:from-gray-50 hover:to-gray-50/50'
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-24 object-contain transition-transform duration-300 hover:scale-110"
                      style={{
                        filter: 'drop-shadow(0 5px 10px rgba(20, 184, 166, 0.1))'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;