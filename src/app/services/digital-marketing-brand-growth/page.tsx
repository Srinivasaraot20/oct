'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, CheckCircle2, ChevronRight, ArrowRight, Layers, Globe, Smartphone, 
  Cpu, ShoppingCart, Award, Eye, Users, ShieldCheck, Zap, SearchCheck, Check,
  Target, Settings, LineChart, Play, BarChart, Inbox, HelpCircle, Palette, FileText
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 }
};

export default function DigitalMarketingPage() {
  
  const services = [
    { title: 'SEO', desc: 'Improve your search engine rankings, drive organic traffic, and increase your online visibility.', icon: SearchCheck },
    { title: 'Social Media Marketing', desc: 'Engage your audience, build communities, and grow your brand presence across social platforms.', icon: Users },
    { title: 'Paid Advertising', desc: 'Run targeted ad campaigns on Google, Meta, and more to attract the right audience and generate leads.', icon: Target },
    { title: 'Performance Marketing', desc: 'Data-driven campaigns focused on measurable results, higher conversions, and maximum ROI.', icon: TrendingUp },
    { title: 'Branding', desc: 'Build memorable brands with strong positioning, messaging, and visual identity that stands out.', icon: Award },
    { title: 'Graphic Design', desc: 'Creative designs that communicate your brand message and captivate your audience.', icon: Palette },
    { title: 'Email Marketing', desc: 'Nurture leads, promote offers, and build lasting customer relationships through email.', icon: Inbox },
    { title: 'Content Marketing', desc: 'Engaging content that informs, inspires, and converts your audience into loyal customers.', icon: FileText },
    { title: 'Marketing Strategy', desc: 'Custom strategies based on market research, competitor analysis, and your business goals.', icon: Settings },
    { title: 'Brand Identity', desc: 'From logo to color palette, we create unique identities that reflect your brand\'s personality.', icon: ShieldCheck }
  ];

  const whyChooseUs = [
    { title: 'Data-Driven Approach', desc: 'We use data and analytics to make smart marketing decisions.', icon: LineChart },
    { title: 'Experienced Team', desc: 'Skilled marketers, creatives, and strategists dedicated to your success.', icon: Users },
    { title: 'Customized Strategies', desc: 'Tailored marketing plans that fit your industry and business goals.', icon: Settings },
    { title: 'Transparent Reporting', desc: 'Clear reports and insights to track progress and performance.', icon: BarChart },
    { title: 'Results That Matter', desc: 'We focus on leads, conversions, and long-term business growth.', icon: Target }
  ];

  const processSteps = [
    { title: 'Discover', desc: 'We understand your business, goals, and target audience.', icon: SearchCheck },
    { title: 'Plan', desc: 'We create a customized marketing strategy just for you.', icon: FileText },
    { title: 'Execute', desc: 'Our team launches campaigns and content that deliver results.', icon: Zap },
    { title: 'Optimize', desc: 'We analyze performance and continuously optimize for better ROI.', icon: LineChart },
    { title: 'Grow', desc: 'We help you scale your business and dominate your market.', icon: TrendingUp }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-inter overflow-hidden relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true" />

      {/* ─── Breadcrumbs ────────────────────────────────────────────────────── */}
      <div className="pt-28 px-6 sm:px-12 max-w-[1440px] mx-auto text-xs text-gray-500 flex items-center gap-2 relative z-10">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#ff5c00] font-semibold">Digital Marketing & Brand Growth</span>
      </div>

      {/* ─── 1. Hero Section ─────────────────────────────────────────────────── */}
      <header className="relative pt-8 pb-16 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-white/5">
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1.5 rounded-full border border-[#ff5c00]/25 bg-[#ff5c00]/8 text-[#ff5c00] text-xs font-semibold uppercase tracking-widest font-montserrat">
              Digital Marketing & Brand Growth
            </span>
            
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Grow Your Brand.<br />
              <span className="text-[#ff5c00]">Dominate Digital.</span>
            </h1>
            
            <p className="text-[#bab8b7] text-sm sm:text-base leading-relaxed max-w-2xl font-inter">
              We help businesses increase visibility, generate leads, and build strong brands across digital platforms.
            </p>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { label: 'More Visibility', icon: Eye },
                { label: 'Quality Leads', icon: Users },
                { label: 'Stronger Brands', icon: Award },
                { label: 'Higher ROI', icon: Zap }
              ].map((tag, idx) => {
                const TagIcon = tag.icon;
                return (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                    <TagIcon className="w-3.5 h-3.5 text-[#ff5c00]" />
                    {tag.label}
                  </span>
                );
              })}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/book-consultation"
                className="px-6 py-3.5 bg-[#ff5c00] hover:bg-[#e05200] text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-3.5 border border-white/10 hover:bg-white/5 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] font-inter"
              >
                Explore All Services <Layers className="w-4 h-4" />
              </Link>
            </div>

            {/* Service Supports */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10 w-fit">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold font-inter">This Service Supports</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                <Image src="/vyomora.png" alt="Vyomora logo" width={20} height={20} className="object-contain" />
                <span className="text-xs font-extrabold tracking-wider font-montserrat">VYOMORA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stat Bar (Home style - translucent black overlay) */}
        <div className="mt-16 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-4xl p-6 sm:p-8 rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
          >
            {[
              { val: '250+', label: 'Projects Delivered', icon: Award },
              { val: '120+', label: 'Happy Clients', icon: Users },
              { val: '10X', label: 'Average ROI', icon: Zap },
              { val: '98%', label: 'Client Retention', icon: ShieldCheck }
            ].map((s, idx) => {
              const StatIcon = s.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <StatIcon className="w-8 h-8 text-[#ff5c00] mb-1" />
                  <span className="font-montserrat font-extrabold text-[#ffffff] text-sm sm:text-base leading-tight">{s.val}</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider font-inter">{s.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </header>

      {/* ─── 3. What We Do Section (Dark Background) ─────────────────────────── */}
      <section className="bg-[#0a0a0c] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">What We Do</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">
              Our <span className="text-[#ff5c00]">Digital Marketing</span> Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              End-to-end digital marketing solutions to grow your brand and accelerate your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#ff5c00]/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00] group-hover:scale-105 transition-transform">
                      <SvcIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-white group-hover:text-[#ff5c00] transition-colors">{svc.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-inter">{svc.desc}</p>
                  </div>
                  <div className="pt-4 flex justify-start">
                    <Link href="/book-consultation" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ff5c00] hover:translate-x-0.5 transition-transform font-inter">
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. Why Choose Us (Dark Background) ──────────────────────────────── */}
      <section className="bg-[#050507] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Why Choose Us</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Your Growth Is Our Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((w, idx) => {
              const WIcon = w.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#ff5c00]/30 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00]">
                    <WIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-montserrat font-bold text-sm text-white">{w.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-inter">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. Our Process (Dark Background) ───────────────────────────────── */}
      <section className="bg-[#0a0a0c] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Our Process</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">How We Drive Your Digital Success</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((p, idx) => {
              const StepIcon = p.icon;
              return (
                <div key={idx} className="relative group">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3 hover:border-[#ff5c00]/30 hover:bg-white/10 transition-all duration-300 relative z-10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00]">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-base text-white">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-inter">{p.desc}</p>
                  </motion.div>
                  {idx < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-gray-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ─── 8. Final CTA (Dark Banner with Rocket) ─────────────────────────── */}
      <section className="bg-[#0a0a0c] py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black via-[#08080a] to-[#120b05] p-10 sm:p-16 rounded-[2.5rem] border border-white/5 space-y-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Ready To Grow Your Brand?</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Let's Build Your Digital<br />Success Story
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-inter">
              Partner with OCTADECENT to create powerful marketing strategies that generate leads, increase visibility, and drive growth.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 z-10">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#ff5c00] hover:bg-[#e05200] text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] w-full shadow-lg shadow-[#ff5c00]/20 font-inter"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] w-full font-inter"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
