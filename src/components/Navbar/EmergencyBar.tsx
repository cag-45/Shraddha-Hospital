import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, Star } from 'lucide-react';
import { HOSPITAL_METADATA } from '../../data/hospitalData';

export const EmergencyBar: React.FC = () => {
  return (
    <div className="bg-[#083884] text-white text-xs py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Location & OPD Hours */}
        <div className="flex items-center flex-wrap gap-4 text-slate-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            <span className="font-medium">Near Bridge, Yamnampet, Rampally (Ghatkesar)</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-slate-200">
            <Clock className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            <span>OPD: 7:30 AM – 11:00 PM Daily | 24/7 Inpatient Care</span>
          </div>
        </div>

        {/* Right: Phone, WhatsApp, Rating */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${HOSPITAL_METADATA.phoneClean}`}
            className="flex items-center gap-1.5 font-bold hover:text-sky-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-300" />
            <span>Helpline: {HOSPITAL_METADATA.phone}</span>
          </a>

          <a
            href={HOSPITAL_METADATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <div className="hidden lg:flex items-center gap-1 text-amber-300 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-300" />
            <span>4.9★ (100+ Reviews)</span>
          </div>
        </div>

      </div>
    </div>
  );
};
