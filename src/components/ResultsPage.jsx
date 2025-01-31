import React from "react";
import { useLocation, Link } from "react-router-dom";
import { programs } from "../data/programs";
import { Clock, MapPin, Star, Calendar, DollarSign, Briefcase } from 'lucide-react';

export default function ResultsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase() || "";
  const searchLocation = queryParams.get("location")?.toLowerCase() || "";

  // Filter programs based on location (country)
  const filteredPrograms = programs.filter(
    (program) => 
      (searchQuery ? program.title.toLowerCase().includes(searchQuery) : true) &&
      (searchLocation ? program.location.toLowerCase().includes(searchLocation) : true)
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Programs in {searchLocation ? searchLocation.charAt(0).toUpperCase() + searchLocation.slice(1) : "Selected Country"}</h1>
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="p-4 bg-white shadow rounded-lg">
              <img src={program.image} alt={program.title} className="w-full h-40 object-cover rounded-md mb-4"/>
              <h2 className="text-xl font-semibold">{program.title}</h2>
              <p className="text-gray-600">{program.university}</p>
              <p className="text-gray-500">{program.location}</p>
              <div className="flex flex-wrap justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Duration: {program.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="h-5 w-5 mr-2 text-yellow-400" />
                  <span>Acceptance Rate: {program.acceptanceRate}%</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Mode: {program.mode}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Deadline: {program.deadline}</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>Scholarships: {program.scholarships}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span>Type: {program.type}</span>
                </div>
              </div>
              <Link to={`/programs/${program.id}`} className="text-blue-600 hover:text-blue-800">
                 View More Information
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found for this country.</p>
      )}
    </div>
  );
};
