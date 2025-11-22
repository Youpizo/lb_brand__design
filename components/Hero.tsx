import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-lb-yellow/30 to-lb-pink/30 rounded-full blur-[100px] animate-blob opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lb-blue/10 rounded-full blur-[80px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-lb-blue/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-lb-pink animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-lb-grey">Brand Strategist & Designer</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-lb-blue leading-[0.9] tracking-tighter">
              FAIRE <br/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lb-blue to-lb-pink">
                BRILLER
                <svg className="absolute -bottom-2 w-full h-3 text-lb-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br/>
              VOTRE <span className="font-script text-6xl md:text-8xl lg:text-9xl text-lb-grey font-normal lowercase ml-4">savoir-faire</span>
            </h1>

            <p className="text-lg md:text-xl text-lb-grey/80 max-w-xl leading-relaxed mt-4 border-l-4 border-lb-yellow pl-6">
              J'accompagne les entrepreneur.e.s passionné.e.s à structurer et sublimer leur image.
              Stratégie, design et communication 360° pour un impact durable.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button size="lg" variant="primary" icon={<ArrowDownRight size={20} />}>
                Découvrir mes offres
              </Button>
              <Button size="lg" variant="outline">
                Voir le portfolio
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-lb-blue shadow-[12px_12px_0px_0px_rgba(255,213,0,1)] bg-lb-grey transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="./assets/photodeprofil.png" 
                alt="Lucie Boerez Creative Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-lb-blue/90 to-transparent p-8">
                <div className="flex items-center gap-3">
                  <div className="bg-lb-yellow p-2 rounded-full text-lb-blue">
                    <Sparkles size={20} />
                  </div>
                  <p className="text-white font-bold text-lg">Créativité & Stratégie</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl rotate-12 animate-float hidden md:block">
              <span className="text-4xl">🚀</span>
            </div>
             <div className="absolute bottom-20 -left-12 bg-lb-pink text-white px-6 py-3 rounded-full shadow-lg -rotate-6 animate-float hidden md:block">
              <span className="font-bold">#GirlBoss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};