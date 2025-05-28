import React from 'react';
import { Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
    title: 'Premium Quality',
    description: 'All products undergo rigorous testing to ensure they meet our high standards for durability and performance.'
  },
  {
    icon: <Truck className="w-8 h-8 text-teal-500" />,
    title: 'Free Shipping',
    description: 'Enjoy free standard shipping on all orders over $75, with fast and reliable delivery nationwide.'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-teal-500" />,
    title: '30-Day Returns',
    description: 'Not satisfied? Return your unused items within 30 days for a full refund or exchange.'
  },
  {
    icon: <Check className="w-8 h-8 text-teal-500" />,
    title: 'Expert Selection',
    description: 'Our fitness professionals personally test and curate every product in our collection.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="about\" className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RealFitSupply</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We're committed to providing the highest quality fitness and wellness products with exceptional service.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At RealFitSupply, we believe that everyone deserves access to premium fitness and wellness solutions that truly work. Our mission is to empower individuals on their fitness journey by providing carefully curated, high-quality equipment and supplements that deliver real results. We combine cutting-edge innovation with time-tested fundamentals to create a comprehensive ecosystem of products that support your path to peak performance and overall well-being.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-teal-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" 
                alt="Sarah Chen" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">Sarah Chen</h4>
              <p className="text-teal-500 text-center mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Former professional athlete turned entrepreneur, Sarah brings over 15 years of experience in fitness and wellness. Her vision for RealFitSupply stems from her dedication to making premium fitness equipment accessible to everyone.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg" 
                alt="Mark Thompson" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">Mark Thompson</h4>
              <p className="text-teal-500 text-center mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                With a background in sports science and product development, Mark ensures that every item in our catalog meets the highest standards of quality and innovation. His expertise drives our product research and testing processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;