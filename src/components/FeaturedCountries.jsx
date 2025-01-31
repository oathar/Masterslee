import React from 'react';
import { Link } from 'react-router-dom';

const countries = [
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    programCount: 5,
    universities: 5
  },
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    programCount: 1,
    universities: 1
  },
  {
    name: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    programCount: 2,
    universities: 2
  },
  
];

export default function FeaturedCountries() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link 
              key={country.name} 
              to={`/results?location=${encodeURIComponent(country.name)}`} 
              className="relative group overflow-hidden rounded-xl block"
            >
              <img 
                src={country.image} 
                alt={country.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{country.name}</h3>
                <p className="text-white/90">
                  {country.programCount.toLocaleString()} programs • {country.universities} universities
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
