
import React from 'react';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-none">
          Let's <span className="text-blue-600">Connect</span>.
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Whether you have a question about automated testing or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <a 
          href="mailto:msohaibardil678@gmail.com" 
          className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col items-center gap-4"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
            <Mail className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Email Me</p>
            <p className="text-slate-800 font-bold break-all">msohaibardil678@gmail.com</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors mt-2" />
        </a>

        <a 
          href="tel:+923329417429" 
          className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col items-center gap-4"
        >
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
            <Phone className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Call Me</p>
            <p className="text-slate-800 font-bold">+92 332 9417429</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors mt-2" />
        </a>

        <a 
          href="https://linkedin.com/in/muhammad-sohaib-ardil-68447b277/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all flex flex-col items-center gap-4"
        >
          <div className="p-4 bg-slate-50 text-slate-600 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
            <Linkedin className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Networking</p>
            <p className="text-slate-800 font-bold">LinkedIn Profile</p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors mt-2" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
