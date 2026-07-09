'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  client: string;
  title: string;
  metric: string;
  metricLabel: string;
  href: string;
  tags: string[];
  index: number;
}

export default function CaseStudyCard({ client, title, metric, metricLabel, href, tags, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden rounded-3xl group hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div className="p-6 sm:p-8 space-y-5 sm:space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary">
            {client}
          </span>
          <h3 className="font-montserrat font-extrabold text-2xl text-white group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Highlight metric box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="font-montserrat font-extrabold text-lg text-white">{metric}</div>
            <div className="font-inter text-xs text-muted">{metricLabel}</div>
          </div>
        </div>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <Link 
          href={href} 
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-primary hover:text-white font-inter text-sm font-semibold transition-all group-hover:border-primary/20"
        >
          Read Case Study
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
