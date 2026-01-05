
import React, { useState, useEffect } from 'react';
import { Menu, X, Bug } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Intersection Observer to highlight active section as user scrolls
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust margin to trigger when section is central
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group text-left outline-none"
        >
          <div className="p-2 bg-blue-600 rounded-xl transition-transform group-hover:rotate-12 shadow-blue-200 shadow-lg">
            <Bug className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-none">Sohaib Ardil</span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">QA Engineer</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all outline-none ${
                  isActive 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:msohaibardil678@gmail.com"
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2.5 bg-slate-100 rounded-xl text-slate-600 border border-slate-200 outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 origin-top shadow-2xl ${
        isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-lg font-bold text-slate-800 p-4 rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-between text-left w-full outline-none"
            >
              {link.name}
              <Bug className="w-4 h-4 text-blue-200" />
            </button>
          ))}
          <a
            href="mailto:msohaibardil678@gmail.com"
            className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-center shadow-lg active:scale-[0.98] transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
