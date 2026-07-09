'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, Globe, Heart, DollarSign, TrendingUp, Clock,
  Zap, UserCheck, Star, GraduationCap, Award, ChevronDown,
  MapPin, Briefcase, Search, Send, Users, Building2, Laptop2, Rocket,
  Code2, Cpu, Scale, TestTube2, Server, Shield, Film, Camera,
  LineChart, PenLine, Headset, Megaphone, Palette, LayoutDashboard,
  MonitorSmartphone, FolderKanban, Mail, Phone
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

// ─── TypeScript Interfaces ────────────────────────────────────────────────────

interface Job {
  id: number;
  title: string;
  department: string;
  employmentType: string;
  experience: string;
  location: string;
  description: string;
  icon: any;
  level: 'junior' | 'mid';
}

// ─── Job Data ─────────────────────────────────────────────────────────────────

// ─── Job Data ─────────────────────────────────────────────────────────────────
const jobsList: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    department: 'Engineering',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Build pixel-perfect, high-performance user interfaces using React, Next.js, and modern CSS frameworks for our commerce ecosystem.',
    icon: Code2,
    level: 'junior',
  },
  {
    id: 2,
    title: 'AI Automation Expert',
    department: 'AI & Innovation',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Design and deploy intelligent automation pipelines, neural agents, and LLM-powered workflows that transform business operations.',
    icon: Cpu,
    level: 'junior',
  },
  {
    id: 3,
    title: 'Legal & Compliance Executive',
    department: 'Legal',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Oversee regulatory compliance, contract management, and legal risk assessment across our 18 integrated business domains.',
    icon: Scale,
    level: 'junior',
  },
  {
    id: 4,
    title: 'QA Tester',
    department: 'Quality Assurance',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Ensure software excellence through manual and automated testing of web applications, APIs, and commerce platforms.',
    icon: TestTube2,
    level: 'junior',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Architect CI/CD pipelines, manage cloud infrastructure, and ensure 100% uptime across our global commerce infrastructure.',
    icon: Server,
    level: 'junior',
  },
  {
    id: 6,
    title: 'Cybersecurity Expert',
    department: 'Security',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Protect our enterprise infrastructure through vulnerability assessments, threat modeling, and security hardening strategies.',
    icon: Shield,
    level: 'junior',
  },
  {
    id: 7,
    title: 'Motion Graphics & Video Editor',
    department: 'Creative',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Craft compelling motion graphics, brand videos, and animated content that elevates OCTADECENT Private Limited visual identity across all platforms.',
    icon: Film,
    level: 'junior',
  },
  {
    id: 8,
    title: 'Photography & Videographer',
    department: 'Creative',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Capture high-quality photos and video content for products, team culture, campaigns, and brand storytelling initiatives.',
    icon: Camera,
    level: 'junior',
  },
  {
    id: 9,
    title: 'SEO Specialist',
    department: 'Marketing',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Drive organic traffic through technical SEO audits, keyword strategy, authority link building, and on-page optimizations.',
    icon: LineChart,
    level: 'junior',
  },
  {
    id: 10,
    title: 'Content Writer',
    department: 'Marketing',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Produce compelling blogs, case studies, landing pages, and thought-leadership content that drives engagement and conversions.',
    icon: PenLine,
    level: 'junior',
  },
  {
    id: 11,
    title: 'Customer Support Executive',
    department: 'Operations',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Deliver exceptional support experiences by resolving client queries, managing escalations, and maintaining high satisfaction scores.',
    icon: Headset,
    level: 'junior',
  },
  {
    id: 12,
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Execute data-driven campaigns across paid, social, and email channels to grow brand awareness and maximize ROAS.',
    icon: Megaphone,
    level: 'junior',
  },
  {
    id: 13,
    title: 'Graphic Designer',
    department: 'Design',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Design stunning visuals — from brand identities and marketing collateral to social media assets and presentation decks.',
    icon: Palette,
    level: 'junior',
  },
  {
    id: 14,
    title: 'Full Stack Developer',
    department: 'Engineering',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Architect and build scalable full-stack applications across the OCTADECENT Private Limited commerce infrastructure using Next.js, Node.js, and cloud services.',
    icon: LayoutDashboard,
    level: 'junior',
  },
  {
    id: 15,
    title: 'UI/UX Designer',
    department: 'Design',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Create intuitive, visually stunning user experiences through wireframing, prototyping, and high-fidelity design systems.',
    icon: MonitorSmartphone,
    level: 'junior',
  },
  {
    id: 16,
    title: 'Project Manager',
    department: 'Management',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Lead cross-functional teams, manage delivery timelines, and ensure successful execution of client projects with precision.',
    icon: FolderKanban,
    level: 'junior',
  },
  {
    id: 17,
    title: 'Backend Developer',
    department: 'Engineering',
    employmentType: 'Full-Time',
    experience: '0–3 Years',
    location: 'Hybrid',
    description: 'Architect, build, and maintain robust APIs, database structures, and backend systems powering our commerce infrastructure.',
    icon: Code2,
    level: 'junior',
  },
];

