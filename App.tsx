
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';
import ProjectsGrid from './components/ProjectsGrid';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-600/10 selection:text-blue-900">
      {/* Dynamic Light Background */}
      <div className="fixed inset-0 -z-10 bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px]" />
      </div>

      <Header isScrolled={isScrolled} />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 space-y-32 md:space-y-48">
        <Hero />
        
        <section id="skills" className="scroll-mt-32">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-32">
          <ExperienceSection />
        </section>

        <section id="projects" className="scroll-mt-32">
          <ProjectsGrid />
        </section>

        <section id="education" className="scroll-mt-32">
          <EducationCerts />
        </section>

        <section id="contact" className="scroll-mt-32 pb-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
