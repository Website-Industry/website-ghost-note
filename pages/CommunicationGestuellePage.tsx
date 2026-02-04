import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const CommunicationGestuellePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Communication Gestuelle dans l'Improvisation Musicale"
        description="Découvrez le Rythme Signé et le Vocal Painting : des langages gestuels qui démocratisent la création musicale collective. Outils de libération créative pour improviser ensemble sans barrière technique."
        url="https://ghost-note.fr/#/communication-gestuelle"
        image="/images/logo/logo-with-text.png"
      />
      <div className="animate-fade-in">
        {/* Hero */}
        <header className="pt-32 pb-20 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Le Rythme Signé & le Vocal Painting</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light mb-12">
              Des langages gestuels au service de la création collective
            </p>
          </div>
        </header>

        {/* Image avec effet parallaxe */}
        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden mb-20">
          <div 
            className="absolute inset-0 w-full h-[110%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/rythme_signe.png)',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center top'
            }}
            role="img"
            aria-label="Rythme Signé - gestes de direction musicale en temps réel"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ghost-black/30 to-ghost-black"></div>
          </div>
        </div>

        <div className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">

          {/* Pourquoi j'utilise ces outils */}
          <section className="mb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-ghost-gold">Pourquoi j'utilise ces outils</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
              <p>
                Je crois profondément que la musique se vit avant de s'expliquer. Le Rythme Signé et le Vocal Painting sont pour moi bien plus que des méthodes pédagogiques : ce sont des outils de libération créative qui permettent à chacun·e de faire de la musique immédiatement, sans barrière technique, sans partition, sans besoin de "savoir déjà".
              </p>
              <p>
                Ces langages gestuels créent un espace où l'improvisation collective devient accessible à tous. Peu importe votre niveau, votre expérience, votre âge : en quelques minutes, vous participez à une création musicale vivante, spontanée, et profondément humaine.
              </p>
              <p className="font-semibold text-white">Pour moi, utiliser ces langages signés, c'est :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="card-gradient p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-ghost-gold">Démocratiser la création musicale</h3>
                  <p className="text-slate-300 font-light">Tout le monde peut composer en temps réel</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-ghost-gold">Libérer la créativité</h3>
                  <p className="text-slate-300 font-light">L'erreur devient ressource, l'imprévu devient matière</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-ghost-gold">Créer du lien</h3>
                  <p className="text-slate-300 font-light">La musique naît de l'écoute collective, pas de performances individuelles</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-ghost-gold">Explorer sans jugement</h3>
                  <p className="text-slate-300 font-light">On expérimente, on joue, on découvre ensemble</p>
                </div>
              </div>
            </div>
          </section>

          {/* Le Rythme Signé */}
          <section className="mb-32 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/0 p-10 rounded-2xl border border-ghost-orange/30 mb-8">
              <h2 className="text-4xl font-bold mb-6 text-ghost-orange">Le Rythme Signé : composer la rythmique en temps réel</h2>
              
              {/* Vidéo */}
              <div className="mt-8 aspect-video rounded-lg overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CPzZAvCMKHw"
                  title="Le Rythme Signé en action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">C'est quoi ?</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Le Rythme Signé est une forme de composition musicale basée sur le tempo qui permet à un groupe de faire de l'improvisation en temps réel en étant dirigé par un chef d'orchestre utilisant des signes et gestes pour donner des consignes aux musiciens.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light mt-4">
                  Avec un répertoire de plus de 120 gestes, le directeur ou la directrice peut influer sur tous les aspects de la musique : rythme, volume, hauteur, structure, effets... Les musiciens se prêtent à un jeu libératoire qui questionne nos dynamiques collectives et ouvre la voie à un nouvel apprentissage collectif de la musique.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">D'où ça vient ?</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Le langage du Rythme Signé a été développé en 2006 par l'argentin Santiago Vazquez, grand génie musical inspiré par le travail de Butch Morris. Il crée alors un ensemble de percussionnistes avec lequel il organise des répétitions publiques : <strong className="text-white">La Bomba de Tiempo</strong>. À l'heure actuelle, ce groupe rassemble tous les lundis soirs plus de 2000 personnes dans le mythique club Konex de Buenos Aires.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light mt-4">
                  Le langage s'est depuis répandu dans le monde entier (Brésil, Japon, Espagne, France, Belgique, Italie, Mexique...), porté par des collectifs comme <strong className="text-white">Sysmo</strong> en Belgique ou <strong className="text-white">Orange Platine</strong> en France.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">Ce que ça permet</h3>
                <div className="space-y-6">
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-orange">Accessibilité immédiate</h4>
                    <p className="text-slate-300 font-light">
                      Les signes de base, très intuitifs et faciles d'apprentissage, permettent tout de suite de comprendre l'idée générale. Il n'y a même pas forcément besoin d'instruments pour débuter : des mains, un corps, des baguettes, un support sur lequel taper suffisent.
                    </p>
                  </div>
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-orange">Développement personnel et collectif</h4>
                    <p className="text-slate-300 font-light">
                      Écoute interne et externe, anticipation, compréhension des rôles, coordination, créativité, reconnaissance des différences, mise à profit des erreurs, capacité à diriger et à être dirigé, cohésion du groupe : autant de facultés que le langage aide à renforcer.
                    </p>
                  </div>
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-orange">Une expérience de transe collective</h4>
                    <p className="text-slate-300 font-light">
                      Les cycles rythmiques générés à l'aide du Rythme Signé invitent le public dans une transe où le corps et l'esprit sont à l'unisson, créant une fête diablement dansante qui suscite l'adhésion et la participation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Le Vocal Painting */}
          <section className="mb-32 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/0 p-10 rounded-2xl border border-ghost-gold/30 mb-8">
              <h2 className="text-4xl font-bold mb-6 text-ghost-gold">Le Vocal Painting : diriger l'improvisation vocale</h2>
              
              {/* Vidéo */}
              <div className="mt-8 aspect-video rounded-lg overflow-hidden border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/txaqbJLTnhU"
                  title="Le Vocal Painting en action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">C'est quoi ?</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Le Vocal Painting (VOPA) est un système qui offre un ensemble avancé d'outils pour donner forme et structure à la "musique du moment" dans n'importe quel chœur. Les chefs et les chanteurs peuvent mettre en œuvre de l'arrangement live, de la composition en direct, des changements de tonalité, de modules et de signature rythmique pendant une performance.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light mt-4">
                  Le système comprend actuellement 75 signaux gestuels faciles à comprendre, permettant au directeur d'ajuster l'expression musicale selon tous les paramètres désirés.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">D'où ça vient ?</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  Le Vocal Painting a ses racines dans le <strong className="text-white">Soundpainting</strong>, le langage universel multidisciplinaire de composition live créé par Walter Thompson à Woodstock, New York en 1974. VOPA est une évolution vocale de ce langage original, développée par le professeur <strong className="text-white">Jim Daus Hjernøe</strong> de la Royal Academy of Music au Danemark.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-ghost-gold">Ce que ça permet</h3>
                <div className="space-y-6">
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-gold">Création immédiate avec tous les niveaux</h4>
                    <p className="text-slate-300 font-light">
                      Les signaux se sont révélés étonnamment efficaces comme moyen facile et rapide de créer de la musique avec des chanteurs de tous niveaux, de la participation du public au plus haut niveau professionnel d'art vocal.
                    </p>
                  </div>
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-gold">Complément aux techniques classiques</h4>
                    <p className="text-slate-300 font-light">
                      Le Vocal Painting vient enrichir les techniques de direction de chœur traditionnelles, permettant d'explorer l'improvisation collective tout en gardant une structure musicale cohérente.
                    </p>
                  </div>
                  <div className="card-gradient p-6 rounded-xl border border-white/10">
                    <h4 className="text-xl font-bold mb-3 text-ghost-gold">Libération de la créativité vocale</h4>
                    <p className="text-slate-300 font-light">
                      En guidant l'improvisation par des gestes clairs, le Vocal Painting libère les chanteurs de la partition et les invite à explorer leur voix de manière spontanée et ludique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mon approche */}
          <section className="mb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-ghost-gold">Mon approche avec ces langages</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
              <p>
                J'utilise le Rythme Signé et le Vocal Painting principalement dans le cadre de mes ateliers collectifs, en collaboration avec des communautés comme <strong className="text-white">La Pulse</strong> à Toulouse (chant improvisé et percussion corporelle) et <strong className="text-white">Chant pour Tous</strong>.
              </p>
              <p>
                Dans ces espaces, ces langages gestuels deviennent des outils de communication musicale instantanée. Ils permettent de :
              </p>
              <ul className="space-y-3 ml-6 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span>Créer des œuvres collectives sans répétition préalable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span>Explorer la rythmique corporelle (body percussion) de manière ludique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span>Développer l'écoute et la réactivité collective</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span>Expérimenter l'improvisation vocale dans un cadre structuré mais libre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ghost-gold text-xl">•</span>
                  <span>Composer ensemble en temps réel, où chaque participant·e devient co-créateur·ice</span>
                </li>
              </ul>
              <p className="text-xl text-ghost-gold font-light italic mt-8">
                Le langage signé, c'est pour moi l'incarnation d'une musique accessible, vivante et profondément collective. C'est la preuve qu'on peut faire de la musique ensemble, maintenant, sans attendre d'avoir "le niveau". La créativité est déjà là. Il suffit de lui donner un cadre pour s'exprimer.
              </p>
            </div>
          </section>

          {/* Pour aller plus loin */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-ghost-gold">Pour aller plus loin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://labombadetiempo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-white/10 hover:border-ghost-gold/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">La Bomba de Tiempo</h3>
                <p className="text-slate-400 text-sm">Buenos Aires</p>
              </a>
              <a
                href="https://sysmo.be"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-white/10 hover:border-ghost-gold/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Sysmo</h3>
                <p className="text-slate-400 text-sm">Belgique</p>
              </a>
              <a
                href="https://orangeplatine.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-white/10 hover:border-ghost-gold/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Orange Platine</h3>
                <p className="text-slate-400 text-sm">France</p>
              </a>
              <a
                href="https://chantpourtous.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-white/10 hover:border-ghost-gold/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Chant pour Tous</h3>
                <p className="text-slate-400 text-sm">France</p>
              </a>
              <a
                href="https://theintelligentchoir.com/vocal-painting-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-white/10 hover:border-ghost-gold/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Vocal Painting App</h3>
                <p className="text-slate-400 text-sm">The Intelligent Choir</p>
              </a>
            </div>
          </section>

          {/* Retour */}
          <section className="text-center">
            <Link
              to="/formats/ateliers"
              className="inline-block px-8 py-4 border border-white/20 text-slate-300 rounded-full font-bold hover:bg-white/5 transition-all"
            >
              ← Retour aux ateliers
            </Link>
          </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunicationGestuellePage;
