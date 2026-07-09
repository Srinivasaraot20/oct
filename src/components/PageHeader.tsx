'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 overflow-hidden bg-background-dark">
      {/* Background patterns */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6"
          >
            {subtitle}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat font-extrabold tracking-tight text-white mb-5 sm:mb-6 leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
