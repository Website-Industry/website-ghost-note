import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import NewsletterButton from '../components/NewsletterButton';

const EvenementsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Événements & Ateliers"
        description="Découvrez les prochains événements et ateliers organisés par Ghost-Note : rythme signé, improvisation vocale, communication gestuelle. Restez informé·e des dates à venir."
        url="https://ghost-note.fr/evenements"
        image="/images/logo/logo-with-text.png"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <header className="mb-20 text-center">
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Événements</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Ateliers, rencontres et moments musicaux à venir
            </p>
          </header>

          {/* Newsletter CTA en haut */}
          <section className="mb-16 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-ghost-gold/10 to-white/5 p-8 rounded-2xl border border-ghost-gold/30">
              <h2 className="text-2xl font-bold mb-4 text-ghost-gold">Ne manquez aucun événement</h2>
              <p className="text-slate-300 mb-6 font-light">
                Abonnez-vous à la newsletter pour recevoir les dates des prochains ateliers et événements directement dans votre boîte mail.
              </p>
              <NewsletterButton variant="primary" size="lg" />
            </div>
          </section>

          {/* Liste des événements */}
          <section className="mb-32 max-w-4xl mx-auto">
            {/* Événements à venir */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 text-center">À venir</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-ghost-gold/20 to-white/5 p-6 rounded-xl border border-ghost-gold/50">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">La communication gestuelle appliquée à l'impro vocale</h3>
                      <p className="text-slate-300 font-light mb-3">14 février 2026</p>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Atelier d'une journée pour celles et ceux qui pratiquent déjà l'impro vocale et souhaitent aller plus loin dans le jeu collectif. 
                        Exploration d'une boîte à outils gestuelle inspirée du Rythme Signé et du Vocal Painting pour mieux se coordonner, 
                        lancer des idées et jouer ensemble avec plus de fluidité dans les circle songs et l'impro vocale en groupe.
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-ghost-gold/30 text-ghost-gold rounded-full text-sm font-semibold whitespace-nowrap">
                      À venir
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a
                      href="https://www.billetweb.fr/circlesong-la-gestuelle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ghost-gold hover:text-ghost-gold/80 font-semibold transition-colors"
                    >
                      En savoir plus
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <Link
                      to="/communication-gestuelle"
                      className="inline-flex items-center gap-2 text-ghost-gold hover:text-ghost-gold/80 font-semibold transition-colors"
                    >
                      Découvrir le Rythme Signé & le Vocal Painting
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Événements passés */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-center text-slate-400">Passés</h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 opacity-75">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-slate-300">IDBM : Introduction au rythme signé</h3>
                      <p className="text-slate-400 font-light">01 février 2026</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-700 text-slate-400 rounded-full text-sm font-semibold whitespace-nowrap">
                      Passé
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 opacity-75">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-slate-300">"Les joies du groove"</h3>
                      <p className="text-slate-400 font-light mb-3 italic">
                        Dernier atelier de la série, centré sur l'exploration des débits et des polyrythmies. 
                        Accessible à tous les niveaux, sans compétence préalable requise. Vous repartirez avec des outils pratiques 
                        pour comprendre, jouer et mémoriser les polyrythmies, ainsi que des moyens mnémotechniques, le tout abordé 
                        de manière progressive et adaptée à chacun·e.
                      </p>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-slate-500 mb-2">À l'atelier des chalets - 23 rue Dulaurier, 31000 Toulouse</p>
                        <div className="space-y-1">
                          <p className="text-slate-400 text-sm">• 23 février 2024 de 18h15 à 20h30</p>
                          <p className="text-slate-400 text-sm">• 22 mars 2024 de 18h15 à 20h30</p>
                          <p className="text-slate-400 text-sm">• 26 avril 2024 de 18h15 à 20h30</p>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-slate-700 text-slate-400 rounded-full text-sm font-semibold whitespace-nowrap">
                      Passé
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter CTA en bas */}
          <section className="mb-16 max-w-4xl mx-auto text-center">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-white">Restez informé·e</h2>
              <p className="text-slate-300 mb-6 font-light">
                Abonnez-vous à la newsletter pour ne manquer aucun événement à venir.
              </p>
              <NewsletterButton variant="secondary" size="lg" />
            </div>
          </section>

          {/* Retour */}
          <section className="text-center">
            <Link
              to="/formats/ateliers"
              className="inline-block px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              ← Retour aux ateliers
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default EvenementsPage;
