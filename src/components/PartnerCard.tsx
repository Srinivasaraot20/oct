'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PartnerCardProps {
  logo: string;
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  index: number;
  onExplore?: () => void;
}

export default function PartnerCard({
  logo,
  name,
  tagline,
  description,
  ctaText,
  ctaHref,
  index,
  onExplore,
}: PartnerCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onExplore) {
      e.preventDefault();
      onExplore();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      onClick={onExplore}
      className="group relative flex flex-col justify-between h-full rounded-2xl bg-[#0a0d1a]/60 backdrop-blur-xl border border-white/5 hover:border-[#ff5c00]/30 transition-all duration-500 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] p-5 xs:p-6 sm:p-8 lg:hover:-translate-y-2 cursor-pointer"
    >
      {/* Animated border glow overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
        style={{
          background: 'radial-gradient(800px circle at var(--x, 50%) var(--y, 50%), rgba(255, 92, 0, 0.06), transparent 40%)'
        }}
      />
      
      {/* Card Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#ff5c00]/0 to-transparent group-hover:via-[#ff5c00]/30 rounded-2xl transition-all duration-700 pointer-events-none -z-10" />

      {/* Decorative top-right icon/light */}
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#ff5c00]/40 group-hover:bg-[#ff5c00] group-hover:animate-pulse transition-all duration-500" />

      <div>
        {/* Partner Header with Circular Logo */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6">
          <div className="relative w-14 h-14 flex-shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-white/10 to-white/5 group-hover:from-[#ff5c00]/50 group-hover:to-[#ff5c00]/20 transition-all duration-500">
            <div className="w-full h-full bg-[#050816] rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src={logo}
                alt={`${name} partner logo — OCTADECENT ecosystem`}
                className={`w-full h-full object-contain transition-transform duration-500 bg-transparent ${['Vyomora', 'DotFeelz', 'RevertedAI'].includes(name) ? 'scale-[1.15]' : 'scale-90'}`}
                loading="lazy"
                width={56}
                height={56}
              />
            </div>
            {/* Orange ring pulse on hover */}
            <div className="absolute inset-0 rounded-full border border-[#ff5c00]/50 scale-100 opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="font-montserrat font-extrabold text-base xs:text-[17px] sm:text-lg lg:text-xl tracking-tight text-white group-hover:text-[#ff5c00] transition-colors duration-300 leading-tight">
              {name}
            </h3>
            <p className="font-inter text-[10px] sm:text-[11px] text-[#ff5c00] font-semibold tracking-wider uppercase mt-1">
              {tagline}
            </p>
          </div>
        </div>

        {/* 3-4 line Description */}
        <p className="font-inter text-sm sm:text-[14px] text-[#b5b5b5] leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-auto pt-2">
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-[#ff5c00] hover:border-[#ff5c00] text-sm font-inter font-bold text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,92,0,0.3)]"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
