'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Check, ChevronRight, ChevronDown, Search, ArrowUpDown,
  Layers, ShieldCheck, HeartPulse, Sparkles, Award, Star, Mail, Zap, 
  UserCheck, MapPin, Briefcase, GraduationCap, Play, ExternalLink, X, HelpCircle
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

interface Project {
  id: number;
  name: string;
  category: string;
  industry: string;
  techStack: string[];
  year: number;
  clientCategory: string;
  metric: string;
  metricLabel: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
}

const projectsList: Project[] = [
  { 
    id: 1, 
    name: 'Aether OS Engine', 
    category: 'Web Development', 
    industry: 'Logistics / Supply Chain', 
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'GraphQL'], 
    year: 2024, 
    clientCategory: 'Enterprise Scale', 
    metric: '+340%', 
    metricLabel: 'Fulfillment Output Rate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaTAk4lFhNOOC9LSMd79RuLZE9ou0g3MS7-b79N9WNNS3vwoYjP1A3-YEJ7TgeJLO3Kuit-jIOdOYfip6T2x30VVRsoF-6dVOqF5qX7KGA_8SoMaH7vHNMCgQ4emr-W-J_cof_PAWe2CjHS8vQfr0Uk2vt4negSRPHBSaxGMjW3SJXoC_HNckW9oCzydwOcqs3UM6ecApSnl65I_Avbn0N0uVljGNw74yO8VZSBvKhBCocnAX34cEcZsxUXR2T3Wx5Jq7TmTlhWK4',
    challenge: 'Legacy system silos that led to shipping gaps, manual compliance tracking, and critical order processing delays.',
    solution: 'Designed Aether OS, a central web system that syncs order logs, checks routing pipelines, and generates labels.',
    results: 'Accelerated order fulfillment times by 40% while automating compliance auditing procedures.'
  },
  { 
    id: 2, 
    name: 'Sentinel Finance Ledger', 
    category: 'AI Solutions', 
    industry: 'Fintech & Security', 
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI'], 
    year: 2024, 
    clientCategory: 'B2B Enterprise', 
    metric: '99.99%', 
    metricLabel: 'Compliance Accuracy Rate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYhb_JBlAb1V5Gcl_G7divfkuRlaJ72xksv6Sx8PugVUUwuf2IpWyXnQxs-YfW35c1VNlOj-SBKA7dY0LFtQlfwoJQqXSmS6iEtKVcf-80tvMFD7pEypC-w8j-EOiXnG8L_I6E2rYhaiamziJV_Zq9tExH76OQaKafxNBXCpSqtIwLvKIV9gIZwqzRgYui2fdug7dxaNFOGSG-FUMFZzrzNTwRzJvjZEMfjX5m2ZygUUbQZig8tn4mVXDOx_pCbh5-2DZ1fR9gVV0',
    challenge: 'Fragmented accounting structures that failed to scale with millions of cross-border financial transactions.',
    solution: 'Engineered an AI-driven transaction categorization engine that handles ledger parsing and fraud signals.',
    results: 'Enabled instantaneous audits of millions of digital events, reducing processing overhead by over 50%.'
  },
  { 
    id: 3, 
    name: 'Pulse Healthcare Suite', 
    category: 'Mobile Apps', 
    industry: 'Healthcare Services', 
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'WebRTC'], 
    year: 2023, 
    clientCategory: 'High Growth Startup', 
    metric: '4.9/5.0', 
    metricLabel: 'Client Satisfaction Index',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-iMn3b7jsjxCUAJDr6OYu5-L4qk0HM1INKq2yKIrANoBbU4aTjSIqOdeSdea7MS6hSFt5MzKugqKhHkzfUzeDmf12Y7U3SKkUxFgrb0htOSg0qRNhT0z5MLBPX9jbUCw-xiaUJRWNkov0o_6O0PcxhNxOKEwpOhb--DGJDgDQ14pPpF6bjp6bGfvRTTPtRZZak8B24OWiu9dGhC4sbsz0jCTQYSgLZkVkJ1mTanRDnRQMA-jjfssa05VU-4Nd6HRZIcbDN-_HURI',
    challenge: 'High client drop-offs during digital booking due to lack of custom WebRTC channels and layout complexity.',
    solution: 'Designed and deployed native mobile applications (iOS/Android) featuring real-time calendar syncing and consult tools.',
    results: 'Boosted consultation booking conversions by 75% and recorded over 200,000 active client sessions.'
  },
  { 
    id: 4, 
    name: 'Omni Retail Hub', 
    category: 'E-Commerce', 
    industry: 'Retail Commerce', 
    techStack: ['Next.js', 'Shopify API', 'Tailwind', 'Node.js'], 
    year: 2024, 
    clientCategory: 'Consumer Brands', 
    metric: '+210%', 
    metricLabel: 'Checkout Session Conversion',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaTAk4lFhNOOC9LSMd79RuLZE9ou0g3MS7-b79N9WNNS3vwoYjP1A3-YEJ7TgeJLO3Kuit-jIOdOYfip6T2x30VVRsoF-6dVOqF5qX7KGA_8SoMaH7vHNMCgQ4emr-W-J_cof_PAWe2CjHS8vQfr0Uk2vt4negSRPHBSaxGMjW3SJXoC_HNckW9oCzydwOcqs3UM6ecApSnl65I_Avbn0N0uVljGNw74yO8VZSBvKhBCocnAX34cEcZsxUXR2T3Wx5Jq7TmTlhWK4',
    challenge: 'Slow page loads and dropoffs during checkout checkout pages.',
    solution: 'Built a headless Shopify setup using Next.js, optimizing product filtering and reducing cart load times.',
    results: 'Reduced page loading metrics by 65% and boosted sales conversions across global checkout terminals.'
  },
  { 
    id: 5, 
    name: 'Zenith Brand Strategy', 
    category: 'Branding', 
    industry: 'Creative Agency', 
    techStack: ['Framer Motion', 'React', 'GSAP'], 
    year: 2023, 
    clientCategory: 'B2B Enterprise', 
    metric: '5X', 
    metricLabel: 'Ad Strategy Conversion',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYhb_JBlAb1V5Gcl_G7divfkuRlaJ72xksv6Sx8PugVUUwuf2IpWyXnQxs-YfW35c1VNlOj-SBKA7dY0LFtQlfwoJQqXSmS6iEtKVcf-80tvMFD7pEypC-w8j-EOiXnG8L_I6E2rYhaiamziJV_Zq9tExH76OQaKafxNBXCpSqtIwLvKIV9gIZwqzRgYui2fdug7dxaNFOGSG-FUMFZzrzNTwRzJvjZEMfjX5m2ZygUUbQZig8tn4mVXDOx_pCbh5-2DZ1fR9gVV0',
    challenge: 'Fragmented brand assets and corporate design strategies that failed to engage global developer profiles.',
    solution: 'Created an Obsidian-dark UI system with interactive particles and fluid animation structures.',
    results: 'Increased developer portfolio page views by 300% and established a robust developer framework strategy.'
  },
  { 
    id: 6, 
    name: 'Growth Engine Analytics', 
    category: 'Digital Marketing', 
    industry: 'SaaS Platforms', 
    techStack: ['Python', 'SQL', 'FastAPI', 'Next.js'], 
    year: 2024, 
    clientCategory: 'High Growth Startup', 
    metric: '+300%', 
    metricLabel: 'Organic Search Growth',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-iMn3b7jsjxCUAJDr6OYu5-L4qk0HM1INKq2yKIrANoBbU4aTjSIqOdeSdea7MS6hSFt5MzKugqKhHkzfUzeDmf12Y7U3SKkUxFgrb0htOSg0qRNhT0z5MLBPX9jbUCw-xiaUJRWNkov0o_6O0PcxhNxOKEwpOhb--DGJDgDQ14pPpF6bjp6bGfvRTTPtRZZak8B24OWiu9dGhC4sbsz0jCTQYSgLZkVkJ1mTanRDnRQMA-jjfssa05VU-4Nd6HRZIcbDN-_HURI',
    challenge: 'Inefficient attribution models and lack of structured analytics logs to scale advertising ROAS.',
    solution: 'Integrated multi-touch attribution dashboards that track search entries and digital logistics points.',
    results: 'Doubled marketing efficiency ratings, increasing client revenue growth curves.'
  }
];

