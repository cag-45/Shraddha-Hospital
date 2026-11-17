import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../../data/hospitalData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'laser' | 'laparoscopic'>('all');

  const filteredReviews = VERIFIED_REVIEWS.filter((review) => {
    if (filter === 'all') return true;
    const proc = review.procedureTaken.toLowerCase();
    if (filter === 'laser') return proc.includes('laser') || proc.includes('piles') || proc.includes('fissure');
    if (filter === 'laparoscopic') return proc.includes('laparoscopic') || proc.includes('gallbladder') || proc.includes('hernia');
    return true;
  });

  return (
    <section id="reviews" className="py-14 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Verified Patient Proof
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 font-heading">
              4.9★ Rated by 100+ Patients
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'laser', label: 'Laser Proctology' },
              { id: 'laparoscopic', label: 'Laparoscopy' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as 'all' | 'laser' | 'laparoscopic')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  filter === btn.id
                    ? 'bg-[#0B57D0] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs transition-all flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0B57D0] flex items-center justify-center font-bold text-xs">
                      {review.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{review.author}</div>
                      <div className="text-[11px] text-slate-500">
                        {review.verifiedSource} • {review.procedureTaken}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  &quot;{review.comment}&quot;
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{review.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
