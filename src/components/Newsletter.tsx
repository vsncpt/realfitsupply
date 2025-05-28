import React, { useState } from 'react';
import Button from './ui/Button';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-teal-500/5 blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Subscribe to receive exclusive offers, workout tips, and be the first to know about new product releases.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">
                You've been added to our list and will be among the first to hear about new products and special offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button type="submit" variant="primary" className="group">
                  Subscribe
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from RealFitSupply.
              </p>
            </form>
          )}
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-gray-600 text-sm">Active Subscribers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">4.8/5</div>
              <div className="text-gray-600 text-sm">Customer Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600 text-sm">Premium Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;