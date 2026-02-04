
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

const AboutContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    format: 'individuel',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const faqs = [
    {
      q: "Faut-il savoir lire la musique ?",
      a: "Absolument pas. L'approche Ghost-Note privilégie l'oreille, le corps et le ressenti immédiat. On apprend la musique comme on apprend à parler."
    },
    {
      q: "Quel niveau faut-il avoir pour commencer ?",
      a: "Tous les niveaux sont bienvenus, de la découverte totale à l'intermédiaire confirmé souhaitant débloquer sa créativité."
    },
    {
      q: "Pourquoi intégrer le numérique dans l'apprentissage ?",
      a: "Le numérique est un outil d'émancipation. Il permet d'expérimenter sans limites matérielles et de rendre la musique accessible à moindre coût."
    },
    {
      q: "C'est quoi le projet central de Ghost-Note ?",
      a: "C'est une structure de transmission musicale informelle, humaine et vivante, proposant une alternative aux parcours académiques classiques."
    }
  ];

  // Schema FAQPage pour SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Ici on pourrait envoyer le formulaire
      console.log('Formulaire soumis:', formData);
    }
  };

  return (
    <>
      <SEOHead
        title="À Propos & Contact"
        description="Marc Charton, fondateur de Ghost-Note. Autodidacte passionné, j'ai tout appris seul sans diplôme d'État ni conservatoire. Contactez-moi pour discuter de vos besoins et projets musicaux."
        url="https://ghost-note.fr/#/a-propos"
        image="/images/logo/logo-with-text.png"
      />
      <StructuredData data={faqSchema} />
      <div className="pt-32 pb-24 animate-fade-in">
      {/* Bio Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <header>
              <span className="text-ghost-gold font-bold uppercase tracking-widest text-xs mb-4 block">Fondateur</span>
              <h1 className="text-5xl md:text-7xl font-serif italic">Marc Charton</h1>
            </header>
            <div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed">
              <p>
                Autodidacte passionné, j'ai tout appris seul, sans diplôme d'État ni conservatoire. Cette liberté m'a permis de forger une vision singulière de la musique.
              </p>
              <p>
                Ma mission avec Ghost-Note est de casser les mythes : le musicien n'est ni une superstar inaccessible, ni un génie solitaire. La musique est une expérience humaine qui appartient à tout le monde.
              </p>
            </div>
            <a 
              href="https://marc-charton.fr" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-ghost-gold rounded-full"
              aria-label="Visiter le site de Marc Charton (nouvelle fenêtre)"
            >
              Visiter marc-charton.fr
            </a>
          </div>
          <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200" 
              alt="Marc Charton, fondateur de Ghost-Note" 
              className="w-full h-full object-cover grayscale opacity-80"
              loading="lazy"
              width="1200"
              height="1600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ghost-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 bg-stone-900/30 mb-32" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-4xl font-serif italic mb-12 text-center text-ghost-gold">Questions Fréquentes</h2>
          <div className="space-y-8" role="list">
            {faqs.map((faq, idx) => (
              <article key={idx} className="p-8 bg-ghost-black border border-white/5 rounded-2xl" role="listitem">
                <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto bg-ghost-brown/20 p-8 md:p-16 rounded-3xl border border-ghost-orange/20 shadow-2xl">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-4xl font-serif italic mb-4">On discute ?</h2>
            <p className="text-slate-400 font-light">
              Une question, un projet ou juste l'envie de commencer : envoyez-moi un message.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Nom <span className="text-ghost-orange" aria-label="requis">*</span>
                </label>
                <input 
                  id="name"
                  type="text" 
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full bg-ghost-black border rounded-xl px-6 py-4 focus:border-ghost-orange outline-none transition-colors focus:ring-2 focus:ring-ghost-orange/50 ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-sm" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Email <span className="text-ghost-orange" aria-label="requis">*</span>
                </label>
                <input 
                  id="email"
                  type="email" 
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full bg-ghost-black border rounded-xl px-6 py-4 focus:border-ghost-orange outline-none transition-colors focus:ring-2 focus:ring-ghost-orange/50 ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="format" className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Format qui vous intéresse
              </label>
              <select 
                id="format"
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full bg-ghost-black border border-white/10 rounded-xl px-6 py-4 focus:border-ghost-orange outline-none transition-colors appearance-none focus:ring-2 focus:ring-ghost-orange/50"
                aria-label="Sélectionner le format qui vous intéresse"
              >
                <option value="individuel">Cours Individuels</option>
                <option value="cdmc">CDMC (Cours Collectifs)</option>
                <option value="atelier">Ateliers & Rythme Signé</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Message <span className="text-ghost-orange" aria-label="requis">*</span>
              </label>
              <textarea 
                id="message"
                rows={5}
                required
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                className={`w-full bg-ghost-black border rounded-xl px-6 py-4 focus:border-ghost-orange outline-none transition-colors resize-none focus:ring-2 focus:ring-ghost-orange/50 ${
                  errors.message ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="Votre message ici..."
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-400 text-sm" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-ghost-orange text-white rounded-full font-bold text-lg hover:bg-ghost-orange/80 transition-all focus:outline-none focus:ring-2 focus:ring-ghost-orange focus:ring-offset-2 focus:ring-offset-ghost-black"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutContact;
