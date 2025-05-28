import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ProductShowcase from './components/ProductShowcase';
import Benefits from './components/Benefits';
import Journal from './components/Journal';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Collections from './components/Collections';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900">
        <Navbar />
        <div className="pt-20"> {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <FeaturedCategories />
                <ProductShowcase />
                <Benefits />
                <Journal />
                <Testimonials />
                <Newsletter />
              </main>
            } />
            <Route path="/collections" element={<Collections />} />
            <Route path="/products/:categoryId" element={<Products />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </div>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;