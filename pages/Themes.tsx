
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Themes: React.FC = () => {
  const pillars = [
    {
      title: "Piano",
      tagline: "Jeu funky & Accompagnement",
      description: "Libérez-vous des partitions pour explorer le clavier. On travaille le groove, l'accompagnement et la composition instantanée.",
      img: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Théorie Musicale",
      tagline: "Comprendre sans académisme",
      description: "La théorie au service de la pratique. Apprenez à comprendre ce que vous jouez sans passer par les années de solfège traditionnelles.",
      img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Rythmique",
      tagline: "Groove & Polyrythmie",
      description: "Le rythme est le fondement de tout. Travail sur le corps, le ressenti de la pulsation et les structures rythmiques complexes.",
      img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "MAO",
      tagline: "Production Numérique",
      description: "Utilisez l'ordinateur comme un instrument de création. Composition, outils numériques accessibles et émancipation technique.",
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <SEOHead
        title="Les Thématiques"
        description="Les 4 piliers de Ghost-Note : Piano, Théorie Musicale, Rythmique et MAO. Chaque thématique est disponible selon vos besoins en cours individuels, collectifs (CDMC) ou ateliers."
        url="https://ghost-note.fr/#/thematiques"
        image="/images/logo.png"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Les 4 Piliers</h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            Chaque thématique est disponible selon vos besoins en cours individuels, collectifs (CDMC) ou ateliers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
          {pillars.map((p, idx) => (
            <article key={idx} className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/10 card-gradient" role="listitem">
              <img 
                src={p.img} 
                alt={`${p.title} - ${p.tagline}`}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="400"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-ghost-black via-ghost-black/40 to-transparent">
                <span className="text-ghost-gold font-bold uppercase tracking-widest text-xs mb-2">{p.tagline}</span>
                <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-400 font-light max-w-md">{p.description}</p>
              </div>
            </article>
          ))}
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
        </div>
      </div>
    </>
  );
};

export default Themes;
