import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const AteliersPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Ateliers Rythmique & Chant Improvisé"
        description="Ateliers ponctuels autour du rythme signé et du chant improvisé. Accessibles à tous les niveaux, sessions de 2h15. Découvrez cette méthode de communication rythmique venue d'Argentine."
        url="https://ghost-note.fr/#/formats/ateliers"
        image="/images/batucada.jpg"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Ateliers</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Rythmique & Chant Improvisé
          </p>
        </header>

        {/* Présentation */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="prose prose-lg text-slate-300 space-y-6 mb-12">
            <p className="text-lg leading-relaxed font-light">
              Les ateliers Ghost-Note proposent d'explorer le rythme signé et le chant improvisé dans un cadre 
              convivial et bienveillant. Accessibles à tous les niveaux, ces sessions ponctuelles permettent de 
              découvrir ou d'approfondir ces pratiques exceptionnelles.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Le rythme signé, tout droit venu d'Argentine, est une méthode de communication rythmique d'une 
              efficacité redoutable. L'improvisation vocale, quant à elle, libère la créativité et développe 
              l'écoute et la réactivité.
            </p>
            <div className="mt-8">
              <Link
                to="/communication-gestuelle"
                className="inline-flex items-center gap-2 text-ghost-gold hover:text-ghost-gold/80 font-semibold transition-colors"
              >
                En savoir plus sur le Rythme Signé et le Vocal Painting
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Présentation - 3 Cards */}
        <section className="mb-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-gradient p-8 rounded-2xl border border-white/10 hover:border-ghost-gold/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-ghost-gold">Des ateliers pour toustes</h2>
              <p className="text-lg leading-relaxed font-light text-slate-300">
                Accessibles à toute personne désirant mieux appréhender le rythme, les ateliers proposés par Ghost Note sont construits pour être divertissant, challengeant et compréhensibles par tout le monde.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-gradient p-8 rounded-2xl border border-white/10 hover:border-ghost-orange/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-ghost-orange">Approfondir le rythme</h2>
              <p className="text-lg leading-relaxed font-light text-slate-300">
                Ces ateliers sont pour vous si vous désirez mieux comprendre comment fonctionne le rythme, approfondir votre pratique et votre sensibilité à la pulsation et ses rouages. Inspiré de nombreuses pratiques, je vous propose de découvrir ensemble les multiples facettes du rythme.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-gradient p-8 rounded-2xl border border-white/10 hover:border-ghost-gold/50 transition-all">
              <h2 className="text-2xl font-bold mb-4 text-ghost-gold">Rythmicien & Animateur</h2>
              <p className="text-lg leading-relaxed font-light text-slate-300">
                Laissez-vous porter par l'énergie de Marc Charton, batteur depuis 15 ans, explorateur rythmique, animateur d'ateliers et formateur. Bénéficiez de l'expérience d'un rythmicien confirmé.
              </p>
            </div>
          </div>
        </section>

        {/* Déroulé type */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Déroulé type</h2>
          <div className="space-y-8">
            {[
              { num: 1, title: "Échauffement & connexion", desc: "Mise en mouvement, prise de contact avec le groupe et la pulsation" },
              { num: 2, title: "Découverte du rythme signé", desc: "Apprentissage des gestes de base et premiers exercices collectifs" },
              { num: 3, title: "Improvisation vocale", desc: "Exploration de la voix comme instrument, jeux d'écoute et de réactivité" },
              { num: 4, title: "Mise en pratique collective", desc: "Création de moments musicaux ensemble, intégration des apprentissages" },
              { num: 5, title: "Retour & échanges", desc: "Partage d'expériences, questions et ressources pour aller plus loin" },
            ].map((item) => (
              <div key={item.num} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ghost-orange/20 flex items-center justify-center text-ghost-orange font-bold text-xl">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formats proposés */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Formats proposés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Initiation", desc: "Découverte du rythme signé et de l'improvisation vocale pour les débutant·e·s" },
              { title: "Approfondissement", desc: "Pour celles et ceux qui ont déjà participé et souhaitent aller plus loin" },
              { title: "Session spéciale", desc: "Thématiques particulières ou formats étendus selon les occasions" },
            ].map((format) => (
              <div key={format.title} className="p-8 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                <p className="text-slate-400 text-sm font-light">{format.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modalités */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Modalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Durée", desc: "2h15 (généralement 18h15 - 20h30)" },
              { title: "Niveau", desc: "Tous niveaux, débutant·e·s bienvenu·e·s" },
              { title: "Matériel", desc: "Aucun matériel requis, juste votre présence" },
              { title: "Tarif", desc: "Variable selon les sessions (certaines sont gratuites)" },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liste des événements */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Événements</h2>
          
          {/* Événements à venir */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-ghost-gold">À venir</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-ghost-gold/20 to-white/5 p-6 rounded-xl border border-ghost-gold/50">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white">La communication gestuelle appliquée à l'impro vocale</h4>
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
            <h3 className="text-2xl font-semibold mb-6 text-slate-400">Passés</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 opacity-75">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-slate-300">IDBM : Introduction au rythme signé</h4>
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
                    <h4 className="text-xl font-bold mb-2 text-slate-300">"Les joies du groove"</h4>
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

        {/* CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Participer à un atelier</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            Consultez l'agenda pour voir les prochains ateliers ou contactez-moi pour être informé·e
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/a-propos#contact"
              className="px-8 py-4 bg-ghost-orange text-white rounded-full font-bold hover:bg-ghost-orange/80 transition-all"
            >
              Me contacter
            </Link>
            <Link
              to="/formats"
              className="px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              Retour aux formats
            </Link>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default AteliersPage;
