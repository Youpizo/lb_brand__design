import React, { useState } from 'react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { Send, MessageCircle, ArrowDownLeft, CheckCircle2, Loader2, Calendar, Video, Clock } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '✨ Stratégie de communication (La Boussole)',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/luboerez@hotmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            ...formData,
            _subject: `Nouveau message de ${formData.name} - Site Web`,
            _template: "table"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '✨ Stratégie de communication (La Boussole)', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-lb-beige relative overflow-hidden perspective-1000">
       {/* Decorative Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]"></div>

       {/* Floating Background Elements */}
       <div className="absolute top-20 left-10 animate-float animation-delay-1000 hidden md:block">
          <div className="text-5xl rotate-12 opacity-20">👋</div>
       </div>
       <div className="absolute bottom-40 right-20 animate-float animation-delay-2000 hidden md:block">
          <div className="text-5xl -rotate-12 opacity-20">⚡️</div>
       </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
             <Reveal>
                <div className="inline-flex items-center gap-2 mb-6 bg-lb-blue/5 px-4 py-2 rounded-full border border-lb-blue/10">
                    <span className="text-xl">🚀</span>
                    <span className="text-xs font-bold tracking-[0.2em] text-lb-blue uppercase">Contact</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-lb-blue mb-4 leading-tight">
                    On lance le <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-pink to-lb-yellow">projet ?</span>
                </h3>
                <p className="text-lb-grey/70 text-lg">
                    Deux façons de démarrer l'aventure. Choisissez celle qui vous ressemble.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* OPTION 1: FORM (The "Written" Card) - NOW ON LEFT */}
            <Reveal width="100%" direction="left" delay={200}>
                <div className="relative">
                    {/* Layers for stack effect */}
                    <div className="absolute inset-0 bg-lb-pink rounded-[2.5rem] transform rotate-2 translate-x-2 translate-y-2 border-4 border-black/5"></div>
                    
                    <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border-4 border-black/5 shadow-xl transform hover:-translate-y-1 transition-transform duration-500">
                        
                         {/* Fun Element: Sticker Top Right */}
                        <div className="absolute -top-4 -right-4 bg-lb-yellow text-lb-blue p-4 rounded-full shadow-lg rotate-12 z-30 hidden md:block border-2 border-white">
                            <MessageCircle size={24} fill="currentColor" />
                        </div>

                        {status === 'success' ? (
                             <div className="text-center py-12 animate-blob">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-lb-yellow mb-6 shadow-lg border-4 border-lb-blue">
                                    <CheckCircle2 size={48} className="text-lb-blue" />
                                </div>
                                <h3 className="text-4xl font-black text-lb-blue mb-4">Message envoyé !</h3>
                                <p className="text-xl text-gray-600 max-w-md mx-auto">
                                    Merci ! J'ai hâte de découvrir votre projet. Je vous réponds très vite.
                                </p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-lb-pink font-bold border-b-2 border-lb-pink hover:text-lb-blue hover:border-lb-blue transition-colors"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h4 className="text-3xl md:text-4xl font-black text-lb-blue mb-2">
                                        Par <span className="text-lb-pink font-script font-normal text-5xl">écrit</span>
                                    </h4>
                                    <p className="text-lb-grey/70">
                                        Racontez-moi votre histoire, vos rêves, vos ambitions à votre rythme.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="group">
                                        <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider text-lb-blue mb-1">
                                            Nom & Prénom
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-lb-beige/30 border-2 border-lb-beige focus:border-lb-pink focus:bg-white rounded-xl px-4 py-3 outline-none transition-all font-bold text-base placeholder:text-gray-300" 
                                            placeholder="Comment on vous appelle ?" 
                                        />
                                    </div>
                                    <div className="group">
                                        <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-lb-blue mb-1">
                                            Email
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-lb-beige/30 border-2 border-lb-beige focus:border-lb-pink focus:bg-white rounded-xl px-4 py-3 outline-none transition-all font-bold text-base placeholder:text-gray-300" 
                                            placeholder="Pour vous répondre" 
                                        />
                                    </div>
                                    
                                    <div className="group">
                                        <label htmlFor="subject" className="block text-xs font-black uppercase tracking-wider text-lb-blue mb-1">
                                            Sujet
                                        </label>
                                        <div className="relative">
                                            <select 
                                                name="subject"
                                                id="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-lb-beige/30 border-2 border-lb-beige focus:border-lb-pink focus:bg-white rounded-xl px-4 py-3 outline-none transition-all font-bold text-base text-lb-grey cursor-pointer appearance-none"
                                            >
                                                <option value="✨ Stratégie de communication (La Boussole)">✨ Stratégie de communication</option>
                                                <option value="🎨 Identité de marque (L'Essence)">🎨 Identité de marque</option>
                                                <option value="🚀 Accompagnement 360° (L'Envol)">🚀 Accompagnement 360°</option>
                                                <option value="💎 Demande personnalisée">💎 Demande personnalisée</option>
                                                <option value="☕ Juste pour dire bonjour">☕ Juste pour dire bonjour</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-lb-blue">
                                                <ArrowDownLeft className="rotate-[-45deg] w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-lb-blue mb-1">
                                            Votre Message
                                        </label>
                                        <textarea 
                                            name="message"
                                            id="message"
                                            required
                                            rows={3} 
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-lb-beige/30 border-2 border-lb-beige focus:border-lb-pink focus:bg-white rounded-xl px-4 py-3 outline-none transition-all font-bold text-base placeholder:text-gray-300 resize-none" 
                                            placeholder="Dites-m'en plus sur votre projet..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 font-bold text-center text-sm">Oups, erreur d'envoi. Réessayez plus tard !</p>
                                    )}

                                    <Button 
                                        size="md" 
                                        variant="yellow" 
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full border-2 border-lb-blue shadow-none mt-2"
                                    >
                                        {status === 'loading' ? (
                                            <span className="flex items-center gap-2">
                                                Envoi... <Loader2 className="animate-spin" size={20} />
                                            </span>
                                        ) : (
                                            <>
                                                <span className="mr-2">Envoyer le message</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </Reveal>

            {/* OPTION 2: CALENDLY (The "Meeting" Card) - NOW ON RIGHT */}
            <Reveal width="100%" direction="right">
                <div className="relative group">
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-lb-yellow rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lb-pink rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                    <div className="bg-lb-blue text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform rotate-[-1deg] hover:rotate-0 transition-all duration-500 border-4 border-white/10">
                        {/* Sticker */}
                        <div className="absolute top-6 right-6 bg-white text-lb-blue px-4 py-2 rounded-lg font-black text-xs uppercase tracking-wider rotate-6 shadow-lg">
                            Gratuit
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                                <Video size={32} className="text-lb-yellow" />
                            </div>

                            <h4 className="text-3xl md:text-4xl font-black mb-4">
                                L'appel <span className="text-lb-yellow font-script font-normal text-5xl">découverte</span>
                            </h4>
                            
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                Vous préférez le feeling du direct ? Réservez un créneau de 30 min pour faire connaissance et clarifier vos besoins.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-sm font-bold">
                                    <Clock className="text-lb-pink" size={20} />
                                    <span>30 minutes d'échange</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold">
                                    <Calendar className="text-lb-pink" size={20} />
                                    <span>Sans engagement</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold">
                                    <Video className="text-lb-pink" size={20} />
                                    <span>En visio (Google Meet)</span>
                                </li>
                            </ul>

                            <a 
                                href="https://calendly.com/boerez-lucie/rendez-vous-decouverte-lb-brand-design?month=2025-11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-white text-lb-blue text-center py-4 rounded-xl font-black text-lg hover:bg-lb-yellow hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                            >
                                Réserver mon créneau 📅
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};