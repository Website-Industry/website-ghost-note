
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormatsDropdownOpen, setIsFormatsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const formatsDropdownRef = useRef<HTMLDivElement>(null);
  const formatsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const isActive = (path: string) => location.pathname === path;
  const isFormatsActive = location.pathname.startsWith('/formats');

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
    setIsFormatsDropdownOpen(false);
  }, [location.pathname]);

  // Nettoyer le timeout au démontage
  useEffect(() => {
    return () => {
      if (formatsTimeoutRef.current) {
        clearTimeout(formatsTimeoutRef.current);
      }
    };
  }, []);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formatsDropdownRef.current && !formatsDropdownRef.current.contains(event.target as Node)) {
        setIsFormatsDropdownOpen(false);
      }
    };

    if (isFormatsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFormatsDropdownOpen]);

  const handleFormatsMouseEnter = () => {
    if (formatsTimeoutRef.current) {
      clearTimeout(formatsTimeoutRef.current);
    }
    setIsFormatsDropdownOpen(true);
  };

  const handleFormatsMouseLeave = () => {
    formatsTimeoutRef.current = setTimeout(() => {
      setIsFormatsDropdownOpen(false);
    }, 200); // Délai de 200ms avant la fermeture
  };

  // Gestion de la navigation au clavier
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const formatsItems = [
    { label: 'Cours Individuels', path: '/formats/cours-individuels' },
    { label: 'Cours Collectifs', path: '/formats/cdmc' },
    { label: 'Ateliers', path: '/formats/ateliers' },
  ];

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
          <li role="none">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                isActive('/') ? 'text-ghost-gold' : 'text-slate-400'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Accueil
            </Link>
          </li>
          
          {/* Formats avec menu déroulant */}
          <li role="none" className="relative" ref={formatsDropdownRef}>
            <div 
              className="relative"
              onMouseEnter={handleFormatsMouseEnter}
              onMouseLeave={handleFormatsMouseLeave}
            >
              <Link
                to="/formats"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                  isFormatsActive ? 'text-ghost-gold' : 'text-slate-400'
                }`}
                aria-current={isFormatsActive ? 'page' : undefined}
                onClick={() => setIsFormatsDropdownOpen(!isFormatsDropdownOpen)}
              >
                Formats
                <svg 
                  className={`inline-block ml-1 w-3 h-3 transition-transform duration-200 ${isFormatsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Menu déroulant */}
              {isFormatsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-56 z-50"
                  role="menu"
                  aria-label="Sous-menu Formats"
                >
                  <div className="bg-ghost-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">
                    {formatsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-inset ${
                          isActive(item.path) ? 'text-ghost-gold bg-white/5' : 'text-slate-400'
                        }`}
                        role="menuitem"
                        aria-current={isActive(item.path) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>

          <li role="none">
            <Link
              to="/evenements"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                isActive('/evenements') ? 'text-ghost-gold' : 'text-slate-400'
              }`}
              aria-current={isActive('/evenements') ? 'page' : undefined}
            >
              Événements
            </Link>
          </li>

          <li role="none">
            <Link
              to="/thematiques"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                isActive('/thematiques') ? 'text-ghost-gold' : 'text-slate-400'
              }`}
              aria-current={isActive('/thematiques') ? 'page' : undefined}
            >
              Thématiques
            </Link>
          </li>
          
          <li role="none">
            <Link
              to="/a-propos"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black rounded ${
                isActive('/a-propos') ? 'text-ghost-gold' : 'text-slate-400'
              }`}
              aria-current={isActive('/a-propos') ? 'page' : undefined}
            >
              À Propos
            </Link>
          </li>
          <li role="none">
            <Link
              to="/a-propos?scroll=contact"
              onClick={(e) => {
                // Si on est déjà sur la page, scroller directement
                if (location.pathname === '/a-propos') {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
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
