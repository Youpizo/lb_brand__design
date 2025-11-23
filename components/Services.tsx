import React from 'react';
import { Compass, PenTool, Rocket, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { ServiceOffer } from '../types';

const offers: ServiceOffer[] = [
  {
    id: 'strategy',
    title: 'La Boussole',
    subtitle: 'Stratégie de Communication',
    description: 'Ne naviguez plus à vue. Nous définissons ensemble votre cap, votre cible et votre message pour toucher juste.',
    features: ['Audit de l\'existant', 'Analyse de cible (Personas)', 'Positionnement & Message', 'Plan d\'action sur 6 mois'],
    cta: 'Définir mon cap',
    color: 'yellow',
    icon: 'compass'
  },
  {
    id: '360',
    title: 'L\'Envol',
    subtitle: 'Accompagnement 360°',
    description: 'L\'offre signature. De la stratégie au déploiement des supports. Je deviens votre partenaire créatif dédié.',
    features: ['Tout le pack Stratégie + Branding', 'Design des supports (Print/Web)', 'Templates Réseaux Sociaux', 'Suivi de production'],
    cta: 'Prendre mon envol',
    color: 'pink',
    icon: 'rocket'
  },
  {
    id: 'branding',
    title: 'L\'Essence',
    subtitle: 'Identité de Marque / Branding',
    description: 'Donnez corps à votre projet. Une identité visuelle unique qui capture vos valeurs et marque les esprits durablement.',
    features: ['Logo & Déclinaisons', 'Palette colorimétrique & Typographies', 'Brand Board', 'Charte graphique simplifiée'],
    cta: 'Révéler ma marque',
    color: 'blue',
    icon: 'pentool'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-lb-blue text-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <div className="flex flex-col items-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-lb-yellow uppercase mb-4">Mes Offres</h2>
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                    Des solutions pour chaque étape de <span className="font-script text-lb-pink font-normal text-6xl">votre évolution</span>
                </h3>
                <p className="text-white/80 text-lg">
                    Que vous lanciez votre projet ou que vous souhaitiez le faire grandir, j'ai conçu des accompagnements adaptés à vos ambitions.
                </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <Reveal key={offer.id} delay={idx * 200} direction="up" className={idx === 1 ? 'z-20' : 'z-10'}>
                <div 
                className={`group relative bg-white rounded-[2.5rem] p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-3 ${
                    idx === 1 ? 'md:-mt-12 md:mb-12 border-4 border-lb-yellow shadow-[0px_0px_40px_rgba(255,213,0,0.3)]' : 'shadow-xl'
                }`}
                >
                {/* Badge for Best Seller (Middle item) */}
                {idx === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lb-pink text-white text-xs font-bold uppercase py-2 px-4 rounded-full tracking-widest shadow-md">
                    Signature
                    </div>
                )}

                {/* Header */}
                <div className="mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white text-2xl shadow-lg ${
                    offer.color === 'yellow' ? 'bg-lb-yellow text-lb-blue' : 
                    offer.color === 'blue' ? 'bg-lb-blue' : 'bg-lb-pink'
                    }`}>
                    {offer.icon === 'compass' && <Compass />}
                    {offer.icon === 'pentool' && <PenTool />}
                    {offer.icon === 'rocket' && <Rocket />}
                    </div>
                    <h4 className={`text-3xl font-black mb-2 ${
                        offer.color === 'yellow' ? 'text-lb-grey' : 
                        offer.color === 'blue' ? 'text-lb-blue' : 'text-lb-pink'
                    }`}>{offer.title}</h4>
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-400">{offer.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {offer.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                    {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                        <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${
                            offer.color === 'yellow' ? 'text-lb-yellow' : 
                            offer.color === 'blue' ? 'text-lb-blue' : 'text-lb-pink'
                        }`} />
                        {feature}
                    </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                    <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 group-hover:gap-4 ${
                    offer.color === 'yellow' ? 'bg-lb-yellow text-lb-blue hover:bg-lb-yellow/80' : 
                    offer.color === 'blue' ? 'bg-lb-blue text-white hover:bg-lb-blue/90' : 'bg-lb-pink text-white hover:bg-lb-pink/90'
                    }`}>
                    {offer.cta}
                    <span>→</span>
                    </button>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};