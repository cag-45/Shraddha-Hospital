import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { HOSPITAL_METADATA } from '../../data/hospitalData';

export const HospitalMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const { lat, lng } = HOSPITAL_METADATA.address.coordinates;

    try {
      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 15,
        scrollWheelZoom: false,
      });

      // CartoDB Voyager tiles (Clean, modern, highly legible street map)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Custom Hospital Blue Pin
      const customIcon = L.divIcon({
        className: 'custom-hospital-marker',
        html: `
          <div style="position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 36px; height: 36px; background: rgba(11, 87, 208, 0.2); border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="position: relative; width: 28px; height: 28px; background: #0B57D0; border-radius: 50%; border: 2px solid #FFFFFF; box-shadow: 0 4px 10px rgba(11, 87, 208, 0.5); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: bold; font-size: 15px;">
              +
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

      const popupContent = `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; color: #0F172A; background: #FFFFFF; padding: 12px; border-radius: 10px; min-width: 230px; border: 1px solid #E2E8F0;">
          <div style="font-size: 14px; font-weight: bold; color: #0B57D0; margin-bottom: 2px;">${HOSPITAL_METADATA.name}</div>
          <div style="font-size: 11px; color: #64748B; margin-bottom: 6px;">Dr. B. Raghuram Reddy • Laser & Laparoscopic Center</div>
          <div style="font-size: 11px; color: #334155; line-height: 1.4; margin-bottom: 8px;">${HOSPITAL_METADATA.address.full}</div>
          <div style="font-size: 11px; font-weight: bold; color: #16A34A; margin-bottom: 8px;">● Open: 7:30 AM – 11:00 PM Daily</div>
          <a href="${HOSPITAL_METADATA.address.googleMapsDirectionsUrl}" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; background: #0B57D0; color: #FFFFFF; font-size: 11px; font-weight: bold; padding: 6px 10px; border-radius: 6px; text-decoration: none;">Get Google Maps Directions →</a>
        </div>
      `;

      marker.bindPopup(popupContent).openPopup();
      mapInstanceRef.current = map;
    } catch (e) {
      console.error('Error initializing map:', e);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[440px] rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-100">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Info Overlay */}
      <div className="absolute top-4 left-4 z-10 max-w-sm p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-md pointer-events-auto">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0B57D0] mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>HOSPITAL LOCATION &amp; ACCESS</span>
        </div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">{HOSPITAL_METADATA.name}</h4>
        <p className="text-xs text-slate-600 leading-snug mb-3">
          {HOSPITAL_METADATA.address.line1}, {HOSPITAL_METADATA.address.city}, {HOSPITAL_METADATA.address.state} - {HOSPITAL_METADATA.address.pincode}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={HOSPITAL_METADATA.address.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-xs transition-colors shadow-xs"
          >
            <Navigation className="w-3 h-3" />
            <span>Google Directions</span>
          </a>

          <a
            href={`tel:${HOSPITAL_METADATA.phoneClean}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </div>
  );
};
