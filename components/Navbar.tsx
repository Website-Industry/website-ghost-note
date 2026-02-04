
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ghost-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.png" 
            alt="Ghost-Note Logo" 
            className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12"
          />
          <span className="text-xl font-bold tracking-tighter uppercase hidden sm:block">Ghost-Note</span>
        </Link>

        <ul className="flex items-center gap-8">
          {[
            { label: 'Accueil', path: '/' },
            { label: 'Formats', path: '/formats' },
            { label: 'Thématiques', path: '/thematiques' },
            { label: 'À Propos', path: '/a-propos' },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-ghost-gold ${
                  isActive(item.path) ? 'text-ghost-gold' : 'text-slate-400'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/a-propos#contact"
              className="px-5 py-2 bg-ghost-orange/10 border border-ghost-orange/30 text-ghost-orange rounded-full text-sm font-bold hover:bg-ghost-orange hover:text-white transition-all duration-300"
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
