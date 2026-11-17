import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Activity, ShieldCheck, Stethoscope, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { SPECIALTY_CATEGORIES, HOSPITAL_IMAGES } from '../../data/hospitalData';

export const SpecialtiesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'laser' | 'laparoscopic' | 'general' | 'diagnostics'>('laser');

  const activeCategory = SPECIALTY_CATEGORIES.find((cat) => cat.id === activeTab) || SPECIALTY_CATEGORIES[0];

  const tabImages: Record<string, string> = {
    laser: HOSPITAL_IMAGES.laserSurgery,
    laparoscopic: HOSPITAL_IMAGES.operationTheatre,
    general: HOSPITAL_IMAGES.medicalTeam,
    diagnostics: HOSPITAL_IMAGES.diagnostics,
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Stethoscope':
        return <Stethoscope className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section id="specialties" className="py-14 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compact Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
              Clinical Departments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
              Specialized Surgical Care
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs overflow-x-auto no-scrollbar">
            {SPECIALTY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#0B57D0] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#0B57D0] hover:bg-slate-50'
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4K Department Hero Strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
              <img
                src={tabImages[activeCategory.id]}
                alt={activeCategory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A]/90 via-[#061A3A]/60 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center max-w-xl text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  Shraddha Department
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-1">
                  {activeCategory.title}
                </h3>
                <p className="text-sm text-slate-200 mt-1">
                  {activeCategory.tagline}
                </p>
              </div>
            </div>

            {/* Clean Compact Procedure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCategory.procedures.map((proc) => (
                <div
                  key={proc.id}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-bold text-slate-900 font-heading leading-snug">
                        {proc.name}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shrink-0">
                        <Clock className="w-3 h-3" />
                        {proc.recoveryTime}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-3.5">
                      {proc.fullDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {proc.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold">100% Cashless Eligible</span>
                    <a
                      href={`https://wa.me/919989513630?text=Hello%20Dr.%20Raghuram%20Reddy,%20I%20would%20like%20to%20consult%20for%20${encodeURIComponent(proc.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#0B57D0] hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Consult Doctor</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
