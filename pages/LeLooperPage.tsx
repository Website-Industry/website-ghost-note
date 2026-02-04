import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const LeLooperPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Le Looper"
        description="Une communauté toulousaine pour créer, expérimenter et partager autour de la musique numérique. Collectif qui rassemble des passionné·es de création musicale numérique à Toulouse."
        url="https://ghost-note.fr/#/thematiques/lelooper"
        image="/images/logo/logo-with-text.png"
      />
      <div className="pt-32 pb-24 px-6 animate-fade-in">
        <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Le Looper</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Une communauté toulousaine pour créer, expérimenter et partager autour de la musique numérique
          </p>
        </header>

        {/* C'est quoi */}
        <section className="mb-32 max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <a
              href="https://www.lelooper.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ghost-gold text-black rounded-full font-bold hover:bg-ghost-gold/80 transition-all shadow-lg shadow-ghost-gold/20"
            >
              Visiter lelooper.org →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-ghost-gold/50 transition-all hover:shadow-xl hover:shadow-ghost-gold/10 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-ghost-gold transition-colors">
                Notre objectif
              </h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Créer un <strong className="text-white">espace de pratique, de rencontres et de transmission</strong> autour de la musique numérique au sens large.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-ghost-gold/50 transition-all hover:shadow-xl hover:shadow-ghost-gold/10 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-ghost-gold transition-colors">
                Les pratiques
              </h3>
              <p className="text-slate-300 font-light leading-relaxed">
                MAO, machines, live sets, live coding, sound design, beatmaking, improvisation, looping…
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-ghost-gold/50 transition-all hover:shadow-xl hover:shadow-ghost-gold/10 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-ghost-gold transition-colors">
                Notre ambition
              </h3>
              <p className="text-slate-300 font-light leading-relaxed">
                <strong className="text-white">Rassembler des gens de scènes différentes</strong>, décloisonner les styles, et rendre la pratique accessible à toutes et tous, sans barrière d'expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi une communauté */}
        <section className="mb-32 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi une communauté ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Apprendre ensemble",
                desc: "On progresse plus vite quand on partage techniques, astuces et découvertes. La transmission et l'entraide sont au cœur du projet."
              },
              {
                title: "Décloisonner",
                desc: "Pas de frontières de styles. Électronique, hip-hop, expérimental, ambient… Tous les univers se rencontrent et s'enrichissent mutuellement."
              },
              {
                title: "Créer des opportunités",
                desc: "Collaborations, scènes, ateliers, jams… Ensemble, on crée des moments et des projets qui n'existeraient pas seuls."
              },
              {
                title: "Rendre accessible",
                desc: "Anti-élite, anti-expertise obligatoire. Que tu sois débutant·e ou confirmé·e, tu as ta place. Le DIY et l'expérimentation sont encouragés."
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-ghost-black rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formats */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">À quoi ça ressemble ?</h2>
          <p className="text-lg text-slate-300 mb-8 text-center font-light">
            Des formats variés pour explorer et partager :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Horizon Live Coding — espace de pratique horizontal dédié au live coding",
              "Workflow — partage de processus de création musicale numérique",
              "Jam / sessions d'impro — improvisation collective, live sets",
              "Ateliers outils — découverte de logiciels et techniques (Ableton, Bitwig, Renoise, Sonic Pi, TidalCycles, Strudel…)",
              "Écoutes collectives / démos — partage de créations, retours bienveillants",
              "Mini-performances — moments de live, showcases",
              "Rencontres / échanges — discussions, partage d'expériences",
            ].map((format, idx) => (
              <div key={idx} className="p-4 border-l-4 border-ghost-gold bg-white/5 rounded-r-xl">
                <p className="text-slate-300 font-light text-sm">{format}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 max-w-4xl mx-auto bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoindre la communauté</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto font-light">
            Rejoins-nous sur nos différentes plateformes pour suivre l'actualité, échanger et participer à la communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/lelooper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ghost-gold text-black rounded-full font-bold hover:bg-ghost-gold/80 transition-all"
            >
              💬 Rejoindre le Discord
            </a>
            <a
              href="https://www.instagram.com/lelooper_toulouse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              📷 Instagram
            </a>
            <a
              href="https://www.facebook.com/lelooper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              👥 Facebook
            </a>
          </div>
          <div className="mt-6">
            <a
              href="https://www.lelooper.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost-gold hover:underline font-semibold"
            >
              Visiter le site lelooper.org →
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

export default LeLooperPage;
