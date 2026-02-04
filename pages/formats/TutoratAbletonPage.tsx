import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const TutoratAbletonPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Tutorat Ableton Live"
        description="Accompagnement dans le cadre de la formation professionnelle Sawup. Je suis tuteur certifié pour accompagner les apprenants sur Ableton Live avec des rendez-vous individuels et un suivi personnalisé."
        url="https://ghost-note.fr/#/thematiques/tutorat-ableton"
        image="/images/logo.png"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Tutorat Ableton</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Accompagnement dans le cadre de la formation professionnelle Sawup
          </p>
        </header>

        {/* Présentation */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="prose prose-lg text-slate-300 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              J'accompagne des apprenants en tant que tuteur pour le centre de formation professionnelle{' '}
              <a href="https://www.sawup.fr" target="_blank" rel="noopener noreferrer" className="text-ghost-gold hover:underline font-semibold">
                Sawup
              </a>. 
              Je suis tuteur dans le cadre de leur formation professionnelle sur Ableton Live.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Cette formation certifiante permet d'apprendre à composer et éditer avec Ableton Live, de l'idée initiale 
              au morceau finalisé, en passant par l'arrangement et le mixage. En tant que tuteur, j'accompagne les 
              apprenants tout au long de leur parcours avec des rendez-vous individuels et un suivi personnalisé.
            </p>
            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-slate-300 mb-4 font-light">
                <strong className="text-white">Formation professionnelle certifiante :</strong> "Composer et éditer avec Ableton Live"
              </p>
              <p className="text-sm text-slate-400 mb-4">
                Certification professionnelle enregistrée au Répertoire Spécifique (RS7059) sous l'autorité du GIE CERTIFICATION AUDIONUMÉRIQUE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.sawup.fr/creez-votre-musique-avec-ableton-live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-ghost-gold text-black rounded-full font-bold hover:bg-ghost-gold/80 transition-all text-center"
                >
                  Découvrir la formation →
                </a>
                <a
                  href="https://www.sawup.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all text-center"
                >
                  Site Sawup →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que j'accompagne */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Ce que j'accompagne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Workflow",
                desc: "Organisation de votre projet, utilisation efficace des outils, raccourcis et astuces pour gagner en fluidité"
              },
              {
                title: "Arrangement",
                desc: "Structure de votre morceau, transitions, développement d'idées, équilibre des sections"
              },
              {
                title: "Sound Design",
                desc: "Création de sons, utilisation des synthés et effets, traitement audio créatif"
              },
              {
                title: "Production",
                desc: "Mixage, mastering, finalisation de vos tracks, préparation pour la diffusion"
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ghost-black rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mon rôle en tant que tuteur */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Mon rôle en tant que tuteur</h2>
          <div className="prose prose-lg text-slate-300 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              En tant que tuteur certifié pour Sawup, j'accompagne les apprenants tout au long de leur formation professionnelle 
              sur Ableton Live. Mon rôle consiste à :
            </p>
            <ul className="space-y-4 text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <span className="text-ghost-gold text-xl">•</span>
                <span>Proposer un suivi personnalisé adapté à chaque apprenant et à son projet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ghost-gold text-xl">•</span>
                <span>Répondre aux questions techniques et créatives sur Ableton Live</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ghost-gold text-xl">•</span>
                <span>Accompagner la réalisation d'un morceau complet supervisé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ghost-gold text-xl">•</span>
                <span>Offrir des rendez-vous individuels pour un accompagnement attentif</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed font-light mt-6">
              La formation se déroule sur un mois avec un parcours hybride de 70 heures, incluant des cours vidéo accessibles 
              à vie, des rendez-vous individuels avec votre tuteur, des masterclasses collectives et une assistance en direct.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
          <h2 className="text-4xl font-bold mb-6">En savoir plus sur la formation</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            Découvrez le programme complet de la formation professionnelle certifiante sur Ableton Live proposée par Sawup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.sawup.fr/creez-votre-musique-avec-ableton-live"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ghost-gold text-black rounded-full font-bold hover:bg-ghost-gold/80 transition-all"
            >
              Découvrir la formation →
            </a>
            <a
              href="https://www.sawup.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              Site Sawup →
            </a>
          </div>
        </section>

        {/* Retour */}
        <section className="text-center">
          <Link
            to="/thematiques"
            className="inline-block px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
          >
            ← Retour aux thématiques
          </Link>
        </section>
      </div>
      </div>
    </>
  );
};

export default TutoratAbletonPage;
