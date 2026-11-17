import React from 'react';
import { PhoneCall, FileCheck2, Stethoscope, ArrowRight } from 'lucide-react';
import { HOSPITAL_METADATA } from '../../data/hospitalData';

export const EmergencyRibbon: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:divide-x md:divide-slate-200">
          
          <a href={`tel:${HOSPITAL_METADATA.phoneClean}`} className="flex items-center justify-between gap-3 md:pr-5 group">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#0B57D0]">24/7 Surgical Emergency</div>
                <div className="text-xs text-slate-500">Direct Helpline: {HOSPITAL_METADATA.phone}</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <a
            href={`https://wa.me/919989513630?text=Hello%20Dr.%20B.%20Raghuram%20Reddy,%20I%20would%20like%20a%20second%20opinion%20on%20my%20reports.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 md:px-5 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0B57D0] border border-blue-200 flex items-center justify-center shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#0B57D0]">Free Second Opinion</div>
                <div className="text-xs text-slate-500">WhatsApp scan reports directly to Dr. Reddy</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          <a
            href="#insurance"
            className="flex items-center justify-between gap-3 md:pl-5 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">100% Cashless Pre-Approval</div>
                <div className="text-xs text-slate-500">30-minute TPA clearance • All major insurers</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

        </div>
      </div>
    </section>
  );
};
