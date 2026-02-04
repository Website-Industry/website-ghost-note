import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import StructuredData from '../../components/StructuredData';
import { courseSchema } from '../../components/StructuredData';

const CDMCPage: React.FC = () => {

  return (
    <>
      <SEOHead
        title="CDMC - Cours de Musique Chill"
        description="CDMC (Cours de Musique Chill) : format collectif mensuel pour explorer théorie, pratique, écoute et MAO dans une ambiance chill. Une soirée par mois dans une ambiance conviviale."
        url="https://ghost-note.fr/#/formats/cdmc"
        image="/images/atelier.jpg"
      />
      <StructuredData data={courseSchema(
        'CDMC - Cours de Musique Chill',
        'Format collectif mensuel pour explorer théorie, pratique, écoute et MAO dans une ambiance chill.',
        'https://ghost-note.fr/#/formats/cdmc'
      )} />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">CDMC</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Cours de Musique Chill - Format collectif autonome
          </p>
        </header>

        {/* Présentation */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="prose prose-lg text-slate-300 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              CDMC (Cours de Musique Chill) est un format collectif mensuel qui propose d'explorer la musique 
              sous différents angles : théorie, pratique, écoute et MAO (Musique Assistée par Ordinateur).
            </p>
            <p className="text-lg leading-relaxed font-light">
              Chaque session se déroule sur une soirée, dans une ambiance conviviale et détendue. L'objectif 
              est de créer un espace où chacun·e peut apprendre, expérimenter et échanger sans pression.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6">Points clés</h2>
            <ul className="space-y-4">
              {[
                "Format collectif : échanges et partage d'expériences",
                "Une soirée par mois : rythme régulier sans surcharge",
                "Théorie + pratique + écoute + MAO : approche complète et variée",
                "Ambiance chill : apprentissage dans la détente et la bienveillance",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span className="font-light">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA principal */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
          <h2 className="text-4xl font-bold mb-6">Découvrir CDMC</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            CDMC possède son site dédié avec toutes les informations, les dates et les modalités d'inscription.
          </p>
          <a
            href="https://cdmc-toulouse.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-ghost-gold text-black rounded-full font-bold hover:bg-ghost-gold/80 transition-all"
          >
            Visiter cdmc-toulouse.fr →
          </a>
        </section>

        {/* Retour */}
        <section className="text-center">
          <Link
            to="/formats"
            className="inline-block px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
          >
            ← Retour aux formats
          </Link>
        </section>
        </div>
      </div>
    </>
  );
};

export default CDMCPage;
