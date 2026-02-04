
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import FormatsIndex from './pages/formats/FormatsIndex';
import AteliersPage from './pages/formats/AteliersPage';
import CDMCPage from './pages/formats/CDMCPage';
import CoursIndividuelsPage from './pages/formats/CoursIndividuelsPage';
import TutoratAbletonPage from './pages/formats/TutoratAbletonPage';
import Themes from './pages/Themes';
import LeLooperPage from './pages/LeLooperPage';
import AboutContact from './pages/AboutContact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-ghost-black text-ghost-warm-white selection:bg-ghost-orange/30">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formats" element={<FormatsIndex />} />
            <Route path="/formats/ateliers" element={<AteliersPage />} />
            <Route path="/formats/cdmc" element={<CDMCPage />} />
            <Route path="/formats/cours-individuels" element={<CoursIndividuelsPage />} />
            <Route path="/thematiques" element={<Themes />} />
            <Route path="/thematiques/tutorat-ableton" element={<TutoratAbletonPage />} />
            <Route path="/thematiques/lelooper" element={<LeLooperPage />} />
            <Route path="/a-propos" element={<AboutContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
