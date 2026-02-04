import React from 'react';
import { Link } from 'react-router-dom';

const AteliersPage: React.FC = () => {
  return (
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
          <div className="prose prose-lg text-slate-300 space-y-6">
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
  );
};

export default AteliersPage;
