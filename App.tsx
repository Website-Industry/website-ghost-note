
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import StructuredData, { organizationSchema } from './components/StructuredData';

// Lazy loading des routes pour améliorer les performances
const Home = lazy(() => import('./pages/Home'));
const FormatsIndex = lazy(() => import('./pages/formats/FormatsIndex'));
const AteliersPage = lazy(() => import('./pages/formats/AteliersPage'));
const CDMCPage = lazy(() => import('./pages/formats/CDMCPage'));
const CoursIndividuelsPage = lazy(() => import('./pages/formats/CoursIndividuelsPage'));
const TutoratAbletonPage = lazy(() => import('./pages/formats/TutoratAbletonPage'));
const Themes = lazy(() => import('./pages/Themes'));
const LeLooperPage = lazy(() => import('./pages/LeLooperPage'));
const CommunicationGestuellePage = lazy(() => import('./pages/CommunicationGestuellePage'));
const AboutContact = lazy(() => import('./pages/AboutContact'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-ghost-black">
    <div className="text-ghost-gold animate-pulse">Chargement...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-ghost-black text-ghost-warm-white selection:bg-ghost-orange/30">
        <StructuredData data={organizationSchema} />
        <SkipLink />
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/formats" element={<FormatsIndex />} />
              <Route path="/formats/ateliers" element={<AteliersPage />} />
              <Route path="/formats/cdmc" element={<CDMCPage />} />
              <Route path="/formats/cours-individuels" element={<CoursIndividuelsPage />} />
              <Route path="/thematiques" element={<Themes />} />
              <Route path="/thematiques/tutorat-ableton" element={<TutoratAbletonPage />} />
              <Route path="/thematiques/lelooper" element={<LeLooperPage />} />
              <Route path="/communication-gestuelle" element={<CommunicationGestuellePage />} />
              <Route path="/a-propos" element={<AboutContact />} />
            </Routes>
          </Suspense>
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
