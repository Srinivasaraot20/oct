'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, Globe, Cpu, TrendingUp, ArrowRight,
  Palette, Briefcase, Layers, Users, Target, Store
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const cards = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Quick Commerce Solutions',
    description: 'Launch, manage, and scale online commerce businesses with ultra-fast checkouts and hyperlocal delivery systems.',
    href: '/services/ecommerce-quick-commerce',
    iconAnim: 'float',
    accent: '#ff6b00',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Brand Growth',
    description: 'Accelerate customer acquisition and brand visibility through data-driven campaigns and conversion rate optimization.',
    href: '/services/digital-marketing-brand-growth',
    iconAnim: 'wave',
    accent: '#ff6b00',
  },
  {
    icon: Cpu,
    title: 'AI & Business Automation',
    description: 'Streamline operations, eliminate manual workflows, and build custom generative AI tools built for your enterprise.',
    href: '/services/ai-business-automation',
    iconAnim: 'neural',
    accent: '#ff6b00',
  },
  {
    icon: Globe,
    title: 'Web, App & Software Development',
    description: 'Engineer custom web architectures, native mobile apps, and robust enterprise software built to scale.',
    href: '/services/web-app-software-development',
    iconAnim: 'rotate',
    accent: '#ff6b00',
  },
  {
    icon: Palette,
    title: 'Creative Studio',
    description: 'Design premium visual assets, corporate branding guides, and high-converting UI/UX user experiences.',
    href: '/services/creative-studio',
    iconAnim: 'pulse',
    accent: '#ff6b00',
  },
  {
    icon: Briefcase,
    title: 'Business Strategy & Startup Consulting',
    description: 'Accelerate product-market fit, capital fundraising strategies, and standard operating blueprints for founders.',
    href: '/services/business-strategy-startup-consulting',
    iconAnim: 'float',
    accent: '#ff6b00',
  },
  {
    icon: Layers,
    title: 'Supply Chain, Logistics & Global Trade',
    description: 'Optimize cross-border routing, custom shipping rules, warehousing, and inventory management pipelines.',
    href: '/services/supply-chain-logistics-global-trade',
    iconAnim: 'neural',
    accent: '#ff6b00',
  },
  {
    icon: Users,
    title: 'Talent, Freelancing & Community',
    description: 'Hire elite tech, design, and operations resources on demand, or access our specialized builder community.',
    href: '/services/talent-freelancing-community',
    iconAnim: 'wave',
    accent: '#ff6b00',
  },
  {
    icon: Store,
    title: 'Retail & Lifestyle Commerce',
    description: 'Bridge offline stores with modern digital channels, setting up omni-channel point-of-sale setups.',
    href: '/services/retail-lifestyle-commerce',
    iconAnim: 'pulse',
    accent: '#ff6b00',
  },
  {
    icon: Target,
    title: 'Innovation, Research & Venture Building',
    description: 'Build, fund, and incubation-validate emerging technologies and proprietary SaaS products.',
    href: '/services/innovation-research-venture-building',
    iconAnim: 'spin',
    accent: '#ff6b00',
  },
];

