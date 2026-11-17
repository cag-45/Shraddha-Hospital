import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Phone, Search } from 'lucide-react';
import { INSURANCE_PARTNERS, HOSPITAL_METADATA } from '../../data/hospitalData';

export const InsuranceSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPartners = INSURANCE_PARTNERS.filter((partner) =>
    partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="insurance" className="py-14 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Concise 3-Step Cashless Guide */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                100% Cashless TPA Desk
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
                Zero-Hassle Cashless Surgery
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Direct pre-authorization with all leading insurers &amp; transparent fixed surgical packages.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              {[
                { num: '1', title: 'Present Health Card & ID', sub: 'At reception upon arrival' },
                { num: '2', title: '30-Min Pre-Approval', sub: 'Handled directly by our TPA desk' },
                { num: '3', title: 'Zero Cash Discharge', sub: 'Smooth cashless billing clearance' },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-slate-200">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{step.title}</div>
                    <div className="text-xs text-slate-500">{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/919989513630?text=Hello%20Shraddha%20Hospital,%20please%20verify%20my%20cashless%20health%20insurance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Verify Policy on WhatsApp</span>
              </a>
              <a
                href={`tel:${HOSPITAL_METADATA.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B57D0]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right: Live TPA Search */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search insurer (Star Health, HDFC ERGO, Care, Medi Assist...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0B57D0] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {filteredPartners.length > 0 ? (
                  filteredPartners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors"
                    >
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {partner.name}
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 text-[11px] text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Cashless Active</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 py-6 text-center text-sm text-slate-500">
                    All major private &amp; corporate policies accepted. Call <strong className="text-slate-900">{HOSPITAL_METADATA.phone}</strong>.
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
