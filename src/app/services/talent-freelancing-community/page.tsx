'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, ShieldCheck, Star, Globe, Clock, Compass, Target, Sliders,
  MessageSquare, LayoutGrid, Award, Briefcase, Terminal, Paintbrush, 
  Search, ArrowRight, CheckCircle2, SlidersHorizontal, BookOpen, Layers, ChevronRight
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

export default function TalentCommunityPage() {
  const metrics = [
    { label: 'Trusted Community', desc: 'Join a verified community of professionals and businesses.', icon: Users },
    { label: 'Secure Payments', desc: 'Safe transactions and milestone-based payment protection.', icon: ShieldCheck },
    { label: 'Quality Assurance', desc: 'Verified skills and quality work you can trust.', icon: Star },
    { label: 'Global Opportunities', desc: 'Access opportunities from anywhere in the world.', icon: Globe },
    { label: '24/7 Support', desc: 'Our support team is here to help you anytime.', icon: Clock }
  ];

  const services = [
    {
      title: 'Freelancer Marketplace',
      desc: 'Access a wide range of skilled freelancers across multiple categories.',
      icon: LayoutGrid
    },
    {
      title: 'Hiring Solutions',
      desc: 'Smart hiring solutions to find the right talent for your business needs.',
      icon: Briefcase
    },
    {
      title: 'Designer Community',
      desc: 'A creative space for designers to connect, showcase and grow together.',
      icon: Paintbrush
    },
    {
      title: 'Developer Community',
      desc: 'Empowering developers to collaborate, learn and build innovative solutions.',
      icon: Terminal
    },
    {
      title: 'Project Collaboration',
      desc: 'Tools and platforms to manage projects and collaborate seamlessly.',
      icon: MessageSquare
    },
    {
      title: 'Skill Verification',
      desc: 'Verify skills and expertise to ensure quality and build trust.',
      icon: ShieldCheck
    },
    {
      title: 'Team Building',
      desc: 'Build high-performing teams for your projects and business growth.',
      icon: Users
    },
    {
      title: 'Recruitment Services',
      desc: 'End-to-end recruitment support for startups and enterprises.',
      icon: Briefcase
    },
    {
      title: 'Portfolio Platforms',
      desc: 'Showcase work and get discovered by the right opportunities.',
      icon: LayoutGrid
    },
    {
      title: 'Networking Events',
      desc: 'Join events, meetups and webinars to network and grow together.',
      icon: Users
    }
  ];

  const processSteps = [
    { num: '01', title: 'Join', desc: 'Create your profile and be part of our community.', icon: Users },
    { num: '02', title: 'Discover', desc: 'Find the right talent or opportunity for you.', icon: Search },
    { num: '03', title: 'Collaborate', desc: 'Communicate, plan and work together seamlessly.', icon: MessageSquare },
    { num: '04', title: 'Deliver', desc: 'Deliver quality work and meet goals.', icon: Star },
    { num: '05', title: 'Grow', desc: 'Build your reputation and grow together.', icon: TrendingUpIcon }
  ];

  const whyChooseUs = [
    { title: 'Verified Professionals', desc: 'Access a network of pre-verified and skilled professionals.', icon: ShieldCheck },
    { title: 'Diverse Talent Pool', desc: 'Find experts across multiple domains and industries.', icon: Users },
    { title: 'Secure & Reliable', desc: 'Secure platform with safe payments and data protection.', icon: ShieldCheck },
    { title: 'Community Driven', desc: 'Be part of a collaborative community that grows together.', icon: Users },
    { title: 'Endless Opportunities', desc: 'Discover new projects, partnerships and growth opportunities.', icon: Star }
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
            <span className="text-white">Talent, Freelancing & Community</span>
          </nav>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 rounded-md font-inter">
              TALENT, FREELANCING & COMMUNITY
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-[1.08] lg:max-w-xl">
              Connect Talent.<br />Build Together.<br />
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff5c00] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,92,0,0.15)]">
                Grow Beyond.
              </span>
            </h1>

            <p className="font-inter text-muted text-base leading-relaxed max-w-lg text-left">
              We connect businesses with skilled professionals and build collaborative communities that create opportunities and drive success.
            </p>

            {/* Smart tags */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              {[
                'Trusted Community',
                'Verified Talent',
                'Secure Platform',
                'Endless Opportunities'
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

          {/* Hero Right Visuals */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            {/* Dashed circular background tracks */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] border border-white/5 rounded-full -z-10 animate-spin-slow" />
            
            {/* Visual image container */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,92,0,0.18)] border border-white/10 bg-[#0a0a0a] z-10 flex items-center justify-center group">
              <Image 
                src="/talent-community.jpg" 
                alt="Talent and Freelancing Marketplace" 
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
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

      {/* ─── WHAT WE OFFER: Our Talent & Community Services ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">WHAT WE OFFER</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Our Talent & Community Services
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            Empowering talent. Enabling businesses. Creating impact.
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

      {/* ─── HOW IT WORKS: Simple Steps. Strong Connections. ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">HOW IT WORKS</span>
          <h2 className="font-montserrat font-extrabold text-white text-center">
            Simple Steps. Strong Connections.
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
            Intelligent Platform. Dedicated Community.
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

      {/* ─── CTA: Join Our Community of Talent & Opportunities ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-28 sm:mt-36 relative z-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0c0c] via-[#080808] to-[#040404] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Radial light behind image */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* CTA Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ff6b00] font-inter">LET'S GROW TOGETHER</span>
              <h2 className="font-montserrat font-extrabold text-white text-left leading-tight">
                Join Our Community of Talent & Opportunities
              </h2>
              <p className="font-inter text-muted text-sm leading-relaxed max-w-xl">
                Whether you&apos;re a business looking for talent or a professional seeking opportunities, Octasverse is your space to grow.
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
                  src="/community-globe.jpg" 
                  alt="Global Professional Network Connection" 
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

// Custom TrendingUp Icon Component
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
