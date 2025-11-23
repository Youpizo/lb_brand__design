import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('lb_cookie_consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lb_cookie_consent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize analytics
  };

  const handleDecline = () => {
    localStorage.setItem('lb_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] max-w-sm w-[calc(100%-2rem)] animate-fade-in-up">
      <div className="bg-white border-2 border-lb-blue rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(255,213,0,1)] relative overflow-hidden">
        
        {/* Close button for "Decline" shortcut */}
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 text-lb-grey hover:text-lb-pink transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Decor */}
        <div className="absolute -top-6 -left-6 bg-lb-pink/10 w-20 h-20 rounded-full blur-xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-lb-beige p-2 rounded-xl text-lb-blue border border-lb-blue/10 transform -rotate-12">
               <Cookie size={24} />
            </div>
            <h4 className="font-black text-xl text-lb-blue">Cookies & Confidentialité</h4>
          </div>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Ce site utilise des cookies pour analyser le trafic et vous garantir la meilleure expérience de navigation possible. Vous pouvez gérer vos préférences ci-dessous.
            <br />
            <Link to="/politique-confidentialite" className="text-lb-pink font-bold underline text-xs mt-2 inline-block hover:text-lb-blue">
              Lire la politique de confidentialité
            </Link>
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAccept}
              className="w-full bg-lb-blue text-white font-bold py-3 rounded-xl hover:bg-lb-pink hover:scale-[1.02] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <span>J'accepte</span>
            </button>
            <button
              onClick={handleDecline}
              className="w-full bg-transparent text-lb-grey font-bold py-2 rounded-xl hover:bg-gray-50 border-2 border-transparent hover:border-gray-200 transition-all text-sm"
            >
              Continuer sans accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};