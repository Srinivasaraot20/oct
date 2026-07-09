'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { SearchCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SEOServicesPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <PageHeader 
        title="SEO Services" 
        subtitle="Division 07" 
        description="High-authority search visibility, technical page crawls, and strategic keyword alignment."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <SearchCheck className="w-6 h-6" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white">
            Organic Search Acquisition that Translates to Revenue
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            We don&apos;t just track impressions. We target commercial intent keywords that route high-value buyers straight to your catalog pages.
          </p>
          <ul className="space-y-4">
            {[
              'Comprehensive technical website audit and semantic tag hierarchy adjustments.',
              'Strategic, high-quality backlink building and authority expansion plans.',
              'Rich schema markup integrations listing pricing, reviews, and stock states directly in search results.'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-muted text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl orange-glow transition-all"
            >
              Get Free SEO Audit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <h3 className="font-montserrat font-bold text-lg text-white mb-6">Search Metric Targets</h3>
          <div className="space-y-6">
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">85%+</div>
              <div className="font-inter text-xs text-muted mt-1">Average Organic Traffic Lift in 6 months</div>
            </div>
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">1st Page</div>
              <div className="font-inter text-xs text-muted mt-1">Focus Target for Key Commercial Search Phrases</div>
            </div>
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">100%</div>
              <div className="font-inter text-xs text-muted mt-1">Compliance with Core Web Vitals Standards</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
