'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingCart, Code2, Smartphone, Bot, Users, Database,
  CreditCard, Shield, Rocket, Globe, ShoppingBag, MousePointerClick,
  Settings2, BarChart3, Heart, Expand, MessageCircle, UserSearch,
  LineChart, Cpu, CheckCircle, ArrowRight, ChevronRight,
  Mail, Award, Phone
} from 'lucide-react';
import type { Metadata } from 'next';

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Service card data ────────────────────────────────────────────────────────
const services = [
  { Icon: ShoppingCart, title: 'E-Commerce', desc: 'Advanced storefronts and unified checkout experiences.' },
  { Icon: Code2, title: 'Web Dev', desc: 'High-performance digital architectures built for speed.' },
  { Icon: Smartphone, title: 'Mobile App', desc: 'Native and cross-platform mobile commerce solutions.' },
  { Icon: Bot, title: 'AI Automation', desc: 'Optimizing workflows through intelligent autonomous agents.' },
  { Icon: Users, title: 'CRM', desc: 'Deep-tier customer relationship and lifecycle management.' },
  { Icon: Database, title: 'Data Analytics', desc: 'Real-time business intelligence and predictive modeling.' },
  { Icon: CreditCard, title: 'Payments', desc: 'Secure, multi-currency settlement and liquidity pools.' },
  { Icon: Shield, title: 'Security', desc: 'Military-grade protection for transactional integrity.' },
];

// ─── Ecosystem steps ──────────────────────────────────────────────────────────
const steps = [
  { Icon: Rocket, label: 'Launch', title: 'Business Launch', active: true },
  { Icon: Globe, label: 'Presence', title: 'Digital Presence', active: false },
  { Icon: ShoppingBag, label: 'Sales', title: 'Online Sales', active: false },
  { Icon: MousePointerClick, label: 'Acquire', title: 'Acquisition', active: false },
  { Icon: Settings2, label: 'Automate', title: 'Automation', active: false },
  { Icon: BarChart3, label: 'Analyze', title: 'Analytics', active: false },
  { Icon: Heart, label: 'Retain', title: 'Retention', active: false },
  { Icon: Expand, label: 'Expand', title: 'Expansion', active: false },
];

