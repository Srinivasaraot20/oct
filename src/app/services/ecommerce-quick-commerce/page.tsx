'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, CheckCircle2, ChevronRight, ArrowRight, HelpCircle, Plus, Minus, Info, 
  Globe, Smartphone, Palette, SearchCheck, Layers, ShieldCheck, Activity, FileText, 
  Award, Clock, Settings, Zap, Cloud, Database, CreditCard, ChevronDown, Check,
  Target, AlertTriangle, RefreshCw, BarChart2, Briefcase, ZapOff, Play, Shield, Truck, Cpu,
  Inbox, Landmark, Heart, HelpCircle as HelpIcon, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 }
};

export default function EcommerceDevelopmentPage() {
  const [activeTechTab, setActiveTechTab] = useState('Frontend');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Stores Launched', val: '200+', icon: ShoppingCart },
    { label: 'Happy Clients', val: '150+', icon: UsersIcon },
    { label: 'Average Growth', val: '3X', icon: Zap },
    { label: 'Client Satisfaction', val: '99%', icon: ShieldCheck }
  ];

  const solutions = [
    {
      title: 'E-commerce Websites',
      desc: 'High-converting, secure, and responsive online stores built for performance.',
      icon: ShoppingCart
    },
    {
      title: 'Quick Commerce Platforms',
      desc: 'On-demand delivery platforms for hyperlocal and quick commerce businesses.',
      icon: Zap
    },
    {
      title: 'Multi-vendor Marketplaces',
      desc: 'Scalable marketplaces connecting multiple sellers with global customers.',
      icon: Globe
    },
    {
      title: 'Dropshipping Solutions',
      desc: 'Launch your store with zero inventory and scale with trusted suppliers.',
      icon: RefreshCw
    },
    {
      title: 'Product Sourcing',
      desc: 'We source quality products at the best prices from trusted manufacturers.',
      icon: SearchCheck
    },
    {
      title: 'Inventory Management',
      desc: 'Real-time tracking, stock alerts, and automated inventory control.',
      icon: Database
    },
    {
      title: 'Payment Gateway Integration',
      desc: 'Secure and smooth payment experiences with multiple gateway options.',
      icon: CreditCard
    },
    {
      title: 'Order Management',
      desc: 'Streamlined order processing, tracking, and delivery management.',
      icon: FileText
    },
    {
      title: 'Seller Portals',
      desc: 'Powerful seller dashboards with product, order, and payout management.',
      icon: UsersIcon
    },
    {
      title: 'Customer Support Systems',
      desc: 'Smart support tools, helpdesk system & automated customer communication.',
      icon: HelpCircle
    }
  ];

  const whyChooseUs = [
    { title: 'End-to-End Solution', desc: 'From idea to delivery, we handle everything.', icon: Award },
    { title: 'Scalable & Secure', desc: 'Built with modern technology for growth.', icon: ShieldCheck },
    { title: 'High Performance', desc: 'Optimized for speed, conversion & sales.', icon: Zap },
    { title: 'Cost Effective', desc: 'Smart solutions that maximize your ROI.', icon: CreditCard },
    { title: 'Expert Support', desc: 'Ongoing support for your business growth.', icon: UsersIcon }
  ];

  const industries = [
    { name: 'Fashion & Apparel', icon: ShoppingCart },
    { name: 'Electronics', icon: Smartphone },
    { name: 'Grocery & Food', icon: Layers },
    { name: 'Health & Beauty', icon: Heart },
    { name: 'Home & Living', icon: Landmark },
    { name: 'Kids & Toys', icon: UsersIcon },
    { name: 'Automotive', icon: Settings },
    { name: 'More Industries', icon: Plus }
  ];

  const processSteps = [
    { title: 'Discover', desc: 'We understand your business goals, audience, and market opportunities.', icon: SearchCheck },
    { title: 'Plan & Strategy', desc: 'We create a winning e-commerce strategy and roadmap.', icon: Target },
    { title: 'Build & Launch', desc: 'We build, test, and launch your store with all essential integrations.', icon: Settings },
    { title: 'Manage & Optimize', desc: 'We manage operations, optimize performance, and improve sales.', icon: Activity },
    { title: 'Scale & Grow', desc: 'We help you scale, expand, and dominate your market.', icon: TrendingUp }
  ];

  const techStack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS / Vanilla CSS', 'Framer Motion'],
    Backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI'],
    Database: ['PostgreSQL', 'Redis (Caching)', 'MongoDB', 'MySQL'],
    Cloud: ['AWS (Lambda, S3)', 'Google Cloud Platform', 'Microsoft Azure', 'Vercel Edge Network'],
    Commerce: ['Shopify Headless Engine', 'WooCommerce Headless', 'Magento Commerce API', 'Custom Node-based Engines'],
    Payments: ['Stripe Checkout', 'Razorpay Standard', 'PayPal Secure Gateway', 'Paytm UPI Tunnel']
  };

  const pricingTiers = [
    {
      name: 'Starter Launch',
      price: '₹3,50,000',
      desc: 'Perfect for local brands launching high-performance single-channel storefronts.',
      features: [
        'Custom Next.js Headless Design',
        'Single Country Currency & Tax Setup',
        'Stripe / Razorpay Payment Tunnels',
        'Basic Inventory Sync Engine',
        'Static Page SEO Optimization',
        '30 Days Launch Support'
      ],
      cta: 'Choose Starter'
    },
    {
      name: 'Professional Store',
      price: '₹8,50,000',
      desc: 'Ideal for rapidly growing D2C brands requiring multi-warehouse sync and deeper analytics.',
      features: [
        'Everything in Starter Store',
        'Multi-Warehouse Inventory Sync',
        'Custom Seller Dashboard Console',
        'Multi-currency & Localized Tax Integration',
        'Headless CMS Content Management',
        'Dedicated Project Lead Support'
      ],
      popular: true,
      cta: 'Choose Professional'
    },
    {
      name: 'Enterprise Commerce',
      price: '₹18,00,000',
      desc: 'Comprehensive multi-channel trade network configured for massive scale.',
      features: [
        'Everything in Professional Store',
        'Hyperlocal Quick Commerce Delivery module',
        'AI-Powered Product Recommendations',
        'Automated Courier API Dispatch Systems',
        'Custom Loyalty Programs Interface',
        '24/7 SLA Priority Response Channels'
      ],
      cta: 'Choose Enterprise'
    }
  ];

  const faqsList = [
    { q: 'How long does a custom e-commerce website development take?', a: 'A standard headless store takes between 6 to 10 weeks from discovery to launch. Enterprise platforms with custom multi-vendor or hyperlocal modules typically require 12 to 16 weeks.' },
    { q: 'What e-commerce platforms do you support?', a: 'We specialize in headless architectures built on Shopify, BigCommerce, or custom Node.js engines. We also integrate headless CMS platforms like Sanity or Strapi for seamless catalog management.' },
    { q: 'Can you integrate localized payment gateways?', a: 'Yes. We configure Stripe, Razorpay, PayU, and custom UPI integrations ensuring multi-currency conversions and local payment compliance matching your regional target markets.' },
    { q: 'Do you provide migration from platforms like WordPress?', a: 'Absolutely. We safely migrate product catalogs, historical transaction logs, customer databases, and SEO redirect structures from legacy systems (WordPress, Magento, etc.) without downtime.' },
    { q: 'Is the platform SEO-friendly?', a: 'Yes. We utilize static site generation (SSG) and incremental static regeneration (ISR) within Next.js. This ensures all product listings, review schemas, and category pages render instantly for search crawlers.' }
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white font-inter overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true" />

      {/* ─── Breadcrumbs ────────────────────────────────────────────────────── */}
      <div className="pt-28 px-6 sm:px-12 max-w-[1440px] mx-auto text-xs text-gray-500 flex items-center gap-2 relative z-10">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#ff5c00] font-semibold">E-Commerce & Quick Commerce Solutions</span>
      </div>

      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-16 px-6 sm:px-12 max-w-[1440px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest font-montserrat">
              E-Commerce & Quick Commerce Solutions
            </div>
            
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Build. Launch. Scale.<br />
              <span className="text-[#ff5c00]">Sell Everywhere.</span>
            </h1>
            
            <p className="text-[#bab8b7] text-sm sm:text-base leading-relaxed max-w-xl font-inter">
              We build and scale online commerce businesses by providing end-to-end solutions, from launching online stores to enabling fast product delivery.
            </p>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { label: 'Faster Launch', icon: Clock },
                { label: 'Higher Sales', icon: TrendingUp },
                { label: 'Smart Operations', icon: Cpu },
                { label: 'Scalable Growth', icon: Layers }
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
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/book-consultation" 
                className="px-6 py-3.5 bg-primary hover:bg-[#e05200] text-white font-bold rounded-xl text-sm transition-all orange-glow flex items-center gap-2 min-h-[44px]"
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
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold font-inter">This Service Supports</span>
              <div className="flex items-center gap-4">
                {[
                  { name: 'WHIZZINESS', logo: '/favicon.ico' },
                  { name: 'DROPSHIPPING', logo: '/dropshipping.jpg' },
                  { name: 'THRIFTORA', logo: '/favicon.ico' }
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                    <Image src={s.logo} alt={s.name} width={16} height={16} className="object-contain rounded-full" />
                    <span className="text-[10px] font-extrabold tracking-wider font-montserrat">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Right Mockup Graphics */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]"
          >
            {/* Main Phone Image Mockup */}
            <div className="relative w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] z-10 flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/ecommerce_hero.jpg" 
                alt="E-Commerce phone screen illustration with shopping cart" 
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>



          </motion.div>
        </div>

        {/* Bottom Stat Bar (Home style - translucent black overlay) */}
        <div className="mt-16 w-full flex justify-center animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-4xl p-6 sm:p-8 rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
          >
            {stats.map((s, idx) => {
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
      </section>

      {/* ─── 3. What We Offer Section (Dark Background) ─────────────────────────── */}
      <section className="bg-[#0a0a0c] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block font-montserrat">What We Offer</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">
              Complete <span className="text-[#ff5c00]">E-Commerce</span> Solutions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              Everything you need to build, manage, and scale a successful online business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solutions.map((sol, idx) => {
              const IconComp = sol.icon;
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
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-white group-hover:text-[#ff5c00] transition-colors">{sol.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-inter">{sol.desc}</p>
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
            <span className="text-primary font-bold text-xs uppercase tracking-widest font-montserrat block">Why Choose OCTADECENT?</span>
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

      {/* ─── 6. Industries We Serve (Dark Background) ───────────────────────── */}
      <section className="bg-[#0a0a0c] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest font-montserrat block">Industries We Serve</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Built For Every Industry</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="px-4 py-3 bg-white/5 border border-white/5 rounded-2xl text-xs sm:text-sm font-semibold text-gray-300 hover:border-[#ff5c00] hover:text-[#ff5c00] hover:shadow-md transition-all flex items-center gap-2 cursor-default font-inter"
                >
                  <IndIcon className="w-4 h-4 text-[#ff5c00]" />
                  <span>{ind.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. Our Process (Dark Background) ───────────────────────────────── */}
      <section className="bg-[#050507] py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest font-montserrat block">Our Process</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">From Idea To Successful Store</h2>
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

      {/* ─── Technology Stack ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0a0a0c] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block font-montserrat">Modern Architecture</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Technology Stack</h2>
            <p className="text-[#bab8b7] text-sm sm:text-base leading-relaxed font-inter">
              We build on stable, enterprise-level modern frameworks prioritizing search visibility, absolute security, and speed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'Frontend', icon: Globe, techs: techStack.Frontend },
              { name: 'Backend', icon: Cpu, techs: techStack.Backend },
              { name: 'Database', icon: Database, techs: techStack.Database },
              { name: 'Cloud & CDN', icon: Cloud, techs: techStack.Cloud },
              { name: 'Commerce Engines', icon: ShoppingCart, techs: techStack.Commerce },
              { name: 'Payment Integrations', icon: CreditCard, techs: techStack.Payments }
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-montserrat font-bold text-lg text-white">{cat.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.techs.map((t) => (
                        <span 
                          key={t} 
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-white/90 hover:bg-primary/10 hover:border-primary/30 hover:text-white transition-all cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Pricing Tiers ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10 border-t border-white/5">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-montserrat">Pricing Packages</span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Investment Levels</h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed font-inter">
            Transparent investment configurations matching your operational catalog size and transactional flow volume.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white/5 p-8 rounded-3xl border flex flex-col justify-between relative hover:scale-[1.02] transition-all duration-300 ${
                tier.popular ? 'border-primary/45 shadow-[0_0_30px_rgba(255,92,0,0.15)] bg-primary/5' : 'border-white/5'
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full font-montserrat">
                  Most Popular
                </span>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-white">{tier.name}</h3>
                  <p className="text-xs text-muted mt-1 min-h-[40px] font-inter">{tier.desc}</p>
                </div>

                <div className="pt-2">
                  <span className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">{tier.price}</span>
                  <span className="text-xs text-muted ml-1 font-inter">Setup Cost</span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/5">
                  {tier.features.map(f => (
                    <li key={f} className="text-xs text-[#bab8b7] flex items-start gap-2 font-inter">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link 
                  href="/book-consultation"
                  className={`w-full py-3 rounded-xl font-bold font-inter text-xs text-center flex items-center justify-center min-h-[44px] transition-all ${
                    tier.popular 
                      ? 'bg-primary hover:bg-[#e05200] text-white orange-glow' 
                      : 'border border-white/15 hover:bg-white/5 text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Frequently Asked Questions ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0a0a0c] border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block font-montserrat">Got Questions?</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Frequently Asked Questions</h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed font-inter">
              Everything you need to know about our custom headless e-commerce engineering services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqsList.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={faq.q}
                  className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-inter font-bold text-sm sm:text-base text-white cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#666] transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-white/5 font-inter text-xs sm:text-sm text-[#bab8b7] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Related Services ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10 border-t border-white/5">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-montserrat">Expand Your Digital Empire</span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Related Services</h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed font-inter">
            Unifying multi-channel networks with other specialized technical divisions inside our company.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Digital Marketing', href: '/services/digital-marketing-brand-growth', desc: 'Data-driven growth strategies maximizing transaction return on ad spend.' },
            { title: 'AI & Automation', href: '/services/ai-business-automation', desc: 'Deploy automated business agents to process checkout details.' },
            { title: 'Web Development', href: '/services/web-app-software-development', desc: 'Scalable corporate web backends and pre-rendered portals.' },
            { title: 'SEO Services', href: '/services/digital-marketing-brand-growth', desc: 'Rank store listings on search engines via semantic crawlers.' }
          ].map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 min-h-[180px]"
            >
              <div className="space-y-2">
                <h3 className="font-inter font-bold text-sm sm:text-base text-white">{service.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-inter">{service.desc}</p>
              </div>
              <div className="pt-4">
                <Link href={service.href} className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-[#e05200] transition-all">
                  Learn More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Final Call to Action (Dark Card with Laptop graphics mockup) ─────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black via-[#08080a] to-[#120b05] p-10 sm:p-16 rounded-[2.5rem] border border-white/5 space-y-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Ready To Launch Your Online Business?</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Let's Build Your E-Commerce<br />Success Story
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-inter font-inter">
              Partner with OCTADECENT to create powerful e-commerce platforms that generate sales, optimize orders, and grow your brand.
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

// Simple fallback component for compatibility safety
function UsersIcon(props: any) {
  return <Users className={props.className} />;
}
import { Users } from 'lucide-react';
