import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import ProgramList from "./components/ProgramList";
import Disciplines from "./components/Disciplines";
import FeaturedCountries from "./components/FeaturedCountries";
import BlogSection from "./components/BlogSection";
import SocialHighlights from "./components/SocialHighlights";
import Footer from "./components/Footer";
import ResultsPage from "./components/ResultsPage"; // Your Results Page
import UniversityPage from "./components/veiwmore"; // The Program Details Page (UniversityPage)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/programs/:id" element={<UniversityPage />} />  {/* Add the program details route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Home page structure
function Home() {
  return (
    <>
      <Hero />
      <Filters />
      <ProgramList />
      <Disciplines />
      <FeaturedCountries />
      <BlogSection />
      <SocialHighlights />
    </>
  );
}

export default App;
