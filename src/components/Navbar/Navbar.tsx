import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight, Plus } from 'lucide-react';
import { HOSPITAL_METADATA } from '../../data/hospitalData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Symptoms', href: '#symptom-navigator' },
    { label: 'Chief Surgeon', href: '#surgeon' },
    { label: 'Laser vs Open', href: '#comparison' },
    { label: 'Departments', href: '#specialties' },
    { label: 'Daycare', href: '#daycare' },
    { label: 'Insurance', href: '#insurance' },
    { label: 'Campus', href: '#facilities' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Identity */}
        <a href="#overview" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#0B57D0] text-white flex items-center justify-center shadow-sm">
            <Plus className="w-5 h-5 stroke-[3]" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold tracking-tight text-[#083884] font-heading leading-none">
              SHRADDHA <span className="text-[#0B57D0]">HOSPITAL</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 mt-0.5 leading-none">
              Laser &amp; Laparoscopic Center • Yamnampet
            </p>
          </div>
        </a>

        {/* Clean Desktop Links */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-slate-700 hover:text-[#0B57D0] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${HOSPITAL_METADATA.phoneClean}`}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-bold text-slate-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>{HOSPITAL_METADATA.phone}</span>
          </a>

          <button
            onClick={onBookClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B57D0] hover:bg-[#0842A0] text-white font-bold text-xs shadow-sm transition-all active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book OPD</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onBookClick}
            className="px-3 py-1.5 rounded-lg bg-[#0B57D0] text-white font-bold text-xs"
          >
            Book OPD
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-5 py-4 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-semibold text-slate-800 hover:text-[#0B57D0] py-2 border-b border-slate-100"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`tel:${HOSPITAL_METADATA.phoneClean}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-sm font-bold text-slate-800"
              >
                <Phone className="w-4 h-4 text-[#0B57D0]" />
                <span>Call: {HOSPITAL_METADATA.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 rounded-lg bg-[#0B57D0] text-white font-bold text-sm"
              >
                Book OPD Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
