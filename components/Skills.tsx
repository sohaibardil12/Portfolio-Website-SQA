
import React from 'react';
import { 
  Bug, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Search, 
  Settings, 
  Globe, 
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Bug: <Bug className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />
};

const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-slate-900">Technical Expertise</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-lg">
          A robust testing stack built to deliver reliable, high-performing software products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div 
            key={idx} 
            className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {IconMap[cat.iconName]}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
