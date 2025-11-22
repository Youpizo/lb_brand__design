import React from 'react';
import { Heart, Zap, ShieldCheck } from 'lucide-react';

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
    <section id="manifesto" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Storytelling Side */}
          <div className="prose prose-lg">
            <h2 className="text-sm font-bold tracking-[0.2em] text-lb-pink uppercase mb-4">Mon Manifesto</h2>
            <h3 className="text-4xl md:text-5xl font-black text-lb-blue mb-8 leading-tight">
              Révéler la <span className="text-lb-pink font-script text-6xl">richesse</span> <br/>
              de votre savoir-faire.
            </h3>
            
            <div className="space-y-6 text-lb-grey/80">
              <p>
                Après cinq années à étudier la communication, j'ai compris une chose essentielle : 
                ce qui me motive, c'est d'aider les autres à se révéler. À transformer une intuition floue en une identité lisible, solide et belle.
              </p>
              <p className="font-medium text-lb-blue text-xl border-l-4 border-lb-blue pl-4 italic">
                "Je fais le lien entre l'idée et la forme."
              </p>
              <p>
                Aujourd’hui, j’accompagne celles et ceux qui entreprennent avec sens et sincérité. 
                Je ne suis pas là pour faire "joli", je suis là pour construire de l'utile. 
                Pour poser les bases d’une marque claire qui donne confiance et fait grandir votre entreprise.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
               <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-lb-blue">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Lucie" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="font-bold text-lb-blue">Lucie Boerez</p>
                 <p className="text-sm text-lb-grey">Fondatrice de LB Brand Design</p>
               </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="flex flex-col gap-6 pt-12 md:pt-0">
            {values.map((val, idx) => (
              <div 
                key={idx}
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
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};