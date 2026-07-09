'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Lightbulb, Search, CheckCircle2, Layers, Rocket, Users, HeartHandshake,
  Cpu, ShieldCheck, Compass, HelpCircle, ArrowRight, ChevronRight, LayoutGrid,
  Zap, Star, Sliders, FileText, Code, Activity, Award, Target
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function VentureBuildingPage() {
  const services = [
    {
      title: 'Innovation Consulting',
      desc: 'We help organizations foster innovation and build future-ready strategies.',
      icon: Lightbulb
    },
    {
      title: 'Product Research',
      desc: 'In-depth research to understand markets, users, and opportunities.',
      icon: Search
    },
    {
      title: 'Idea Validation',
      desc: 'Validate your ideas with data-backed insights and market feasibility.',
      icon: CheckCircle2
    },
    {
      title: 'Prototype Development',
      desc: 'From concept to prototype — we build, test, and refine your ideas.',
      icon: Layers
    },
    {
      title: 'Venture Incubation',
      desc: 'Incubating high-potential ideas into viable and investor-ready ventures.',
      icon: Rocket
    },
    {
      title: 'Business Collaboration',
      desc: 'Connecting innovators, founders, and businesses to create powerful synergies.',
      icon: Users
    },
    {
      title: 'Partnership Development',
      desc: 'We help build strategic partnerships that drive long-term growth.',
      icon: HeartHandshake
    },
    {
      title: 'Technology Research',
      desc: 'Exploring emerging technologies to build smarter solutions.',
      icon: Cpu
    },
    {
      title: 'Intellectual Property Guidance',
      desc: 'Protect your innovations with expert IP strategy and guidance.',
      icon: ShieldCheck
    },
    {
      title: 'Strategic Innovation',
      desc: 'We create and implement innovation roadmaps to achieve your vision.',
      icon: Compass
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'We explore ideas, challenges, and opportunities.', icon: Search },
    { num: '02', title: 'Research', desc: 'Conduct market and technology research to validate feasibility.', icon: Compass },
    { num: '03', title: 'Validate', desc: 'Validate concepts with real data and user feedback.', icon: CheckCircle2 },
    { num: '04', title: 'Build', desc: 'Develop prototypes and test for product-market fit.', icon: Layers },
    { num: '05', title: 'Launch', desc: 'Launch your venture with our go-to-market support.', icon: Rocket },
    { num: '06', title: 'Scale', desc: 'Scale, innovate, and create sustainable business impact.', icon: TrendingUpIcon }
  ];

  const whyChooseUs = [
    { title: 'Expert Thinkers', desc: 'Experienced innovators and researchers.', icon: Users },
    { title: 'Data-Backed Approach', desc: 'Decisions driven by data, insights, and research.', icon: Sliders },
    { title: 'End-to-End Support', desc: 'From idea validation to scaling your venture.', icon: HelpCircle },
    { title: 'Strong Ecosystem', desc: 'Access to mentors, partners, investors, and networks.', icon: HeartHandshake },
    { title: 'Future-Ready Solutions', desc: 'Building innovative solutions for tomorrow\'s challenges.', icon: Zap },
    { title: 'Impact Driven', desc: 'Creating ventures that drive real-world impact.', icon: Star }
  ];

  return (
    <div className="bg-background-dark min-h-screen relative overflow-hidden pb-16 pt-24 md:pt-28 font-inter">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-[#ff6b00]/5 rounded-full blur-[180px] -z-10" />

      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb & Sub-badge */}
        <div className="flex flex-col gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted font-inter">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <span className="text-white font-medium">Innovation, Research & Venture Building</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              INNOVATION, RESEARCH & VENTURE BUILDING
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Innovate Boldly.<br />Build Strategically.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Scale Globally.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We transform innovative ideas into scalable businesses through research, validation, collaboration, and execution.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Research Driven',
                'Future Focused',
                'Impact Oriented',
                'Scalable Ventures'
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff5c00] hover:bg-[#cc4a00] text-white font-bold rounded-xl orange-glow transition-all duration-300 font-inter text-sm group"
              >
                Get Free Consultation 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/5 text-white/90 font-bold rounded-xl transition-all duration-300 font-inter text-sm group"
              >
                <LayoutGrid className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                Explore All Services
              </Link>
            </div>

            {/* Service Supports */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-muted/60 uppercase tracking-widest font-inter">This Service Supports</span>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { name: 'EUREKATOBEAS', logo: '/1000156536.png' },
                  { name: 'INFINITYIDEASDCT', logo: '/infinity_ideas.jpg' }
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                    <Image src={s.logo} alt={s.name} width={16} height={16} className="object-contain rounded-full" />
                    <span className="text-[10px] font-extrabold tracking-wider font-montserrat text-white">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            {/* Dashed circular background tracks */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] border border-white/5 rounded-full -z-10 animate-spin-slow" />
            
            {/* Visual image container */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,92,0,0.18)] border border-white/10 bg-[#0a0a0a] z-10 flex items-center justify-center group">
              <Image 
                src="/venture-building.jpg" 
                alt="Venture Building Operations" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER: Our Innovation & Venture Building Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE OFFER</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Innovation & Venture Building Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            End-to-end support to turn ideas into successful, scalable ventures.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a]/50 p-6 flex flex-col justify-between hover:border-[#ff5c00]/30 hover:bg-[#0c0c0c] transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6b00] group-hover:bg-[#ff6b00]/10 group-hover:border-[#ff6b00]/30 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-base leading-tight group-hover:text-[#ff6b00] transition-colors">{service.title}</h3>
                  <p className="font-inter text-muted text-xs leading-relaxed">{service.desc}</p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── OUR VENTURE BUILDING PROCESS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">OUR VENTURE BUILDING PROCESS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            From Idea To Impact
          </h2>
        </div>

        {/* 6-Step Timeline Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 lg:gap-8 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 relative group col-span-1">
                {/* Visual Circle Indicator */}
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white/5 flex items-center justify-center text-white bg-[#0e0e0e] group-hover:border-[#ff5c00]/60 group-hover:shadow-[0_0_20px_rgba(255,92,0,0.15)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  
                  {/* Connector Arrow (Visible on desktop) */}
                  {idx < 5 && (
                    <div className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 translate-y-[-50%] text-white/20 select-none pointer-events-none">
                      <ChevronRight className="w-4 h-4 animate-pulse-slow" />
                      <ChevronRight className="w-4 h-4 animate-pulse-slow -ml-3" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#ff6b00] tracking-widest block font-inter">{step.num}. {step.title}</span>
                  <p className="font-inter text-muted text-[11px] leading-relaxed max-w-[130px] mx-auto">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── WHY CHOOSE OCTADECENT ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHY CHOOSE OCTADECENT?</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Strategic Incubation. Exponential Scaling.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 hover:bg-[#0c0c0c] hover:border-[#ff5c00]/20 transition-all text-center flex flex-col justify-center space-y-3">
                <div className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#ff6b00] bg-[#ff6b00]/5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-sm leading-tight">{item.title}</h3>
                <p className="font-inter text-muted text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA: Have An Idea? Let's Build The Next Big Thing Together ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind image */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">TURN INNOVATION INTO IMPACT</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Have An Idea? Let&apos;s Build The Next Big Thing Together.
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Partner with Octadecent and transform your innovative ideas into successful, scalable businesses.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff5c00] hover:bg-[#cc4a00] text-white font-bold rounded-xl orange-glow transition-all duration-300 font-inter text-sm group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/5 text-white/95 font-bold rounded-xl transition-all duration-300 font-inter text-sm group"
                >
                  <LayoutGrid className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  Explore All Services
                </Link>
              </div>
            </div>

            {/* CTA Right Visual */}
            <div className="lg:col-span-5 flex justify-center relative min-h-[220px]">
              <div className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,92,0,0.2)] border border-white/10 bg-[#0e0e0e]">
                <Image 
                  src="/brain-cta.jpg" 
                  alt="Idea and Neural Brain Connection representation" 
                  fill
                  className="object-cover scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom TrendingUpIcon Component
function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
