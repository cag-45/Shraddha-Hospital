import React from 'react';
import { motion } from 'framer-motion';
import { HOSPITAL_IMAGES } from '../../data/hospitalData';

export const FacilitiesSection: React.FC = () => {
  const gallery = [
    {
      img: HOSPITAL_IMAGES.operationTheatre,
      badge: 'HEPA Clean Air',
      title: 'Modular Operation Theatre',
      desc: 'Sterile positive-pressure OT for laser & laparoscopy.',
    },
    {
      img: HOSPITAL_IMAGES.recoverySuite,
      badge: '24/7 Inpatient',
      title: 'AC Private Recovery Suites',
      desc: 'Quiet, sunlit inpatient rooms with continuous monitoring.',
    },
    {
      img: HOSPITAL_IMAGES.nurseCare,
      badge: '1:1 Bedside Care',
      title: 'Compassionate Nursing Team',
      desc: 'Attentive round-the-clock care during daycare & stays.',
    },
    {
      img: HOSPITAL_IMAGES.diagnostics,
      badge: 'Same-Day Lab',
      title: 'In-House Diagnostic Testing',
      desc: 'Rapid blood work & pre-surgical screening on-site.',
    },
    {
      img: HOSPITAL_IMAGES.reception,
      badge: 'Barrier-Free',
      title: 'Wheelchair Access & Parking',
      desc: 'Ramped entry, accessible seating & free parking.',
    },
    {
      img: HOSPITAL_IMAGES.pharmacyCare,
      badge: 'Certified Safety',
      title: 'Pharmacy & Safe Drug Disposal',
      desc: 'Genuine surgical supplies & safe biomedical disposal.',
    },
  ];

  return (
    <section id="facilities" className="py-14 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B57D0]">
              Hospital Campus &amp; Safety
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
              Modern Infrastructure Built for Comfort
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">✓ Cards / UPI / NFC</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">✓ Wheelchair Ramp</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">✓ Free Parking</span>
          </div>
        </div>

        {/* 6-Card 4K Photo Showcase with Smooth Scroll Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[#083884] text-[11px] font-bold shadow-xs">
                  {item.badge}
                </span>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
