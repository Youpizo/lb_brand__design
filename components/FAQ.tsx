import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const faqData = [
  {
    question: "Quels sont tes tarifs ?",
    answer: (
      <>
        <p className="mb-4">Mes tarifs dépendent de la nature du projet et de l’ampleur de l’accompagnement.</p>
        <p className="mb-4">Chaque marque a un niveau d’exigence, d’enjeux et de besoins différent, c’est pour cela que je propose uniquement des prestations sur-mesure.</p>
        <p className="font-medium text-lb-blue">Lors d’un appel découverte, je définis avec vous ce qui est réellement nécessaire pour votre projet, puis je vous transmets un devis clair, détaillé et adapté à votre objectif.</p>
      </>
    )
  },
  {
    question: "C’est quoi exactement le branding ?",
    answer: (
      <>
        <p className="mb-4 font-bold">Le branding, c’est tout ce qui construit une marque cohérente, reconnaissable et mémorable :</p>
        <p className="mb-4 italic text-gray-600 pl-4 border-l-2 border-lb-pink">Sa vision, son positionnement, son storytelling, son identité visuelle et la manière dont elle se présente au monde.</p>
        <p>C'est un ensemble réfléchi et indispensable pour permettre à votre entreprise d’être comprise, vue et désirée par les bonnes personnes.</p>
      </>
    )
  },
  {
    question: "Comment se déroule un accompagnement avec toi ?",
    answer: (
      <>
        <p className="mb-4">Toujours en trois temps :</p>
        <ul className="space-y-4 mb-4">
          <li className="flex items-start gap-3">
            <span className="bg-lb-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
            <span><strong className="text-lb-blue">Explorer :</strong> on clarifie votre contexte, vos objectifs, votre marché et votre vision.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-lb-pink text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
            <span><strong className="text-lb-pink">Structurer :</strong> je construis le socle stratégique + les pistes créatives adaptées.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-lb-yellow text-lb-blue font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
            <span><strong className="text-lb-yellow">Déployer :</strong> on passe à la mise en forme (identité, supports, contenus…), toujours avec un suivi régulier et un cadre clair.</span>
          </li>
        </ul>
        <p className="font-medium">Vous savez où on va, comment, et pourquoi — du début à la fin.</p>
      </>
    )
  },
  {
    question: "Combien de temps dure un projet 360° ?",
    answer: (
      <>
        <p className="mb-4">En moyenne, un projet de branding complet prend entre <strong className="text-lb-pink">4 et 8 semaines</strong>, selon l’ampleur du travail et votre disponibilité pour les validations.</p>
        <p>Un accompagnement stratégique ou opérationnel peut être plus court ou plus long. Je vous indique toujours un planning précis dès le début du projet.</p>
      </>
    )
  },
  {
    question: "Est-ce que tu accompagnes à distance ou seulement à Lille ?",
    answer: (
      <>
        <p className="mb-4 font-bold text-lg text-lb-blue">Les deux.</p>
        <p className="mb-4">Je suis basée à Lille, mais j’accompagne des client.e.s partout en France, et même à l’étranger, en visio.</p>
        <p>Mon process est pensé pour fonctionner parfaitement à distance : échanges fluides, livrables accessibles, suivi clair. Votre localisation n’est donc jamais un frein — seul votre projet compte.</p>
      </>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 text-[20rem] font-black text-lb-beige opacity-30 select-none leading-none rotate-12">?</div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-lb-blue/5 rounded-full blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          
          {/* Header Side */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-6 bg-lb-blue/5 px-4 py-2 rounded-full">
                <HelpCircle size={16} className="text-lb-blue" />
                <span className="text-xs font-bold tracking-[0.2em] text-lb-blue uppercase">Questions Fréquentes ☀️</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-lb-blue mb-6 leading-tight">
                On a tous des <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-pink to-lb-yellow">questions.</span>
              </h3>
              <p className="text-lb-grey/80 text-lg mb-8">
                Vous hésitez encore ? Voici les réponses aux questions que l'on me pose le plus souvent. Pour le reste, ma boîte mail est ouverte.
              </p>
              <a 
                href="#contact"
                onClick={scrollToContact}
                className="hidden lg:inline-flex items-center font-bold text-lb-pink hover:text-lb-blue transition-colors border-b-2 border-lb-pink hover:border-lb-blue pb-1 cursor-pointer"
              >
                Poser une autre question →
              </a>
            </Reveal>
          </div>

          {/* Accordion Side */}
          <div className="lg:col-span-8 space-y-4">
            {faqData.map((item, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className={`rounded-2xl transition-all duration-500 border-2 ${
                    openIndex === index 
                      ? 'bg-white border-lb-blue shadow-[8px_8px_0px_0px_rgba(11,29,187,0.1)]' 
                      : 'bg-white border-lb-beige hover:border-lb-yellow/50'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                    aria-expanded={openIndex === index}
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                      openIndex === index ? 'text-lb-blue' : 'text-lb-grey group-hover:text-lb-blue'
                    }`}>
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                       openIndex === index ? 'bg-lb-blue text-white rotate-180' : 'bg-lb-beige text-lb-blue group-hover:bg-lb-yellow'
                    }`}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            
            <div className="lg:hidden mt-8 text-center">
               <a 
                href="#contact" 
                onClick={scrollToContact}
                className="inline-flex items-center font-bold text-lb-pink border-b-2 border-lb-pink pb-1 cursor-pointer"
              >
                Poser une autre question →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};