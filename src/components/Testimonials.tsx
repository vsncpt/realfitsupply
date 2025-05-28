import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    content: "The quality of RealFitSupply's resistance bands is unmatched. I've been using them daily for months and they're still as effective as day one.",
    author: "Alex Morgan",
    role: "Fitness Trainer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "As a professional athlete, I'm extremely selective about my equipment. RealFitSupply's products have exceeded my expectations in every way.",
    author: "Sarah Johnson",
    role: "Professional Runner",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The recovery tools from RealFitSupply have been a game-changer for my post-workout routine. I've noticed faster recovery times and less muscle soreness.",
    author: "Michael Chen",
    role: "Crossfit Competitor",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "I've tried many supplements over the years, but RealFitSupply's protein powder is by far the best - clean ingredients and it actually tastes great.",
    author: "Emily Wilson",
    role: "Yoga Instructor",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[800px] h-[500px] rounded-full bg-teal-400/10 blur-[150px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the fitness enthusiasts who use our products every day.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 translate-x-16'
                }`}
              >
                <blockquote className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-teal-400 shadow-[0_0_10px_rgba(13,255,216,0.3)]"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{testimonial.author}</p>
                      <p className="text-teal-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <svg 
                      className="absolute -top-4 -left-4 w-10 h-10 text-teal-500/20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  index === currentIndex ? 'bg-teal-400 scale-125' : 'bg-gray-700'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;