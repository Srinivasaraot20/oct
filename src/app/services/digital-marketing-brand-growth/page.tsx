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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
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
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 w-fit">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold font-inter">This Service Supports</span>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { name: 'VYOMORA', logo: '/vyomora.png' },
                    { name: 'OCTASVERSE', logo: '/octas_freelancing.png' }
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                      <Image src={s.logo} alt={s.name} width={16} height={16} className="object-contain rounded-full" />
                      <span className="text-[10px] font-extrabold tracking-wider font-montserrat">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square max-w-[500px] mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,92,0,0.15)] group"
          >
            <Image
              src="/digital_marketing_hero.jpg"
              alt="Digital Marketing & Brand Growth"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width={600}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
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
