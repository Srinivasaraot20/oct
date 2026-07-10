'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  ArrowRight, CheckCircle, XCircle, ChevronRight,
  ShoppingCart, Globe, Smartphone, Cpu, TrendingUp, Bolt,
  Rocket, Target, ShieldCheck, Lightbulb, X, ExternalLink, Mail,
  Briefcase, Users, Palette, Layers, Calendar
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import PartnerCard from '@/components/PartnerCard';

// Code-split below-the-fold heavy components
const EcosystemSection = dynamic(() => import('@/components/EcosystemSection'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full" aria-hidden="true" />,
});

interface PartnerItem {
  logo: string;
  name: string;
  tagline: string;
  shortSummary: string;
  description: string;
  services: string[];
  partnershipValue: string;
  ctaText: string;
  ctaHref: string;
  vision?: string;
  closingStatement?: string;
  coreFeatures?: { emoji: string; text: string }[];
}

const partnersData: PartnerItem[] = [
  {
    logo: '/vyomora.png',
    name: 'Vyomora',
    tagline: 'Digital Marketing & Brand Growth',
    shortSummary: 'Vyomora Digital Marketing specializes in online presence growth through strategic marketing, content creation, social media management, and performance advertising.',
    description: 'Vyomora Digital Marketing specializes in helping businesses increase their online presence through strategic marketing, social media management, content creation, performance advertising, and brand awareness campaigns.',
    services: [
      'Social Media Marketing',
      'Performance Marketing',
      'Brand Promotion',
      'Lead Generation',
      'Content Marketing',
      'Digital Advertising'
    ],
    partnershipValue: 'Together, we help businesses scale faster by combining advanced technology solutions with powerful digital marketing strategies.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/1000156561.png',
    name: 'TuwiTuwi',
    tagline: 'Content Creation & Media Production',
    shortSummary: 'TuwiTuwi specializes in high-impact video editing, motion graphics design, and digital storytelling to maximize brand audience engagement.',
    description: 'TuwiTuwi specializes in creative content production, video editing, visual storytelling, and digital media solutions that help brands communicate effectively with their audiences.',
    services: [
      'Video Editing',
      'Motion Graphics',
      'Content Creation',
      'Digital Storytelling',
      'Social Media Content'
    ],
    partnershipValue: 'Through this partnership, brands gain access to high-quality creative media solutions that increase engagement and strengthen brand visibility.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/octas_freelancing.png',
    name: 'Octasverse',
    tagline: 'Freelancing & Technology Solutions',
    shortSummary: 'Octas Freelancing connects global enterprises with top-tier professional talent in software engineering, mobile development, design, and automation solutions.',
    description: 'Octas Freelancing connects businesses with talented professionals across technology, design, development, marketing, and creative services.',
    services: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'AI & Automation',
      'Video Editing',
      'Digital Marketing'
    ],
    partnershipValue: 'This collaboration provides clients access to a diverse network of professionals capable of delivering end-to-end digital solutions.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/1000156535.png',
    name: 'Xbaex',
    tagline: 'Fashion & Lifestyle',
    shortSummary: 'Xbaex is a trendy fashion and lifestyle brand delivering curated high-quality products and interactive digital shopping experiences.',
    description: 'Xbaex is a fashion and lifestyle brand committed to delivering trendy, stylish, and high-quality products designed for modern consumers. The brand focuses on empowering confidence through fashion and innovation.',
    services: [
      'Fashion Products',
      'Lifestyle Accessories',
      'Trend-Based Collections',
      'Brand Experiences',
      'Customer Engagement'
    ],
    partnershipValue: 'OCTADECENT collaborates with Xbaex to strengthen digital presence, customer reach, and innovative shopping experiences.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/1000156533.png',
    name: 'Whizziness',
    tagline: 'E-Commerce & Online Retail',
    shortSummary: 'Whizziness is an innovative retail platform offering an optimized e-commerce marketplace focused on premium customer shopping experiences.',
    description: 'Whizziness is an innovative e-commerce platform dedicated to providing customers with a seamless, secure, and convenient shopping experience. The platform focuses on quality products, customer satisfaction, and digital commerce excellence.',
    services: [
      'Online Shopping',
      'Product Marketplace',
      'Customer Experience Solutions',
      'Digital Commerce',
      'Retail Innovation'
    ],
    partnershipValue: 'Through this collaboration, OCTADECENT supports Whizziness with technology, branding, and digital growth solutions to enhance customer engagement and business expansion.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/rudracollections.jpg',
    name: 'RudraCollections',
    tagline: 'Joyful Essentials for Every Childhood.',
    shortSummary: 'A trusted destination for toys, kids\' products, apparel, and accessories designed to bring joy, comfort, and creativity to children.',
    description: 'Rudra Collections offers a wide range of toys, kids\' essentials, apparel, and accessories that combine fun, quality, and creativity for growing children.',
    services: [
      'Toys & Games',
      'Kids Apparel',
      'Baby Essentials',
      'Kids Accessories'
    ],
    partnershipValue: 'Through this partnership, Rudra Collections helps families access quality products that support learning, creativity, and everyday childhood experiences.',
    ctaText: 'Explore Partner',
    ctaHref: '',
    closingStatement: 'Growing Smiles, One Product at a Time.',
    coreFeatures: [
      { emoji: '🧸', text: 'Toys & Games' },
      { emoji: '👕', text: 'Kids Apparel' },
      { emoji: '🎨', text: 'Creative Learning' },
      { emoji: '⭐', text: 'Safe & Quality Products' }
    ]
  },
  {
    logo: '/infinity_ideas.jpg',
    name: 'InfinityIdeasDCT',
    tagline: 'Education, Innovation & Skill Development',
    shortSummary: 'Infinity Ideas DCT empowers individuals through creativity, innovation, and professional skill development programs designed for future-ready careers.',
    description: 'Infinity Ideas DCT is focused on empowering individuals through learning, creativity, innovation, and professional development programs designed for future-ready careers.',
    services: [
      'Skill Development Programs',
      'Career Guidance',
      'Innovation Workshops',
      'Educational Solutions',
      'Professional Training'
    ],
    partnershipValue: 'Our collaboration enables students and professionals to access technology-driven learning opportunities and career growth resources.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/xoxorentals.jpg',
    name: 'XOXORentals',
    tagline: 'All Types of Rentals at One Place.',
    shortSummary: 'A complete rental platform offering vehicles, event setups, equipment, properties, furniture, and more through flexible and affordable rental solutions.',
    description: 'XOXO Rentals provides convenient and affordable rental services for individuals, businesses, and events. From vehicles and properties to equipment and party essentials, we make renting simple and reliable.',
    services: [
      'Vehicle Rentals',
      'Event Rentals',
      'Equipment Rentals',
      'Property Rentals',
      'Furniture Rentals',
      'Appliance Rentals'
    ],
    partnershipValue: 'Through this partnership, XOXO Rentals helps customers access reliable rental solutions for personal, business, and event needs without the burden of ownership.',
    ctaText: 'Explore Partner',
    ctaHref: '',
    closingStatement: 'Rent It. Love It. XOXO It.',
    coreFeatures: [
      { emoji: '🚗', text: 'Vehicle Rentals' },
      { emoji: '🏠', text: 'Property Rentals' },
      { emoji: '🎉', text: 'Event Rentals' },
      { emoji: '🛠️', text: 'Equipment Rentals' }
    ]
  },
  
  {
    logo: '/1000156538.png',
    name: 'RevertedAI',
    tagline: 'Artificial Intelligence & Automation',
    shortSummary: 'RevertedAI builds custom machine learning models, predictive analytics tools, and automated workflows to optimize complex corporate operations.',
    description: 'RevertedAI develops advanced AI-driven solutions that help businesses improve efficiency, automate operations, and make smarter decisions through intelligent technologies.',
    services: [
      'Artificial Intelligence',
      'Machine Learning',
      'Business Automation',
      'Predictive Analytics',
      'AI Consulting'
    ],
    partnershipValue: 'OCTADECENT collaborates with RevertedAI to bring cutting-edge AI and automation solutions to clients across various industries.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/dropshipping.jpg',
    name: 'Dropshipping',
    tagline: 'Global Products. Limitless Reach.',
    shortSummary: 'Helping businesses source, sell, and deliver products worldwide through efficient dropshipping and fulfillment solutions.',
    description: 'Dropshipping is a modern e-commerce fulfillment model that enables businesses to sell products without maintaining physical inventory. By connecting suppliers, logistics partners, and online stores, Dropshipping provides a scalable and cost-effective way to launch and grow online businesses globally.',
    services: [
      'Global Product Sourcing',
      'Supplier Network Access',
      'Order Fulfillment',
      'Worldwide Shipping',
      'E-Commerce Support',
      'Product Research',
      'Store Integration',
      'Logistics Management'
    ],
    partnershipValue: 'Through this partnership, OCTADECENT helps businesses leverage reliable sourcing, efficient fulfillment, and global shipping solutions to expand their reach and accelerate growth in the e-commerce industry.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/zero_to_all.jpg',
    name: 'ZeroToAll',
    tagline: 'Packaging & Logistics',
    shortSummary: 'Zero To All provides secure logistics, supply chain management, and reliable packaging solutions to help businesses transport goods safely.',
    description: 'Zero To All provides reliable packaging materials and safe delivery solutions designed to support businesses with secure transportation and logistics management.',
    services: [
      'Packaging Solutions',
      'Delivery Support',
      'Logistics Management',
      'Material Supply',
      'Shipping Assistance'
    ],
    partnershipValue: 'This partnership helps businesses streamline packaging, logistics, and delivery operations efficiently.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/artivora.jpg',
    name: 'Artivora',
    tagline: 'Creative Design & Branding',
    shortSummary: 'Artivora delivers premium creative strategy, graphic design, and UI/UX asset creation to translate ideas into impactful visual experiences.',
    description: 'Artivora delivers premium creative solutions that transform ideas into impactful visual experiences through branding, graphic design, and digital creativity.',
    services: [
      'Brand Identity Design',
      'Graphic Design',
      'Creative Strategy',
      'Visual Communication',
      'UI/UX Assets'
    ],
    partnershipValue: 'Combining creative excellence with technical expertise allows us to build stronger brands and memorable digital experiences.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/vantora.jpg',
    name: 'Vantora',
    tagline: 'International Trade',
    shortSummary: 'Vantora connects global commerce markets by providing reliable international trade coordination, customs support, and import/export supply chain services.',
    description: 'Vantora specializes in connecting global markets through reliable import and export services, helping businesses expand internationally.',
    services: [
      'Import Services',
      'Export Solutions',
      'Global Trade Support',
      'Supply Chain Coordination',
      'Market Expansion'
    ],
    partnershipValue: 'Our partnership supports businesses seeking international opportunities and cross-border growth.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/novelia.jpg',
    name: 'Novelia',
    tagline: 'Gifts, Decor & Lifestyle',
    shortSummary: 'Novelia creates memorable event experiences and corporate branding through elegant custom gifting solutions, lifestyle decorations, and creative design.',
    description: 'Novelia offers elegant decorating and gifting solutions designed to create memorable experiences for individuals and businesses.',
    services: [
      'Customized Gifts',
      'Event Decorations',
      'Corporate Gifting',
      'Lifestyle Products',
      'Creative Decor Solutions'
    ],
    partnershipValue: 'Together, we help brands and customers create meaningful experiences through thoughtful gifting and decoration services.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/1000156536.png',
    name: 'Eurekatobeas',
    tagline: 'Innovation & Problem Solving',
    shortSummary: 'Eurekatobeas focuses on custom innovation consulting, process optimization, and strategic problem-solving to drive long-term business growth.',
    description: 'Eurekatobeas focuses on identifying challenges and delivering innovative solutions that drive efficiency, creativity, and growth for businesses and individuals.',
    services: [
      'Innovation Consulting',
      'Business Solutions',
      'Strategic Development',
      'Creative Problem Solving',
      'Process Optimization'
    ],
    partnershipValue: 'Together, we develop practical and innovative solutions that help organizations achieve sustainable success.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  {
    logo: '/1000156537.png',
    name: 'SomethingToBeDone',
    tagline: 'Business Innovation & Project Solutions',
    shortSummary: 'Something To Be Done converts complex ideas into actionable project execution strategies, driving efficiency and measurable business outcomes.',
    description: 'Something To Be Done transforms ideas into actionable strategies and measurable outcomes. The organization focuses on innovation, execution, and long-term value creation.',
    services: [
      'Project Management',
      'Business Development',
      'Strategic Planning',
      'Innovation Consulting',
      'Growth Solutions'
    ],
    partnershipValue: 'This partnership combines strategic thinking with technical execution to deliver impactful business solutions.',
    ctaText: 'Explore Partner',
    ctaHref: ''
  },
  
  {
    logo: '/dotfeelz.jpeg',
    name: 'DotFeelz',
    tagline: 'Healthy Sips. Better Living.',
    shortSummary: 'Refreshing, wellness-focused beverages designed to support hydration, energy, and a healthier lifestyle.',
    description: 'DotFeelz creates refreshing and health-focused beverages that combine great taste with everyday wellness.',
    services: [
      'Healthy Beverages',
      'Wellness Drinks',
      'Hydration Solutions',
      'Lifestyle Products'
    ],
    partnershipValue: 'DotFeelz promotes healthier beverage choices through refreshing drinks designed for everyday well-being.',
    ctaText: 'Explore Partner',
    ctaHref: '',
    closingStatement: 'Drink Better. Feel Better.',
    coreFeatures: [
      { emoji: '🥤', text: 'Healthy Drinks' },
      { emoji: '💧', text: 'Hydration' },
      { emoji: '💚', text: 'Wellness' },
      { emoji: '🌿', text: 'Quality Ingredients' }
    ]
  },
  {
  logo: '/th.jpg',
  name: 'Thriftora',
  tagline: 'Every Item Deserves a Second Chance',
  shortSummary:
    'A trusted marketplace for buying and selling quality second-hand products across fashion, furniture, electronics, books, home décor, and more.',

  description:
    'Thriftora is an all-in-one thrift marketplace where pre-loved items find a new home. We make sustainable shopping simple by connecting buyers and sellers of quality second-hand products. From fashion and furniture to electronics, books, collectibles, home décor, and lifestyle essentials, Thriftora helps you save money, reduce waste, and give every item a second life.',

  services: [
    'Thrift Fashion',
    'Second-Hand Furniture',
    'Used Electronics',
    'Books & Stationery',
    'Home Décor',
    'Kitchen Essentials',
    'Bags & Accessories',
    'Footwear Collection',
    'Vintage & Collectibles',
    'Buy & Sell Marketplace'
  ],

  partnershipValue:
    'Thriftora empowers sustainable living by making quality pre-loved products affordable, accessible, and reusable while promoting a circular economy.',

  ctaText: 'Explore Partner',
  ctaHref: '',

  closingStatement:
    'Shop Smart. Save More. Give Every Item a Second Life.',

  coreFeatures: [
    { emoji: '👕', text: 'Fashion' },
    { emoji: '🛋️', text: 'Furniture' },
    { emoji: '💻', text: 'Electronics' },
    { emoji: '📚', text: 'Books' },
    { emoji: '👜', text: 'Accessories' },
    { emoji: '🌱', text: 'Sustainable Shopping' }
  ]
}
];



