import React from 'react';
import { disciplines } from '../data/disciplines';

export default function Disciplines() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Discipline</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {disciplines.map(({ icon: Icon, name, count }) => (
            <div key={name} className="p-6 border rounded-xl hover:shadow-lg transition-shadow cursor-pointer bg-gray-50 hover:bg-white">
              <Icon className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-600">{count} programs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}