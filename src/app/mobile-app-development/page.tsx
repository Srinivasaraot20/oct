'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <PageHeader 
        title="Mobile App Development" 
        subtitle="Division 03" 
        description="Polished native iOS and Android apps designed to maximize user retention and interactive speed."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-white">
            Native Interface & Smooth Performance
          </h2>
          <p className="font-inter text-muted text-base leading-relaxed">
            We build native iOS (Swift) and Android (Kotlin) app ecosystems alongside React Native pipelines to meet your user experience demands.
          </p>
          <ul className="space-y-4">
            {[
              'Premium dark-mode native designs aligned with Apple HIG & Material Guidelines.',
              'Push notification orchestration using FCM and Firebase Cloud Messaging.',
              'Offline sync support with local client SQLite/Room database structures.'
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
              Get App Scope <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <h3 className="font-montserrat font-bold text-lg text-white mb-6">Device Standards</h3>
          <div className="space-y-6">
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">120 FPS</div>
              <div className="font-inter text-xs text-muted mt-1">Target Screen Refresh Smoothness</div>
            </div>
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">4.9 / 5</div>
              <div className="font-inter text-xs text-muted mt-1">Average App Store Rating across clients</div>
            </div>
            <div>
              <div className="font-montserrat font-extrabold text-4xl text-primary">Zero</div>
              <div className="font-inter text-xs text-muted mt-1">Fatal Memory Leak Violations</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
