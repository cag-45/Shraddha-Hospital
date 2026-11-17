import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Building2,
  ChevronRight
} from 'lucide-react';
import { SYMPTOM_NAVIGATOR_DATA } from '../../data/hospitalData';

interface SymptomNavigatorProps {
  onBookClick: () => void;
}

export const SymptomNavigator: React.FC<SymptomNavigatorProps> = ({ onBookClick }) => {
  const [selectedId, setSelectedId] = useState<string>(SYMPTOM_NAVIGATOR_DATA[0].id);

  const activeItem =
    SYMPTOM_NAVIGATOR_DATA.find((item) => item.id === selectedId) || SYMPTOM_NAVIGATOR_DATA[0];

  return (
    <section id="symptom-navigator" className="py-14 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Short Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
            Symptom Finder
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
            Select Your Symptom for Instant Care Guidance
          </h2>
        </div>

        {/* Two-Column Interactive Schema */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Concise Symptom Selector */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {SYMPTOM_NAVIGATOR_DATA.map((item) => {
              const isSelected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#0B57D0] text-white border-[#0B57D0] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div className="text-sm font-bold leading-snug">
                    {item.symptomName}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: 4K Visual Clinical Guidance Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden"
              >
                {/* 4K HD Image Header */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
                  <img
                    src={activeItem.image}
                    alt={activeItem.probableCondition}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A]/95 via-[#061A3A]/50 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#0B57D0] text-xs font-bold">
                        {activeItem.surgicalType}
                      </span>
                      {activeItem.isPainless && (
                        <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-xs font-bold">
                          Virtually Painless
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading">
                      {activeItem.probableCondition}
                    </h3>
                  </div>
                </div>

                {/* Tight, Scannable Body */}
                <div className="p-6 space-y-5">
                  
                  {/* 3 Crisp Symptom Chips */}
                  <div className="flex flex-wrap gap-2">
                    {activeItem.commonSymptoms.map((sym, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B57D0]" />
                        <span>{sym}</span>
                      </span>
                    ))}
                  </div>

                  {/* Treatment Box */}
                  <div className="p-4 rounded-xl bg-[#F0F6FF] border border-blue-200">
                    <div className="text-xs font-bold text-[#0B57D0] uppercase tracking-wider">
                      Recommended Treatment
                    </div>
                    <div className="text-lg font-extrabold text-slate-900 mt-0.5 font-heading">
                      {activeItem.recommendedTreatment}
                    </div>
                    <p className="text-sm text-slate-700 mt-1">
                      {activeItem.doctorApproach}
                    </p>
                  </div>

                  {/* 3 Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Clock className="w-4 h-4 text-[#0B57D0] mx-auto mb-1" />
                      <div className="text-xs font-bold text-slate-900">{activeItem.recoveryTimeline}</div>
                      <div className="text-[11px] text-slate-500">Recovery</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <Building2 className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-slate-900">{activeItem.hospitalStay}</div>
                      <div className="text-[11px] text-slate-500">Stay</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-emerald-900">100% Cashless</div>
                      <div className="text-[11px] text-emerald-700">TPA Covered</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={`https://wa.me/919989513630?text=Hello%20Dr.%20Raghuram%20Reddy,%20I%20would%20like%20to%20consult%20for%20${encodeURIComponent(
                        activeItem.recommendedTreatment
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Dr. Reddy</span>
                    </a>
                    <button
                      onClick={onBookClick}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book OPD Visit</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
