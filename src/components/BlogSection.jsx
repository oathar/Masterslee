import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "How to Choose the Right Master's Program",
    excerpt: "Tips and strategies to help you make an informed decision about your graduate studies.",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Top Scholarships for International Students",
    excerpt: "Comprehensive guide to finding and applying for scholarships worldwide.",
    date: "Mar 12, 2024",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700">
            View all posts
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <div key={post.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}