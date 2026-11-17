import React, { useState } from 'react';
import { X, Calendar, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_METADATA, CHIEF_SURGEON } from '../../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [specialty, setSpecialty] = useState('Painless Laser Proctology (Piles, Fissure, Fistula)');
  const [preferredDate, setPreferredDate] = useState('Today (Immediate OPD)');
  const [preferredTime, setPreferredTime] = useState('Morning Session (08:30 AM – 02:00 PM)');
  const [symptoms, setSymptoms] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Shraddha Hospital, I would like to book an in-clinic appointment with Dr. B. Raghuram Reddy:\n\n` +
      `• Patient Name: ${patientName || 'Not specified'}\n` +
      `• Contact Phone: ${patientPhone}\n` +
      `• Medical Specialty: ${specialty}\n` +
      `• Preferred Day: ${preferredDate}\n` +
      `• Preferred Session: ${preferredTime}\n` +
      `• Brief Note: ${symptoms || 'General consultation'}`
    );
    window.open(`https://wa.me/919989513630?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-100 text-[11px] font-bold text-[#0B57D0] mb-2">
            <span>In-Clinic OPD Appointment</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Consult Dr. B. Raghuram Reddy
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Shraddha Hospital, Near Bridge, Yamnampet, Secunderabad.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Patient Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Contact Phone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Department / Condition *
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
            >
              <option value="Painless Laser Proctology (Piles, Fissure, Fistula)">Painless Laser Proctology (Piles, Fissure, Fistula)</option>
              <option value="Laparoscopic Gallbladder (Cholecystectomy)">Laparoscopic Gallbladder Stone Removal</option>
              <option value="Laparoscopic Appendix Surgery">Laparoscopic Appendix Surgery</option>
              <option value="Laparoscopic Hernia Repair">Laparoscopic Hernia Repair</option>
              <option value="General & Daycare Surgery (Hydrocele / Lipoma)">General Surgery (Hydrocele / Lipoma)</option>
              <option value="Family Planning (Vasectomy / Tubectomy)">Family Planning (Vasectomy / Tubectomy)</option>
              <option value="Chronic Gastric & Digestive Issues">Chronic Gastric &amp; Digestive OPD</option>
              <option value="General Medicine Consultation">General Medicine Consultation</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Day
              </label>
              <select
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
              >
                <option value="Today (Immediate OPD)">Today (Immediate OPD)</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="Day after Tomorrow">Day after Tomorrow</option>
                <option value="This Weekend">This Weekend</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                OPD Session
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
              >
                <option value="Morning Session (08:30 AM – 02:00 PM)">Morning (08:30 AM – 02:00 PM)</option>
                <option value="Evening Session (05:30 PM – 09:30 PM)">Evening (05:30 PM – 09:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Symptoms / Medical Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Briefly describe your symptoms or past diagnosis..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B57D0] focus:bg-white transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm &amp; Send to WhatsApp Desk</span>
            </button>
          </div>
        </form>

        <div className="mt-3.5 pt-3 border-t border-slate-200 text-center text-xs text-slate-500">
          Or call our reception desk directly at{' '}
          <a href={`tel:${HOSPITAL_METADATA.phoneClean}`} className="text-[#0B57D0] font-bold hover:underline">
            {HOSPITAL_METADATA.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
