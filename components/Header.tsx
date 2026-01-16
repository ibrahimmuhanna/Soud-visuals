
import React, { useState, useEffect, useCallback } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services', description: 'Design Suite' },
    { name: 'Process', href: '#comparison', id: 'comparison', description: 'The Signature' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio', description: 'Curated Pages' },
    { name: 'AI Visualizer', href: '#visualizer', id: 'visualizer', description: 'Consultation' },
    { name: 'Contact', href: '#contact', id: 'contact', description: 'New Chapter' },
  ];

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'services', 'comparison', 'portfolio', 'visualizer', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="group flex flex-col"
          >
            <span className="text-xl md:text-2xl font-bold tracking-[0.15em] text-black font-serif leading-none">
              SOUD VISUALS
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-gray-400 mt-1 transition-colors group-hover:text-black">
              Editorial Studio
            </span>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 py-2 relative group ${
                activeSection === link.id ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-black transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'group-hover:w-1/2'
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:inline-block border border-black text-black px-7 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
          >
            Start Project
          </a>

          {/* Hamburger Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[1.5px] bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
            <span className={`w-6 h-[1.5px] bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-4 h-[1.5px] bg-black self-end transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px] w-6' : 'group-hover:w-6'}`}></span>
          </button>
        </div>
      </div>

      {/* Redesigned Proportional Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#FDFCF8] z-[55] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="h-full w-full flex flex-col md:flex-row">
          {/* Proportional Navigation Side */}
          <div className="flex-[1.2] flex flex-col justify-center px-10 md:px-20 pt-24 pb-12 overflow-y-auto">
            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-10 pb-4 border-b border-gray-100 w-full">Index</p>
              
              <nav className="flex flex-col gap-6 md:gap-8">
                {navLinks.map((link, idx) => (
                  <div 
                    key={link.id}
                    className={`transform transition-all duration-700 delay-[${idx * 75}ms] ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}
                  >
                    <a 
                      href={link.href} 
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="group flex items-baseline gap-6"
                    >
                      <span className="text-[9px] font-bold text-gray-300 tracking-[0.2em] group-hover:text-black transition-colors w-4">
                        0{idx + 1}
                      </span>
                      <div className="flex flex-col">
                        <span className={`text-xl md:text-2xl font-serif tracking-tight transition-all duration-300 ${
                          activeSection === link.id ? 'italic text-black pl-2 border-l-2 border-black' : 'text-gray-400 group-hover:text-black group-hover:translate-x-1'
                        }`}>
                          {link.name}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.description}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            <div className={`mt-20 border-t border-gray-100 pt-10 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col gap-8">
                <div className="space-y-2">
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400">Collaborate</p>
                  <p className="text-sm font-medium hover:italic cursor-pointer transition-all">studio@soudvisuals.com</p>
                </div>
                <div className="flex gap-8">
                  <a href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors">Behance</a>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Visual Side for Tablets */}
          <div className={`hidden md:flex flex-1 bg-black relative overflow-hidden transition-all duration-1000 delay-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             <div className="absolute inset-0">
               <img 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
                className={`w-full h-full object-cover opacity-30 transition-transform duration-[8000ms] ease-out ${isMenuOpen ? 'scale-110' : 'scale-100'}`}
                alt="Featured work"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
             </div>
             
             <div className="relative z-10 p-16 flex flex-col justify-end w-full">
                <div className={`transition-all duration-1000 delay-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/40 block mb-6">Archive 01</span>
                  <h3 className="text-3xl font-serif italic text-white mb-8 leading-tight">Designing for the <br/>Modern Reader</h3>
                  <a 
                    href="#portfolio" 
                    onClick={(e) => scrollToSection(e, 'portfolio')}
                    className="group inline-flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-white"
                  >
                    View Selection
                    <span className="w-10 h-px bg-white/30 group-hover:w-14 group-hover:bg-white transition-all"></span>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
