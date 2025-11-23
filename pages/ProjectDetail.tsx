import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-4xl font-black text-lb-grey bg-lb-beige">Projet introuvable 🤷‍♀️</div>;
  }

  return (
    <div className="min-h-screen bg-lb-beige pb-20">
      
      {/* Hero Header */}
      <div className="relative h-[55vh] w-full overflow-hidden">
         <img 
            src={project.mainImage} 
            alt={project.client} 
            className="w-full h-full object-cover fixed top-0 left-0 -z-10"
            style={{ height: '55vh' }}
         />
         <div className="absolute inset-0 bg-black/40"></div>
         
         {/* Navigation Top Area */}
         <div className="absolute top-0 left-0 w-full pt-36 pb-4 px-6 md:px-12 z-20 pointer-events-none">
             <div className="container mx-auto pointer-events-auto">
                <Link to="/portfolio" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white hover:text-lb-blue transition-all font-bold uppercase tracking-wider text-xs border border-white/20">
                    <ArrowLeft size={14} />
                    Retour au portfolio
                </Link>
             </div>
         </div>
         
         <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto">
                <Reveal>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-2">
                        {project.client}
                    </h1>
                </Reveal>
                <Reveal delay={200}>
                    <div className="flex flex-wrap items-center gap-4 text-white/90 text-lg font-medium">
                        <span className="bg-lb-pink px-4 py-1 rounded-full text-white text-sm font-bold uppercase tracking-wider">{project.category}</span>
                    </div>
                </Reveal>
            </div>
         </div>
      </div>

      {/* Content Section */}
      <div className="bg-lb-beige relative z-10 rounded-t-[2.5rem] -mt-8 pt-16 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        {/* Decorative Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Desktop Sticky Sidebar Info */}
                <div className="lg:col-span-4 hidden lg:block h-full">
                    <div className="sticky top-32 space-y-12">
                        <Reveal>
                            <h3 className="text-sm font-bold tracking-[0.2em] text-lb-blue uppercase mb-6">Le Challenge</h3>
                            <p className="text-xl md:text-2xl font-medium text-lb-grey leading-relaxed">
                                {project.description}
                            </p>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="bg-white p-8 rounded-3xl border border-lb-yellow/30 shadow-sm">
                                <h3 className="text-sm font-bold tracking-[0.2em] text-lb-grey uppercase mb-6 flex items-center gap-2">
                                    <span>🛠️</span> Services
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.services.map((service, i) => (
                                        <span key={i} className="bg-lb-beige border border-lb-blue/10 px-4 py-2 rounded-xl text-sm font-bold text-lb-blue shadow-sm">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Mobile Info (Not Sticky) */}
                 <div className="lg:hidden space-y-12">
                     <div>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-lb-blue uppercase mb-6">Le Challenge</h3>
                        <p className="text-xl font-medium text-lb-grey leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-lb-yellow/30 shadow-sm">
                        <h3 className="text-sm font-bold tracking-[0.2em] text-lb-grey uppercase mb-6 flex items-center gap-2">
                            <span>🛠️</span> Services
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {project.services.map((service, i) => (
                                <span key={i} className="bg-lb-beige border border-lb-blue/10 px-4 py-2 rounded-xl text-sm font-bold text-lb-blue shadow-sm">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                 </div>

                {/* Gallery Images */}
                <div className="lg:col-span-8 space-y-8 md:space-y-16">
                    {project.gallery.map((img, idx) => (
                        <Reveal key={idx} delay={idx * 100} width="100%">
                            <div className={`rounded-[2rem] overflow-hidden shadow-2xl ${idx % 2 !== 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-700 bg-white border-4 border-white`}>
                                <img 
                                    src={img} 
                                    alt={`${project.client} detail ${idx + 1}`} 
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                    ))}
                    
                    {/* Next Project CTA */}
                     <div className="pt-20 pb-10 flex justify-end">
                        <Link to="/portfolio" className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-black text-lb-grey hover:text-lb-blue transition-colors">
                            <span>Projet suivant</span>
                            <span className="bg-lb-yellow rounded-full p-4 transform group-hover:translate-x-4 transition-transform duration-300">
                                <ArrowRight size={32} className="text-lb-blue" />
                            </span>
                        </Link>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};