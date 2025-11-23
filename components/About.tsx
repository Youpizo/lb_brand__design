import React from 'react';
import { Heart, Zap, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  const values = [
    {
      title: "L'Énergie",
      description: "C'est le moteur de ma création. Je transmets ce dynamisme pour faire naître des marques vivantes et impactantes.",
      icon: <Zap className="w-8 h-8 text-lb-yellow" />,
      color: "border-lb-yellow"
    },
    {
      title: "La Proximité",
      description: "Écoute et bienveillance sont mes maîtres-mots. Je crée un climat de confiance pour une marque qui vous ressemble vraiment.",
      icon: <Heart className="w-8 h-8 text-lb-pink" />,
      color: "border-lb-pink"
    },
    {
      title: "L'Harmonie",
      description: "L'alliance parfaite entre le fond et la forme. Des identités justes : stratégiques, esthétiques et alignées.",
      icon: <ShieldCheck className="w-8 h-8 text-lb-blue" />,
      color: "border-lb-blue"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Beige Halo Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-lb-beige rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Storytelling Side */}
          <div className="prose prose-lg">
            <Reveal>
                <h2 className="text-sm font-bold tracking-[0.2em] text-lb-pink uppercase mb-4">MA VISION</h2>
            </Reveal>
            <Reveal delay={200}>
                <h3 className="text-4xl md:text-5xl font-black text-lb-blue mb-8 leading-tight">
                Révéler la <span className="text-lb-pink font-script text-6xl font-normal">richesse</span> <br/>
                de votre savoir-faire.
                </h3>
            </Reveal>
            
            <div className="space-y-6 text-lb-grey/80">
              <Reveal delay={300}>
                <p>
                    Choisir de travailler avec LB Brand Design, c’est faire le choix d’une collaboration fondée sur la confiance, la proximité et l’enthousiasme. 
                    J’aime m’impliquer pleinement dans chaque projet, avec écoute active et bienveillance.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <p className="font-medium text-lb-blue text-xl border-l-4 border-lb-blue pl-4 italic">
                    "J'ai à coeur de vraiment comprendre votre métier et vos besoins"
                </p>
              </Reveal>
              <Reveal delay={500}>
                <p>
                    Mes livrables sont pensé avec <span className="text-lb-pink">stratégie et exigence. </span>
                    Je construis une marque impactante qui parle à vos client.e.s, soutient vos objectifs et respectent vos valeurs et votre savoir-faire.
                </p>
              </Reveal>
            </div>

            <Reveal delay={600}>
                <div className="mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-lb-blue">
                    <img 
                        src="./img/lulufondbleu.webp" 
                        alt="Lucie" 
                        loading="lazy"
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div>
                    <p className="font-bold text-lb-blue">Lucie Boerez</p>
                    <p className="text-sm text-lb-grey">Fondatrice de LB Brand Design</p>
                </div>
                </div>
            </Reveal>
          </div>

          {/* Values Cards */}
          <div id="approach" className="flex flex-col gap-6 pt-12 md:pt-0 scroll-mt-32">
            {values.map((val, idx) => (
              <Reveal key={idx} direction="right" delay={idx * 200} width="100%">
                <div 
                    className={`bg-lb-beige p-8 rounded-2xl border-l-8 ${val.color} hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg`}
                >
                    <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                        {val.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-lb-grey">{val.title}</h4>
                    </div>
                    <p className="text-lb-grey/80 leading-relaxed">
                    {val.description}
                    </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};