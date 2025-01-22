import React from 'react';
import { Clock, MapPin, Star } from 'lucide-react';

export default function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
        <p className="text-indigo-600 font-medium mb-4">{program.university}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{program.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{program.duration} • {program.type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Star className="h-5 w-5 mr-2 text-yellow-400" />
            <span>{program.rating} / 5.0</span>
          </div>
        </div>
        
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          View Program
        </button>
      </div>
    </div>
  );
}