interface BentoItem {
  icon: any;
  title: string;
  description: string;
  href: string;
}

const bentoItems: BentoItem[] = [
  { icon: ShoppingCart, title: 'E-Commerce', description: 'Launch high-conversion storefronts. From boutique brands to global enterprises, our e-commerce division provides the checkout speed and reliability required to win in modern markets.', href: '/ecommerce-development' },
  { icon: Globe, title: 'Website Development', description: 'Beyond aesthetics. We build high-performance web applications and corporate sites engineered for SEO, speed, and deep integration with your entire business backend.', href: '/web-development' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native iOS and Android experiences that keep your brand in your customer\'s pocket. Our mobile division focuses on retention-first design and seamless utility.', href: '/mobile-app-development' },
  { icon: Cpu, title: 'AI Automation', description: 'Replace manual tasks with intelligent workflows. Our AI suite automates everything from inventory management to customer support, reducing overhead by up to 60%.', href: '/ai-solutions' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'Data-driven growth. Our marketing division uses real-time commerce data to fuel precision-targeted campaigns that maximize your Return on Ad Spend (ROAS).', href: '/digital-marketing' },
  { icon: Bolt, title: 'Quick Commerce', description: 'The future of delivery. Enable 15-minute fulfillment through our hyperlocal logistics engine, connecting your inventory directly to the local customer\'s doorstep.', href: '/ecommerce-development' },
];

