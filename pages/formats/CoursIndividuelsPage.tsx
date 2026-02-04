import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import StructuredData from '../../components/StructuredData';
import { courseSchema } from '../../components/StructuredData';

const CoursIndividuelsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cours Individuels"
        description="Cours individuels personnalisés en théorie musicale, rythmique et MAO. Accompagnement adapté à vos objectifs et votre niveau. Coaching personnalisé depuis le home-studio à Toulouse."
        url="https://ghost-note.fr/#/formats/cours-individuels"
        image="/images/batterie.jpg"
      />
      <StructuredData data={courseSchema(
        'Cours Individuels Ghost-Note',
        'Accompagnement personnalisé en théorie, rythmique ou MAO adapté à vos objectifs.',
        'https://ghost-note.fr/#/formats/cours-individuels'
      )} />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Cours Individuels</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Accompagnement personnalisé en théorie, rythmique ou MAO
          </p>
        </header>

        {/* Présentation */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="prose prose-lg text-slate-300 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              Les cours individuels Ghost-Note offrent un accompagnement personnalisé adapté à vos objectifs, 
              votre niveau et votre rythme. Que vous souhaitiez approfondir la théorie musicale, développer 
              votre sens du rythme ou maîtriser la production musicale assistée par ordinateur, je construis 
              avec vous un parcours sur mesure.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Chaque séance est l'occasion d'aborder des points précis, de pratiquer des exercices adaptés et 
              de recevoir des retours personnalisés. L'objectif est de vous donner les outils et la confiance 
              pour progresser de manière autonome.
            </p>
          </div>
        </section>

        {/* Thématiques */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Thématiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Théorie musicale",
                items: ["Harmonie et accords", "Gammes et modes", "Analyse musicale", "Solfège appliqué"]
              },
              {
                title: "Rythmique",
                items: ["Sens de la pulsation", "Polyrythmies", "Rythme signé", "Groove et placement"]
              },
              {
                title: "MAO",
                items: ["Production musicale", "Mixage et mastering", "Sound design", "Workflow créatif"]
              },
            ].map((theme) => (
              <div key={theme.title} className="p-6 bg-ghost-black rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4">{theme.title}</h3>
                <ul className="space-y-2 text-slate-400 text-sm font-light">
                  {theme.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Exemples d'objectifs */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Exemples d'objectifs</h2>
          <div className="space-y-6">
            {[
              "Comprendre l'harmonie pour pouvoir composer vos propres morceaux",
              "Développer votre sens du rythme pour jouer avec plus de précision et de groove",
              "Maîtriser Ableton Live pour produire vos propres tracks",
              "Structurer vos connaissances après des années de pratique autodidacte",
              "Préparer un examen ou un concours d'entrée en école de musique",
            ].map((objective, idx) => (
              <div key={idx} className="p-6 border-l-4 border-ghost-orange bg-white/5 rounded-r-xl">
                <p className="text-slate-300 font-light">
                  <strong className="text-white">{objective.split(' pour ')[0]}</strong>
                  {objective.includes(' pour ') && ` pour ${objective.split(' pour ')[1]}`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Modalités */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Modalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Durée", desc: "Séances de 1h ou 1h30, selon vos besoins" },
              { title: "Format", desc: "Présentiel ou visio (selon disponibilités et localisation)" },
              { title: "Fréquence", desc: "À définir avec vous selon vos objectifs et disponibilités" },
              { title: "Tarif", desc: "[Tarif à définir] - Contactez-moi pour plus d'informations" },
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
          <h2 className="text-4xl font-bold mb-6">Demander un premier échange</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            Contactez-moi pour discuter de vos besoins et objectifs. Je pourrai définir 
            avec vous un parcours adapté et répondre à toutes vos questions.
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
              ← Retour aux formats
            </Link>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default CoursIndividuelsPage;
