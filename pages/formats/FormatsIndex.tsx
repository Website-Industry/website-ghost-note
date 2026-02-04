import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const FormatsIndex: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Les Formats"
        description="Découvrez tous les formats proposés par Ghost-Note : CDMC, ateliers rythmique & chant, cours individuels. Plusieurs façons d'explorer la musique selon vos envies et votre rythme."
        url="https://ghost-note.fr/#/formats"
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
                    Public : Adultes de 20 à 80 ans
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
                  alt="CDMC Collective - Format collectif mensuel de musique" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-0 bg-ghost-gold/10 group-hover:bg-ghost-gold/20 transition-colors"></div>
              </div>
              <div className="space-y-6">
                <span className="text-ghost-gold font-bold uppercase tracking-widest text-sm">Cours de Musique Chill</span>
                <h2 className="text-4xl font-bold group-hover:text-ghost-gold transition-colors">CDMC Collective</h2>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Un format d'apprentissage collectif avec une séance par mois. Des modules par thématique (Théorie, Piano, Rythmique, MAO) dans une ambiance conviviale.
                </p>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-slate-400 mb-4 italic">
                    CDMC possède son propre site dédié avec calendrier et inscriptions.
                  </p>
                  <div className="inline-block px-6 py-3 border border-ghost-gold text-ghost-gold rounded-full font-bold group-hover:bg-ghost-gold group-hover:text-black transition-all">
                    Visiter cdmc-toulouse.fr →
                  </div>
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
      </div>
      </div>
    </>
  );
};

export default FormatsIndex;
