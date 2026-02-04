
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
        description="Les 4 piliers de Ghost-Note : Piano, Théorie Musicale, Rythmique et MAO."
        url="https://ghost-note.fr/#/thematiques"
        image="/images/logo/logo-with-text.png"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Les 4 Piliers</h1>
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
        </div>
      </div>
    </>
  );
};

export default Themes;
