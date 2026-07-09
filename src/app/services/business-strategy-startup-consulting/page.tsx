'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Rocket, Briefcase, FileText, Search, LayoutGrid, Coins, TrendingUp,
  Award, Users, Compass, HelpCircle, ChevronRight, ArrowRight, ShieldCheck,
  CheckCircle2, Star, Zap, Target, BookOpen, Sliders
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

export default function StartupConsultingPage() {
  const services = [
    {
      title: 'Startup Consulting',
      desc: 'From idea validation to launch strategy, we guide startups at every stage.',
      icon: Rocket
    },
    {
      title: 'Business Planning',
      desc: 'Comprehensive business plans that define your vision, strategy, and roadmap.',
      icon: FileText
    },
    {
      title: 'Pitch Deck Creation',
      desc: 'Investor-ready pitch decks that communicate your value and win confidence.',
      icon: PresentationIcon
    },
    {
      title: 'Market Research',
      desc: 'In-depth market insights to identify opportunities, trends, and competitors.',
      icon: Search
    },
    {
      title: 'Business Models',
      desc: 'We help you choose and design scalable business models that work.',
      icon: LayoutGrid
    },
    {
      title: 'Financial Planning',
      desc: 'Robust financial models and projections for better decision-making.',
      icon: Coins
    },
    {
      title: 'Growth Strategy',
      desc: 'Data-backed strategies to accelerate growth and maximize impact.',
      icon: TrendingUp
    },
    {
      title: 'Business Scaling',
      desc: 'Scale your operations, systems, and teams for sustainable growth.',
      icon: Award
    },
    {
      title: 'Mentorship',
      desc: 'One-on-one guidance from industry experts and serial entrepreneurs.',
      icon: Users
    },
    {
      title: 'Go-to-Market Strategy',
      desc: 'Effective GTM plans to position your product and capture the right market.',
      icon: Compass
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'We understand your idea, goals, and challenges.', icon: Search },
    { num: '02', title: 'Analyze', desc: 'We research, validate, and analyze market potential.', icon: Target },
    { num: '03', title: 'Strategize', desc: 'We build winning strategies tailored to your business.', icon: Sliders },
    { num: '04', title: 'Plan', desc: 'We create actionable plans and financial roadmaps.', icon: FileText },
    { num: '05', title: 'Launch', desc: 'We help you launch, execute, and grow.', icon: Rocket }
  ];

  const whyChooseUs = [
    { title: 'Expert Team', desc: 'Experienced strategists, consultants, and industry experts.', icon: Users },
    { title: 'Proven Frameworks', desc: 'Battle-tested frameworks that bring clarity and accelerate execution.', icon: Sliders },
    { title: 'Investor Focused', desc: 'We create investor-ready strategies and collateral that drive funding.', icon: Coins },
    { title: 'Result Oriented', desc: 'Focused on measurable results, growth, and long-term success.', icon: TrendingUp },
    { title: 'End-to-End Support', desc: 'From ideation to scaling, we\'re with you at every step.', icon: HelpCircle }
  ];

  return (
    <div className="bg-background-dark min-h-screen relative overflow-hidden pb-16 pt-24 md:pt-28 font-inter">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-[#ff6b00]/5 rounded-full blur-[180px] -z-10" />

      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb & Sub-badge */}
        <div className="flex flex-col gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted font-inter">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <span className="text-white">Business Strategy & Startup Consulting</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              BUSINESS STRATEGY & STARTUP CONSULTING
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Think Smart.<br />Plan Right.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Build Big.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We help entrepreneurs validate ideas, build solid strategies, and grow businesses that create lasting impact.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Strategic Thinking',
                'Data-Driven Insights',
                'End-to-End Support',
                'Growth Focused'
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

            {/* Supported Brands */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6">
              <span className="text-xs font-semibold text-muted/60 uppercase tracking-widest font-inter">This Service Supports:</span>
              
              {/* InfinityIdeasDCT */}
              <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <Compass className="w-4 h-4 text-[#ff5c00]" />
                <span className="font-montserrat font-extrabold text-sm tracking-wider text-white">InfinityIdeasDCT</span>
              </div>

              {/* SomethingToBeDone */}
              <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <Target className="w-4 h-4 text-[#ff5c00]" />
                <span className="font-montserrat font-extrabold text-sm tracking-wider text-white">SomethingToBeDone</span>
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
                src="/startup-consulting.jpg" 
                alt="Business Strategy Visual" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO: Strategy & Consulting Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE DO</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Strategy & Consulting Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            Powerful strategies. Smarter decisions. Stronger businesses.
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
                
                <div className="pt-5 mt-auto">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ff6b00] hover:text-white uppercase tracking-wider font-inter group-hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── OUR CONSULTING PROCESS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">OUR CONSULTING PROCESS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            From Vision To Victory
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 relative group">
                {/* Visual Circle Indicator with Connection Chevrons */}
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/5 flex items-center justify-center text-white bg-[#0e0e0e] group-hover:border-[#ff5c00]/60 group-hover:shadow-[0_0_20px_rgba(255,92,0,0.15)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  
                  {/* Connector Arrow (Visible on medium screen and up for first 4 steps) */}
                  {idx < 4 && (
                    <div className="hidden md:flex absolute top-1/2 -right-8 lg:-right-10 translate-y-[-50%] text-white/20 select-none pointer-events-none">
                      <ChevronRight className="w-5 h-5 animate-pulse-slow" />
                      <ChevronRight className="w-5 h-5 animate-pulse-slow -ml-3.5" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#ff6b00] tracking-widest block font-inter">{step.num}. {step.title}</span>
                  <p className="font-inter text-muted text-xs leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
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
            Strategic Partners. Proven Results.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* ─── CTA: Let's Turn Your Idea Into A Successful Business ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind image */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">READY TO BUILD SOMETHING GREAT?</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Let&apos;s Turn Your Idea Into A Successful Business
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Book a free consultation with our experts and take the first step towards your success.
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
                  src="/chess-king.jpg" 
                  alt="Chess King Success Representation" 
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

// Custom PresentationIcon Component
function PresentationIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}
