import React from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-lb-beige relative">
       {/* Decorative Shape */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-lb-pink/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-lb-blue mb-4">Un projet en tête ?</h3>
            <p className="text-lb-grey/70">Remplissez ce formulaire et je vous recontacterai sous 48h.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-lb-grey">Nom Prénom</label>
                <input type="text" className="w-full bg-lb-beige/30 border-2 border-transparent focus:border-lb-blue focus:bg-white rounded-xl px-4 py-4 outline-none transition-all font-medium placeholder:text-gray-400" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-lb-grey">Email</label>
                <input type="email" className="w-full bg-lb-beige/30 border-2 border-transparent focus:border-lb-blue focus:bg-white rounded-xl px-4 py-4 outline-none transition-all font-medium placeholder:text-gray-400" placeholder="votre@email.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-lb-grey">Quel est votre besoin ?</label>
              <select className="w-full bg-lb-beige/30 border-2 border-transparent focus:border-lb-blue focus:bg-white rounded-xl px-4 py-4 outline-none transition-all font-medium text-lb-grey cursor-pointer">
                <option>Stratégie de communication</option>
                <option>Identité de marque (Branding)</option>
                <option>Accompagnement 360°</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-lb-grey">Message</label>
              <textarea rows={4} className="w-full bg-lb-beige/30 border-2 border-transparent focus:border-lb-blue focus:bg-white rounded-xl px-4 py-4 outline-none transition-all font-medium placeholder:text-gray-400" placeholder="Racontez-moi tout..."></textarea>
            </div>

            <div className="pt-4 text-center">
              <Button size="lg" variant="secondary" className="w-full md:w-auto min-w-[200px]">
                Envoyer ma demande
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};