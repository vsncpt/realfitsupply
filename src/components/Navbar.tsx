import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const categories = [
  { id: 'strength', name: 'Strength Equipment' },
  { id: 'cardio', name: 'Cardio Equipment' },
  { id: 'recovery', name: 'Recovery & Wellness' },
  { id: 'nutrition', name: 'Nutrition' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'apparel', name: 'Performance Apparel' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const location = useLocation();
  let dropdownTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsShopDropdownOpen(false);
    }, 600);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="logo text-2xl font-bold">
            Real<span className="text-teal-500">Fit</span>Supply
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-gray-600 hover:text-teal-500 transition-colors"
              >
                Shop
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isShopDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 mt-1"
                >
                  <Link
                    to="/collections"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                  >
                    All Categories
                  </Link>
                  <div className="h-px bg-gray-100 my-2" />
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/products/${category.id}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-teal-500"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/collections" className="text-gray-600 hover:text-teal-500 transition-colors">Collections</Link>
            <a href="#about" className="text-gray-600 hover:text-teal-500 transition-colors">About</a>
            <Link to="/journal" className="text-gray-600 hover:text-teal-500 transition-colors">Journal</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-teal-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-teal-500 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-teal-500 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <Button variant="primary" size="sm">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="container mx-auto px-4 space-y-4">
              <div className="space-y-2">
                <Link to="/collections" className="block text-gray-600 hover:text-teal-500">All Categories</Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products/${category.id}`}
                    className="block text-gray-600 hover:text-teal-500 pl-4"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link to="/collections" className="block text-gray-600 hover:text-teal-500">Collections</Link>
              <a href="#about" className="block text-gray-600 hover:text-teal-500">About</a>
              <Link to="/journal" className="block text-gray-600 hover:text-teal-500">Journal</Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <button className="text-gray-600 hover:text-teal-500">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-teal-500">
                  <User className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-teal-500 relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;