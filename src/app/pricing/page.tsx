'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  { name: 'Core Launch', price: '$4,999', desc: 'Ideal for scaling single-channel brands launching premium storefronts.', features: ['Custom Next.js design structure', 'Stripe checkout integrations', 'Basic analytics dashboard', '2 rounds of revisions', 'Email support access'] },
  { name: 'Enterprise SaaS', price: '$12,500', desc: 'Complete enterprise operating setup across multiple divisions.', features: ['Includes everything in Core', 'Headless CMS setup (Sanity)', 'AI agent automation integration', 'Hyper-local logistics shipping sync', '1st Page SEO strategy plan', 'Dedicated account lead support'], popular: true },
  { name: 'Custom Ecosystem', price: 'Custom', desc: 'Tailored for high-volume enterprise organizations requiring full ecosystem access.', features: ['Includes all 18 connected platforms', 'Full scale legacy system audits', 'Custom ML model training layers', 'Custom billing APIs and gateways', 'Unlimited design mockups', '24/7 Priority SLA response'] },
];

export default function PricingPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <PageHeader 
        title="Predictable Pricing Packages" 
        subtitle="Pricing Structure" 
        description="Select a framework configuration that aligns with your operational traffic scale."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-8 rounded-3xl flex flex-col justify-between relative h-full ${tier.popular ? 'border-primary/50 bg-primary/5 shadow-[0_0_40px_rgba(255,92,0,0.15)]' : ''}`}
          >
            {tier.popular && (
              <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <div>
              <div className="font-montserrat font-bold text-lg text-white mb-2">{tier.name}</div>
              <p className="font-inter text-xs text-muted leading-relaxed mb-6">{tier.desc}</p>
              
              <div className="mb-8">
                <span className="font-montserrat font-extrabold text-4xl text-white">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="font-inter text-xs text-muted"> / setup</span>}
              </div>

              <ul className="space-y-4 border-t border-white/5 pt-6">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-xs font-semibold text-muted leading-normal">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center py-4 rounded-xl font-inter font-bold text-sm transition-all ${tier.popular ? 'bg-primary hover:bg-primary-dark text-white orange-glow' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
