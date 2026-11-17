import React from 'react';
import { CheckCircle2, XCircle, MessageCircle } from 'lucide-react';
import { SURGERY_COMPARISON_DATA } from '../../data/hospitalData';

export const SurgeryComparison: React.FC = () => {
  return (
    <section id="comparison" className="py-14 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Short Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Clinical Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
            Advanced Laser vs. Traditional Surgery
          </h2>
        </div>

        {/* Crisp Scannable Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-white">
          <div className="hidden md:grid grid-cols-12 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <div className="col-span-3 p-4 border-r border-slate-700">Parameter</div>
            <div className="col-span-4 p-4 border-r border-slate-700 text-slate-300">Traditional Open Surgery</div>
            <div className="col-span-5 p-4 bg-[#0B57D0] text-white">Shraddha Diode Laser</div>
          </div>

          <div className="divide-y divide-slate-200">
            {SURGERY_COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 text-sm ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                }`}
              >
                <div className="md:col-span-3 p-3.5 md:p-4 font-bold text-slate-900 md:border-r border-slate-200 bg-slate-100/50 md:bg-transparent">
                  {row.parameter}
                </div>
                <div className="md:col-span-4 p-3.5 md:p-4 text-slate-600 md:border-r border-slate-200 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-5 p-3.5 md:p-4 bg-[#F0F6FF]/60 text-slate-900 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{row.laser}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://wa.me/919989513630?text=Hello%20Shraddha%20Hospital,%20please%20share%20fixed%20package%20pricing%20for%20Laser%20Surgery.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Fixed Package Cost on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
