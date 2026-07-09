'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center space-y-6 max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-montserrat font-extrabold text-9xl text-primary drop-shadow-[0_0_35px_rgba(255,92,0,0.3)]"
        >
          404
        </motion.div>

        <h2 className="font-montserrat font-extrabold text-2xl text-white">Route Parameters Unresolved</h2>
        <p className="font-inter text-sm text-muted leading-relaxed">
          The requested system node could not be localized on our active networks.
        </p>

        <div className="pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl orange-glow transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Root
          </Link>
        </div>
      </div>
    </div>
  );
}
