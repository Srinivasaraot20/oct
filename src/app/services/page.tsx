'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Globe, Palette, ShoppingCart, TrendingUp, SearchCheck, 
  ArrowRight, ShieldCheck, Layers, Settings, CreditCard, 
  ChevronDown, Check, Zap, Briefcase, Users, Target, Activity, Award,
  ChevronRight, Rocket, Building2, Landmark, Truck, Eye, HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 }
};

interface DetailedService {
  num: string;
  title: string;
  desc: string;
  href: string;
  icon: any;
  supports: string;
  features: string[];
  metrics: string[];
}

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Business Ventures', val: '18+', icon: Building2 },
    { label: 'Core Service Categories', val: '10+', icon: Layers },
    { label: 'Solutions Delivered', val: '100+', icon: Award },
    { label: 'Industries Served', val: '20+', icon: Target },
    { label: 'Business Ecosystem', val: 'End-to-End', icon: ShieldCheck }
  ];

  const whyChooseUs = [
    { title: 'Business First', desc: 'Every solution is aligned with measurable business goals.', icon: Target },
    { title: 'Future Ready', desc: 'Built with AI, automation, cloud technologies, and scalable architecture.', icon: Zap },
    { title: 'Complete Ecosystem', desc: 'Technology, marketing, logistics, branding, and innovation in one place.', icon: Layers },
    { title: 'End-to-end Execution', desc: 'From strategy to launch and continuous optimization.', icon: Activity },
    { title: 'Industry Expertise', desc: 'Solutions tailored for startups, SMEs, enterprises, and global brands.', icon: Briefcase },
    { title: 'Innovation Driven', desc: 'We continuously research emerging technologies to build future-ready businesses.', icon: Cpu }
  ];

  const coreServices: DetailedService[] = [
    {
      num: '01',
      title: 'E-Commerce & Quick Commerce Solutions',
      desc: 'Launch, manage, and scale online commerce businesses with complete digital commerce infrastructure.',
      href: '/services/ecommerce-quick-commerce',
      icon: ShoppingCart,
      supports: 'Whizziness, Dropshipping, Thriftora',
      features: ['Multi-channel Storefronts', 'Hyper-local Delivery APIs', 'Inventory & Warehouse Sync'],
      metrics: ['99.9% Checkout Uptime', '30% Average AOV Increase', 'Integrated Shipping APIs']
    },
    {
      num: '02',
      title: 'Digital Marketing & Brand Growth',
      desc: 'Accelerate business growth with data-driven marketing strategies and powerful brand positioning.',
      href: '/services/digital-marketing-brand-growth',
      icon: TrendingUp,
      supports: 'Vyomora',
      features: ['Performance Ad Management', 'SEO & High-Intent Search Traffic', 'Conversion Rate Optimization (CRO)'],
      metrics: ['3.8x Average ROAS', '400k+ Leads Generated', 'Full Funnel Optimization']
    },
    {
      num: '03',
      title: 'AI & Business Automation',
      desc: 'Automate repetitive tasks, improve customer experiences, and increase operational efficiency using artificial intelligence.',
      href: '/services/ai-business-automation',
      icon: Cpu,
      supports: 'RevertedAI',
      features: ['Agentic Customer Support AI', 'Automated Inventory & Billing Workflows', 'Internal Tooling & NLP Integrations'],
      metrics: ['70% Tasks Automated', '24/7 Availability', 'Reduced Operational Errors']
    },
    {
      num: '04',
      title: 'Web, App & Software Development',
      desc: 'Build secure, scalable, and high-performance digital products for businesses of every size.',
      href: '/services/web-app-software-development',
      icon: Globe,
      supports: 'All OCTADECENT Ventures',
      features: ['React & Next.js Frameworks', 'Robust Backend APIs & Database Architectures', 'iOS & Android App Store Deployments'],
      metrics: ['Sub-1s Load Times', '100% SEO Lighthouse Score', 'TypeScript Architecture']
    },
    {
      num: '05',
      title: 'Creative Studio',
      desc: 'Create memorable digital experiences through branding, visual storytelling, and creative production.',
      href: '/services/creative-studio',
      icon: Palette,
      supports: 'Artivora, TuwiTuwi',
      features: ['Premium Brand Identity Design', 'Visual Assets & UX Copywriting', 'Responsive UI/UX Design'],
      metrics: ['Expert Design Team', 'Bespoke Brand Assets', 'Unique Digital Assets']
    },
    {
      num: '06',
      title: 'Business Strategy & Startup Consulting',
      desc: 'Helping founders transform ideas into successful businesses through strategic planning and execution.',
      href: '/services/business-strategy-startup-consulting',
      icon: Briefcase,
      supports: 'InfinityIdeasDCT, SomethingToBeDone',
      features: ['Go-to-Market (GTM) Strategy', 'Financial Modeling & Forecasts', 'Venture Capital Positioning'],
      metrics: ['10+ Successful Launches', '$15M+ Capital Raised', 'Founder Mentorship']
    },
    {
      num: '07',
      title: 'Supply Chain, Logistics & Global Trade',
      desc: 'Optimize operations with efficient logistics, inventory systems, and international trade solutions.',
      href: '/services/supply-chain-logistics-global-trade',
      icon: Layers,
      supports: 'ZerotoAll, Vantora',
      features: ['Cross-border Logistics Routing', 'Real-time GPS Fleet Tracking', 'Import/Export Documentation Automation'],
      metrics: ['24% Reduced Fulfillment Cost', '98% On-Time Deliveries', 'Global Broker Support']
    },
    {
      num: '08',
      title: 'Talent, Freelancing & Community',
      desc: 'Build teams, connect professionals, and create thriving digital communities.',
      href: '/services/talent-freelancing-community',
      icon: Users,
      supports: 'Octasverse',
      features: ['Dedicated Vetted Talent Sourcing', 'Freelancer Payments Infrastructure', 'Community Events & Networking'],
      metrics: ['5000+ Vetted Talents', 'Secure Escrow Payouts', 'High Retention Rates']
    },
    {
      num: '09',
      title: 'Retail & Lifestyle Commerce',
      desc: 'Deliver seamless shopping experiences across fashion, lifestyle, wellness, and specialty retail markets.',
      href: '/services/retail-lifestyle-commerce',
      icon: ShoppingCart,
      supports: 'Xbaex, RudraCollections, Dotfeelz, XoxoRentals, Novelia, Thriftora',
      features: ['Omnichannel POS System Integration', 'Bespoke Brand Styling & Visuals', 'B2B/B2C Apparel Order Pipelines'],
      metrics: ['15+ Active Retail Brands', 'Seamless POS-Web Sync', 'High Customer Loyalty']
    },
    {
      num: '10',
      title: 'Innovation, Research & Venture Building',
      desc: 'Transform ideas into scalable ventures through research, validation, collaboration, and strategic innovation.',
      href: '/services/innovation-research-venture-building',
      icon: Target,
      supports: 'Eurekatobeas, InfinityIdeasDCT',
      features: ['Deep Tech R&D Pipelines', 'Market Validation & Surveys', 'Venture Capital Networking'],
      metrics: ['4 Active Incubations', 'Patented Methodologies', 'Rapid Prototyping Sandbox']
    }
  ];

  const industries = [
    { name: 'Startups', icon: Rocket },
    { name: 'SMEs', icon: Briefcase },
    { name: 'Enterprises', icon: Building2 },
    { name: 'Retail', icon: ShoppingCart },
    { name: 'Healthcare', icon: Activity },
    { name: 'Education', icon: Award },
    { name: 'Logistics', icon: Layers },
    { name: 'Manufacturing', icon: Settings },
    { name: 'Real Estate', icon: Landmark },
    { name: 'Finance', icon: CreditCard },
    { name: 'Hospitality', icon: Users },
    { name: 'Technology', icon: Cpu },
    { name: 'Government Brands', icon: ShieldCheck }
  ];

  const processSteps = [
    { title: 'Discover', desc: 'Understanding your business challenges and opportunities.', icon: SearchCheck },
    { title: 'Strategy', desc: 'Planning scalable digital and operational solutions.', icon: Target },
    { title: 'Design & Development', desc: 'Building products, platforms, and business systems.', icon: Settings },
    { title: 'Launch', desc: 'Deployment with testing and optimization.', icon: Rocket },
    { title: 'Growth', desc: 'Continuous support, marketing, automation, and scaling.', icon: TrendingUp }
  ];

  const faqs = [
    { q: 'What industries does OCTADECENT serve?', a: 'OCTADECENT serves a diverse range of industries including Retail, E-Commerce, Fashion, Healthcare, Logistics, SMEs, Enterprises, and early-stage Startups.' },
    { q: 'Can you handle end-to-end digital transformation?', a: 'Yes. We offer strategy consulting, full-stack software development, automated AI workflows, digital performance marketing, logistics integrations, and branding under one roof.' },
    { q: 'Do you provide custom software development?', a: 'Absolutely. We specialize in custom web architectures (Next.js/React), mobile applications (iOS/Android), custom billing/pricing APIs, databases, and custom AI tooling.' },
    { q: 'How does AI automation improve business efficiency?', a: 'AI automation replaces manual tasks (data enrichment, order fulfillment support, low-stock notifications) with agentic workflows, decreasing overhead costs and accelerating speed of execution.' },
    { q: 'Can startups work with OCTADECENT?', a: 'Yes, we have custom scaling frameworks and a specialized startup accelerator consulting model designed to take founders from initial validation to Go-to-Market ready.' },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes, we offer multiple support tiers, continuous conversion optimization, search keyword SEO monitoring, security audits, and cloud database maintenance.' },
    { q: 'Can multiple services be combined into one solution?', a: 'Absolutely. Our strength is our unified ecosystem. You can combine custom commerce platforms with AI pipelines, performance marketing campaigns, and shipping integrations seamlessly.' },
    { q: 'How do I start a project with OCTADECENT?', a: 'Click on "Start Your Project" or "Schedule a Consultation" to book a discovery call. Our team will review your scope and suggest a dedicated architecture path.' }
  ];

  const ecosystemVentures = {
    Commerce: [
      { name: 'Whizziness', logo: '/1000156533.png' },
      { name: 'Dropshipping', logo: '/dropshipping.jpg' },
      { name: 'Thriftora', logo: '/th.png' }
    ],
    Marketing: [
      { name: 'Vyomora', logo: '/vyomora.png' }
    ],
    AI: [
      { name: 'RevertedAI', logo: '/1000156538.png' }
    ],
    Innovation: [
      { name: 'InfinityIdeasDCT', logo: '/infinity_ideas.jpg' },
      { name: 'Eurekatobeas', logo: '/1000156536.png' }
    ],
    Creative: [
      { name: 'Artivora', logo: '/artivora.jpg' },
      { name: 'TuwiTuwi', logo: '/1000156561.png' }
    ],
    Logistics: [
      { name: 'ZerotoAll', logo: '/zero_to_all.jpg' },
      { name: 'Vantora', logo: '/vantora.jpg' }
    ],
    Community: [
      { name: 'Octasverse', logo: '/octas_freelancing.png' }
    ],
    Business: [
      { name: 'SomethingToBeDone', logo: '/1000156537.png' }
    ],
    Retail: [
      { name: 'Xbaex', logo: '/1000156535.png' },
      { name: 'RudraCollections', logo: '/rudracollections.jpg' },
      { name: 'Dotfeelz', logo: '/dotfeelz.jpg' },
      { name: 'XoxoRentals', logo: '/xoxorentals.jpg' },
      { name: 'Novelia', logo: '/novelia.jpg' }
    ]
  };



  return (
    <div className="bg-[#050505] min-h-screen text-white font-inter overflow-hidden relative">
      
      {/* ─── 1. Hero Section (Dark) ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 max-w-[1440px] mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat">
              Our Services
            </span>
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Solutions That Build,<br />Scale & Transform<br />
              <span className="text-[#ff5c00]">Businesses</span>
            </h1>
            <p className="text-[#bab8b7] text-sm sm:text-base leading-relaxed max-w-xl font-inter">
              OCTADECENT is a technology and business ecosystem that helps startups, enterprises, and growing brands launch, automate, market, and scale their businesses through innovative digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('interactive-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-[#ff5c00] hover:bg-[#e05200] text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
              >
                Explore Services Showcase <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                href="/book-consultation" 
                className="px-6 py-3.5 border border-white/10 hover:bg-white/5 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center min-h-[44px] font-inter"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right Rotating Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px]"
          >
            {/* Outer Rings */}
            <div className="absolute w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] border border-[#ff5c00]/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[220px] sm:w-[270px] h-[220px] sm:h-[270px] border border-dashed border-[#ff5c00]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Central Octagon Button Area */}
            <div className="relative w-36 h-36 bg-gradient-to-tr from-[#ff5c00]/30 to-[#ff5c00]/5 border border-[#ff5c00]/35 rounded-[2rem] flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,92,0,0.25)]">
              <span className="font-montserrat font-extrabold text-5xl text-[#ff5c00]">O</span>
            </div>

            {/* Orbiting Icons */}
            {[
              { icon: Truck, angle: 0 },
              { icon: ShoppingCart, angle: 60 },
              { icon: TrendingUp, angle: 120 },
              { icon: Globe, angle: 180 },
              { icon: Cpu, angle: 240 },
              { icon: Users, angle: 300 }
            ].map((node, idx) => {
              const Icon = node.icon;
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * 130;
              const y = Math.sin(rad) * 130;
              return (
                <div 
                  key={idx}
                  className="absolute w-10 h-10 rounded-full bg-[#111] border border-[#ff5c00]/40 flex items-center justify-center text-[#ff5c00] shadow-md z-20"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              );
            })}
          </motion.div>
        </div>

      </section>

      {/* ─── 2. Interactive Services Showcase (Brand Redesign) ─────────────────── */}
      <section id="interactive-dashboard" className="bg-[#08080a] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Interactive Catalog</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Our 10 Core Services</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              Explore how each service in our integrated business ecosystem works together to drive value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(255,92,0,0.1)] min-h-[360px]"
                >
                  {/* Glowing background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c00]/0 via-transparent to-[#ff5c00]/5 group-hover:from-[#ff5c00]/5 transition-all duration-500 pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-montserrat font-extrabold text-2xl text-white/10 group-hover:text-primary/20 transition-colors duration-500 font-montserrat">
                        {service.num}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-inter line-clamp-3">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 pt-4 border-t border-white/5">
                      {service.features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300 font-inter">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with supports and button */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-inter">
                      Supports: <span className="text-gray-300 font-bold">{service.supports}</span>
                    </div>
                    <Link
                      href={service.href}
                      className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#ff5c00] text-white flex items-center justify-center transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. About Services Section (Dark Background) ───────────── */}
      <section className="bg-[#050505] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">
              About Our Services
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Everything Your Business Needs Under <span className="text-[#ff5c00]">One Ecosystem</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              <p>
                Whether you're launching your first startup, modernizing an enterprise, building an eCommerce platform, or integrating AI into daily operations, OCTADECENT provides complete business solutions under one roof.
              </p>
              <p>
                Our multidisciplinary team combines technology, marketing, automation, logistics, design, and innovation to create scalable digital ecosystems that drive sustainable business growth.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[300px]"
          >
            <div className="w-full aspect-[4/3] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
              <Image 
                src="/sr.png" 
                alt="OCTADECENT ecosystem team working" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. Why Choose OCTADECENT (Dark Background) ─────────────────── */}
      <section className="bg-[#08080a] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Why Choose OCTADECENT</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Built For Impact. Designed For Growth.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((w, idx) => {
              const CardIcon = w.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#ff5c00]/30 hover:shadow-2xl transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00]">
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base sm:text-lg text-white">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-inter">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. Industries We Serve (Dark Background) ───────────────────────── */}
      <section className="bg-[#050505] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Industries We Serve</span>
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
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs sm:text-sm font-semibold text-gray-300 hover:border-[#ff5c00] hover:text-[#ff5c00] hover:shadow-2xl transition-all flex items-center gap-2 cursor-default font-inter"
                >
                  <IndIcon className="w-4 h-4 text-[#ff5c00]" />
                  <span>{ind.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. Our Process (Dark Background) ───────────────────────────────── */}
      <section className="bg-[#08080a] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Our Process</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">How We Work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {processSteps.map((p, idx) => {
              const StepIcon = p.icon;
              return (
                <div key={idx} className="relative group">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3 relative hover:border-[#ff5c00]/30 hover:shadow-2xl transition-all duration-300 z-10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00]">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-montserrat font-bold text-base text-white">{p.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-inter">{p.desc}</p>
                  </motion.div>
                  {/* Connector Arrow for Large Screens */}
                  {idx < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-gray-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. OCTADECENT Ecosystem (Dark Background) ───────────────────────── */}
      <section className="bg-[#08080a] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">The Octadecent Ecosystem</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">One Ecosystem. Infinite Possibilities.</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              A powerful ecosystem of companies working together to create impact across industries.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {Object.entries(ecosystemVentures).map(([category, ventures], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col gap-4"
              >
                <div className="text-xs font-extrabold uppercase text-[#ff5c00] tracking-wider border-b border-white/5 pb-2 font-montserrat">
                  {category}
                </div>
                <ul className="space-y-3">
                  {ventures.map(v => (
                    <li key={v.name} className="text-xs font-semibold text-gray-300 flex items-center gap-2 font-inter">
                      <div className="w-5 h-5 rounded-full overflow-hidden bg-white/10 shrink-0 flex items-center justify-center">
                        <Image src={v.logo} alt={v.name} width={20} height={20} className="object-contain" />
                      </div>
                      <span>{v.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Frequently Asked Questions (Dark Background) ───────────────── */}
      <section className="bg-[#050505] text-white py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: FAQs */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div {...fadeInUp} className="space-y-4">
              <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Frequently Asked Questions</span>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">Everything You Need To Know</h2>
            </motion.div>

            <div className="space-y-4 pt-6">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={faq.q}
                    className="border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 bg-white/5"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between font-inter font-bold text-sm sm:text-base text-white cursor-pointer select-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff5c00]' : ''}`} />
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
                          <div className="p-6 pt-0 border-t border-white/5 font-inter text-xs sm:text-sm text-gray-400 leading-relaxed">
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

          {/* Right: FAQ Box Decoration */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[300px] border border-white/5 rounded-3xl p-8 bg-white/[0.02] shadow-2xl">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ff5c00]/10 flex items-center justify-center text-[#ff5c00]">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-lg text-white">Still Have Questions?</h3>
              <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed font-inter">
                If you have custom queries, our strategic advisers are here to assist.
              </p>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-[#ff5c00] hover:bg-[#e05200] text-white text-xs font-bold rounded-lg transition-colors font-inter"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. Call to Action (Dark Box with Rocket) ───────────────────────── */}
      <section className="bg-transparent py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black via-[#08080a] to-[#120b05] p-10 sm:p-16 rounded-[2.5rem] border border-white/5 space-y-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl text-left">
            <span className="text-[#ff5c00] font-bold text-xs uppercase tracking-widest font-montserrat block">Ready To Get Started?</span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Ready to Build Your Next<br />Business Success Story?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-inter">
              Whether you're launching a startup, modernizing an enterprise, automating operations, or expanding into new markets, OCTADECENT provides the expertise, technology, and strategic guidance to help you achieve sustainable growth.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 z-10">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#ff5c00] hover:bg-[#e05200] text-white font-bold rounded-2xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 min-h-[44px] w-full shadow-lg shadow-[#ff5c00]/20 font-inter"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/book-consultation" 
              className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl text-sm sm:text-base transition-all flex items-center justify-center gap-2 min-h-[44px] w-full font-inter"
            >
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