// ─── Filter Departments ───────────────────────────────────────────────────────
const departments = [
  'All Departments',
  'Engineering',
  'Design',
  'Marketing',
  'Operations',
  'Legal',
  'Management',
  'AI & Innovation',
  'Security',
  'Quality Assurance',
  'Infrastructure',
  'Creative',
];

// ─── Department color map (Unified OCTADECENT Orange Theme) ───────────────────
const deptColors: Record<string, { bg: string; text: string; border: string }> = {
  'Engineering':       { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Design':            { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Marketing':         { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Operations':        { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Legal':             { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Management':        { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'AI & Innovation':   { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Security':          { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Quality Assurance': { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Infrastructure':    { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
  'Creative':          { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' },
};

// ─── Hiring Process Steps ─────────────────────────────────────────────────────
const processSteps = [
  { id: 1, title: 'Application Review',  desc: 'Our founder reviews your portfolio and experience within 48 hours.' },
  { id: 2, title: 'Initial Conversation', desc: "A 30-min sync to understand your goals and OCTADECENT Private Limited's mission." },
  { id: 3, title: 'Skills Assessment',   desc: 'A collaborative task or technical deep-dive related to your role.' },
  { id: 4, title: 'Final Interview',     desc: 'Meet the founder and team you\'ll be working with every day.' },
  { id: 5, title: 'Welcome Aboard',      desc: 'Get your setup and start building the future of commerce.' },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CareersPage() {
  const [selectedDept, setSelectedDept]   = useState('All Departments');
  const [searchQuery,  setSearchQuery]    = useState('');
  const [activeFaq,    setActiveFaq]      = useState<number | null>(null);
  const [expandedCard, setExpandedCard]   = useState<number | null>(null);
  const [activeHiringStep, setActiveHiringStep] = useState(0);

  // Filter + search logic
  const filteredJobs = useMemo(() => {
    return jobsList.filter((job) => {
      const matchesDept   = selectedDept === 'All Departments' || job.department === selectedDept;
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  const faqs = [
    { q: 'Do you support fully remote work?', a: 'We follow a hybrid model based out of Hyderabad, Telangana. Remote collaboration is encouraged, with periodic in-office syncs.' },
    { q: 'Do you hire fresh graduates or interns?', a: 'Absolutely. Several of our junior roles are open to fresh graduates. We also run an apprenticeship program for high-potential candidates.' },
    { q: 'What training resources are available?', a: 'We host internal "Innovation Labs," sponsor online learning, and provide mentorship from domain experts across all 18 companies.' },
  ];

  return (
    <div className="bg-[#050816] min-h-screen text-[#e3e2e2] relative font-inter overflow-x-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* ════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════ */}
      <header className="relative pt-24 pb-12 md:pt-36 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs mb-4 uppercase tracking-widest">
              Careers at OCTADECENT Private Limited
            </span>
            <h1
              className="font-montserrat font-extrabold mb-6 leading-[1.1] text-white"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
            >
              Build the{' '}
              <span className="gradient-text-orange font-extrabold">Future of Commerce</span>{' '}
              With Us
            </h1>
            <p className="text-[#bab8b7] text-base md:text-xl mb-8 max-w-xl leading-relaxed">
              We are building the high-octane infrastructure for the next generation of global commerce. Join a team of builders, dreamers, and operators redefining 18 distinct business domains under OCTADECENT Private Limited.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="bg-primary hover:bg-[#e05200] text-white font-bold px-6 sm:px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all orange-glow text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
              >
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 hover:bg-white/5 text-white font-bold px-6 sm:px-8 py-4 rounded-2xl transition-all cursor-pointer text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
              >
                Benefits & Culture
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" aria-hidden="true" />
            <img
              alt="OCTADECENT team members collaborating on software design and digital transformation initiatives"
              className="rounded-3xl shadow-2xl relative z-10 glass-card p-2 w-full object-cover aspect-[4/3] border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgNC2Hybm2pZXdXH4JrKSCYRctkNiYZQ5UdsCcf5VP_ldTgpXyIJa1E0ZZVAIQzewiEHxnS9YYLt9aO7Gml4F6Ywuisz8b-GDaLyt-io5abSavdQxzNvFP_73YX4TaHOVo8PUSAi0a_GQl83-QbpOA_Das6SX6en3kOTUM1MpeDkTQyXZStyps_Inw6RbN7CrppyzjqyeukqpMAnGU40RYqmLA2H2VZVdFzJCsqhrtBouTaL2yuwvDIlKMdXfg2XoOGNBzBtUJm8"
              loading="lazy"
            />
          </motion.div>
        </div>
      </header>



      {/* ════════════════════════════════════════════
          WHY OCTADECENT
          ════════════════════════════════════════════ */}
      <section id="why-choose-us" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
          <h2
            className="font-montserrat font-extrabold mb-4 text-white text-2xl md:text-3xl lg:text-4xl"
          >
            Join A Mission, <span className="text-primary">Not Just A Company</span>
          </h2>
          <p className="text-[#bab8b7] max-w-2xl mx-auto text-sm sm:text-base">
            We don't just build products; we build economies. OCTADECENT Private Limited is a hub for high-performance talent focused on commerce innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {[
            { icon: Zap,           color: 'text-primary bg-primary/10',      title: 'Innovation First',      desc: 'We push the boundaries of commerce, leveraging AI and next-gen tech to solve legacy problems.' },
            { icon: UserCheck,     color: 'text-primary bg-primary/10',  title: 'Customer Obsession',    desc: 'Our infrastructure powers businesses. We succeed only when our merchants and companies thrive.' },
            { icon: Star,          color: 'text-primary bg-primary/10',  title: 'Ownership Mindset',     desc: 'Everyone at OCTADECENT Private Limited is an owner — acting with autonomy, accountability, and urgency.' },
            { icon: GraduationCap, color: 'text-primary bg-primary/10', title: 'Continuous Learning', desc: 'The commerce landscape evolves daily. We provide the tools to keep your skills at the edge.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col items-start hover:border-primary/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3 text-white">{item.title}</h3>
              <p className="text-[#bab8b7] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BENEFITS
          ════════════════════════════════════════════ */}
      <section id="benefits-section" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-montserrat font-extrabold mb-8 sm:mb-12 text-center text-white text-2xl md:text-3xl lg:text-4xl"
          >
            Benefits That <span className="text-primary">Empower You</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe,      title: 'Hybrid Work Model', desc: 'Work from our Hyderabad hub with flexible remote days. We value output over seat time.',       color: 'text-primary bg-primary/10' },
              { icon: Clock,      title: '6–8 Working Hours', desc: 'Structured working hours that allow you to balance work and life efficiently.',            color: 'text-primary bg-primary/10' },
              { icon: Award,      title: 'Monthly 2 Team Meetings', desc: 'Collaborate and align with the team during our recurring meetings.',             color: 'text-primary bg-primary/10' },
              { icon: TrendingUp, title: 'Career Growth',     desc: 'Structured career roadmaps, mentorship programs, and clear paths to senior and lead roles.',     color: 'text-primary bg-primary/10' },
            ].map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl text-center flex flex-col items-center hover:border-primary/40 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${b.color}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg mb-2 text-white">{b.title}</h4>
                  <p className="text-[#bab8b7] text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OPEN POSITIONS — STATS BAR
          ════════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 bg-black/60 border-y border-white/5 relative z-10" id="open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { icon: Briefcase,  value: 17,          suffix: '',        label: 'Open Positions' },
              { icon: Building2,  value: 11,           suffix: '',        label: 'Departments' },
              { icon: Laptop2,    value: null,         label: 'Work Model', custom: 'Hybrid' },
              { icon: Rocket,     value: null,         label: 'Fast-Growing Team', custom: 'Growing' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-primary">
                  {stat.value !== null && stat.value !== undefined
                    ? <AnimatedCounter end={stat.value} suffix={stat.suffix ?? ''} />
                    : stat.custom
                  }
                </div>
                <div className="text-[#bab8b7] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          OPEN POSITIONS — SEARCH & FILTER
          ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              We're Hiring
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat font-extrabold text-white text-2xl md:text-3xl lg:text-4xl"
            >
              Open Positions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#bab8b7] mt-3 text-sm sm:text-base max-w-xl mx-auto"
            >
              Find your next challenge among our growing team of builders and innovators.
            </motion.p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#bab8b7]" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search positions..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#111]/80 border border-white/10 text-white placeholder:text-[#bab8b7] focus:outline-none focus:border-primary/50 transition-all text-sm font-inter"
              aria-label="Search job positions"
            />
          </div>

          {/* Department filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 min-h-[44px] rounded-full font-semibold text-xs tracking-wide uppercase transition-all cursor-pointer border ${
                  selectedDept === dept
                    ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,92,0,0.3)]'
                    : 'glass-card border-white/10 text-[#bab8b7] hover:border-primary/40 hover:text-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* ── Job Cards Grid ────────────────────────── */}
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
              >
                {filteredJobs.map((job, idx) => {
                  const Icon   = job.icon;
                  const colors = deptColors[job.department] ?? { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/30' };
                  const isOpen = expandedCard === job.id;

                  return (
                    <motion.article
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-[#111]/80 border border-white/8 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-[0_8px_30px_rgba(255,92,0,0.12)] hover:border-primary/30 transition-all duration-300 group"
                      style={{ borderRadius: 16 }}
                    >
                      {/* Card top accent bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-primary to-primary" />

                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        {/* Icon + dept badge */}
                        <div className="flex items-start justify-between mb-4">
                           <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5" aria-hidden="true" />
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${colors.bg} ${colors.text} ${colors.border}`}>
                            {job.department}
                          </span>
                        </div>

                        {/* Job title */}
                        <h3 className="font-montserrat font-bold text-white text-base sm:text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                          {job.title}
                        </h3>

                        {/* Meta info */}
                        <div className="space-y-1.5 mb-4">
                          <div className="flex items-center gap-2 text-[#bab8b7] text-xs">
                            <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                            <span>{job.employmentType}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#bab8b7] text-xs">
                            <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#bab8b7] text-xs">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                            <span>{job.location}</span>
                          </div>
                        </div>

                        {/* Description — toggleable */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="text-[#bab8b7] text-xs leading-relaxed mb-4 border-t border-white/5 pt-4 overflow-hidden"
                            >
                              {job.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <a
                            href="mailto:octadecent@gmail.com"
                            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 min-h-[44px] bg-primary hover:bg-[#e05f00] text-white text-xs font-bold rounded-xl transition-all active:scale-95 orange-glow"
                          >
                            Apply Now <ArrowRight className="w-3 h-3" />
                          </a>
                          <button
                            onClick={() => setExpandedCard(isOpen ? null : job.id)}
                            className="px-4 py-3 min-h-[44px] border border-white/10 hover:border-primary/40 text-[#bab8b7] hover:text-white text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Hide job details' : 'View job details'}
                          >
                            {isOpen ? 'Hide' : 'View Details'}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              /* Empty state */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-7 h-7 text-[#bab8b7]" aria-hidden="true" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">No positions found.</h3>
                <p className="text-[#bab8b7] text-sm">Try changing your filters or search query.</p>
                <button
                  onClick={() => { setSelectedDept('All Departments'); setSearchQuery(''); }}
                  className="mt-6 px-6 py-3 min-h-[44px] bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-xl hover:bg-primary/20 transition-all cursor-pointer flex items-center justify-center mx-auto"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Don't See Your Role? CTA ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-16 glass-card rounded-3xl p-8 sm:p-12 text-center border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Send className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3
                className="font-montserrat font-extrabold text-white mb-4"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
              >
                Don't See Your Role?
              </h3>
              <p className="text-[#bab8b7] text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                We're always looking for talented individuals who want to build the future with OCTADECENT Private Limited.
              </p>
              <a
                href="mailto:octadecent@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#e05200] text-white font-bold px-8 py-4 rounded-2xl orange-glow transition-all hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto min-h-[44px]"
              >
                Send Your Resume <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          HIRING PROCESS
          ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-montserrat font-extrabold mb-8 sm:mb-12 text-center text-white text-2xl md:text-3xl lg:text-4xl"
          >
            Our Hiring <span className="gradient-text-orange font-extrabold">Process</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* Step Navigation Tabs */}
            <div className="flex justify-center items-center gap-3 md:gap-4 mb-10 overflow-x-auto pb-4">
              {processSteps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveHiringStep(idx)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-montserrat text-sm transition-all border min-h-[44px] cursor-pointer ${
                    activeHiringStep === idx
                      ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,92,0,0.4)] scale-110'
                      : 'bg-[#121414] border-white/10 text-[#bab8b7] hover:border-primary/40 hover:text-white'
                  }`}
                >
                  {step.id}
                </button>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHiringStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 md:p-12 rounded-[32px] border border-white/5 text-center relative group orange-glow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-montserrat font-extrabold text-lg text-primary mx-auto mb-6 border border-primary/20">
                    Step {processSteps[activeHiringStep].id}
                  </div>
                  <h3 className="font-montserrat font-extrabold text-white text-xl md:text-2xl mb-4">
                    {processSteps[activeHiringStep].title}
                  </h3>
                  <p className="text-[#bab8b7] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                    {processSteps[activeHiringStep].desc}
                  </p>

                  {/* Navigation Arrows inside Card */}
                  <div className="flex justify-between items-center mt-10">
                    <button
                      onClick={() => setActiveHiringStep(prev => (prev > 0 ? prev - 1 : processSteps.length - 1))}
                      className="px-4 py-2.5 min-h-[44px] border border-white/10 hover:border-primary/40 text-xs font-semibold text-[#bab8b7] hover:text-white rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      ← Previous
                    </button>
                    <span className="text-xs text-[#666] font-semibold">
                      {activeHiringStep + 1} of {processSteps.length}
                    </span>
                    <button
                      onClick={() => setActiveHiringStep(prev => (prev < processSteps.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2.5 min-h-[44px] bg-primary hover:bg-[#e05200] text-xs font-bold text-white rounded-xl transition-all orange-glow cursor-pointer flex items-center gap-1.5"
                    >
                      Next →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-black/40 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-montserrat font-extrabold mb-8 sm:mb-10 text-center text-white text-2xl md:text-3xl lg:text-4xl"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="glass-card p-5 sm:p-6 rounded-2xl cursor-pointer border border-white/5 hover:border-primary/20 transition-all"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFaq(activeFaq === index ? null : index)}
                aria-expanded={activeFaq === index}
              >
                <div className="flex justify-between items-center font-bold text-sm sm:text-base text-white">
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-primary transition-transform shrink-0 ml-4 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </div>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="mt-4 text-[#bab8b7] text-xs sm:text-sm font-inter leading-relaxed pt-3 border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTACT SECTION (CONTACT CEO & FOUNDER)
          ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 p-8 sm:p-12 md:p-16 rounded-3xl text-center relative group orange-glow">
          <h2
            className="font-montserrat font-extrabold text-white mb-4 text-2xl md:text-3xl lg:text-4xl"
          >
            Contact CEO & Founder
          </h2>
          <p className="text-[#bab8b7] text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in joining OCTADECENT Private Limited? Reach out directly to the CEO & Founder for career opportunities, collaborations, and internship discussions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 text-sm sm:text-base font-inter">
            <a
              href="mailto:octadecent@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-3.5 bg-primary hover:bg-[#e05200] text-white font-bold rounded-2xl transition-all orange-glow shadow-[0_4px_20px_rgba(255,92,0,0.3)] min-h-[44px] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              
            </a>
            <a
              href="tel:+919398820561"
              className="flex items-center justify-center gap-3 px-6 py-3.5 border border-white/20 hover:bg-white/5 text-white font-bold rounded-2xl transition-all min-h-[44px] w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-primary" />
              
            </a>
            <a
              href="https://wa.me/919398820561"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 border border-white/20 hover:bg-white/5 text-white font-bold rounded-2xl transition-all min-h-[44px] w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.535 0 10.04-4.501 10.043-10.04 0-2.684-1.045-5.207-2.943-7.107C16.518 1.558 13.99 1.514 12 1.514c-5.536 0-10.04 4.502-10.044 10.041 0 1.957.51 3.864 1.478 5.574l-.997 3.642 3.734-.98c1.629.888 3.255 1.393 4.886 1.393z"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
