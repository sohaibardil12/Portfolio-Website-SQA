
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900">Featured Work</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Diverse QA environments where I validated critical business logic and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 px-3 py-1 bg-blue-50 rounded-lg">
                  {project.domain}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="text-xs font-bold text-slate-500 px-3 py-1 rounded-md bg-slate-100 border border-slate-200">
                  {tool}
                </span>
              ))}
            </div>

            <div className="space-y-3 flex-1">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">QA Methodology</p>
              <ul className="space-y-3">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-bold italic tracking-wide">Validation Complete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
