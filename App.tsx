import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-lb-grey bg-lb-beige min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Animated Marquee Separator */}
        <div className="bg-lb-blue rotate-1 scale-105 border-y-4 border-lb-yellow shadow-xl z-20 relative">
          <Marquee 
            items={["Stratégie", "Branding", "Design", "Communication", "Identité Visuelle", "Print", "Web"]} 
            variant="outline" 
            className="py-6 text-white"
          />
        </div>

        <About />
        
        <Services />
        
        <div className="bg-white py-10 overflow-hidden">
           <Marquee 
            items={["FAIRE BRILLER VOTRE SAVOIR-FAIRE", "RÉVÉLER VOTRE POTENTIEL", "SUBLIMER VOTRE IMAGE"]} 
            direction="right"
            className="py-2"
          />
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;