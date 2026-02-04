
import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterButton from './NewsletterButton';

const Footer: React.FC = () => {
  return (
    <footer 
      className="bg-ghost-black border-t border-white/5 py-16 px-6"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/images/logo/logo-no-text.png" 
              alt="Logo Ghost-Note" 
              className="w-8 h-8"
              width="32"
              height="32"
              loading="lazy"
            />
            <span className="text-lg font-bold tracking-tighter uppercase">Ghost-Note</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
            Transmission musicale organique à Toulouse. Redécouvrez la musique comme une expérience sensorielle et humaine.
          </p>
          <nav aria-label="Réseaux sociaux">
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-slate-500 hover:text-ghost-gold transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                aria-label="Suivre Ghost-Note sur Instagram"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-slate-500 hover:text-ghost-gold transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                aria-label="Suivre Ghost-Note sur Facebook"
              >
                Facebook
              </a>
            </div>
          </nav>
        </div>

        <nav aria-label="Navigation du pied de page">
          <div>
            <h4 className="text-ghost-gold font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-slate-400 text-sm" role="list">
              <li>
                <Link 
                  to="/formats" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                >
                  Formats
                </Link>
              </li>
              <li>
                <Link 
                  to="/thematiques" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                >
                  Thématiques
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <a 
                  href="https://cdmc-toulouse.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded"
                >
                  CDMC Toulouse
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h4 className="text-ghost-gold font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Restez informé·e des prochains ateliers et événements.
          </p>
          <NewsletterButton variant="outline" size="sm" />
        </div>

        <address className="not-italic">
          <h4 className="text-ghost-gold font-bold mb-6 text-sm uppercase tracking-widest">Localisation</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            31000 Toulouse, France
          </p>
        </address>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Ghost-Note. Marc Charton.</p>
        <p className="text-xs text-slate-600">Site par Ghost-Note. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
