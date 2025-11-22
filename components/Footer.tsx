import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-lb-grey text-lb-beige pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-6xl md:text-8xl font-black mb-6 text-white tracking-tighter">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-yellow to-lb-pink">TALK</span>
            </h2>
            <p className="text-xl max-w-md text-gray-400 mb-8">
              Prêt.e à faire briller votre savoir-faire ? Discutons de votre projet autour d'un café (ou d'une visio).
            </p>
            <a 
              href="mailto:hello@lb-brand.com" 
              className="inline-block bg-lb-beige text-lb-grey px-8 py-4 rounded-full font-bold text-lg hover:bg-lb-yellow hover:scale-105 transition-all duration-300"
            >
              hello@lb-brand.com
            </a>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-lb-yellow transition-colors">Accueil</a></li>
              <li><a href="#manifesto" className="hover:text-lb-yellow transition-colors">Manifesto</a></li>
              <li><a href="#services" className="hover:text-lb-yellow transition-colors">Offres</a></li>
              <li><a href="#portfolio" className="hover:text-lb-yellow transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-pink hover:border-lb-pink hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-blue hover:border-lb-blue hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-lb-yellow hover:border-lb-yellow hover:text-lb-blue transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 LB Brand Design. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};