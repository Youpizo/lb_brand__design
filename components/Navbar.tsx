import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Offres', href: '#services' },
  { label: 'Approche', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-lb-beige/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Area */}
          <a href="#" className="relative z-50 group">
            <img 
              src="./assets/logo.png" 
              alt="LB Brand Design" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lb-grey font-medium text-sm uppercase tracking-wide hover:text-lb-pink transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-lb-pink after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-lb-blue text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-lb-pink transition-colors duration-300 shadow-lg hover:shadow-lb-pink/30 transform hover:-translate-y-0.5"
            >
              Lancer un projet
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 text-lb-blue p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-lb-beige z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
        isMobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute top-0 right-0 p-4 w-64 h-64 bg-lb-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 p-4 w-64 h-64 bg-lb-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-4xl font-black text-lb-blue hover:text-lb-pink hover:italic transition-all duration-300 uppercase tracking-tighter"
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setIsMobileOpen(false)}
          className="mt-8 bg-lb-yellow text-lb-blue px-8 py-3 rounded-full font-bold text-xl border-2 border-lb-blue shadow-[4px_4px_0px_0px_rgba(11,29,187,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
        >
          Me contacter
        </a>
      </div>
    </>
  );
};