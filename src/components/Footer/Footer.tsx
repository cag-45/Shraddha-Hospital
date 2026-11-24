import React from 'react';
import { Phone, MapPin, Star, Plus, Navigation, Car, Accessibility } from 'lucide-react';
import { HOSPITAL_METADATA, CHIEF_SURGEON } from '../../data/hospitalData';
import { HospitalMap } from '../Map/HospitalMap';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#081529] text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Interactive Map & Concise Arrival Card */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location &amp; Directions</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                Visit Shraddha Hospital, Yamnampet
              </h3>
            </div>

            <a
              href={HOSPITAL_METADATA.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B57D0] hover:bg-blue-600 text-xs sm:text-sm font-bold text-white transition-colors self-start sm:self-auto"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Maps Directions</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-8">
              <HospitalMap />
            </div>

            <div className="lg:col-span-4 rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Hospital Address</div>
                  <p className="text-sm text-white font-semibold mt-1 leading-relaxed">
                    {HOSPITAL_METADATA.address.full}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Car className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Free on-site &amp; street parking</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Accessibility className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Wheelchair ramp &amp; accessible seating</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs">
                  <div className="text-slate-400">Daily OPD Timings</div>
                  <div className="text-white font-bold mt-0.5">Mon – Sun: 7:30 AM – 11:00 PM</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">24/7 Inpatient &amp; Emergency Care</div>
                </div>
              </div>

              <a
                href={`tel:${HOSPITAL_METADATA.phoneClean}`}
                className="mt-5 w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Reception: {HOSPITAL_METADATA.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Streamlined 3-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 text-xs">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B57D0] text-white flex items-center justify-center font-bold">
                <Plus className="w-5 h-5 stroke-[3]" />
              </div>
              <span className="text-lg font-extrabold text-white font-heading">
                SHRADDHA <span className="text-sky-400">HOSPITAL</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Surgical &amp; Laser Center led by <strong className="text-slate-200">{CHIEF_SURGEON.name}</strong> (MBBS, MS).
            </p>
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.9★ Rating (100+ Reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-slate-400">
              <li><a href="#symptom-navigator" className="hover:text-white">Symptom Finder</a></li>
              <li><a href="#surgeon" className="hover:text-white">Dr. Raghuram Reddy</a></li>
              <li><a href="#specialties" className="hover:text-white">Laser Proctology</a></li>
              <li><a href="#specialties" className="hover:text-white">Laparoscopy</a></li>
              <li><a href="#insurance" className="hover:text-white">Cashless TPA</a></li>
              <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">Direct Contact</h4>
            <div>
              Phone: <a href={`tel:${HOSPITAL_METADATA.phoneClean}`} className="font-bold text-white hover:text-sky-300">{HOSPITAL_METADATA.phone}</a>
            </div>
            <div>
              WhatsApp: <a href={HOSPITAL_METADATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">Chat Now →</a>
            </div>
            <div>
              Web: <a href={HOSPITAL_METADATA.domainUrl} className="text-sky-300 hover:underline">{HOSPITAL_METADATA.domain}</a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>© {new Date().getFullYear()} {HOSPITAL_METADATA.name}. All rights reserved.</div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made by</span>
            <a
              href="https://www.zeltriodigital.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-400 hover:text-sky-300 hover:underline transition-colors"
            >
              Zeltrio Digital Services
            </a>
          </div>
          <div>Yamnampet, Rampally, Secunderabad, Telangana 501302</div>
        </div>

      </div>
    </footer>
  );
};
