import React from 'react';
import { ArrowRight, Star, Users, Layers } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { useNavigate } from 'react-router-dom';

export const PortfolioPreview: React.FC = () => {
  const navigate = useNavigate();
  const stats = [
    { number: '20+', label: 'Projets réalisés', icon: <Layers size={24} /> },
    { number: '15+', label: 'Clients heureux', icon: <Users size={24} /> },
    { number: '5', label: 'Années d\'expérience', icon: <Star size={24} /> },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#111111] text-lb-beige relative overflow-hidden">
        {/* Creative Background Animation - Raw Brutalism */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* ONLY Moving Beam - Yellow */}
            <div className="absolute bottom-[40%] left-0 h-[4px] w-[30%] bg-gradient-to-r from-transparent via-lb-yellow to-transparent animate-slide-right opacity-80 blur-[2px]" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <Reveal>
                <h2 className="text-sm font-bold tracking-[0.2em] text-lb-pink uppercase mb-4">Portfolio</h2>
            </Reveal>
            <Reveal delay={200}>
                <h3 className="text-5xl md:text-7xl font-black mb-6 leading-none text-white">
                Mes dernières <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-blue via-lb-pink to-lb-yellow">réalisations</span>
                </h3>
            </Reveal>
            <Reveal delay={400}>
                <p className="text-gray-400 text-lg max-w-xl">
                Chaque projet est une nouvelle aventure où la stratégie rencontre la créativité.
                Découvrez comment j'ai aidé ces entrepreneurs à révéler leur potentiel.
                </p>
            </Reveal>
          </div>
          
          <Reveal direction="left" delay={600}>
            <Button variant="yellow" size="lg" icon={<ArrowRight />} onClick={() => navigate('/portfolio')}>
                Voir tous les projets
            </Button>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {stats.map((stat, index) => (
                <Reveal key={index} delay={index * 200} width="100%">
                    <div className="p-6 pl-0 md:pl-6 group hover:bg-white/5 rounded-2xl transition-colors duration-300 border border-transparent hover:border-lb-yellow/20">
                        <div className="text-lb-pink mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            {stat.icon}
                        </div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2">
                            {stat.number}
                        </div>
                        <div className="text-lb-yellow font-bold uppercase tracking-wider text-sm">
                            {stat.label}
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};