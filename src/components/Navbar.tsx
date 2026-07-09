'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, ArrowRight, ChevronRight,
  Cpu, Globe, Smartphone, Palette, ShoppingCart,
  TrendingUp, Briefcase, Layers, Users, Target
} from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: any;
}

const servicesList: ServiceItem[] = [
  { 
    title: 'E-Commerce & Quick Commerce Solutions', 
    description: 'Launch, manage, and scale online commerce businesses.', 
    href: '/services/ecommerce-quick-commerce', 
    icon: ShoppingCart 
  },
  { 
    title: 'Digital Marketing & Brand Growth', 
    description: 'Accelerate business growth with data-driven marketing.', 
    href: '/services/digital-marketing-brand-growth', 
    icon: TrendingUp 
  },
  { 
    title: 'AI & Business Automation', 
    description: 'Automate tasks and increase operational efficiency using AI.', 
    href: '/services/ai-business-automation', 
    icon: Cpu 
  },
  { 
    title: 'Web, App & Software Development', 
    description: 'Build secure, scalable, and high-performance digital products.', 
    href: '/services/web-app-software-development', 
    icon: Globe 
  },
  { 
    title: 'Creative Studio', 
    description: 'Create memorable digital experiences through branding & design.', 
    href: '/services/creative-studio', 
    icon: Palette 
  },
  { 
    title: 'Business Strategy & Startup Consulting', 
    description: 'Helping founders transform ideas into successful businesses.', 
    href: '/services/business-strategy-startup-consulting', 
    icon: Briefcase 
  },
  { 
    title: 'Supply Chain, Logistics & Global Trade', 
    description: 'Optimize operations with efficient logistics & trade solutions.', 
    href: '/services/supply-chain-logistics-global-trade', 
    icon: Layers 
  },
  { 
    title: 'Talent, Freelancing & Community', 
    description: 'Build teams, connect professionals, and create communities.', 
    href: '/services/talent-freelancing-community', 
    icon: Users 
  },
  { 
    title: 'Retail & Lifestyle Commerce', 
    description: 'Deliver seamless shopping experiences across lifestyle markets.', 
    href: '/services/retail-lifestyle-commerce', 
    icon: ShoppingCart 
  },
  { 
    title: 'Innovation, Research & Venture Building', 
    description: 'Transform ideas into scalable ventures through research.', 
    href: '/services/innovation-research-venture-building', 
    icon: Target 
  }
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer" aria-hidden="true">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="block h-[2px] w-full bg-[#ff6b00] rounded-full origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="block h-[2px] w-full bg-[#ff6b00] rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="block h-[2px] w-full bg-[#ff6b00] rounded-full origin-center"
      />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (typeof window !== 'undefined' && (window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && (window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (typeof window !== 'undefined' && (window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;
  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── Scroll Progress Bar ────────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary z-[9999] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 w-full z-[80] transition-all duration-300 ${scrolled ? 'glass-nav py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="OCTADECENT Home">
            <Image
              alt="OCTADECENT — Premium technology and software company logo"
              className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain rounded-full shadow-[0_0_16px_rgba(255,92,0,0.25)] group-hover:shadow-[0_0_24px_rgba(255,92,0,0.45)] transition-shadow duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-Ejw9GX39YVfLZY6_rzSHkCuoul10gUogdKujpPFixlahWW2jL_ZOXDnrjTLHlFgKHsIAJWc873fIWb8YEVelu-6TuRrfDQXvkehQd7SrbSkCQ5cXyyLw3GztkBPfDjZWw_o3wGMjeXpkZD9BqAZOHtqvC4qWlF37Y7LKJZjpwYKRD1mmcAiUFZnqJWqYiezpEpIqwt5pN6sgSB8KCV8mR284OINloeTyVCAAQI8EsppwvTSxYS_Wn6nRx_5CM0kKTN0UiX8i48"
              width={40}
              height={40}
              priority
            />
            <span className="font-montserrat font-extrabold tracking-tight text-lg sm:text-xl lg:text-[1.875rem] leading-none text-[#FF5C00] transition-colors">
              OCTADECENT
            </span>
          </Link>

          {/* ── Desktop Navigation (lg+) ─────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className={`relative font-inter text-base font-semibold transition-colors duration-300 pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff6b00] after:rounded-full
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${isActive('/') ? 'text-[#ff6b00] after:scale-x-100' : 'text-muted hover:text-[#ff6b00]'}`}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={`relative font-inter text-base font-semibold transition-colors duration-300 pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff6b00] after:rounded-full
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${pathname.startsWith('/services') ? 'text-[#ff6b00] after:scale-x-100' : 'text-muted hover:text-[#ff6b00]'}`}
            >
              Services
            </Link>

            <Link
              href="/about"
              className={`relative font-inter text-base font-semibold transition-colors duration-300 pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff6b00] after:rounded-full
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${isActive('/about') ? 'text-[#ff6b00] after:scale-x-100' : 'text-muted hover:text-[#ff6b00]'}`}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={`relative font-inter text-base font-semibold transition-colors duration-300 pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff6b00] after:rounded-full
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${isActive('/careers') ? 'text-[#ff6b00] after:scale-x-100' : 'text-muted hover:text-[#ff6b00]'}`}
            >
              Careers
            </Link>
          </nav>

          {/* ── Desktop CTA (lg+) ────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <Link
              href="/contact"
              className={`relative font-inter text-base font-semibold transition-colors duration-300 pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff6b00] after:rounded-full
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${isActive('/contact') ? 'text-[#ff6b00] after:scale-x-100' : 'text-muted hover:text-[#ff6b00]'}`}
            >
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="bg-primary hover:bg-primary-dark active:scale-[0.97] text-white font-inter text-sm font-semibold px-5 py-2.5 rounded-2xl orange-glow transition-all duration-300 whitespace-nowrap"
            >
              Free Consultation
            </Link>
          </div>

          {/* ── Hamburger (tablet & mobile, < lg) ────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-1 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b00] cursor-pointer pointer-events-auto select-none touch-manipulation z-50"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>

        </div>
      </header>

      {/* ── Mobile / Tablet Drawer ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[98] lg:hidden"
              onClick={close}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              key="drawer"
              id="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-[360px] z-[99] lg:hidden flex flex-col"
              style={{
                background: 'rgba(0, 0, 0, 0.92)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(255, 107, 0, 0.15)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
              }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-white/5">
                <Link href="/" onClick={close} className="flex items-center gap-2 group">
                  <Image
                    alt="OCTADECENT — Premium technology and software company logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-Ejw9GX39YVfLZY6_rzSHkCuoul10gUogdKujpPFixlahWW2jL_ZOXDnrjTLHlFgKHsIAJWc873fIWb8YEVelu-6TuRrfDQXvkehQd7SrbSkCQ5cXyyLw3GztkBPfDjZWw_o3wGMjeXpkZD9BqAZOHtqvC4qWlF37Y7LKJZjpwYKRD1mmcAiUFZnqJWqYiezpEpIqwt5pN6sgSB8KCV8mR284OINloeTyVCAAQI8EsppwvTSxYS_Wn6nRx_5CM0kKTN0UiX8i48"
                    className="h-8 w-8 rounded-full"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <span className="font-montserrat font-extrabold text-base text-[#ff6b00] tracking-tight">
                    OCTADECENT
                  </span>
                </Link>
                {/* Close button (X) */}
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer pointer-events-auto touch-manipulation"
                >
                  <HamburgerIcon isOpen={true} />
                </button>
              </div>

              {/* Scrollable nav content */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-2 no-scrollbar">

                {/* Primary links */}
                <p className="font-montserrat font-bold text-[10px] uppercase tracking-[2px] text-white/30 mb-4">
                  Navigate
                </p>

                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className={`group flex items-center justify-between py-3.5 px-4 rounded-2xl font-montserrat font-bold text-xl transition-all cursor-pointer pointer-events-auto touch-manipulation ${
                        isActive(href)
                          ? 'bg-[#ff6b00]/10 text-[#ff6b00]'
                          : 'text-white hover:bg-white/5 hover:text-[#ff6b00]'
                      }`}
                    >
                      {label}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}

                {/* Services Accordion section */}
                <div className="pt-6 pb-2">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full group flex items-center justify-between py-3.5 px-4 rounded-2xl font-montserrat font-bold text-xl text-white hover:bg-white/5 hover:text-[#ff6b00] transition-all cursor-pointer pointer-events-auto touch-manipulation"
                    aria-expanded={isMobileServicesOpen}
                  >
                    <span className="flex items-center gap-2">Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-[#ff6b00]' : 'text-white/40 group-hover:text-[#ff6b00]'}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pl-2 pr-1 py-2 flex flex-col gap-2 mt-1">
                          {servicesList.map((service) => {
                            const Icon = service.icon;
                            const active = isActive(service.href);
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={close}
                                className={`group flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                                  active 
                                    ? 'bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00]' 
                                    : 'bg-white/5 border border-white/5 text-white hover:bg-[#FF6A00]/10 hover:border-[#FF6A00]/20 hover:text-[#FF6A00]'
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className={`p-2 rounded-lg transition-colors shrink-0 ${
                                    active 
                                      ? 'bg-[#FF6A00]/20 text-[#FF6A00]' 
                                      : 'bg-white/5 text-white/70 group-hover:bg-[#FF6A00]/15 group-hover:text-[#FF6A00]'
                                  }`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex flex-col min-w-0" style={{ textAlign: 'left' }}>
                                    <span className={`font-inter text-sm font-bold transition-colors leading-tight ${
                                      active ? 'text-[#FF6A00]' : 'text-white group-hover:text-[#FF6A00]'
                                    }`}>
                                      {service.title}
                                    </span>
                                    <span className={`font-inter text-[11px] transition-colors line-clamp-1 mt-0.5 ${
                                      active ? 'text-white/70' : 'text-white/50 group-hover:text-white/70'
                                    }`}>
                                      {service.description}
                                    </span>
                                  </div>
                                </div>
                                <ChevronRight className={`w-3.5 h-3.5 transition-all shrink-0 ${
                                  active ? 'text-[#FF6A00]' : 'text-white/20 group-hover:text-[#FF6A00] group-hover:translate-x-1'
                                }`} />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* Fixed bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="px-6 sm:px-8 py-6 border-t border-white/5 space-y-3"
                style={{
                  background: 'linear-gradient(to top, rgba(255,107,0,0.06) 0%, transparent 100%)',
                }}
              >
                <Link
                  href="/book-consultation"
                  onClick={close}
                  className="w-full flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#e05e00] active:scale-[0.98] text-white font-inter font-bold py-4 rounded-2xl transition-all shadow-[0_4px_24px_rgba(255,107,0,0.35)] cursor-pointer pointer-events-auto touch-manipulation"
                >
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  onClick={close}
                  className="w-full flex items-center justify-center gap-2 border border-white/10 hover:border-[#ff6b00]/40 text-white/80 hover:text-white font-inter font-semibold py-3.5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer pointer-events-auto touch-manipulation"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
