import React from 'react';
import { Search, GraduationCap, Globe, Menu } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <GraduationCap className="h-8 w-8 text-indigo-600"/>
            <span className="ml-2 text-xl font-bold text-gray-900 " >Masterslee</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/results" className="text-gray-700 hover:text-indigo-600">Programs</Link>
            <Link to="/universities" className="text-gray-700 hover:text-indigo-600">Universities</Link>
            <Link to="/countries" className="text-gray-700 hover:text-indigo-600">Countries</Link>
            <Link to="/resources" className="text-gray-700 hover:text-indigo-600">Resources</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Globe className="h-5 w-5 text-gray-600" />

            <Link to="/signin" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </Link>

            <Menu className="h-6 w-6 md:hidden text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}