import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "The Science Behind Effective Recovery: A Comprehensive Guide",
    excerpt: "Discover the latest research on muscle recovery and how to optimize your post-workout routine for maximum results.",
    author: "Dr. Emily Rodriguez",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg",
    category: "Recovery"
  },
  {
    id: 2,
    title: "Nutrition Myths Debunked: What Science Really Says",
    excerpt: "Separating fact from fiction in the world of sports nutrition and supplements.",
    author: "Mark Thompson",
    date: "2024-03-12",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "Building Strength: A Beginner's Guide to Progressive Overload",
    excerpt: "Learn the fundamental principles of strength training and how to safely increase your workout intensity.",
    author: "Sarah Chen",
    date: "2024-03-10",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
    category: "Training"
  },
  {
    id: 4,
    title: "Mindfulness and Exercise: The Perfect Partnership",
    excerpt: "Explore how combining mindfulness practices with your workout routine can enhance results and mental well-being.",
    author: "Dr. Michael Chang",
    date: "2024-03-08",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    category: "Wellness"
  }
];

const Journal: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitness & Wellness Journal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, tips, and the latest research to help you achieve your fitness and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-teal-500">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-500 transition-colors">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-50 transition-colors">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journal;