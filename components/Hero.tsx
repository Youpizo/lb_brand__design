import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-lb-yellow/30 to-lb-pink/30 rounded-full blur-[100px] animate-blob opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lb-blue/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-lb-blue/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-lb-pink"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-lb-grey">Brand Strategist & Designer</span>
                </div>
            </Reveal>

            <Reveal delay={200}>
                {/* Creative Layout Proposal */}
                <div className="relative">
                  <h1 className="flex flex-col">
                    {/* Line 1 */}
                    <span className="text-6xl md:text-8xl font-black text-lb-blue tracking-tighter leading-none">
                      FAITES
                    </span>
                    
                    {/* Line 2 - Aligned Left */}
                    <span className="relative text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-lb-blue to-lb-pink w-fit mt-2">
                      BRILLER
                      <svg className="absolute -bottom-4 -right-8 w-12 h-12 text-lb-yellow animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                      </svg>
                    </span>

                    {/* Line 3 - Mixed Typography */}
                    <div className="flex items-center gap-4 mt-4 flex-wrap">
                      <span className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-lb-grey/40 -rotate-2">
                        VOTRE
                      </span>
                      <span className="font-script text-7xl md:text-8xl text-lb-grey font-normal transform -rotate-3 origin-left hover:rotate-0 transition-transform duration-500">
                        savoir-faire
                      </span>
                    </div>
                  </h1>
                </div>
            </Reveal>

            <Reveal delay={400}>
                <p className="text-lg md:text-xl text-lb-grey/80 max-w-xl leading-relaxed border-l-4 border-lb-yellow pl-6 mt-4">
                J'accompagne les entrepreneur.e.s passionné.e.s à structurer et sublimer leur image.
                Stratégie, design et communication 360° pour un impact durable.
                </p>
            </Reveal>

            <Reveal delay={600}>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                <Button size="lg" variant="primary" icon={<ArrowDownRight size={20} />} onClick={scrollToServices}>
                    Découvrir mes offres
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/portfolio')}>
                    Voir le portfolio
                </Button>
                </div>
            </Reveal>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative perspective-1000 mt-12 lg:mt-0">
             <Reveal direction="left" delay={400}>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-lb-blue shadow-[12px_12px_0px_0px_rgba(255,213,0,1)] bg-lb-grey transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out hover:shadow-[20px_20px_0px_0px_rgba(255,0,128,1)]">
                <img 
                    src="./assets/photodeprofil.png" 
                    alt="Lucie Boerez Creative Portrait" 
                    width="800"
                    height="1000"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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
            </Reveal>
            
            {/* Floating Elements */}
            {/* Positioned inside photo area */}
             <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-xl rotate-12 animate-float hidden md:block z-20">
              <span className="text-4xl">⚡</span>
            </div>
            
            {/* Reduced size for the name tag */}
             <div className="absolute bottom-20 -left-12 bg-lb-pink text-white px-5 py-2.5 rounded-full shadow-lg -rotate-6 animate-float hidden md:block z-20 border-2 border-white">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-white"></div>
                 <span className="font-bold text-base whitespace-nowrap">Lucie Boërez</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};