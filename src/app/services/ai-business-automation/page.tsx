'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cpu, Zap, Workflow, Settings, Users, Network, TrendingUp, ArrowRight,
  MessageSquare, Sparkles, HeartHandshake, Inbox, BookOpen, BrainCircuit,
  SearchCheck, Target, Rocket, ChevronRight, LayoutGrid, CheckCircle2, ShieldCheck,
  Activity, HelpCircle
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

export default function AISolutionsPage() {


  const services = [
    {
      title: 'AI Chatbots',
      desc: 'Intelligent chatbots that engage customers, answer queries, and convert leads 24/7.',
      icon: MessageSquare
    },
    {
      title: 'AI Assistants',
      desc: 'Personalized AI assistants to handle tasks, schedule, and provide smart support.',
      icon: Sparkles
    },
    {
      title: 'Workflow Automation',
      desc: 'Automate repetitive workflows and business processes to save time and resources.',
      icon: Workflow
    },
    {
      title: 'CRM Automation',
      desc: 'Automate your CRM activities including lead nurturing, follow-ups and reporting.',
      icon: HeartHandshake
    },
    {
      title: 'Business Process Automation',
      desc: 'End-to-end automation of business operations for maximum efficiency.',
      icon: Settings
    },
    {
      title: 'AI Integrations',
      desc: 'Seamless integration of AI capabilities into your existing systems and platforms.',
      icon: Network
    },
    {
      title: 'Data Analysis',
      desc: 'Transform raw data into actionable insights with AI-powered analytics.',
      icon: TrendingUp
    },
    {
      title: 'Customer Support Automation',
      desc: 'Automate ticketing, responses and support workflows for faster resolution.',
      icon: Inbox
    },
    {
      title: 'AI Consulting',
      desc: 'Strategic AI consulting to identify opportunities and build winning solutions.',
      icon: BookOpen
    },
    {
      title: 'Custom AI Solutions',
      desc: 'Tailored AI solutions designed specifically for your unique business requirements.',
      icon: BrainCircuit
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'We understand your business, challenges, and opportunities.', icon: SearchCheck },
    { num: '02', title: 'Strategy', desc: 'We design an automation strategy aligned with your goals and needs.', icon: Target },
    { num: '03', title: 'Build', desc: 'We develop and integrate AI solutions into your existing systems.', icon: Settings },
    { num: '04', title: 'Deploy', desc: 'We deploy, test and train your team for seamless adoption.', icon: Rocket },
    { num: '05', title: 'Optimize', desc: 'We monitor, analyze and continuously optimize for maximum impact.', icon: TrendingUp }
  ];

  const whyChooseUs = [
    { title: 'Expert AI Team', desc: 'Skilled professionals with deep AI/ML and automation expertise.', icon: Cpu },
    { title: 'Tailored Solutions', desc: 'Custom automation solutions built for your unique business needs.', icon: Settings },
    { title: 'Secure & Scalable', desc: 'Enterprise-grade security with scalable and reliable architecture.', icon: ShieldCheck },
    { title: 'End-to-End Support', desc: 'From strategy to deployment and ongoing optimization support.', icon: HelpCircle },
    { title: 'Future-Ready', desc: 'Cutting-edge AI technologies to keep you ahead.', icon: Zap },
    { title: 'Proven Approach', desc: 'We follow best practices to deliver consistent and effective results.', icon: Target }
  ];

  const techStack = [
    { name: 'OpenAI', logoText: 'OpenAI', glowColor: 'rgba(16, 163, 127, 0.15)' },
    { name: 'LangChain', logoText: 'LangChain', glowColor: 'rgba(255, 123, 38, 0.15)' },
    { name: 'TensorFlow', logoText: 'TensorFlow', glowColor: 'rgba(255, 110, 0, 0.15)' },
    { name: 'Python', logoText: 'Python', glowColor: 'rgba(55, 115, 165, 0.15)' },
    { name: 'PyTorch', logoText: 'PyTorch', glowColor: 'rgba(238, 76, 44, 0.15)' },
    { name: 'Rasa', logoText: 'Rasa', glowColor: 'rgba(84, 58, 142, 0.15)' },
    { name: 'Dialogflow', logoText: 'Dialogflow', glowColor: 'rgba(255, 152, 0, 0.15)' },
    { name: '& More', logoText: '& More', glowColor: 'rgba(255, 255, 255, 0.05)' }
  ];

  return (
    <div className="bg-background-dark min-h-screen relative overflow-hidden pb-16 pt-24 md:pt-28">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px] -z-10" />

      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb & Sub-badge */}
        <div className="flex flex-col gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted font-inter">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <span className="text-white">AI & Business Automation</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              AI & BUSINESS AUTOMATION
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Automate Smarter.<br />Scale Faster.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Grow Beyond Limits.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We help businesses automate operations, reduce manual work, improve accuracy, and deliver exceptional customer experiences using Artificial Intelligence.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Smart Automation',
                'Higher Efficiency',
                'Cost Optimization',
                'Data-Driven Decisions'
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
                  { name: 'REVERTEDAI', logo: '/1000156538.png' },
                  { name: 'OCTASVERSE', logo: '/octas_freelancing.png' }
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10">
                    <Image src={s.logo} alt={s.name} width={16} height={16} className="object-contain rounded-full" />
                    <span className="text-[10px] font-extrabold tracking-wider font-montserrat text-white">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Visuals - Orbit Layout */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[460px] sm:min-h-[500px]">
            {/* Dashed circular background tracks */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] border border-white/5 rounded-full -z-10" />
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] border border-dashed border-[#ff5c00]/10 rounded-full -z-10 animate-spin-slow" />
            
            {/* Center Robot Base/Pedestal */}
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(255,92,0,0.15)] border-2 border-white/10 bg-[#0c0c0c] z-10 flex items-center justify-center group">
              <Image 
                src="/robot-ai.jpg" 
                alt="AI Robot Central Core" 
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Orbiting Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* 1. AI Chatbots - Top Center */}
              <div className="absolute -translate-y-[170px] sm:-translate-y-[210px] translate-x-0 pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">AI Chatbots</span>
                </div>
              </div>

              {/* 2. Workflow Automation - Right Top */}
              <div className="absolute -translate-y-[100px] sm:-translate-y-[130px] translate-x-[130px] sm:translate-x-[160px] pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">Workflow Automation</span>
                </div>
              </div>

              {/* 3. Process Automation - Right Middle/Bottom */}
              <div className="absolute translate-y-[30px] translate-x-[160px] sm:translate-x-[200px] pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">Process Automation</span>
                </div>
              </div>

              {/* 4. CRM Automation - Right Bottom */}
              <div className="absolute translate-y-[140px] sm:translate-y-[170px] translate-x-[100px] sm:translate-x-[120px] pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">CRM Automation</span>
                </div>
              </div>

              {/* 5. AI Integrations - Bottom Center */}
              <div className="absolute translate-y-[180px] sm:translate-y-[220px] translate-x-0 pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">AI Integrations</span>
                </div>
              </div>

              {/* 6. Data Analysis - Left Middle */}
              <div className="absolute -translate-y-[20px] -translate-x-[150px] sm:-translate-x-[190px] pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">Data Analysis</span>
                </div>
              </div>

              {/* 7. Automation - Left Top */}
              <div className="absolute -translate-y-[110px] sm:-translate-y-[140px] -translate-x-[110px] sm:-translate-x-[145px] pointer-events-auto">
                <div className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#111] border border-white/15 hover:border-[#ff5c00]/60 flex items-center justify-center text-white hover:text-[#ff5c00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white/70 bg-[#0a0a0a] px-2 py-0.5 rounded border border-white/5 shadow">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── WHAT WE DO: AI & Business Automation Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE DO</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            AI & Business Automation Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            End-to-end intelligent automation solutions to streamline operations and accelerate growth.
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

      {/* ─── OUR AUTOMATION PROCESS: From Insight to Intelligent Automation ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">OUR AUTOMATION PROCESS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            From Insight To Intelligent Automation
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

      {/* ─── WHY CHOOSE OCTADECENT: Intelligent Solutions. Real Business Impact. ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHY CHOOSE OCTADECENT?</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Intelligent Solutions. Real Business Impact.
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

      {/* ─── AI TOOLS & TECHNOLOGIES WE USE ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">AI TOOLS & TECHNOLOGIES WE USE</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-xl border border-white/5 bg-[#080808]/75 text-center flex items-center justify-center font-montserrat font-bold text-sm text-white/90 hover:border-white/10 transition-all cursor-default"
              style={{ boxShadow: `inset 0 0 12px ${tech.glowColor}` }}
            >
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA: READY TO AUTOMATE YOUR BUSINESS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind cube */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">READY TO AUTOMATE YOUR BUSINESS?</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Let&apos;s Build Intelligent Automation That Drives Real Growth
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Reduce manual work, improve efficiency, and scale your business with AI-powered automation. Get a custom roadmap tailored specifically for your operational targets.
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

            {/* CTA Right Visual Cube */}
            <div className="lg:col-span-5 flex justify-center relative min-h-[220px]">
              <div className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,92,0,0.2)] border border-white/10 bg-[#0e0e0e]">
                <Image 
                  src="/ai-cube.jpg" 
                  alt="AI Infrastructure Block" 
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
