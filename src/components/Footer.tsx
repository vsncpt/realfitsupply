import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold text-gray-900">
                RealFit<span className="text-teal-500">Supply</span>
              </a>
              <p className="mt-4 text-gray-600">
                Premium fitness and wellness products curated for performance and crafted for everyday excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-500 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
              <p className="text-sm text-gray-500">Follow us for daily fitness tips, product updates, and community highlights</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Training Equipment</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Recovery Tools</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Nutrition</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Activewear</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Sustainability</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Terms of Service</a></li>
            </ul>
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 text-teal-500 flex-shrink-0" />
                <span>support@realfitsupply.com</span>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-3 text-teal-500 flex-shrink-0" />
                <span>+1 (888) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-teal-500 flex-shrink-0" />
                <span>123 Fitness Way, Los Angeles, CA 90001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} RealFitSupply. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-6">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;