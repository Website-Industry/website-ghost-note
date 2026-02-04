
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData, { organizationSchema } from '../components/StructuredData';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Ghost-Note | Musique Organique Toulouse"
        description="Transmission musicale organique à Toulouse. Cours individuels, ateliers collectifs, CDMC. Une approche accessible et bienveillante pour explorer la musique sans barrières académiques."
        url="https://ghost-note.fr/"
        image="/images/logo.png"
      />
      <StructuredData data={organizationSchema} />
      <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514320298574-951d91e3eec1?auto=format&fit=crop&q=80&w=2000" 
            alt="Ambiance Studio - Espace de création musicale" 
            className="w-full h-full object-cover opacity-30 grayscale sepia-[.3]"
            loading="eager"
            width="2000"
            height="1333"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ghost-black via-transparent to-ghost-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block text-ghost-gold font-bold tracking-[.3em] uppercase text-xs mb-6 animate-slide-up">
            Basé à Toulouse
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black leading-tight text-ghost-warm-white mb-8 animate-slide-up [animation-delay:200ms]">
            La musique est une <br />
            <span className="text-ghost-gold text-glow italic font-serif relative inline-block transform -rotate-1 px-4 py-1">expérience</span> 
            <span className="block mt-2">sensorielle,</span>
            <span className="block mt-6 font-serif italic font-light text-slate-400 text-3xl md:text-5xl lg:text-6xl">
              pas une discipline rigide.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-slide-up [animation-delay:400ms]">
            Une approche organique, vivante et informelle pour explorer votre créativité musicale sans les barrières académiques rigides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up [animation-delay:600ms]">
            <Link 
              to="/formats" 
              className="w-full sm:w-auto px-10 py-5 bg-ghost-orange text-white rounded-full font-bold text-lg hover:bg-ghost-orange/80 transition-all shadow-xl shadow-ghost-orange/20 focus:outline-none focus:ring-2 focus:ring-ghost-orange focus:ring-offset-2 focus:ring-offset-ghost-black"
            >
              Découvrir les formats
            </Link>
            <Link 
              to="/a-propos" 
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-ghost-gold focus:ring-offset-2 focus:ring-offset-ghost-black"
            >
              Ma vision
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-ghost-black" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 group">
             <img 
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200" 
              alt="Détails d'instruments de musique" 
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 opacity-60"
              loading="lazy"
              width="1200"
              height="1200"
            />
            <div className="absolute inset-0 bg-ghost-brown/30 mix-blend-multiply"></div>
          </div>
          <div className="space-y-8">
            <h2 id="philosophy-heading" className="text-4xl md:text-5xl font-serif italic text-ghost-gold">Une alternative accessible</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Ghost-Note n'est pas un conservatoire. C'est un espace de transmission où l'autodidaxie est valorisée et où le numérique devient un vecteur d'émancipation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-1 bg-ghost-orange"></div>
                <h3 className="text-lg font-bold">Apprentissage Organique</h3>
                <p className="text-sm text-slate-400">Pas de théorie sèche, mais une compréhension par la pratique et le ressenti.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-1 bg-ghost-orange"></div>
                <h3 className="text-lg font-bold">Vecteur d'Emancipation</h3>
                <p className="text-sm text-slate-400">Utiliser les outils d'aujourd'hui pour libérer le musicien de demain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 px-6 bg-stone-900/30" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">Paroles d'élèves</h2>
          <div className="h-0.5 w-24 bg-ghost-orange mx-auto" aria-hidden="true"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="card-gradient p-8 rounded-2xl border border-white/5 italic text-slate-300 font-light" role="listitem">
              "L'approche de Marc a totalement débloqué ma relation au piano. Je ne cherche plus à lire des notes, je cherche à sculpter du son."
              <footer className="mt-6 not-italic font-bold text-ghost-gold text-sm">— Témoignage à venir</footer>
            </blockquote>
          ))}
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
