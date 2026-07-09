'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable smooth scroll on mobile — native scroll is smoother and uses no JS
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Expose to Navbar for stop/start on menu open
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      // Cancel the rAF loop BEFORE destroying lenis
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}

