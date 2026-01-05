
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 pt-12">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Available for Opportunities
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
          Ensuring <span className="text-blue-600">Software Excellence</span> Through Automation.
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          I'm <span className="text-slate-900 font-semibold">Muhammad Sohaib Ardil</span>, a detail-oriented SQA & QA Automation Engineer with strong experience in manual and automation testing for web and mobile platforms using Playwright, Selenium, and JMeter/Postman.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/muhammad-sohaib-ardil-68447b277/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 rounded-2xl transition-all text-slate-600 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:msohaibardil678@gmail.com" className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 rounded-2xl transition-all text-slate-600 hover:text-blue-600">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+923329417429" className="p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 rounded-2xl transition-all text-slate-600 hover:text-blue-600">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 relative hidden lg:block">
        <div className="relative z-10 w-full max-w-sm mx-auto rounded-3xl overflow-hidden glass-card border-slate-200 p-6 flex flex-col justify-center gap-4 shadow-2xl">
          <h3 className="text-center text-lg font-semibold text-slate-800 mb-2">My Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold text-blue-600">4+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold text-indigo-600">15+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Projects Tested</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold text-green-600">10+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Skills Mastered</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold text-purple-600">5+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Certifications</p>
            </div>
          </div>
        </div>
        {/* Subtle Glow behind */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 to-indigo-100/40 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default Hero;
