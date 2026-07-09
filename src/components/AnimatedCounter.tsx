'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number; // in milliseconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger when 50% of the element is visible, only once
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      // Animate from 0 to 'end' over the specified duration
      const controls = animate(0, end, {
        duration: duration / 1000, // framer-motion expects seconds
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          }
        }
      });

      return () => controls.stop();
    }
  }, [isInView, end, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{(0).toFixed(decimals)}{suffix}
    </span>
  );
}
