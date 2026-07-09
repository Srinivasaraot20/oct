'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: any;
  index: number;
}

export default function ServiceCard({ title, description, href, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 sm:p-8 rounded-3xl relative group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Glow hover background blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" aria-hidden="true" />

        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 sm:mb-6 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </div>

        <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="font-inter text-sm text-muted leading-relaxed mb-6 sm:mb-8">
          {description}
        </p>
      </div>

      <Link 
        href={href} 
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link hover:underline mt-auto"
      >
        Explore Service 
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
      </Link>
    </motion.div>
  );
}

