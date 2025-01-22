import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ProgramList from './components/ProgramList';
import Disciplines from './components/Disciplines';
import FeaturedCountries from './components/FeaturedCountries';
import BlogSection from './components/BlogSection';
import SocialHighlights from './components/SocialHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Filters />
        <ProgramList />
        <Disciplines />
        <FeaturedCountries />
        <BlogSection />
        <SocialHighlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;