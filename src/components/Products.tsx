import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  tags?: string[];
}

const categoryData = {
  strength: {
    title: 'Strength Equipment',
    description: 'Professional-grade weights and strength training equipment for your home gym',
    products: [
      {
        id: 'adj-dumbbells',
        name: 'Adjustable Dumbbell Set',
        price: 299.99,
        image: 'https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg',
        category: 'strength',
        description: 'Space-saving adjustable dumbbells with quick-change weight system',
        tags: ['Bestseller', 'New']
      },
      {
        id: 'kettlebell-set',
        name: 'Premium Kettlebell Set',
        price: 199.99,
        image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg',
        category: 'strength',
        description: 'Competition-grade kettlebells for versatile strength training',
        tags: ['Popular']
      },
      {
        id: 'power-rack',
        name: 'Professional Power Rack',
        price: 799.99,
        image: 'https://images.pexels.com/photos/4162456/pexels-photo-4162456.jpeg',
        category: 'strength',
        description: 'Heavy-duty power rack with multiple attachments and safety features',
        tags: ['Premium']
      }
    ]
  },
  cardio: {
    title: 'Cardio Equipment',
    description: 'High-performance cardio machines for effective endurance training',
    products: [
      {
        id: 'smart-bike',
        name: 'Smart Exercise Bike',
        price: 1299.99,
        image: 'https://images.pexels.com/photos/4162529/pexels-photo-4162529.jpeg',
        category: 'cardio',
        description: 'Interactive cycling experience with live classes and tracking',
        tags: ['Featured']
      },
      {
        id: 'treadmill-pro',
        name: 'Professional Treadmill',
        price: 1499.99,
        image: 'https://images.pexels.com/photos/4162590/pexels-photo-4162590.jpeg',
        category: 'cardio',
        description: 'Commercial-grade treadmill with advanced training programs',
        tags: ['Premium']
      }
    ]
  },
  recovery: {
    title: 'Recovery & Wellness',
    description: 'Essential tools for optimal recovery and injury prevention',
    products: [
      {
        id: 'massage-gun',
        name: 'Professional Massage Gun',
        price: 199.99,
        image: 'https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg',
        category: 'recovery',
        description: 'Deep tissue percussion therapy device for muscle recovery',
        tags: ['Bestseller']
      },
      {
        id: 'foam-roller',
        name: 'Premium Foam Roller Set',
        price: 49.99,
        image: 'https://images.pexels.com/photos/4397839/pexels-photo-4397839.jpeg',
        category: 'recovery',
        description: 'High-density foam rollers for myofascial release',
        tags: ['Essential']
      }
    ]
  },
  nutrition: {
    title: 'Nutrition',
    description: 'Premium supplements and nutrition products for optimal performance',
    products: [
      {
        id: 'whey-protein',
        name: 'Premium Whey Protein',
        price: 59.99,
        image: 'https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg',
        category: 'nutrition',
        description: 'High-quality whey protein with essential amino acids',
        tags: ['Bestseller']
      },
      {
        id: 'pre-workout',
        name: 'Advanced Pre-Workout',
        price: 44.99,
        image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
        category: 'nutrition',
        description: 'Clean energy formula for maximum performance',
        tags: ['Popular']
      }
    ]
  },
  accessories: {
    title: 'Accessories',
    description: 'Essential workout accessories to enhance your training',
    products: [
      {
        id: 'resistance-bands',
        name: 'Pro Resistance Band Kit',
        price: 79.99,
        image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
        category: 'accessories',
        description: 'Complete resistance training kit with door anchor',
        tags: ['Bestseller']
      },
      {
        id: 'gym-bag',
        name: 'Premium Gym Bag',
        price: 89.99,
        image: 'https://images.pexels.com/photos/4162547/pexels-photo-4162547.jpeg',
        category: 'accessories',
        description: 'Spacious gym bag with dedicated compartments',
        tags: ['New']
      }
    ]
  },
  apparel: {
    title: 'Performance Apparel',
    description: 'Technical workout gear designed for comfort and performance',
    products: [
      {
        id: 'training-shorts',
        name: 'Pro Training Shorts',
        price: 49.99,
        image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
        category: 'apparel',
        description: 'Moisture-wicking training shorts with secure pockets',
        tags: ['Bestseller']
      },
      {
        id: 'compression-top',
        name: 'Compression Training Top',
        price: 54.99,
        image: 'https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg',
        category: 'apparel',
        description: 'High-performance compression top for intense workouts',
        tags: ['New']
      }
    ]
  }
};

const Products: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const category = categoryId ? categoryData[categoryId as keyof typeof categoryData] : null;

  if (!category) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-gray-600 hover:text-teal-500"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-600 hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <p className="text-gray-600">{category.products.length} products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.tags && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag === 'Bestseller' ? 'bg-yellow-100 text-yellow-800' :
                          tag === 'New' ? 'bg-blue-100 text-blue-800' :
                          tag === 'Premium' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <Button variant="primary" size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;