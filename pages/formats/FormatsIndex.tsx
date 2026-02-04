import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import NewsletterButton from '../../components/NewsletterButton';

const FormatsIndex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Les Formats"
        description="Découvrez tous les formats proposés par Ghost-Note : CDMC, ateliers rythmique & chant, cours individuels. Plusieurs façons d'explorer la musique selon vos envies et votre rythme."
        url="https://ghost-note.fr/formats"
        image="/images/atelier.jpg"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Les Formats</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            De l'accompagnement intime aux grands ateliers collectifs, trouvez l'espace qui correspond à votre rythme.
          </p>
        </header>

        <div className="space-y-32">
          {/* A. Cours Individuels */}
          <Link to="/formats/cours-individuels" className="block">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group cursor-pointer">
              <div className="space-y-6 order-2 lg:order-1">
                <span className="text-ghost-orange font-bold uppercase tracking-widest text-sm">Sur-mesure</span>
                <h2 className="text-4xl font-bold group-hover:text-ghost-orange transition-colors">Cours Individuels</h2>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Un coaching personnalisé depuis mon home-studio à Toulouse. Ici, je m'adapte à vos envies : piano funky, rythmique au clavier ou composition en MAO.
                </p>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ghost-gold"></div>
                    Public : Adultes
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ghost-gold"></div>
                    Thématiques mixables selon vos objectifs
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ghost-gold"></div>
                    Apprentissage sans solfège obligatoire
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 order-1 lg:order-2 group-hover:border-ghost-orange/50 transition-colors">
                <img 
                  src="/images/batterie.jpg" 
                  alt="Cours individuels - Accompagnement personnalisé en musique" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-ghost-orange/10 group-hover:bg-ghost-orange/20 transition-colors"></div>
              </div>
            </section>
          </Link>

          {/* B. CDMC */}
          <Link to="/formats/cdmc" className="block">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-ghost-gold/50 transition-colors">
                <img 
                  src="/images/atelier.jpg" 
                  alt="Cours Collectifs - Format collectif mensuel de musique" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-ghost-gold/10 group-hover:bg-ghost-gold/20 transition-colors"></div>
              </div>
              <div className="space-y-6">
                <span className="text-ghost-gold font-bold uppercase tracking-widest text-sm">Cours de Musique Chill</span>
                <h2 className="text-4xl font-bold group-hover:text-ghost-gold transition-colors">Cours Collectifs</h2>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Un format d'apprentissage collectif avec une séance par mois. Des modules par thématique (Théorie, Piano, Rythmique, MAO) dans une ambiance conviviale.
                </p>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-slate-400 mb-4 italic">
                    CDMC possède son propre site dédié avec calendrier et inscriptions.
                  </p>
                  <a 
                    href="https://cdmc-toulouse.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-6 py-3 border border-ghost-gold text-ghost-gold rounded-full font-bold hover:bg-ghost-gold hover:text-black transition-all cursor-pointer"
                  >
                    Visiter cdmc-toulouse.fr →
                  </a>
                </div>
              </div>
            </section>
          </Link>

          {/* C. Ateliers Collectifs */}
          <Link to="/formats/ateliers" className="block">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group cursor-pointer">
              <div className="space-y-6 order-2 lg:order-1">
                <span className="text-ghost-orange font-bold uppercase tracking-widest text-sm">Expression Spontanée</span>
                <h2 className="text-4xl font-bold group-hover:text-ghost-orange transition-colors">Ateliers & Rythme Signé</h2>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  De 10 à 40 personnes. Un format ludique et participatif centré sur la rythmique et l'improvisation vocale. J'y utilise le <strong>Rythme Signé</strong>, le vocal painting et les percussions corporelles.
                </p>
                <p className="text-slate-400 font-light">
                  Objectif : apprendre en s'amusant, sans jugement, pour une création collective immédiate. En lien direct avec la communauté <em>La Pulse</em>.
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 order-1 lg:order-2 group-hover:border-ghost-orange/50 transition-colors">
                <img 
                  src="/images/batucada.jpg" 
                  alt="Ateliers Rythme Signé - Ateliers collectifs de rythmique et improvisation vocale" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-ghost-brown/40 group-hover:bg-ghost-brown/50 transition-colors"></div>
              </div>
            </section>
          </Link>
        </div>

        {/* Communities Section */}
        <section className="mt-32 border-t border-white/5 pt-24" aria-labelledby="communities-heading">
          <h2 id="communities-heading" className="text-4xl font-serif italic mb-12 text-ghost-gold">Autres Activités & Communautés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            <article className="block p-8 bg-white/5 rounded-2xl border border-white/5 space-y-4 hover:bg-white/10 hover:border-white/20 transition-all group focus-within:ring-2 focus-within:ring-ghost-gold rounded-2xl" role="listitem">
              <Link to="/thematiques/tutorat-ableton" className="focus:outline-none">
                <h3 className="text-xl font-bold group-hover:text-ghost-orange transition-colors">Tutorat Sawup</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  J'accompagne également des apprenants en tant que tuteur pour le centre de formation professionnelle Sawup dans le cadre de leur formation sur Ableton Live.
                </p>
                <span className="text-ghost-orange text-sm font-bold group-hover:underline inline-flex items-center gap-2">
                  En savoir plus
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="block p-8 bg-white/5 rounded-2xl border border-white/5 space-y-4 hover:bg-white/10 hover:border-white/20 transition-all group focus-within:ring-2 focus-within:ring-ghost-gold rounded-2xl" role="listitem">
              <Link to="/thematiques/lelooper" className="focus:outline-none">
                <h3 className="text-xl font-bold group-hover:text-ghost-orange transition-colors">Le Looper</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Communauté autour de la musique numérique à Toulouse. Créer des espaces de rencontre et de création collective.
                </p>
                <span className="text-ghost-orange text-sm font-bold group-hover:underline inline-flex items-center gap-2">
                  En savoir plus
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </article>
            <article className="p-8 bg-white/5 rounded-2xl border border-white/5 space-y-4" role="listitem">
              <h3 className="text-xl font-bold">La Pulse</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Communauté toulousaine de chant improvisé et percussion corporelle. Marc y anime des ateliers réguliers.
              </p>
              <span className="text-slate-600 text-sm font-bold italic">Site bientôt disponible</span>
            </article>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-32 text-center px-6 py-16 bg-gradient-to-b from-transparent to-white/5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-ghost-gold">Restez informé·e</h2>
          <p className="text-slate-400 mb-6 font-light max-w-xl mx-auto">
            Recevez les dernières actualités sur les ateliers et événements à venir.
          </p>
          <NewsletterButton variant="primary" size="md" />
        </section>
      </div>
      </div>
    </>
  );
};

export default FormatsIndex;
