import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MessageCircle, Star, Clock } from 'lucide-react';
import { CHIEF_SURGEON, HOSPITAL_METADATA, HOSPITAL_IMAGES } from '../../data/hospitalData';

interface SurgeonSectionProps {
  onBookClick: () => void;
}

export const SurgeonSection: React.FC<SurgeonSectionProps> = ({ onBookClick }) => {
  return (
    <section id="surgeon" className="py-14 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 4K Clinical Portrait with Smooth Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
              <div className="h-[400px] sm:h-[440px] overflow-hidden bg-slate-100">
                <img
                  src={HOSPITAL_IMAGES.doctorConsult}
                  alt="Dr. B. Raghuram Reddy Chief Surgeon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs font-bold mb-2">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>4.9★ Rated Chief Surgeon</span>
                </div>
                <h3 className="text-2xl font-extrabold font-heading">{CHIEF_SURGEON.name}</h3>
                <p className="text-xs text-sky-200 font-semibold mt-0.5">{CHIEF_SURGEON.qualifications}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Crisp Bio, Achievements & Official OPD Timetable */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
                Chief Surgeon &amp; Medical Director
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
                {CHIEF_SURGEON.name}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mt-2 max-w-xl">
                {CHIEF_SURGEON.bio}
              </p>
            </div>

            {/* 4 Concise Achievement Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CHIEF_SURGEON.achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Clean Compact OPD Schedule Table */}
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-xs">
              <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-2 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Daily OPD Consultation Schedule</span>
                </span>
                <span className="text-emerald-400">● Open 7 Days</span>
              </div>
              <div className="divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-2 px-4 py-3">
                  <span className="font-bold text-[#0B57D0]">Morning OPD (Mon–Sun)</span>
                  <span className="font-semibold text-slate-900 text-right">08:30 AM – 02:00 PM</span>
                </div>
                <div className="grid grid-cols-2 px-4 py-3">
                  <span className="font-bold text-[#0B57D0]">Evening OPD (Mon–Sun)</span>
                  <span className="font-semibold text-slate-900 text-right">05:30 PM – 09:30 PM</span>
                </div>
                <div className="grid grid-cols-2 px-4 py-3 bg-emerald-50/60">
                  <span className="font-bold text-emerald-800">Emergency &amp; Inpatient</span>
                  <span className="font-bold text-emerald-800 text-right">24/7 On-Call Team</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onBookClick}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-sm shadow-sm transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
              <a
                href={HOSPITAL_METADATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Doctor</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
