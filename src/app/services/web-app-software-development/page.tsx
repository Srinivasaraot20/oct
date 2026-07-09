'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, Smartphone, Cloud, LayoutGrid, Users, Settings, Terminal, Palette,
  HelpCircle, SearchCheck, Target, ArrowRight, CheckCircle2, ShieldCheck, Rocket,
  Zap, Clock, Play, Award, HeartHandshake, ChevronRight, Activity, Code, ShieldAlert,
  BrainCircuit, Database, Laptop
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

export default function WebDevelopmentPage() {
  const metrics = [
    { 
      label: 'Custom Solutions', 
      desc: 'Tailored solutions aligned with your business goals and user needs.', 
      icon: Settings 
    },
    { 
      label: 'Scalable Architecture', 
      desc: 'Built for growth with clean code and scalable architecture.', 
      icon: Database 
    },
    { 
      label: 'Modern Technologies', 
      desc: 'We use the latest tools and technologies to build future-ready products.', 
      icon: BrainCircuit 
    },
    { 
      label: 'Quality & Security', 
      desc: 'Secure, reliable, and rigorously tested for performance.', 
      icon: ShieldCheck 
    },
    { 
      label: 'Timely Delivery', 
      desc: 'Agile development ensures on-time delivery without compromise.', 
      icon: Clock 
    },
    { 
      label: 'Ongoing Support', 
      desc: 'Continuous maintenance and support to keep your business moving.', 
      icon: HeartHandshake 
    }
  ];

  const services = [
    {
      title: 'Business Websites',
      desc: 'Modern, responsive, and SEO-friendly websites that represent your brand and convert visitors into customers.',
      icon: Globe
    },
    {
      title: 'Mobile Applications',
      desc: 'Feature-rich mobile apps for iOS and Android that deliver seamless user experiences.',
      icon: Smartphone
    },
    {
      title: 'SaaS Platforms',
      desc: 'Scalable and secure SaaS products built to solve real-world business challenges.',
      icon: Cloud
    },
    {
      title: 'ERP Systems',
      desc: 'Custom ERP solutions to streamline operations, improve productivity, and centralize business processes.',
      icon: LayoutGrid
    },
    {
      title: 'CRM Development',
      desc: 'Smart CRM systems to manage leads, automate workflows, and strengthen customer relationships.',
      icon: Users
    },
    {
      title: 'Custom Software',
      desc: 'Tailored software solutions built to match your unique business processes and requirements.',
      icon: Settings
    },
    {
      title: 'API Development',
      desc: 'Robust and secure APIs to connect systems and extend functionality.',
      icon: Terminal
    },
    {
      title: 'Cloud Solutions',
      desc: 'Scalable cloud infrastructure and solutions for high availability and performance.',
      icon: Cloud
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centered designs that enhance usability, engagement, and customer satisfaction.',
      icon: Palette
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing maintenance, updates, and 24/7 support to ensure smooth and reliable operations.',
      icon: HelpCircle
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'We understand your business, goals, and challenges.', icon: SearchCheck },
    { num: '02', title: 'Plan', desc: 'We analyze and plan the right solution and roadmap.', icon: Target },
    { num: '03', title: 'Design', desc: 'We design intuitive UI/UX and architecture that delivers great experiences.', icon: Palette },
    { num: '04', title: 'Develop', desc: 'We build secure, scalable, and high-performance solutions.', icon: Code },
    { num: '05', title: 'Test', desc: 'We test rigorously to ensure quality, security, and reliability.', icon: ShieldCheck },
    { num: '06', title: 'Deploy', desc: 'We deploy the solution smoothly with zero downtime.', icon: Rocket },
    { num: '07', title: 'Support', desc: 'We provide continuous support and optimize for growth.', icon: HelpCircle }
  ];

  const techStack = [
    { name: 'React', glowColor: 'rgba(97, 218, 251, 0.15)' },
    { name: 'Next.js', glowColor: 'rgba(255, 255, 255, 0.15)' },
    { name: 'Node.js', glowColor: 'rgba(115, 179, 68, 0.15)' },
    { name: 'Laravel', glowColor: 'rgba(255, 45, 32, 0.15)' },
    { name: 'Python', glowColor: 'rgba(55, 115, 165, 0.15)' },
    { name: 'PHP', glowColor: 'rgba(119, 123, 179, 0.15)' },
    { name: 'Flutter', glowColor: 'rgba(2, 86, 155, 0.15)' },
    { name: 'AWS', glowColor: 'rgba(255, 153, 0, 0.15)' },
    { name: 'Firebase', glowColor: 'rgba(255, 202, 40, 0.15)' },
    { name: 'Docker', glowColor: 'rgba(36, 150, 237, 0.15)' },
    { name: '& More', glowColor: 'rgba(255, 255, 255, 0.05)' }
  ];

  const successStories = [
    {
      title: 'E-Commerce Platform',
      desc: 'We built a high-performance eCommerce platform with advanced features and seamless checkout.',
      impact: 'Impact: Increased online sales by 150%',
      icon: Globe
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Developed a SaaS analytics platform that streamlines data visualization and reporting.',
      impact: 'Impact: Improved efficiency by 60%',
      icon: Activity
    },
    {
      title: 'CRM Solution',
      desc: 'Custom CRM solution that automated workflows and improved lead management.',
      impact: 'Impact: Boosted lead conversion by 70%',
      icon: Users
    }
  ];

  return (
    <div className="bg-background-dark min-h-screen relative overflow-hidden pb-16 pt-24 md:pt-28">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px] -z-10" />

      {/* ─── Hero Section ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb & Sub-badge */}
        <div className="flex flex-col gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted font-inter">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-muted/50" />
            <span className="text-white">Web, App & Software Development</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              WEB, APP & SOFTWARE DEVELOPMENT
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              We Design. We Develop.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                We Build Your Success.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We design and develop digital products tailored to business needs. From powerful websites and mobile apps to enterprise software solutions, we build technology that drives real impact.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Scalable Solutions',
                'Secure & Reliable',
                'High Performance',
                'Future Ready'
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

            {/* Vyomora Logo Integration */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-4">
              <span className="text-xs font-semibold text-muted/60 uppercase tracking-widest font-inter">This Service Supports</span>
              <div className="relative h-7 w-28 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/vyomora.png"
                  alt="Vyomora Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Hero Right Visuals - Devices mockup */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            {/* Dashed circular background tracks */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] border border-white/5 rounded-full -z-10 animate-spin-slow" />
            
            {/* Devices display image container */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,92,0,0.18)] border border-white/10 bg-[#0a0a0a] z-10 flex items-center justify-center group">
              <Image 
                src="/dev-devices.jpg" 
                alt="Development Platforms Showcase" 
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Section (Feature Cards) ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-28 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 hover:bg-[#0c0c0c] hover:border-[#ff5c00]/20 transition-all text-center flex flex-col justify-center space-y-3 group">
                <div className="mx-auto w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#ff6b00] bg-[#ff6b00]/5 group-hover:border-[#ff6b00]/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-sm leading-tight group-hover:text-[#ff6b00] transition-colors">{metric.label}</h3>
                <p className="font-inter text-muted text-[11px] leading-relaxed">{metric.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── WHAT WE DO: Our Development Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE DO</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Development Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            End-to-end solutions to build, scale, and transform your business.
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

      {/* ─── OUR DEVELOPMENT PROCESS: From Idea To Impact ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">OUR DEVELOPMENT PROCESS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            From Idea To Impact
          </h2>
        </div>

        {/* 7-Step Horizontal Process Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 lg:gap-8 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 relative group col-span-1">
                {/* Process Node */}
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white/5 flex items-center justify-center text-white bg-[#0e0e0e] group-hover:border-[#ff5c00]/60 group-hover:shadow-[0_0_20px_rgba(255,92,0,0.15)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  
                  {/* Connector Arrow (Visible on desktop for intermediate steps) */}
                  {idx < 6 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-7 translate-y-[-50%] text-white/20 select-none pointer-events-none">
                      <ChevronRight className="w-4 h-4 animate-pulse-slow" />
                      <ChevronRight className="w-4 h-4 animate-pulse-slow -ml-3" />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#ff6b00] tracking-widest block font-inter">{step.num}. {step.title}</span>
                  <p className="font-inter text-muted text-[11px] leading-relaxed max-w-[140px] mx-auto">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── TECHNOLOGIES WE USE ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">TECHNOLOGIES WE USE</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-4">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl border border-white/5 bg-[#080808]/75 text-center flex items-center justify-center font-montserrat font-bold text-xs text-white/90 hover:border-white/10 transition-all cursor-default"
              style={{ boxShadow: `inset 0 0 10px ${tech.glowColor}` }}
            >
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SUCCESS STORIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">SUCCESS STORIES</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            We Build Solutions That Drive Success
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, idx) => {
            const Icon = story.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-[#090909]/60 hover:bg-[#0c0c0c] hover:border-[#ff5c00]/25 transition-all space-y-4 text-left group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#ff6b00] bg-[#ff6b00]/5 group-hover:border-[#ff6b00]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-lg">{story.title}</h3>
                <p className="font-inter text-muted text-xs leading-relaxed">{story.desc}</p>
                <div className="text-xs font-bold text-[#ff6b00] font-inter pt-2">{story.impact}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/5 text-white font-bold rounded-xl transition-all duration-300 font-inter text-sm"
          >
            View More Success Stories
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3 text-left">
              <h3 className="font-montserrat font-extrabold text-white text-2xl">Ready to Build Your Next Digital Product?</h3>
              <p className="font-inter text-muted text-sm max-w-xl">Let&apos;s turn your idea into a powerful digital solution that drives business growth.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ff5c00] hover:bg-[#cc4a00] text-white font-bold rounded-xl orange-glow transition-all duration-300 font-inter text-sm group"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/5 text-white/95 font-bold rounded-xl transition-all duration-300 font-inter text-sm"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