interface GrowthStat {
  prefix?: string;
  endValue: number;
  suffix: string;
  label: string;
}

const growthStats: GrowthStat[] = [
  { prefix: '+', endValue: 340, suffix: '%', label: 'Avg Traffic Growth' },
  { endValue: 5, suffix: 'X', label: 'Merchant ROAS' },
  { endValue: 12, suffix: 'M+', label: 'Monthly Orders' },
  { endValue: 18, suffix: '', label: 'Integrated Companies' },
];

const orbitNodes = [
  { line1: 'TECHNOLOGY', line2: '& AI SOLUTIONS', icon: Cpu, offset: 'top-[5%] left-[50%] -translate-x-1/2 -translate-y-1/2', alignLeft: false },
  { line1: 'DIGITAL', line2: 'MARKETING', icon: TrendingUp, offset: 'top-[17%] left-[82%] -translate-x-1/2 -translate-y-1/2', alignLeft: false },
  { line1: 'COMMERCE', line2: '& E-COMMERCE', icon: ShoppingCart, offset: 'top-[50%] left-[95%] -translate-x-1/2 -translate-y-1/2', alignLeft: false },
  { line1: 'AUTOMATION', line2: '& INNOVATION', icon: Target, offset: 'top-[83%] left-[82%] -translate-x-1/2 -translate-y-1/2', alignLeft: false },
  { line1: 'DESIGN', line2: '& BRANDING', icon: Palette, offset: 'top-[95%] left-[50%] -translate-x-1/2 -translate-y-1/2', alignLeft: false },
  { line1: 'CONSULTING', line2: '& STRATEGY', icon: Briefcase, offset: 'top-[83%] left-[18%] -translate-x-1/2 -translate-y-1/2', alignLeft: true },
  { line1: 'TALENT', line2: '& FREELANCING', icon: Users, offset: 'top-[50%] left-[5%] -translate-x-1/2 -translate-y-1/2', alignLeft: true },
  { line1: 'GLOBAL TRADE', line2: '& VENTURES', icon: Layers, offset: 'top-[17%] left-[18%] -translate-x-1/2 -translate-y-1/2', alignLeft: true }
];

