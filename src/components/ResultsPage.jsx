// this is the resultpage which is get on "view more information" on the card of 9 

import React from "react";
import { useLocation, Link } from "react-router-dom";
import { programs } from "../data/programs";
import { Clock, MapPin, Star, Calendar, DollarSign, Briefcase } from 'lucide-react';
import ProgramCard from './ProgramCard';

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
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found for this country.</p>
      )}
    </div>
  );
};
