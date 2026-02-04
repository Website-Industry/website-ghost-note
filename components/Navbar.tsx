
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  
  const isActive = (path: string) => location.pathname === path;

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Gestion de la navigation au clavier
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-ghost-black/80 backdrop-blur-md border-b border-white/5"
      role="banner"
    >
      <nav 
        ref={navRef}
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        role="navigation"
        aria-label="Navigation principale"
      >
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded"
          aria-label="Retour à l'accueil Ghost-Note"
        >
          <img 
            src="/images/logo/logo_white_transparent.png" 
            alt="Logo Ghost-Note" 
            className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12"
            width="40"
            height="40"
            loading="eager"
            fetchPriority="high"
          />
          <span className="text-xl font-bold tracking-tighter uppercase hidden sm:block">Ghost-Note</span>
        </Link>

        <ul className="flex items-center gap-8" role="list">
          {[
            { label: 'Accueil', path: '/' },
            { label: 'Formats', path: '/formats' },
            { label: 'Thématiques', path: '/thematiques' },
            { label: 'À Propos', path: '/a-propos' },
          ].map((item) => (
            <li key={item.path} role="none">
              <Link
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                  isActive(item.path) ? 'text-ghost-gold' : 'text-slate-400'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li role="none">
            <Link
              to="/a-propos#contact"
              className="px-5 py-2 bg-ghost-orange/10 border border-ghost-orange/30 text-ghost-orange rounded-full text-sm font-bold hover:bg-ghost-orange hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ghost-orange focus:ring-offset-2 focus:ring-offset-ghost-black"
              aria-label="Aller à la page de contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
