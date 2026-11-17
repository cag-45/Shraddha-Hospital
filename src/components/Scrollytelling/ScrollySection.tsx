import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { HOSPITAL_IMAGES } from '../../data/hospitalData';

export const ScrollySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      time: '08:00 AM',
      title: 'Fast Check-In & Cashless Desk',
      desc: 'Zero lobby waiting. Quick vitals & 30-min insurance pre-approval.',
      image: HOSPITAL_IMAGES.reception,
      badge: 'Zero Waiting'
    },
    {
      step: '02',
      time: '10:00 AM',
      title: 'Painless Laser / Keyhole OT',
      desc: 'Zero-cut laser or 5mm keyhole surgery by Dr. Raghuram Reddy.',
      image: HOSPITAL_IMAGES.operationTheatre,
      badge: 'Zero Stitches'
    },
    {
      step: '03',
      time: '01:00 PM',
      title: 'AC Recovery Suite & 1:1 Care',
      desc: 'Walk comfortably within 2 hours with gentle nursing care.',
      image: HOSPITAL_IMAGES.recoverySuite,
      badge: 'Walk in 2 Hrs'
    },
    {
      step: '04',
      time: '06:00 PM',
      title: 'Same-Evening Discharge',
      desc: 'Cashless clearance complete. Return home comfortably the same day.',
      image: HOSPITAL_IMAGES.nurseCare,
      badge: 'Home Same Day'
    }
  ];

  return (
    <section id="daycare" className="py-14 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
            24-Hour Daycare Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
            Arrive Morning. Walk Home Same Evening.
          </h2>
        </div>

        {/* 4 Visual Step Cards with 4K Photos & Scroll Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 4K Step Photo */}
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#0B57D0] text-white text-xs font-bold">
                    {s.time}
                  </span>
                  <span className="absolute bottom-2.5 right-3 text-white/80 font-heading font-extrabold text-2xl leading-none">
                    {s.step}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{s.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
