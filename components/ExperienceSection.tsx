
import React from 'react';
import { CheckCircle2, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center lg:text-left space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900">Professional Path</h2>
        <p className="text-slate-600 max-w-xl">
          Detailed history of high-impact SQA and automation roles.
        </p>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-10 border-l-4 border-blue-100">
            <div className="absolute -left-[14px] top-0 p-1.5 rounded-full bg-blue-600 ring-4 ring-white shadow-lg">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">{exp.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-blue-600 font-bold text-lg">{exp.company}</p>
                  <span className="text-slate-300">|</span>
                  <p className="text-sm text-slate-500 font-medium">{exp.period}</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
