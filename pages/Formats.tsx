
import React from 'react';

const Formats: React.FC = () => {
  return (
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-ghost-orange font-bold uppercase tracking-widest text-sm">Sur-mesure</span>
              <h2 className="text-4xl font-bold">Cours Individuels</h2>
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
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1520522186723-dc9f7d30f4eb?auto=format&fit=crop&q=80&w=1200" 
                alt="Piano Solo" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-ghost-orange/10"></div>
            </div>
          </section>

          {/* B. CDMC */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200" 
                alt="Collectif Musique" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-ghost-gold/10"></div>
            </div>
            <div className="space-y-6">
              <span className="text-ghost-gold font-bold uppercase tracking-widest text-sm">Cours de Musique Chill</span>
              <h2 className="text-4xl font-bold">Cours Collectifs (CDMC)</h2>
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
                  className="inline-block px-6 py-3 border border-ghost-gold text-ghost-gold rounded-full font-bold hover:bg-ghost-gold hover:text-black transition-all"
                >
                  Visiter cdmc-toulouse.fr
                </a>
              </div>
            </div>
          </section>

          {/* C. Ateliers Ateliers Collectifs */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-ghost-orange font-bold uppercase tracking-widest text-sm">Expression Spontanée</span>
              <h2 className="text-4xl font-bold">Ateliers & Rythme Signé</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                De 10 à 40 personnes. Un format ludique et participatif centré sur la rythmique et l'improvisation vocale. J'y utilise le <strong>Rythme Signé</strong>, le vocal painting et les percussions corporelles.
              </p>
              <p className="text-slate-400 font-light">
                Objectif : apprendre en s'amusant, sans jugement, pour une création collective immédiate. En lien direct avec la communauté <em>La Pulse</em>.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 order-1 lg:order-2">
               <img 
                src="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=1200" 
                alt="Workshop Group" 
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-ghost-brown/40"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Formats;