// ─── AI feature cards ─────────────────────────────────────────────────────────
const aiCards = [
  { Icon: MessageCircle, title: 'Support Bots', desc: '24/7 intelligent customer support.', offset: false },
  { Icon: UserSearch, title: 'Lead Qual', desc: 'Automated lead qualification flows.', offset: true },
  { Icon: LineChart, title: 'Market Intel', desc: 'AI-driven competitive analysis.', offset: false },
  { Icon: Cpu, title: 'Ops Agents', desc: 'Autonomous operational tasks.', offset: true },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-[#e3e2e2] overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center px-6 md:px-16 pt-28 pb-12 max-w-[1440px] mx-auto overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff5c00]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Breadcrumb */}
        <FadeUp className="flex items-center gap-2 text-xs text-[#9a9898] mb-8 font-inter">
          <Link href="/" className="hover:text-[#ff6b00] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">About</span>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h1 className="font-montserrat font-extrabold leading-none mb-6 tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5rem)' }}>
            About{' '}
            <span className="relative inline-block">
              OCTADECENT
              <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#ff5c00] rounded-sm" />
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="font-inter text-lg sm:text-xl text-[#9a9898] max-w-2xl mt-6 leading-relaxed">
            Powering the Future of Commerce, Technology &amp; Business Growth.
          </p>
        </FadeUp>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-12 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <FadeUp className="space-y-7">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ff5c00]/25 bg-[#ff5c00]/8 text-[#ff5c00] text-xs font-semibold uppercase tracking-widest font-inter">
              Why OCTADECENT Exists
            </div>
            <h2 className="font-montserrat font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
              Dedicated to helping businesses launch, operate, automate, and scale.
            </h2>
            <p className="font-inter text-base md:text-lg text-[#9a9898] leading-relaxed">
              We bridge the gap between ambitious vision and technical execution. OCTADECENT serves as the unified backbone for high-performance commerce, providing the infrastructure that turns local startups into global powerhouses.
            </p>
            <p className="font-inter text-sm text-[#9a9898]/80 leading-relaxed">
              Our focus is singular: removing the friction from growth. Through our network of specialized companies, we provide a holistic growth engine that evolves with your business at every stage of its journey.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="relative group">
            <div className="aspect-video relative overflow-hidden rounded-3xl border border-white/8 shadow-2xl"
              style={{ background: 'rgba(18,18,18,0.8)', backdropFilter: 'blur(20px)' }}>
              <img
                alt="OCTADECENT corporate company vision representation and software solutions overview"
                className="w-full h-full object-cover opacity-80 group-hover:scale-[1.04] transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk3ZdZUOl5ud_a8qpxgRGyDCW-ciSyYAEkmJYQMAmLMfp4GBheJTTu_z5CgMXoYlew-M4oKOefv7LeaLLP7-c8XikvoN04sf7i2Gdk7rv48oQJglP0pjQNbZfOS6LODlo5eTQuqBNHBUV2jc-XLGDNS6S80GYkrC3RUsOjQhQl3n_kfr8Q9P6D-cVEJt3z6OtCehk7Lsa3-HwVoIsyr9jxbVe1n6yBRo7Ct7ZSpDMpifj-O4EUnyNdAPlhNx0h88Vxn_p9TmGag30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" aria-hidden="true" />
            </div>
            {/* Orange accent glow */}
            <div className="absolute -inset-4 bg-[#ff5c00]/8 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
          </FadeUp>
        </div>
      </section>

      {/* ── Comprehensive Solutions ───────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-white/5">
        <FadeUp className="text-center mb-16">
          <h2 className="font-montserrat font-extrabold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Comprehensive Solutions
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.07}>
              <div
                className="group p-7 rounded-2xl border border-t-2 cursor-pointer transition-all duration-300 h-full"
                style={{
                  background: 'rgba(18,18,18,0.8)',
                  backdropFilter: 'blur(20px)',
                  borderTopColor: 'rgba(255,92,0,0.3)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderTopColor = '#ff5c00'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(255,92,0,0.12)'; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderTopColor = 'rgba(255,92,0,0.3)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff5c00]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#ff5c00]" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white mb-2 group-hover:text-[#ff6b00] transition-colors duration-300">{title}</h3>
                <p className="font-inter text-sm text-[#9a9898] leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>



      {/* ── AI-Powered Growth ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* AI feature cards */}
          <FadeUp delay={0.1} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {aiCards.map(({ Icon, title, desc, offset }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: offset ? 24 : 0 }}
                  whileInView={{ opacity: 1, y: offset ? 32 : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl border border-white/8 flex items-start gap-3 transition-all duration-300 hover:border-[#ff5c00]/40 hover:shadow-[0_0_24px_rgba(255,92,0,0.1)]"
                  style={{ background: 'rgba(18,18,18,0.8)', backdropFilter: 'blur(20px)', transform: offset ? 'translateY(32px)' : undefined }}
                >
                  <div className="p-2 rounded-xl bg-[#ff5c00]/10 group-hover:bg-[#ff5c00]/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-[#ff5c00]" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-white text-sm mb-1">{title}</h4>
                    <p className="font-inter text-[12px] text-[#9a9898] leading-snug">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.05} className="order-1 lg:order-2 space-y-7">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ff5c00]/25 bg-[#ff5c00]/8 text-[#ff5c00] text-xs font-semibold uppercase tracking-widest font-inter">
              Intelligence Layer
            </div>
            <h2 className="font-montserrat font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
              AI-Powered Growth
            </h2>
            <p className="font-inter text-base md:text-lg text-[#9a9898] leading-relaxed">
              We integrate advanced artificial intelligence directly into your commerce stack. From customer acquisition to support, our AI initiatives are designed to increase efficiency and drive higher conversion rates without increasing headcount.
            </p>
            <ul className="space-y-3">
              {['Intelligent Chatbot Conversions', 'Automated Data Enrichment', 'Predictive Inventory Analytics'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-inter text-sm font-semibold text-white">
                  <CheckCircle className="w-5 h-5 text-[#ff5c00] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>



      {/* ── Leadership ───────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-white/5 relative">
        {/* Background ambient glow for the leadership section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#ff5c00]/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

        <FadeUp className="mb-16 text-center">
          <h2 className="font-montserrat font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Command Center
          </h2>
          <p className="font-inter text-base text-[#9a9898] max-w-2xl mx-auto">
            The visionary driving OCTADECENT's expansion into new frontiers of global commerce.
          </p>
        </FadeUp>

        <FadeUp className="max-w-4xl mx-auto">
          <div className="relative group rounded-3xl p-1 overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,107,0,0.15)]">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#ff6b00]/30 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glassmorphism Card */}
            <div className="relative flex flex-col md:flex-row items-center bg-[#0d0e0f]/90 backdrop-blur-3xl rounded-[22px] border border-white/5 p-8 sm:p-10 md:p-12 gap-10">

              {/* Content Section */}
              <div className="relative w-full md:w-3/5 flex flex-col justify-center order-2 md:order-1">

                {/* Founder Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] w-fit mb-8 group-hover:bg-[#ff6b00]/20 transition-colors">
                  <Award className="w-4 h-4" />
                  <span className="font-inter text-[11px] font-bold uppercase tracking-widest">Visionary Founder</span>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="font-montserrat font-bold text-white tracking-tight"
                    style={{ fontSize: 'clamp(32px, 4vw, 40px)', lineHeight: '1.1' }}>
                    DEVUNURI SATHWIK
                  </h3>
                  <p className="font-inter font-semibold text-[#ff6b00]"
                    style={{ fontSize: 'clamp(18px, 2vw, 22px)' }}>
                    CEO & Founder
                  </p>
                </div>

                <p className="font-inter text-[#9a9898] leading-relaxed mb-10 text-sm sm:text-base">
                  Leader driving OCTADECENT's vision of building a unified commerce ecosystem across technology, digital transformation, automation, AI, and business growth.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-auto flex-wrap">
                  {/* 1. Mail */}
                  <a
                    href="mailto:octadecent@gmail.com"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Email CEO"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  {/* 2. Telegram */}
                  <a
                    href="https://t.me/octadecent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Telegram"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.676c.223-.2-.05-.31-.346-.11l-6.4 4.02-2.76-.86c-.6-.188-.61-.6.125-.89l10.736-4.137c.5-.188.94.116.825.808z" />
                    </svg>
                  </a>

                  {/* 3. Instagram */}
                  <a
                    href="https://www.instagram.com/octadecentfounder?igsh=MXdrN2dkZ3Fxb3dh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Instagram Octadecent Founder"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  {/* 4. Phone Number */}
                  <a
                    href="tel:9398820561"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Call CEO"
                  >
                    <Phone className="w-5 h-5" />
                  </a>

                  {/* 5. LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/devunuri-sathwik-917474410?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* 6. Snapchat */}
                  <a
                    href="https://www.snapchat.com/add/octadecent?share_id=t3qcYhoLdpw&locale=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6b00] hover:border-[#ff6b00] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    aria-label="Snapchat"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C9.5 2 7 3.5 6.5 6.5c0 0.5 0 1 0.1 1.5C5.8 8.7 5 9.5 4.5 10.5c-0.5 1 0.2 2 1.3 1.8 1.1-0.2 2.2-0.5 3.2-0.8 0 0.5 0 1-0.1 1.5C8.4 16 7.5 18 6 19.5c-0.8 0.8-1.5 1.5-2.2 2.2-0.6 0.6 0.2 1.3 1.2 1.1s4.5-0.5 6.5-0.5c2 0 5.5 0.3 6.5 0.5s1.8-0.5 1.2-1.1c-0.7-0.7-1.4-1.4-2.2-2.2-1.5-1.5-2.4-3.5-2.9-6.5 0-0.5-0.1-1-0.1-1.5 1 0.3 2.1 0.6 3.2 0.8 1.1 0.2 1.8-0.8 1.3-1.8-0.5-1-1.3-1.8-2.1-2.5 0.1-0.5 0.1-1 0.1-1.5C17 3.5 14.5 2 12 2z" />
                    </svg>
                  </a>
                </div>

              </div>

              {/* Image Section */}
              <div className="relative w-full md:w-2/5 flex justify-center order-1 md:order-2">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-[3px] border-[#ff6b00]/20 shadow-[0_0_30px_rgba(255,107,0,0.1)] group-hover:border-[#ff6b00]/50 group-hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] transition-all duration-500">
                  <img
                    alt="DEVUNURI SATHWIK — CEO and Founder of OCTADECENT"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    src="/ceo.jpg"
                  />
                </div>
              </div>

            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Mission / Vision ────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              heading: 'Our Mission',
              body: 'To democratize access to high-performance commerce infrastructure, allowing any business to operate with the technical sophistication of a global leader.',
              list: null as string[] | null,
            },
            {
              heading: 'Our Vision',
              body: 'A world where transactional friction is zero, and the boundaries between business stages are bridged by seamless automation and intelligent systems.',
              list: null as string[] | null,
            }
          ].map(({ heading, body, list }, i) => (
            <FadeUp key={heading} delay={i * 0.1} className="space-y-6">
              <div className="w-12 h-1 bg-[#ff5c00] rounded-full" />
              <h3 className="font-montserrat font-extrabold text-white text-2xl sm:text-[2rem]">{heading}</h3>
              {body && <p className="font-inter text-sm text-[#9a9898] leading-relaxed">{body}</p>}
              {list && (
                <ul className="space-y-3">
                  {list.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-inter font-semibold text-[#ff5c00] text-sm">
                      <ArrowRight className="w-4 h-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-32 bg-[#ff5c00] text-center overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
          aria-hidden="true"
        />
        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 px-6">
          <FadeUp>
            <h2 className="font-montserrat font-extrabold text-[#521800] mb-8 leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Ready to Scale with the Best?
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-3 bg-[#521800] text-white px-10 py-4 rounded-2xl font-inter font-bold text-sm sm:text-base hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
            >
              JOIN THE NETWORK
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
