import React from "react";
import { useLocation } from "react-router-dom";
import { programs } from "../data/programs";

export default function ResultsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase() || "";
  const searchLocation = queryParams.get("location")?.toLowerCase() || "";

  // Filter programs based on user input
  const filteredPrograms = programs.filter(
    (program) =>
      program.title.toLowerCase().includes(searchQuery) &&
      program.location.toLowerCase().includes(searchLocation)
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="p-4 bg-white shadow rounded-lg">
              <img src={program.image} alt={program.title} className="w-full h-40 object-cover rounded-md mb-4"/>
              <h2 className="text-xl font-semibold">{program.title}</h2>
              <p className="text-gray-600">{program.university}</p>
              <p className="text-gray-500">{program.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results found.</p>
      )}
    </div>
  );
}
