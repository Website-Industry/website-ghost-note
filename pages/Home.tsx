
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData, { organizationSchema } from '../components/StructuredData';
import NewsletterButton from '../components/NewsletterButton';

const Home: React.FC = () => {
  const phrases = [
    "C'est trop tard pour moi",
    "Je n'ai pas l'oreille musicale",
    "Il faut des années pour y arriver",
    "Je suis trop vieux pour apprendre",
    "La musique, c'est pas pour moi",
    "J'ai pas fait le conservatoire",
    "Je suis nul en rythme",
    "Faut savoir lire les partitions",
    "J'ai raté ma chance",
    "C'est réservé aux gens talentueux",
    "Je jouerais si je savais faire"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <>
      <SEOHead
        title="Ghost-Note"
        description="Transmission musicale organique à Toulouse. Cours individuels, ateliers collectifs, CDMC. Une approche accessible et bienveillante pour explorer la musique sans barrières académiques."
        url="https://ghost-note.fr/"
        image="/images/logo/logo-with-text.png"
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
            <span className="block mt-2">sensorielle.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-slide-up [animation-delay:400ms]">
            Une transmission musicale organique, vivante et informelle pour explorer votre créativité sans les barrières académiques rigides.
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
            <h2 id="philosophy-heading" className="text-4xl md:text-5xl font-serif italic text-ghost-gold">Une transmission libre</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Ghost-Note valorise les chemins de traverse. Ici, pas de partition obligatoire ni de programme imposé : juste la musique qui se vit, s'expérimente, se découvre.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-1 bg-ghost-orange"></div>
                <h3 className="text-lg font-bold">Le corps avant le solfège</h3>
                <p className="text-sm text-slate-400">La musique parle d'abord au ventre, aux mains, à la voix. La théorie vient éclairer ce qu'on a déjà ressenti.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-1 bg-ghost-orange"></div>
                <h3 className="text-lg font-bold">Outils multiples, liberté totale</h3>
                <p className="text-sm text-slate-400">Percussion corporelle, piano, MAO, improvisation : chaque outil ouvre une porte différente vers la création.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Manifeste Section */}
      <section 
        className="relative py-20 md:py-32 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0f05 50%, #0a0a0a 100%)'
        }}
        aria-labelledby="manifeste-heading"
      >
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
            backgroundSize: '200% 200%'
          }}
        />
        
        <div className="relative max-w-[800px] mx-auto text-center animate-fade-in">
          {/* Titre principal avec rotation de phrases */}
          <h2 
            id="manifeste-heading"
            className="mb-6 font-bold text-ghost-orange min-h-[120px] md:min-h-[140px] flex items-center justify-center"
            style={{
              fontSize: 'clamp(48px, 8vw, 72px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
            }}
          >
            <span
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
              }}
            >
              "{phrases[currentPhraseIndex]}"
            </span>
          </h2>

          {/* Sous-titre provocateur */}
          <h3 
            className="mb-12 font-serif italic text-ghost-warm-white/90"
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: '1.3',
              transform: 'translateY(-4px)',
              opacity: 0.95
            }}
          >
            Vraiment ?
          </h3>

          {/* Corps de texte */}
          <div 
            className="space-y-8 text-ghost-warm-white mb-16 font-light"
            style={{
              fontSize: 'clamp(18px, 2.5vw, 20px)',
              lineHeight: '1.8'
            }}
          >
            <p className="animate-slide-up [animation-delay:200ms]">
              Faire de la musique, ce n'est pas décrocher un diplôme du conservatoire. C'est taper un rythme sur une table et sourire parce que ça groove. C'est improviser trois accords au piano et réaliser que vous venez de composer quelque chose.
            </p>
            
            <p className="animate-slide-up [animation-delay:400ms]">
              Vous allez vous tromper ? Parfait. C'est comme ça qu'on apprend. Vous n'avez jamais touché un instrument ? Encore mieux. Vous n'avez aucune habitude à déconstruire.
            </p>

            <p 
              className="text-ghost-gold font-normal animate-slide-up [animation-delay:600ms]"
              style={{
                fontSize: 'clamp(20px, 3vw, 24px)',
                lineHeight: '1.7'
              }}
            >
              La musique n'attend pas la perfection. Elle attend juste que vous osiez.
            </p>
          </div>

          {/* CTA final */}
          <div className="animate-slide-up [animation-delay:800ms]">
            <p 
              className="text-ghost-gold font-semibold inline-block transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                fontSize: 'clamp(24px, 3.5vw, 28px)',
                lineHeight: '1.4',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(212, 175, 55, 0.3)',
                textUnderlineOffset: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecorationColor = 'rgba(212, 175, 55, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecorationColor = 'rgba(212, 175, 55, 0.3)';
              }}
            >
              Et si c'était maintenant ?
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 px-6 bg-ghost-black" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">Paroles d'élèves</h2>
          <div className="h-0.5 w-24 bg-ghost-orange mx-auto" aria-hidden="true"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          <blockquote className="card-gradient p-8 rounded-2xl border border-white/5 italic text-slate-300 font-light" role="listitem">
            "Une ambiance cosy pour comprendre la musique sans pression, beaucoup d'écoute quand au besoin individuel de chacun.e et une pédagogie qui s'adapte ! Un vrai plaisir d'apprendre de cette façon, merci {'<3'}"
            <footer className="mt-6 not-italic font-bold text-ghost-gold text-sm">— Raf.</footer>
          </blockquote>
          <blockquote className="card-gradient p-8 rounded-2xl border border-white/5 italic text-slate-300 font-light" role="listitem">
            "CDMC est une approche complètement différente de l'apprentissage de la musique dans une ambiance saine et conviviale. Plus besoin de cours de solfèges rébarbatifs pour comprendre comment la musique est construite !"
            <footer className="mt-6 not-italic font-bold text-ghost-gold text-sm">— Yann.</footer>
          </blockquote>
          <blockquote className="card-gradient p-8 rounded-2xl border border-white/5 italic text-slate-300 font-light" role="listitem">
            "J'ai suivi le cours d'initiation avec grand plaisir. J'ai ainsi pu acquérir des bases solides en théorie musicale de manière ludique et approfondie. Ces notions me sont déjà utiles pour mieux comprendre ce que je fais lorsque je compose de la musique électronique."
            <footer className="mt-6 not-italic font-bold text-ghost-gold text-sm">— Flo</footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-ghost-black to-stone-900/30" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="newsletter-heading" className="text-4xl font-serif italic mb-4 text-ghost-gold">
            Restez informé·e
          </h2>
          <p className="text-lg text-slate-400 mb-8 font-light max-w-2xl mx-auto">
            Recevez les dernières actualités sur les ateliers, événements et nouvelles offres de Ghost-Note.
          </p>
          <NewsletterButton variant="primary" size="lg" />
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
