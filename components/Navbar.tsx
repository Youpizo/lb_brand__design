import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: "Ma Vision", href: '#vision' },
  { label: 'Offres', href: '#services' },
  { label: 'Portfolio', href: '/portfolio' }, // Changed to route
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we are at the top of the page
      setIsAtTop(currentScrollY < 50);

      // Always show at the very top
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // If scrolling down AND current position is greater than previous
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          // If scrolling up
          setIsVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation logic
  const handleNavClick = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (href.startsWith('/')) {
        // It's a route (like /portfolio)
        navigate(href);
        window.scrollTo(0, 0);
    } else {
        // It's an anchor (like #contact)
        if (location.pathname !== '/') {
            // If we are not on home, go home first then scroll
            await navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // If we are on home, just scroll
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        (isVisible || isMobileOpen) ? 'translate-y-0' : '-translate-y-full'
      } ${isAtTop ? 'bg-transparent py-6' : 'bg-lb-beige shadow-md py-4'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="relative z-50 group block" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/assets/logo.png" 
              alt="LB Brand Design Logo" 
              width="80"
              height="80"
              className="w-auto h-20 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lb-grey font-bold text-sm uppercase tracking-widest hover:text-lb-pink transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-lb-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-lb-blue text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-lb-pink transition-all duration-300 shadow-lg hover:shadow-lb-pink/30 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              Lancer un projet
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 text-lb-blue p-2 hover:bg-lb-blue/5 rounded-full transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-lb-beige z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden flex flex-col justify-center items-center gap-8 ${
        isMobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute top-0 right-0 p-4 w-64 h-64 bg-lb-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob"></div>
        <div className="absolute bottom-0 left-0 p-4 w-64 h-64 bg-lb-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000"></div>
        
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`text-5xl font-black text-lb-blue hover:text-lb-pink hover:italic transition-all duration-300 uppercase tracking-tighter transform ${isMobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {item.label}
            {item.label === 'Ma Vision' && <span className="ml-2 text-3xl">☀️</span>}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="mt-8 bg-lb-yellow text-lb-blue px-8 py-4 rounded-full font-bold text-xl border-2 border-lb-blue shadow-[4px_4px_0px_0px_rgba(11,29,187,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-3"
        >
          Me contacter ☀️
        </a>
      </div>
    </>
  );
};