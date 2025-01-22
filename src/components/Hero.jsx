import React from 'react';
import { Search, BookOpen, Building2, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Master's Program
        </h1>
        <p className="text-xl text-indigo-100 mb-8">
          Compare thousands of graduate programs worldwide
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to study?"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1 relative">
              <Globe2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where?"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-12">
          <div className="text-white text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-2" />
            <p className="text-lg font-semibold">50,000+ Programs</p>
          </div>
          <div className="text-white text-center">
            <Building2 className="h-8 w-8 mx-auto mb-2" />
            <p className="text-lg font-semibold">1,000+ Universities</p>
          </div>
          <div className="text-white text-center">
            <Globe2 className="h-8 w-8 mx-auto mb-2" />
            <p className="text-lg font-semibold">100+ Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}