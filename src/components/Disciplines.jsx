import React, { useState } from "react";
import { disciplines } from "../data/disciplines";
import { programs } from "../data/programs"; 
import { Clock, MapPin, Star, Calendar, DollarSign, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Disciplines() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  // Filter programs based on selected discipline
  const filteredPrograms = programs.filter(
    (program) => program.discipline === selectedDiscipline
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Browse by Discipline
        </h2>

        {/* Discipline Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {disciplines.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              onClick={() => setSelectedDiscipline(name)}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow cursor-pointer bg-gray-50 hover:bg-white"
            >
              <Icon className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-600">{count} programs</p>
            </div>
          ))}
        </div>

        {/* Display Selected Discipline Programs */}
        {selectedDiscipline && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Programs for {selectedDiscipline}
            </h3>

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
              <p className="text-lg text-gray-600">
                Programs will be added soon.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
