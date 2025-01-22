import React from 'react';
import { Twitter, Instagram } from 'lucide-react';

const posts = [
  {
    platform: "twitter",
    content: "Just launched our new scholarship program for international students! 🎓 #HigherEducation #Scholarships",
    engagement: "2.5K likes",
    date: "2h ago"
  },
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "Campus life at its finest! 📚✨ #StudentLife #University",
    engagement: "3.2K likes",
    date: "5h ago"
  }
];

export default function SocialHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Social Media Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                {post.platform === "twitter" ? (
                  <Twitter className="h-5 w-5 text-blue-400" />
                ) : (
                  <Instagram className="h-5 w-5 text-pink-600" />
                )}
                <span className="ml-2 text-gray-600">{post.date}</span>
              </div>
              {post.image && (
                <img src={post.image} alt="Social post" className="w-full h-48 object-cover rounded-lg mb-4" />
              )}
              <p className="text-gray-800 mb-3">{post.content}</p>
              <p className="text-gray-600 text-sm">{post.engagement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}