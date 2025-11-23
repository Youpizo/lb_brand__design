import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { PortfolioPreview } from '../components/PortfolioPreview';
import { WhoAmI } from '../components/WhoAmI';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Animated Marquee Separator */}
      <div className="bg-lb-pink rotate-1 scale-105 border-y-4 border-lb-yellow shadow-xl z-20 relative overflow-hidden">
        <Marquee 
          items={["COMMUNICATION", "WEBSITE", "IDENTITÉ VISUELLE", "BRANDING", "SOCIAL MEDIA", "PRINT"]} 
          className="py-6 text-white"
        />
      </div>

      <About />
      
      <Services />
      
      <PortfolioPreview />
      
      <div className="bg-white py-10 overflow-hidden">
          <Marquee 
          items={["FAIRE BRILLER VOTRE SAVOIR-FAIRE", "RÉVÉLER VOTRE POTENTIEL", "SUBLIMER VOTRE IMAGE"]} 
          direction="right"
          className="py-2 text-lb-blue"
        />
      </div>

      <WhoAmI />

      <FAQ />

      <ContactForm />
    </>
  );
};