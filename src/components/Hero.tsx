import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/4348632/pexels-photo-4348632.jpeg" 
          alt="Runners at Sunset" 
          className="w-full h-full object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50/80 text-teal-600 font-medium mb-8 backdrop-blur-sm border border-teal-100">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Spring Collection Available
          </div>
          
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Elevate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              Active Lifestyle
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl backdrop-blur-sm bg-white/30 rounded-lg p-4">
            Discover premium fitness gear crafted for performance. Join thousands achieving their fitness goals with RealFitSupply.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="primary" size="lg" className="group">
              Shop New Arrivals
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Collections
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '4.9/5', label: 'Customer Rating' },
              { number: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="fade-in backdrop-blur-sm bg-white/60 rounded-lg p-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-teal-100/30 to-transparent rounded-tl-full backdrop-blur-sm" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;