'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, Landmark, Truck, ShieldCheck, Layers, Settings, FileText,
  MapPin, HelpCircle, ChevronRight, ArrowRight, Zap, Target, Search, Clock,
  Globe, LayoutGrid, Users, Activity, TrendingUp
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

export default function SupplyChainPage() {
  const metrics = [
    { label: 'End-to-End Visibility', desc: 'Real-time cargo tracking and reporting.', icon: MapPin },
    { label: 'Optimized Operations', desc: 'Efficiency optimized using automation.', icon: Settings },
    { label: 'Global Connectivity', desc: 'Strategic shipping lines and networks.', icon: Globe },
    { label: 'Secure & Reliable', desc: 'High security standards for global cargo.', icon: ShieldCheck }
  ];

  const services = [
    {
      title: 'Packaging Solutions',
      desc: 'Smart, sustainable, and custom packaging that protects your products and elevates your brand.',
      icon: Package
    },
    {
      title: 'Warehousing',
      desc: 'Secure and strategically located warehouses for efficient storage and inventory control.',
      icon: Landmark
    },
    {
      title: 'Logistics',
      desc: 'End-to-end logistics solutions ensuring smooth transportation across domestic and global routes.',
      icon: Truck
    },
    {
      title: 'Fulfillment',
      desc: 'Accurate order processing, picking, packing, and timely delivery for happy customers.',
      icon: ShieldCheck
    },
    {
      title: 'Courier Integration',
      desc: 'Seamless integration with leading courier partners for faster deliveries and better tracking.',
      icon: Truck
    },
    {
      title: 'Inventory Management',
      desc: 'Real-time inventory tracking and management to reduce stockouts and overstocking.',
      icon: FileText
    },
    {
      title: 'Import & Export',
      desc: 'Hassle-free import and export solutions with compliance, documentation, and customs support.',
      icon: Globe
    },
    {
      title: 'Vendor Management',
      desc: 'Manage vendors, evaluate performance, and build strong, reliable supply chain partnerships.',
      icon: Users
    },
    {
      title: 'Supply Chain Consulting',
      desc: 'Expert guidance to design, optimize, and scale your supply chain operations.',
      icon: Settings
    },
    {
      title: 'Distribution Networks',
      desc: 'Build and optimize distribution networks that ensure wider reach and faster market access.',
      icon: Layers
    }
  ];

  const processSteps = [
    { num: '01', title: 'Plan', desc: 'We analyze your needs and plan the most efficient supply chain.', icon: FileText },
    { num: '02', title: 'Source', desc: 'We source quality products and materials from trusted suppliers.', icon: Package },
    { num: '03', title: 'Manage', desc: 'We manage inventory, warehousing, and logistics with real-time visibility.', icon: Settings },
    { num: '04', title: 'Deliver', desc: 'We deliver your products safely and on time to any part of the world.', icon: Truck },
    { num: '05', title: 'Optimize', desc: 'We continuously optimize processes to reduce costs and improve efficiency.', icon: TrendingUp }
  ];

  const whyChooseUs = [
    { title: 'Global Network', desc: 'Strong partnerships worldwide for seamless operations.', icon: Globe },
    { title: 'Technology Driven', desc: 'Advanced tools and real-time tracking for better control and visibility.', icon: Settings },
    { title: 'Cost Optimization', desc: 'Optimized processes that reduce costs and increase efficiency.', icon: TrendingUp },
    { title: 'Reliable Delivery', desc: 'On-time, secure, and damage-free delivery you can trust.', icon: ShieldCheck },
    { title: 'Scalable Solutions', desc: 'Flexible solutions that scale with your business growth.', icon: LayoutGrid }
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
            <span className="text-white">Supply Chain, Logistics & Global Trade</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              SUPPLY CHAIN, LOGISTICS & GLOBAL TRADE
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Move Smarter.<br />Deliver Further.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Grow Global.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We optimize product movement from manufacturers to customers worldwide with efficient, reliable, and technology-driven solutions.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Global Reach',
                'Real-time Visibility',
                'Cost Efficient',
                'On-time Delivery'
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
              
              {/* ZEROTOALL */}
              <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <Globe className="w-4 h-4 text-[#ff5c00]" />
                <span className="font-montserrat font-extrabold text-sm tracking-wider text-white">ZEROTOALL</span>
              </div>

              {/* VANTORA */}
              <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <Truck className="w-4 h-4 text-[#ff5c00]" />
                <span className="font-montserrat font-extrabold text-sm tracking-wider text-white">VANTORA</span>
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
                src="/supply-chain.jpg" 
                alt="Global Logistics Operations" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Section (Mini cards below Hero) ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-28 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 hover:bg-[#0c0c0c] hover:border-[#ff5c00]/20 transition-all text-center flex flex-col justify-center space-y-3 group">
                <div className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#ff6b00] bg-[#ff6b00]/5 group-hover:border-[#ff6b00]/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-sm leading-tight group-hover:text-[#ff6b00] transition-colors">{item.label}</h3>
                <p className="font-inter text-muted text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── WHAT WE DO: Our Supply Chain & Logistics Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE DO</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Supply Chain & Logistics Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            End-to-end solutions to streamline your supply chain and expand your global reach.
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
            From Source To Destination
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
            Global Infrastructure. Reliable Deliveries.
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

      {/* ─── CTA: Streamline Your Supply Chain. Deliver Excellence. ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind image */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">READY TO EXPAND YOUR GLOBAL REACH?</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Streamline Your Supply Chain. Deliver Excellence.
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Partner with us to optimize your logistics, reduce costs, and grow your business globally.
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
                  src="/logistics-globe.jpg" 
                  alt="Global Supply Chain Operations" 
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
