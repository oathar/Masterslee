import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "../data/programs";

export default function UniversityPage() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <div className="text-center text-red-500">Program not found.</div>;
  }

  // Calculate the price (this is a placeholder logic, you can modify it as needed)
  const price = program.acceptanceRate < 50 ? 10000 : 20000;

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl p-6 text-white">
        {/* Text content with background */}
        <div className="bg-black bg-opacity-60 p-6 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
          <h2 className="text-2xl mb-4">{program.university}</h2>
          <p className="text-lg mb-2">Location: {program.location}</p>
          <p className="text-lg mb-2">Duration: {program.duration}</p>
          <p className="text-lg mb-2">Mode: {program.mode}</p>
          <p className="text-lg mb-2">Acceptance Rate: {program.acceptanceRate}%</p>
          <p className="text-lg mb-2">Deadline: {program.deadline}</p>
          <p className="text-lg mb-2">Scholarships: {program.scholarships}</p>
          <p className="text-lg mb-2">Type: {program.type}</p>
        </div>

        {/* Price Bar */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <span className="text-lg font-bold">Program Price: ${price}</span>
        </div>

        {/* About and University Link Section */}
        <div className="mt-8 bg-gray-700 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">About {program.university}</h3>
          <p className="text-lg mb-4">{program.about}</p>
          <a
            href={program.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 underline"
          >
            Visit University Website
          </a>
        </div>
      </div>
    </div>
  );
}