export default function HomePage() {
  const [hoveredBentoIndex, setHoveredBentoIndex] = useState<number | null>(null);
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-[#e3e2e2]">

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section className="relative min-h-0 lg:min-h-screen flex flex-col items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden px-4 sm:px-6">
        {/* Background Grid */}
        <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
        {/* Background blob — hidden on small mobile to avoid overflow */}
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none hidden xs:block" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center px-4 sm:px-6">
          
          {/* Left Column: Text Content & Stats (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left items-start w-full"
          >
            <h1 className="font-montserrat font-extrabold text-white text-left tracking-tight leading-tight space-y-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}>
              <span className="block text-white">WE BUILD BUSINESSES.</span>
              <span className="block text-white">WE SCALE FUTURES.</span>
              <span className="block">WE CREATE <span className="text-[#ff5c00]">IMPACT.</span></span>
            </h1>

            <p className="font-inter text-sm sm:text-base md:text-lg text-[#bab8b7] text-left max-w-xl leading-relaxed mb-8">
              OCTADECENT is a global business ecosystem delivering end-to-end technology, commerce, AI, automation, digital marketing, and business growth solutions through one connected platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#ff5c00] to-[#e05200] hover:from-[#e05200] hover:to-[#ff5c00] text-white rounded-xl font-inter font-bold orange-glow hover:scale-105 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base shadow-[0_4px_20px_rgba(255,92,0,0.3)]"
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto px-8 py-3.5 border border-[#ff5c00] hover:bg-[#ff5c00]/10 text-white rounded-xl font-inter font-bold hover:scale-105 transition-all text-center flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Globe & Orbiting Divisions (40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[460px] mx-auto flex items-center justify-center pt-8 lg:pt-0"
          >
            {/* Background spinning circle lines */}
            <div className="absolute inset-[15%] rounded-full border border-white/5 animate-[spin_60s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-[5%] rounded-full border border-[#ff5c00]/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

            {/* Technology Wireframe Globe */}
            <div className="absolute inset-[10%] pointer-events-none select-none z-0">
              <img
                alt="OCTADECENT global technology representation"
                className="w-full h-full object-contain animate-float"
                src="/home.png"
              />
            </div>

            {/* Central Octadecent Gold Insignia Logo */}
            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#ff5c00] to-[#ffd700] shadow-[0_0_40px_rgba(255,92,0,0.35)] flex items-center justify-center">
              <div className="w-full h-full bg-[#050816] rounded-full overflow-hidden flex items-center justify-center p-2.5">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-Ejw9GX39YVfLZY6_rzSHkCuoul10gUogdKujpPFixlahWW2jL_ZOXDnrjTLHlFgKHsIAJWc873fIWb8YEVelu-6TuRrfDQXvkehQd7SrbSkCQ5cXyyLw3GztkBPfDjZWw_o3wGMjeXpkZD9BqAZOHtqvC4qWlF37Y7LKJZjpwYKRD1mmcAiUFZnqJWqYiezpEpIqwt5pN6sgSB8KCV8mR284OINloeTyVCAAQI8EsppwvTSxYS_Wn6nRx_5CM0kKTN0UiX8i48"
                  alt="OCTADECENT Gold Insignia Logo"
                  className="w-full h-full object-contain"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            {/* Orbiting Nodes mapping */}
            {orbitNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div
                  key={index}
                  className={`absolute z-20 ${node.offset}`}
                >
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {node.alignLeft ? (
                      <>
                        <div className="hidden xs:flex flex-col text-right leading-none items-end">
                          <span className="text-[8px] sm:text-[9px] font-montserrat font-bold text-white uppercase tracking-wider whitespace-nowrap">{node.line1}</span>
                          <span className="text-[8px] sm:text-[9px] font-montserrat font-semibold text-[#bab8b7] uppercase tracking-wider whitespace-nowrap mt-0.5">{node.line2}</span>
                        </div>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/85 border border-[#ff5c00]/30 flex items-center justify-center text-[#ff5c00] flex-shrink-0 group-hover:bg-[#ff5c00] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,92,0,0.15)] group-hover:shadow-[0_0_20px_rgba(255,92,0,0.35)] group-hover:scale-110">
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/85 border border-[#ff5c00]/30 flex items-center justify-center text-[#ff5c00] flex-shrink-0 group-hover:bg-[#ff5c00] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,92,0,0.15)] group-hover:shadow-[0_0_20px_rgba(255,92,0,0.35)] group-hover:scale-110">
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div className="hidden xs:flex flex-col text-left leading-none items-start">
                          <span className="text-[8px] sm:text-[9px] font-montserrat font-bold text-white uppercase tracking-wider whitespace-nowrap">{node.line1}</span>
                          <span className="text-[8px] sm:text-[9px] font-montserrat font-semibold text-[#bab8b7] uppercase tracking-wider whitespace-nowrap mt-0.5">{node.line2}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>



      {/* ============================================
          PARTNERED COMPANIES (PARTNERSHIP)
          ============================================ */}
      <section className="px-4 sm:px-6 md:px-16 pt-10 sm:pt-24 pb-6 sm:pb-12 max-w-[1440px] mx-auto border-t border-white/5 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ff5c00]/25 bg-[#ff5c00]/8 text-[#ff5c00] text-xs font-semibold uppercase tracking-widest font-inter mb-6">
            Partnership
          </div>
          <h2 className="font-montserrat font-extrabold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Partnered Businesses
          </h2>
          <p className="font-inter text-[#9a9898] mt-4 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            An ecosystem of innovative brands, technology, and strategic partnerships powering business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 w-full max-w-[90rem] mx-auto">
          {partnersData.map((partner, idx) => (
            <PartnerCard
              key={partner.name}
              index={idx}
              logo={partner.logo}
              name={partner.name}
              tagline={partner.tagline}
              description={partner.shortSummary}
              ctaText={partner.ctaText}
              onExplore={() => setSelectedPartnerIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* ============================================
          INTERACTIVE PARTNER DETAIL MODAL
          ============================================ */}
      <AnimatePresence>
        {selectedPartnerIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPartnerIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#0a0d1a]/95 border border-white/10 rounded-3xl shadow-[0_24px_50px_rgba(255,92,0,0.18)] p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPartnerIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/5 hover:bg-[#ff5c00] text-white/70 hover:text-white transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const partner = partnersData[selectedPartnerIndex];
                return (
                  <motion.div
                    key={selectedPartnerIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#ff5c00]/50 to-[#ff5c00]/20 flex-shrink-0">
                        <div className="w-full h-full bg-[#050816] rounded-full overflow-hidden flex items-center justify-center">
                          <Image src={partner.logo} alt={`${partner.name} partner logo`} className={`w-full h-full object-contain transition-transform duration-300 ${
                            ['Octasverse', 'Thriftora'].includes(partner.name)
                              ? 'scale-[1.35]'
                              : ['Vyomora', 'DotFeelz', 'RevertedAI'].includes(partner.name)
                              ? 'scale-[1.15]'
                              : 'scale-90'
                          }`} width={96} height={96} loading="lazy" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl lg:text-3xl text-white">
                          {partner.name}
                        </h3>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#ff5c00]/10 border border-[#ff5c00]/25 text-[#ff5c00]">
                            {partner.tagline}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <div>
                      <h4 className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#ff5c00] mb-2">
                        About Partner
                      </h4>
                      <p className="font-inter text-sm text-[#b5b5b5] leading-relaxed">
                        {partner.description}
                      </p>
                    </div>

                     {/* Services & Value Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#ff5c00] mb-3">
                          Services Offered
                        </h4>
                        <ul className="space-y-2">
                          {partner.services.map((svc) => (
                            <li key={svc} className="flex items-center gap-2 text-xs text-white/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c00]" />
                              {svc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#ff5c00] mb-3">
                            Collaboration Benefits
                          </h4>
                          <p className="font-inter text-xs sm:text-sm text-[#b5b5b5] leading-relaxed">
                            {partner.partnershipValue}
                          </p>
                        </div>
                        {partner.vision && (
                          <div>
                            <h4 className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#ff5c00] mb-2">
                              Vision
                            </h4>
                            <p className="font-inter text-xs sm:text-sm text-[#b5b5b5] leading-relaxed">
                              {partner.vision}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Core Features Section (Conditional) */}
                    {partner.coreFeatures && (
                      <div className="pt-2">
                        <h4 className="font-montserrat font-bold text-[10px] uppercase tracking-widest text-[#ff5c00] mb-3">
                          Core Features
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {partner.coreFeatures.map((feat) => (
                            <div key={feat.text} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                              <span className="text-sm">{feat.emoji}</span>
                              <span className="text-[11px] font-inter font-semibold text-white/95">{feat.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Closing Statement (Conditional) */}
                    {partner.closingStatement && (
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                        <blockquote className="font-inter text-xs text-white/60 italic border-l-2 border-[#ff5c00] pl-3">
                          {partner.closingStatement}
                        </blockquote>
                      </div>
                    )}

                    {/* Contact details & CTA */}
                    <div className="pt-6 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-white/30 text-[11px] font-inter">
                        Contact Info: <a href="mailto:octadecent@gmail.com" className="text-[#ff5c00] hover:underline">octadecent@gmail.com</a> | <a href="tel:+919398820561" className="text-white/60 hover:text-white transition-colors">+91 9398820561</a>
                      </div>
                      <div className="flex gap-3 w-full sm:w-auto justify-end">
                        <button
                          onClick={() => setSelectedPartnerIndex(null)}
                          className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-inter font-bold text-white transition-all w-full sm:w-auto"
                        >
                          Close
                        </button>
                        {partner.ctaHref && (
                          <a
                            href={partner.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-[#ff5c00] hover:bg-[#e05200] text-xs font-inter font-bold text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                          >
                            <span>Visit Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>




      {/* ============================================
          3. ABOUT SECTION
          ============================================ */}
      <section className="pt-10 pb-4 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="font-montserrat font-extrabold leading-tight text-white"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
            >
              Building The Future Of Business Growth
            </h2>
            <div className="space-y-6 font-inter text-[#bab8b7] leading-relaxed">
              <p>
                <strong className="text-white font-extrabold block mb-1.5 text-base sm:text-lg tracking-tight">Build Businesses</strong>
                <span className="text-xs sm:text-sm md:text-base text-[#9a9898]">From startups to enterprises, we engineer the systems that power sustainable business growth.</span>
              </p>
              <p>
                <strong className="text-white font-extrabold block mb-1.5 text-base sm:text-lg tracking-tight">Scale Futures</strong>
                <span className="text-xs sm:text-sm md:text-base text-[#9a9898]">We connect innovation, commerce, and technology to unlock limitless opportunities.</span>
              </p>
              <p>
                <strong className="text-white font-extrabold block mb-1.5 text-base sm:text-lg tracking-tight">Create Impact</strong>
                <span className="text-xs sm:text-sm md:text-base text-[#9a9898]">Our ecosystem drives measurable results, lasting partnerships, and meaningful transformation across industries.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-1.5 rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" aria-hidden="true" />
            <div className="aspect-[1.6] bg-gradient-to-br from-[#121414] to-black rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden">
              <Image
                alt="OCTADECENT core conglomerate ecosystem division diagram illustration"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                src="/conglomerate-core.jpg"
                width={800}
                height={500}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </section>

      <EcosystemSection />

      

      {/* ============================================
          6. COMPARISON SECTION
          ============================================ */}
      <section className="pt-10 pb-4 sm:pt-24 sm:pb-8 md:pt-32 md:pb-10 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-montserrat font-extrabold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Why Choose Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-7 sm:p-10 rounded-3xl border-red-500/10 hover:border-red-500/25 hover:shadow-[0_10px_30px_rgba(239,68,68,0.05)] transition-all duration-300"
          >
            <h4 className="font-montserrat font-bold text-lg sm:text-xl text-red-400 mb-5 sm:mb-6 flex items-center gap-3">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> Traditional Approach
            </h4>
            <ul className="space-y-4 sm:space-y-6 font-inter text-sm text-[#bab8b7]">
              {[
                'Disconnected vendors that don\'t communicate.',
                'Fragmented data silos leading to lost revenue.',
                'Hidden costs from multiple platform subscriptions.',
                'Slow reaction times to market changes.',
              ].map((item) => (
                <li key={item} className="flex gap-3 sm:gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-7 sm:p-10 rounded-3xl border-primary/30 bg-primary/5 hover:border-primary/50 transition-all duration-300"
          >
            <h4 className="font-montserrat font-bold text-lg sm:text-xl text-primary mb-5 sm:mb-6 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> OCTADECENT Approach
            </h4>
            <ul className="space-y-4 sm:space-y-6 font-inter text-sm text-white">
              {[
                'One unified ecosystem for every business need.',
                'Seamless data flow between marketing and logistics.',
                'Consolidated infrastructure with clear ROI.',
                'Rapid, AI-enhanced agility to scale at will.',
              ].map((item) => (
                <li key={item} className="flex gap-3 sm:gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      



      {/* ============================================
          9. FINAL CTA
          ============================================ */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28 md:pt-36 md:pb-36 relative text-center overflow-hidden z-10 border-t border-white/5"
        style={{
          background: 'linear-gradient(to top, rgba(5,8,22,0.98) 0%, rgba(5,8,22,0.85) 50%, rgba(5,8,22,0.98) 100%), url("/brain-cta.jpg") center bottom / cover no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff5c00]/30 bg-black/50 text-[#ff5c00] text-[10px] sm:text-xs font-bold uppercase tracking-widest font-montserrat mb-8"
          >
            <Rocket className="w-3.5 h-3.5 animate-pulse" />
            Let's Build The Future
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Ready To Build Your<br />
            <span className="text-[#ff5c00] tracking-tight relative inline-block drop-shadow-[0_0_35px_rgba(255,92,0,0.5)]">Digital Empire?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm sm:text-base md:text-[17px] text-[#bab8b7] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join a powerful ecosystem of innovators, creators, and entrepreneurs scaling faster with <span className="text-[#ff5c00] font-bold">Octadecent</span>.
          </motion.p>

          {/* Features Horizontal Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 max-w-5xl mx-auto mb-16 py-8 border-y border-white/10 items-center justify-center bg-black/10 backdrop-blur-sm rounded-3xl"
          >
            {[
              { icon: TrendingUp, title: "Scalable", subtitle: "Solutions" },
              { icon: ShieldCheck, title: "Secure &", subtitle: "Reliable" },
              { icon: Rocket, title: "Performance", subtitle: "Driven" },
              { icon: Users, title: "Expert", subtitle: "Support" },
              { icon: Globe, title: "Global", subtitle: "Ecosystem" }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-4 md:border-r last:border-r-0 border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-[#ff5c00] shadow-[0_4px_15px_rgba(255,92,0,0.15)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-white leading-tight">{feat.title}</span>
                  <span className="text-[10px] sm:text-[11px] text-[#9a9898] mt-0.5 leading-tight">{feat.subtitle}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-gradient-to-r from-[#ff5c00] to-[#e05200] hover:from-[#e05200] hover:to-[#ff5c00] text-white rounded-2xl font-inter font-bold orange-glow hover:scale-105 transition-all text-center flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base shadow-[0_4px_25px_rgba(255,107,0,0.4)]"
            >
              <Rocket className="w-5 h-5 text-white" />
              <span>Initialize Integration</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto px-8 py-4 sm:py-5 border border-white/10 bg-[#0a0d1a]/80 backdrop-blur-md hover:bg-[#0a0d1a] hover:border-white/20 text-white rounded-2xl font-inter font-bold hover:scale-105 transition-all text-center flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <Calendar className="w-5 h-5 text-[#ff5c00]" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>



    </div>
  );
}