// ─── Animated Icon wrapper ────────────────────────────────────────────────────
function AnimatedIcon({ Icon, animType, isHovered }: { Icon: any; animType: string; isHovered: boolean }) {
  const variants: Record<string, any> = {
    float: {
      animate: { y: [0, -6, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    },
    rotate: {
      animate: { rotate: [0, 360] },
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
    pulse: {
      animate: { scale: [1, 1.18, 1] },
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
    neural: {
      animate: { opacity: [1, 0.4, 1], scale: [1, 1.1, 1] },
      transition: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
    },
    wave: {
      animate: { x: [0, 4, -4, 0] },
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
    spin: {
      animate: { rotate: [0, 180, 360] },
      transition: { duration: 4, repeat: Infinity, ease: 'linear' },
    },
  };

  const v = variants[animType] || variants.float;

  return (
    <motion.div
      animate={v.animate}
      transition={v.transition}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Icon
        className="w-6 h-6"
        style={{ color: isHovered ? '#ff6b00' : '#ff6b00cc' }}
      />
    </motion.div>
  );
}

// ─── Tilt Card ────────────────────────────────────────────────────────────────
function EcoCard({ card, index, inView }: { card: typeof cards[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    rotateX.set(((y - cy) / cy) * -8);
    rotateY.set(((x - cx) / cx) * 8);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  }, [rotateX, rotateY]);

  const Icon = card.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.92 }}
      transition={{ duration: 0.55, delay: index * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      } as any}
      whileHover={typeof window !== 'undefined' && window.innerWidth >= 768 ? { y: -14, scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-3xl cursor-pointer"
    >
      {/* Mouse-tracking glow */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,107,0,0.18) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Card surface */}
      <div
        className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl border transition-all duration-350 overflow-hidden"
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.03) 50%, rgba(12,13,20,0.9) 100%)'
            : 'rgba(16,17,28,0.75)',
          backdropFilter: 'blur(16px)',
          borderColor: isHovered ? 'rgba(255,107,0,0.55)' : 'rgba(255,255,255,0.07)',
          boxShadow: isHovered
            ? '0 20px 60px rgba(255,107,0,0.22), 0 0 0 1px rgba(255,107,0,0.3)'
            : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Top: icon + title */}
        <div>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
            style={{
              background: isHovered ? 'rgba(255,107,0,0.2)' : 'rgba(255,107,0,0.1)',
              boxShadow: isHovered ? '0 0 20px rgba(255,107,0,0.35)' : 'none',
              transform: isHovered ? 'rotate(-6deg) scale(1.1)' : 'rotate(0deg) scale(1)',
            }}
          >
            <AnimatedIcon Icon={Icon} animType={card.iconAnim} isHovered={isHovered} />
          </div>

          <h3
            className="font-montserrat font-bold text-xl sm:text-2xl mb-3 transition-colors duration-300"
            style={{ color: isHovered ? '#ff6b00' : '#ffffff' }}
          >
            {card.title}
          </h3>
          <p className="font-inter text-sm text-[#9a9898] leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Bottom: CTA */}
        <Link
          href={card.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff6b00] mt-7 group/link w-fit"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#ff6b00] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover/link:after:scale-x-100">
            Explore Service
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Animated background particles ────────────────────────────────────────────
function Particles({ count = 18 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const dur = 5 + Math.random() * 8;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff6b00]"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0], y: [0, -30, -60], x: [0, (Math.random() - 0.5) * 40] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else { setVal(start); }
    }, 35);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <>{val}{suffix}</>;
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 border-t border-white/5 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,0,0.06) 0%, transparent 70%), #050816' }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,107,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Floating particles — hidden on mobile for perf */}
      <div className="hidden sm:block">
        <Particles count={16} />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#ff6b00]/8 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#ff6b00]/6 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">



        {/* ── Heading ── */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff6b00]/20 bg-[#ff6b00]/5 text-[#ff6b00] text-[11px] font-semibold uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
            The Unified Ecosystem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="font-montserrat font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
          >
            One Ecosystem.{' '}
            <span
              className="relative inline-block"
              style={{ color: '#ff6b00', textShadow: '0 0 40px rgba(255,107,0,0.4)' }}
            >
              Every Solution.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="font-inter text-[#9a9898] text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            Modular architecture powering every stage of your growth — from launch to global scale.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <EcoCard key={card.title} card={card} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA button ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex justify-center mt-14 sm:mt-16"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-inter font-bold text-white text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #ff6b00 0%, #e05500 100%)',
              boxShadow: '0 4px 24px rgba(255,107,0,0.4)',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(255,107,0,0.65)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(255,107,0,0.4)'; }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)', backgroundSize: '200% 100%' }}
            />
            Explore the Full Ecosystem
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
