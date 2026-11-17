import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  MessageCircle,
  Phone,
  Calendar,
  Star,
  Search
} from 'lucide-react';
import { HOSPITAL_METADATA, CHIEF_SURGEON, HOSPITAL_IMAGES } from '../../data/hospitalData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [concern, setConcern] = useState('Painless Laser Piles / Fissure / Fistula');
  const [preferredSession, setPreferredSession] = useState('Morning OPD (8:30 AM – 2:00 PM)');

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth 4K background parallax on scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  const handleInstantToken = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Shraddha Hospital, Priority OPD Token Request:\n` +
      `• Name: ${patientName || 'Patient'}\n` +
      `• Phone: ${patientPhone || 'N/A'}\n` +
      `• Department: ${concern}\n` +
      `• Session: ${preferredSession}`
    );
    window.open(`https://wa.me/919989513630?text=${message}`, '_blank');
  };

  return (
    <section
      ref={heroRef}
      id="overview"
      className="relative overflow-hidden bg-[#061A3A] text-white py-12 md:py-20 border-b border-slate-200"
    >
      {/* Full-Bleed 4K Hospital Background with Scroll Parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src={HOSPITAL_IMAGES.heroBg}
          alt="Shraddha Hospital Modern Clinical Center"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Clean Clinical Overlay for Maximum Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A]/92 via-[#072452]/82 to-[#061A3A]/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Pillar: Crisp, Minimalist High-Impact Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-sky-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Yamnampet, Secunderabad</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-400/20 border border-amber-300/30 text-xs font-bold text-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>4.9★ (100+ Google Reviews)</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.1] font-heading">
              Painless Laser &amp; Laparoscopic Surgery
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Led by <strong className="text-white font-semibold">{CHIEF_SURGEON.name}</strong> (MBBS, MS). Zero-cut daycare laser treatments, 5mm keyhole surgery, and 100% cashless insurance care.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#symptom-navigator"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B57D0] hover:bg-blue-600 text-white font-bold text-sm shadow-lg transition-all active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Find Your Treatment</span>
              </a>

              <a
                href={`tel:${HOSPITAL_METADATA.phoneClean}`}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>{HOSPITAL_METADATA.phone}</span>
              </a>
            </div>

            {/* Clean 4-Metric Trust Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 mt-2 border-t border-white/15">
              <div>
                <div className="text-2xl font-extrabold text-white font-heading">16+ Yrs</div>
                <div className="text-xs text-slate-300">Surgical Expertise</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-heading">10,000+</div>
                <div className="text-xs text-slate-300">Surgeries Done</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-sky-300 font-heading">24 Hrs</div>
                <div className="text-xs text-slate-300">Laser Recovery</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-300 font-heading">100%</div>
                <div className="text-xs text-slate-300">Cashless TPA</div>
              </div>
            </div>

          </div>

          {/* Right Pillar: Compact Priority OPD Token Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white text-slate-800 shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-[#0B57D0] px-6 py-4 text-white flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold font-heading flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sky-200" />
                    <span>Book Priority OPD Token</span>
                  </h2>
                  <p className="text-xs text-blue-100 mt-0.5">
                    Daily: 7:30 AM – 11:00 PM • Zero Waiting
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-400/20 border border-emerald-300/30 text-[11px] font-bold text-emerald-200">
                  Open Daily
                </span>
              </div>

              <form onSubmit={handleInstantToken} className="p-5 sm:p-6 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Patient Full Name *"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0B57D0] focus:bg-white focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp *"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0B57D0] focus:bg-white focus:outline-none"
                  />
                </div>

                <select
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0B57D0] focus:bg-white focus:outline-none"
                >
                  <option value="Painless Laser Piles / Fissure / Fistula">Laser Proctology (Piles, Fissure, Fistula)</option>
                  <option value="Laparoscopic Gallbladder Stones">Laparoscopic Gallbladder Stones</option>
                  <option value="Laparoscopic Hernia / Appendix">Laparoscopic Hernia / Appendix</option>
                  <option value="General Surgery / Family Planning">General Surgery &amp; Family Planning</option>
                  <option value="General Medicine / Gastric / Lab">General Medicine &amp; Diagnostics</option>
                </select>

                <select
                  value={preferredSession}
                  onChange={(e) => setPreferredSession(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0B57D0] focus:bg-white focus:outline-none"
                >
                  <option value="Morning OPD (8:30 AM – 2:00 PM)">Morning OPD (8:30 AM – 2:00 PM)</option>
                  <option value="Evening OPD (5:30 PM – 9:30 PM)">Evening OPD (5:30 PM – 9:30 PM)</option>
                  <option value="Urgent / Same-Day Emergency">Urgent / Emergency Visit</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm Token on WhatsApp</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0B57D0]" />
                    <span>Zero Booking Fee</span>
                  </span>
                  <span className="text-emerald-700 font-semibold">100% Private</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