const categories = ['All', 'UI/UX Design', 'Web Development', 'Mobile Apps', 'AI Solutions', 'E-Commerce', 'Branding', 'Digital Marketing'];

const timelineStages = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your current metrics, commerce code, and legacy infrastructure setups.' },
  { step: '02', title: 'Research', desc: 'Analyze competitor pipelines, target customer personas, and api architecture gaps.' },
  { step: '03', title: 'Strategy', desc: 'Draft comprehensive technical scope roadmaps and lead scoring integration strategies.' },
  { step: '04', title: 'Design', desc: 'Create high-fidelity interactive wireframes, Obsidian themes, and clean motion patterns.' },
  { step: '05', title: 'Development', desc: 'Deploy production Next.js apps, ML models, and API tunnels using clean engineering builds.' },
  { step: '06', title: 'Launch', desc: 'Perform multi-stage check audits, security audits, and deploy to server architectures.' },
  { step: '07', title: 'Optimization', desc: 'Continuous performance reviews, scale-up routines, and conversion auditing cycles.' }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Mouse Follow Glow Effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFilter = (cat: string) => {
    setSelectedCategory(cat);
  };

  const filteredProjects = projectsList
    .filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      // Mock popularity by id sorting
      return b.id - a.id;
    });

  return (
    <div className="bg-[#050816] min-h-screen text-[#e3e2e2] relative font-inter overflow-x-hidden">
      
      {/* Background Mesh */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Mouse Follow Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 opacity-20 hidden lg:block"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 92, 0, 0.12), transparent 80%)`
        }}
      />

      {/* 1. Full-screen Animated Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center px-6">
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wider mb-8"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Engineering Global Success Stories
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-extrabold text-4xl sm:text-6xl md:text-[80px] leading-[1.1] mb-8 tracking-tight text-white"
          >
            Our Engineered <br />
            <span className="gradient-text-orange font-extrabold">Interfaces & Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-inter text-base md:text-lg text-[#bab8b7] mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            From high-conversion checkout channels to custom enterprise AI integrations, explore how we connect premium technology directly to accelerated business growth.
          </motion.p>

          {/* Portfolio Statistics Counters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full border-y border-white/5 py-10"
          >
            {[
              { label: 'Projects Completed', val: 150, suffix: '+' },
              { label: 'Industries Served', val: 12, suffix: '+' },
              { label: 'Client Satisfaction', val: 98, suffix: '%' },
              { label: 'Client Revenue Generated', val: 2, suffix: 'B+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-montserrat font-extrabold text-3xl md:text-4xl text-primary mb-1">
                  <AnimatedCounter end={stat.val} suffix={stat.suffix} />
                </div>
                <div className="font-inter text-[10px] uppercase tracking-wider text-[#bab8b7] font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest text-[#bab8b7] font-bold">Scroll to Explore</span>
          <div className="w-[18px] h-[30px] rounded-full border border-[#bab8b7] flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </section>

      {/* 2. Advanced Portfolio Filtering & Controls */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10 border-t border-white/5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Categories Slider */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 lg:pb-0 w-full lg:max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat 
                    ? 'bg-[#ff5c00] text-white font-bold orange-glow' 
                    : 'glass-card text-[#bab8b7] hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Panel */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121414] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary transition-all font-inter" 
              />
              <Search className="w-4 h-4 text-[#bab8b7] absolute left-3 top-3" />
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <span className="text-[10px] uppercase tracking-wider text-[#bab8b7] font-bold">Sort:</span>
              <button
                onClick={() => setSortBy(sortBy === 'newest' ? 'popular' : 'newest')}
                className="glass-card px-4 py-2.5 rounded-xl text-xs text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer font-semibold uppercase tracking-wider"
              >
                <ArrowUpDown className="w-3.5 h-3.5" /> {sortBy}
              </button>
            </div>
          </div>

        </div>

        {/* 3. Premium Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(proj)}
                className="glass-card rounded-[32px] overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(255,92,0,0.08)] transition-all duration-500 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10 opacity-70" />
                  <img 
                    alt={`${proj.name} — ${proj.category} project visual showcase`} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                    src={proj.image}
                  />
                  
                  {/* Category Pill Over Image */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {proj.category}
                  </span>

                  {/* Performance Metric overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-2xl font-extrabold text-white block leading-none">{proj.metric}</span>
                    <span className="text-[10px] text-[#bab8b7] uppercase tracking-wider font-semibold">{proj.metricLabel}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-[#bab8b7] font-semibold uppercase tracking-wider">{proj.industry}</span>
                      <span className="text-[10px] text-[#bab8b7] font-semibold">{proj.year}</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-white group-hover:text-primary transition-colors duration-300 mb-3">
                      {proj.name}
                    </h3>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-[#121414] border border-white/5 text-[9px] text-[#bab8b7] font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-primary font-bold group-hover:underline">
                    <span>View Case Study</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#bab8b7] text-sm">No projects matched your criteria.</p>
          </div>
        )}
      </section>

      {/* 4. Full-Screen Interactive Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-card max-w-4xl w-full rounded-[40px] overflow-hidden border border-white/10 relative my-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/80 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-[21/9] w-full bg-black/40">
                <img 
                  alt={`${selectedProject.name} — ${selectedProject.category} detailed project view`} 
                  className="w-full h-full object-cover object-center" 
                  src={selectedProject.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e0f] via-transparent to-transparent z-10" />
                <div className="absolute bottom-6 left-8 z-20">
                  <span className="px-3 py-1 rounded-full bg-[#ff5c00] text-[10px] font-bold text-white uppercase tracking-wider inline-block mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-montserrat font-extrabold text-2xl md:text-4xl text-white tracking-tight">{selectedProject.name}</h2>
                </div>
              </div>

              {/* Modal Details content */}
              <div className="p-8 grid md:grid-cols-12 gap-8 bg-[#0d0e0f]">
                
                {/* Details Section (70%) */}
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-montserrat font-bold text-xs uppercase text-primary tracking-widest mb-2">The Business Challenge</h4>
                    <p className="text-sm text-[#bab8b7] leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs uppercase text-primary tracking-widest mb-2">Our Solution Provided</h4>
                    <p className="text-sm text-[#bab8b7] leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs uppercase text-primary tracking-widest mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-white font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & Action Panel (30%) */}
                <div className="md:col-span-4 p-6 rounded-3xl bg-[#121414] border border-white/5 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="font-montserrat font-bold text-[10px] uppercase text-[#bab8b7] tracking-widest mb-4">Results Achieved</h4>
                    <div className="text-center p-4 rounded-2xl bg-[#0d0e0f] border border-white/5">
                      <div className="text-3xl font-extrabold text-primary mb-1">{selectedProject.metric}</div>
                      <div className="text-[10px] text-[#bab8b7] font-semibold uppercase tracking-wider">{selectedProject.metricLabel}</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <Link 
                      href="/contact" 
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 bg-[#ff5c00] hover:bg-primary-dark text-white rounded-xl text-center text-xs font-bold transition-all block uppercase tracking-wider orange-glow"
                    >
                      Request Case Study
                    </Link>
                    <Link 
                      href="/book-consultation"
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 border border-white/10 hover:bg-white/5 text-white rounded-xl text-center text-xs font-bold transition-all block uppercase tracking-wider"
                    >
                      Book Free consultation
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Interactive Metrics Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-black/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { metric: '150+', desc: 'Projects Delivered' },
            { metric: '50+', desc: 'Global Clients' },
            { metric: '98%', desc: 'Client Satisfaction Score' },
            { metric: '+300%', desc: 'Avg Traffic Growth' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#121414]/50 border border-white/5 hover:border-primary/25 transition-colors"
            >
              <div className="font-montserrat font-extrabold text-4xl text-primary mb-2">
                <AnimatedCounter end={parseInt(item.metric)} suffix={item.metric.replace(/[0-9]/g, '')} />
              </div>
              <div className="font-inter text-xs text-[#bab8b7] font-semibold">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Portfolio Timeline */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl mb-10 sm:mb-20 text-center text-white">
          Our Development <span className="gradient-text-orange font-extrabold">Workflow Timeline</span>
        </h2>
        <div className="relative">
          {/* Fill Timeline line */}
          <div className="absolute top-[24px] left-0 w-full h-[2px] bg-white/10 hidden lg:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {timelineStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-3xl relative hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-montserrat font-extrabold text-sm text-primary mb-6 mx-auto lg:mx-0">
                  {stage.step}
                </div>
                <h4 className="font-montserrat font-bold text-base text-white mb-3 text-center lg:text-left">{stage.title}</h4>
                <p className="font-inter text-xs text-[#bab8b7] leading-relaxed text-center lg:text-left">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Orbiting Tech Showcase */}
      <section className="py-16 sm:py-24 md:py-32 bg-black/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl text-white mb-6">
              World-Class <span className="text-[#00D4FF]">Technology Stack</span>
            </h2>
            <p className="text-base text-[#bab8b7] leading-relaxed mb-8">
              We leverage modern web libraries, machine learning frameworks, and highly scalable database structures to engineer fast software systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Next.js & React App Router', 'TypeScript Compilation', 'Node.js & FastAPI Backend', 'TensorFlow & Neural Models'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Check className="w-4 h-4 text-primary shrink-0" /> {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square max-w-[400px] mx-auto w-full flex items-center justify-center border border-white/5 rounded-full p-12">
            {/* Center Core Logo */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-montserrat font-extrabold text-white text-3xl shadow-2xl orange-glow select-none">
              O
            </div>
            
            {/* Orbiting Icons */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-white/10 animate-spin-slow pointer-events-none" />
            <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#121414] border border-white/10 px-3 py-1 rounded-xl text-[10px] font-bold text-white">Next.js</span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#121414] border border-white/10 px-3 py-1 rounded-xl text-[10px] font-bold text-white">FastAPI</span>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#121414] border border-white/10 px-3 py-1 rounded-xl text-[10px] font-bold text-white">TypeScript</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#121414] border border-white/10 px-3 py-1 rounded-xl text-[10px] font-bold text-white">TensorFlow</span>
          </div>
        </div>
      </section>

      {/* 8. Awards & Recognition */}
      <section className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl text-white mb-10 sm:mb-16">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Best Commerce Architecture', body: 'Web Design Platform Award 2024' },
            { title: 'Top AI Innovator', body: 'Automation Labs Summit 2023' },
            { title: '98% Client Satisfaction', body: 'Verified Agency Audit Log' },
            { title: 'Certified Next.js Group', body: 'Vercel Agency Partner Program' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center hover:border-primary/20 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-montserrat font-bold text-sm text-white mb-1">{item.title}</h4>
              <p className="text-[10px] text-[#bab8b7]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Final Premium CTA */}
      <section className="py-16 sm:py-32 relative text-center bg-black/40 overflow-hidden z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-4xl md:text-6xl text-white tracking-tight"
          >
            Ready To Build Your <br />
            <span className="gradient-text-orange font-extrabold">Next Success Story?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-base md:text-lg text-[#bab8b7]"
          >
            Schedule a free consult session to plan your next high-performance software system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/book-consultation" 
              className="w-full sm:w-auto px-12 py-5 bg-[#ff5c00] hover:bg-primary-dark text-white rounded-2xl font-inter font-bold orange-glow hover:scale-105 transition-all text-center cursor-pointer"
            >
              Book Consultation
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-12 py-5 border border-white/20 bg-white/5 backdrop-blur-md rounded-2xl font-inter font-bold hover:bg-white/10 transition-all text-center cursor-pointer"
            >
              Start Project
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
