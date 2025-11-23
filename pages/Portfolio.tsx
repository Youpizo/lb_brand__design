import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-lb-beige pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
             <span className="text-4xl">✨</span>
             <h1 className="text-sm font-bold tracking-[0.2em] text-lb-blue uppercase">Le Portfolio</h1>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="text-6xl md:text-8xl font-black text-lb-blue leading-none mb-8 tracking-tighter">
            PROJETS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-pink to-lb-yellow">RÉCENTS</span>
          </h2>
        </Reveal>
        <Reveal delay={400}>
          <p className="text-xl text-lb-grey/70 max-w-2xl font-medium">
            Découvrez une sélection de projets où stratégie et créativité s'unissent pour faire briller des marques audacieuses.
          </p>
        </Reveal>
      </div>

      {/* Creative Grid */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100} width="100%" className={`${idx % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}>
              <Link to={`/portfolio/${project.slug}`} className="group block relative">
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-transparent group-hover:border-lb-yellow transition-all duration-500 shadow-xl group-hover:shadow-2xl bg-white aspect-[4/3] md:aspect-auto md:h-[600px]">
                  
                  {/* Image */}
                  <img 
                    src={project.mainImage} 
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                         <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                            {project.category}
                         </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-lb-yellow transition-colors drop-shadow-lg">
                        {project.client}
                      </h3>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.services.slice(0,3).map((s, i) => (
                              <span key={i} className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium"># {s}</span>
                          ))}
                      </div>
                    </div>

                    <div className="bg-white text-lb-blue w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-[-45deg] transition-all duration-500 shadow-lg shrink-0">
                      <ArrowRight size={28} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 mb-12">
            <Reveal width="100%">
                <div 
                    onClick={handleContactClick}
                    className="relative w-full bg-lb-blue rounded-[3rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl group cursor-pointer border-4 border-transparent hover:border-lb-yellow transition-all duration-500"
                >
                    {/* Background Animations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-lb-pink rounded-full blur-[100px] opacity-40 animate-blob"></div>
                        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-lb-yellow rounded-full blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-full text-lb-yellow mb-8 border border-white/20 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                             <Sparkles size={48} />
                        </div>
                        
                        <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            Un projet en <span className="font-script font-normal text-lb-yellow">tête ?</span>
                        </h3>
                        
                        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Votre vision a du potentiel. Donnons-lui l'image qu'elle mérite pour marquer les esprits durablement.
                        </p>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleContactClick(e); }}
                            className="bg-lb-yellow text-lb-blue px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center gap-3"
                        >
                            Lancer mon projet 🚀
                        </button>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};