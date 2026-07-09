'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('./ScrollToTop'), {
  ssr: false,
});

// ─── Config ───────────────────────────────────────────────────────────────────
const WA_NUMBER = '919398820561';

// ─── Page-aware messages ──────────────────────────────────────────────────────
function getMessage(pathname: string): string {
  if (pathname.startsWith('/book-consultation')) {
    return `Hello OCTADECENT Team! 👋\n\nI visited your *Book Consultation* page and would like to schedule a business consultation.\n\nPlease contact me to discuss my project requirements.\n\nThank you!`;
  }
  if (pathname.startsWith('/careers')) {
    return `Hello OCTADECENT Team! 👋\n\nI visited your *Careers Page* and I'm interested in career opportunities at OCTADECENT.\n\nPlease share available positions and application details.\n\nThank you!`;
  }
  if (pathname.startsWith('/pricing')) {
    return `Hello OCTADECENT Team! 👋\n\nI visited your *Pricing Page* and would like help choosing the right plan.\n\nPlease contact me.\n\nThank you!`;
  }
  if (pathname.startsWith('/portfolio') || pathname.startsWith('/case-studies') || pathname.startsWith('/projects')) {
    return `Hello OCTADECENT Team! 👋\n\nI was reviewing your portfolio and I'm impressed with your work.\n\nI have a similar project in mind — please contact me.\n\nThank you!`;
  }
  if (['/ai-solutions', '/web-development', '/mobile-app-development', '/ui-ux-design', '/ecommerce-development', '/digital-marketing', '/seo-services', '/services'].some(p => pathname.startsWith(p))) {
    return `Hello OCTADECENT Team! 👋\n\nI visited your services page and I'm interested in learning more.\n\nPlease contact me to discuss my requirements.\n\nThank you!`;
  }
  // Default
  return `Hello OCTADECENT Team! 👋\n\nI visited your website and would like to discuss my requirements.\n\nPlease contact me.\n\nThank you!`;
}

// ─── Track clicks in localStorage ────────────────────────────────────────────
function trackClick(pathname: string) {
  try {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const log = JSON.parse(localStorage.getItem('wa_clicks') || '[]');
    log.unshift({ date: new Date().toLocaleDateString('en-IN'), time: new Date().toLocaleTimeString('en-IN'), page: pathname, device: isMobile ? 'Mobile' : 'Desktop', ts: Date.now() });
    localStorage.setItem('wa_clicks', JSON.stringify(log.slice(0, 100)));
  } catch (_) {}
}

// ─── WhatsApp SVG (white) ─────────────────────────────────────────────────────
function WaIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhatsAppButton() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Pulse every 5 s
  useEffect(() => {
    const fire = () => { setPulse(true); setTimeout(() => setPulse(false), 900); };
    fire();
    const id = setInterval(fire, 5000);
    return () => clearInterval(id);
  }, []);

  const handleClick = useCallback(() => {
    const text = encodeURIComponent(getMessage(pathname));
    trackClick(pathname);
    // wa.me works on both desktop (opens WhatsApp Web immediately) and mobile (opens native app)
    const url = `https://wa.me/${WA_NUMBER}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-2 pointer-events-auto">

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              key="tip"
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="relative bg-[#0e0e0e] border border-white/10 text-white text-[11px] font-semibold font-inter px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap pointer-events-none"
            >
              💬 Chat with OCTADECENT
              <span className="absolute -bottom-[5px] right-[18px] w-2.5 h-2.5 bg-[#0e0e0e] border-r border-b border-white/10 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <div className="relative">
          {/* Pulse rings — orange */}
          {pulse && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#ff6b00] animate-ping opacity-30 pointer-events-none" />
              <span className="absolute -inset-2 rounded-full bg-[#ff6b00] animate-ping opacity-15 pointer-events-none" style={{ animationDelay: '0.12s' }} />
            </>
          )}

          <motion.button
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Chat with OCTADECENT on WhatsApp"
            className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ff6b00]/50 transition-shadow duration-300"
            style={{
              background: '#ff6b00',
              boxShadow: '0 4px 20px rgba(255,107,0,0.45)',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 32px rgba(255,107,0,0.70)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(255,107,0,0.45)'; }}
          >
            <WaIcon />
          </motion.button>
        </div>
      </div>
    </>
  );
}
