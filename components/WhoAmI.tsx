import React from 'react';
import { Reveal } from './Reveal';
import { Quote, Sparkles } from 'lucide-react';

export const WhoAmI: React.FC = () => {
  return (
    <section className="py-32 bg-[#FFFBF5] relative overflow-hidden">
       {/* Creative Background - Structured yet Human */}
       <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Subtle Grid Pattern for Structure */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B1DBB08_1px,transparent_1px),linear-gradient(to_bottom,#0B1DBB08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Organic Soft Blobs for Creativity */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-lb-yellow/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-lb-pink/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
       </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Image Section - Creative & Human */}
            <div className="lg:col-span-5 relative group perspective-1000">
                <Reveal direction="right">
                    <div className="relative transform transition-transform duration-700 group-hover:rotate-1">
                        {/* Graphic Shapes behind */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-lb-blue rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-lb-yellow rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        
                        {/* Image Container */}
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
                            <img
                                src="./assets/lucievogue.png"
                                alt="Lucie Boerez Portrait"
                                className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-lb-blue/10 mix-blend-overlay"></div>
                        </div>

                        {/* Floating Sticker */}
                        <div className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-xl rotate-6 animate-float z-20">
                            <span className="text-4xl">✨</span>
                        </div>
                        
                        {/* Name Tag */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-lb-blue text-white px-8 py-3 rounded-full shadow-lg z-20 whitespace-nowrap border-2 border-white">
                            <span className="font-script text-2xl font-normal">Lucie Boërez</span>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Text Section - Storytelling */}
            <div className="lg:col-span-7 space-y-10">
                 <Reveal>
                    <div className="inline-flex items-center gap-2 mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-lb-blue/10">
                        <span className="text-lg">🩷</span>
                        <span className="text-sm font-bold tracking-[0.2em] text-lb-grey uppercase">Qui suis-je ?</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-lb-blue leading-tight">
                        L'humain au cœur de <br/>
                        <span className="relative inline-block">
                            <span className="relative z-10">la stratégie</span>
                            <span className="absolute bottom-3 left-0 w-full h-4 bg-lb-yellow -z-0 -rotate-1 opacity-80"></span>
                        </span>
                    </h3>
                </Reveal>

                <div className="space-y-8 text-lg text-lb-grey/90 leading-relaxed font-medium">
                    <Reveal delay={200}>
                        <p>
                           <span className="float-left font-script font-normal text-6xl text-lb-pink mr-3 mt-[-15px] leading-[0.7]">A</span>près cinq années à étudier la communication sous toutes ses formes, j’ai compris que ce qui me motive vraiment, c’est d’aider les autres à se révéler. À mettre des mots, des images, une structure sur ce qu’ils portent en eux mais qui est encore flou. <span className="text-lb-blue font-bold bg-lb-blue/5 px-1 rounded">J’ai toujours eu ce besoin de faire le lien entre l’idée et la forme.</span>
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="relative pl-8 border-l-4 border-lb-pink/50">
                            <p>
                                De transformer une intuition en une identité lisible, solide, belle ; mais surtout utile, pour poser les bases d’une marque claire, cohérente, qui donne confiance et qui permet de faire grandir son entreprise.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="bg-white p-8 rounded-3xl relative overflow-hidden group shadow-lg border border-lb-beige hover:border-lb-yellow transition-all duration-500">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-lb-yellow/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125"></div>
                            <Quote className="absolute top-6 right-6 text-lb-blue w-10 h-10 opacity-20 group-hover:opacity-100 transition-all" />
                            <p className="relative z-10">
                                <span className="font-bold text-lb-blue">Aujourd’hui, j’accompagne celles et ceux qui entreprennent avec sens et sincérité.</span> Je les aide à se recentrer, à structurer leur image, à assumer pleinement qui ils sont, pour qu’ils puissent communiquer avec justesse, gagner en visibilité, et faire rayonner leur projet sur le long terme.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};