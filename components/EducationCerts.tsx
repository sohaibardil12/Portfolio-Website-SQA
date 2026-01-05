
import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const EducationCerts: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Education</h2>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-full shadow-lg" />
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900">{edu.degree}</h3>
                <p className="text-indigo-600 font-bold">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <span>{edu.period}</span>
                  {edu.details && (
                    <>
                      <div className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-indigo-600 font-black">{edu.details}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-extrabold text-slate-800 leading-tight">{cert.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-bold">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 shadow-inner space-y-4">
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest">
            Languages
          </h3>
          <div className="flex flex-wrap gap-8">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">English</p>
              <p className="text-sm text-slate-800 font-bold">Professional</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Urdu</p>
              <p className="text-sm text-slate-800 font-bold">Native</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Pashto</p>
              <p className="text-sm text-slate-800 font-bold">Native</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCerts;
