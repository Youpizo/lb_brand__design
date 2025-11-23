import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lb-grey text-lb-beige pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <Reveal>
                {/* Logo insertion */}
                <img src="./assets/whitelogo.png" alt="LB Brand Design Logo" className="h-20 w-auto mb-8 object-contain" />
                
                <h2 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter">
                LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-yellow to-lb-pink">TALK</span>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-xl max-w-md text-gray-400 mb-8">
                Prêt.e à faire briller votre savoir-faire ? Discutons de votre projet autour d'un café (ou d'une visio).
                </p>
                <a 
                href="mailto:luboerez@hotmail.com" 
                className="inline-block bg-lb-beige text-lb-grey px-8 py-4 rounded-full font-bold text-lg hover:bg-lb-yellow hover:scale-105 transition-all duration-300"
                >
                luboerez@hotmail.com
                </a>
            </Reveal>
          </div>

          <div className="mt-8 lg:mt-0">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-lb-yellow transition-colors">Accueil</Link></li>
              <li><a href="/#vision" className="hover:text-lb-yellow transition-colors">Ma Vision</a></li>
              <li><a href="/#services" className="hover:text-lb-yellow transition-colors">Offres</a></li>
              <li><Link to="/portfolio" onClick={() => window.scrollTo(0,0)} className="hover:text-lb-yellow transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Socials</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lb_brand.design/" aria-label="Instagram" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-pink hover:border-lb-pink hover:text-white transition-all duration-300 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/lb-brand-design/posts/" aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-blue hover:border-lb-blue hover:text-white transition-all duration-300 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:luboerez@hotmail.com" aria-label="Email" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-yellow hover:border-lb-yellow hover:text-lb-blue transition-all duration-300 hover:rotate-12">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lb-beige/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 LB Brand Design. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" onClick={() => window.scrollTo(0,0)} className="hover:text-white">Mentions Légales</Link>
            <Link to="/politique-confidentialite" onClick={() => window.scrollTo(0,0)} className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};