
import React from 'react';
import { Bug } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-200 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-600 rounded text-white shadow-sm">
            <Bug className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-slate-900">Sohaib Ardil</span>
        </div>

        <p className="text-slate-500 text-sm font-medium">
          &copy; {currentYear} Muhammad Sohaib Ardil. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#skills" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">Top</a>
          <a href="https://linkedin.com/in/muhammad-sohaib-ardil-68447b277/" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="mailto:msohaibardil678@gmail.com" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
