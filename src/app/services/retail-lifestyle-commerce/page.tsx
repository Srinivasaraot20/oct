'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCart, Heart, Award, Layers, Sparkles, Smile,
  Palette, Landmark, ShieldCheck, Compass, Search, Target,
  FileText, Code, Rocket, TrendingUp, HelpCircle, ArrowRight,
  ChevronRight, LayoutGrid, CheckCircle2
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

export default function RetailLifestylePage() {
  const services = [
    {
      title: 'Fashion Commerce',
      desc: 'End-to-end solutions for fashion brands to launch, manage and grow online.',
      icon: ShoppingCart
    },
    {
      title: 'Kids Products',
      desc: 'Specialized commerce solutions for kids\' products, toys, apparel and more.',
      icon: Smile
    },
    {
      title: 'Health & Wellness',
      desc: 'Build trusted platforms for health, fitness and wellness brands.',
      icon: Heart
    },
    {
      title: 'Rental Marketplace',
      desc: 'Create rental platforms for products, equipment and lifestyle needs.',
      icon: Landmark
    },
    {
      title: 'Thrift Marketplace',
      desc: 'Sustainable second-hand marketplaces that give new life to products.',
      icon: Award
    },
    {
      title: 'Gifts & Lifestyle',
      desc: 'Curate and sell unique gifts and lifestyle products for every occasion.',
      icon: Sparkles
    },
    {
      title: 'Beauty Products',
      desc: 'eCommerce solutions for beauty, skincare and personal care brands.',
      icon: Palette
    },
    {
      title: 'Home Essentials',
      desc: 'Smart solutions for home decor, kitchen, furniture and essentials.',
      icon: Landmark
    },
    {
      title: 'Consumer Goods',
      desc: 'Sell fast-moving consumer goods with efficient supply chain & fulfillment.',
      icon: ShoppingCart
    },
    {
      title: 'Specialty Retail',
      desc: 'Niche-focused platforms for unique and exclusive retail experiences.',
      icon: StarIcon
    }
  ];

  const processSteps = [
    { num: '01', title: 'Research', desc: 'Understand your market, customers and competitors.', icon: Search },
    { num: '02', title: 'Plan', desc: 'Strategy and roadmap for your commerce brand.', icon: FileText },
    { num: '03', title: 'Build', desc: 'Design and develop scalable, secure and fast platforms.', icon: Code },
    { num: '04', title: 'Launch', desc: 'Go live with seamless launch and onboarding.', icon: Rocket },
    { num: '05', title: 'Grow', desc: 'Optimize, market and scale to maximize growth.', icon: TrendingUp }
  ];

  const whyChooseUs = [
    { title: 'Industry Expertise', desc: 'Experience across multiple consumer industries.', icon: Award },
    { title: 'Custom Solutions', desc: 'Tailored platforms that match your brand and vision.', icon: Layers },
    { title: 'Scalable & Flexible', desc: 'Built to grow with your business needs.', icon: LayoutGrid },
    { title: 'Secure & Reliable', desc: 'Safe, robust and compliant commerce solutions.', icon: ShieldCheck },
    { title: 'End-to-End Support', desc: 'From idea to growth, we support every step.', icon: HelpCircle }
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
            <span className="text-white">Retail & Lifestyle Commerce</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              RETAIL & LIFESTYLE COMMERCE
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Lifestyle Brands.<br />Seamless Commerce.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Stronger Connections.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We build and manage consumer-focused commerce platforms that delight customers and drive business growth across multiple industries.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Consumer First Approach',
                'Multi-Industry Expertise',
                'Scalable & Secure',
                'Data-Driven Growth'
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
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 text-muted/60 text-xs font-semibold uppercase tracking-widest font-inter">
              <span className="mr-2">This Service Supports:</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">XBAEX</span>
              <span className="text-white/40 font-normal">|</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">RUDRA</span>
              <span className="text-white/40 font-normal">|</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">DOTFEELZ</span>
              <span className="text-white/40 font-normal">|</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">XOXO</span>
              <span className="text-white/40 font-normal">|</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">NOVELIA</span>
              <span className="text-white/40 font-normal">|</span>
              <span className="text-white opacity-80 hover:opacity-100 transition-opacity">THRIFTORA</span>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            {/* Dashed circular background tracks */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] border border-white/5 rounded-full -z-10 animate-spin-slow" />
            
            {/* Visual image container */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,92,0,0.18)] border border-white/10 bg-[#0a0a0a] z-10 flex items-center justify-center group">
              <Image 
                src="/retail-lifestyle.jpg" 
                alt="Luxury Fashion Retail App Display" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER: Our Retail & Lifestyle Commerce Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE OFFER</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Retail & Lifestyle Commerce Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            End-to-end solutions to build, grow and scale consumer brands.
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

      {/* ─── OUR PROCESS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">OUR PROCESS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            From Idea To Loyal Customers
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
            Scalable Tech. Seamless Buying Experiences.
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

      {/* ─── CTA: Empowering Lifestyle Brands To Win In The Digital World ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind image */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">BUILD. MANAGE. GROW.</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Empowering Lifestyle Brands To Win In The Digital World
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Let&apos;s build powerful commerce experiences that customers love and brands trust.
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
                  src="/retail-cta.jpg" 
                  alt="Fashion Commerce Fulfillment Layout" 
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

// Custom StarIcon Component
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
