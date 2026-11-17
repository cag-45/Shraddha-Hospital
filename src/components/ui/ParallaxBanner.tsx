import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ParallaxBannerProps {
  image: string;
  eyebrow: string;
  headline: string;
  subline: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  heightClass?: string;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  image,
  eyebrow,
  headline,
  subline,
  ctaLabel,
  ctaHref,
  onCtaClick,
  heightClass = 'h-[300px] sm:h-[360px]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll-linked vertical parallax + gentle zoom
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.08, 1.14]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full ${heightClass} overflow-hidden flex items-center bg-slate-900 border-b border-slate-200`}
    >
      {/* 4K Scroll-Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
      >
        <img
          src={image}
          alt={headline}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Clean Clinical Deep Gradient Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071E44]/90 via-[#071E44]/72 to-[#071E44]/40" />

      {/* Crisp Short Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] font-bold uppercase tracking-widest text-sky-200 mb-3">
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
            {subline}
          </p>

          {ctaLabel && (
            <div className="mt-5">
              {onCtaClick ? (
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-sky-50 text-[#083884] font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={ctaHref}
                  target={ctaHref?.startsWith('http') ? '_blank' : undefined}
                  rel={ctaHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-sky-50 text-[#083884] font-bold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
