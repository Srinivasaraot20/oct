import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Compression ───────────────────────────────────────────────────────────
  compress: true,

  // ─── Security ──────────────────────────────────────────────────────────────
  poweredByHeader: false,

  // ─── Image Optimization ────────────────────────────────────────────────────
  images: {
    // Automatically serve WebP and AVIF for supported browsers
    formats: ['image/avif', 'image/webp'],

    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,

    // Responsive breakpoints matching Tailwind sm/md/lg/xl/2xl
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Allow external image domains used across the site
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],

    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },

  // ─── HTTP Headers ──────────────────────────────────────────────────────────
  async headers() {
    return [
      // Long-term cache for immutable static assets (JS, CSS, fonts)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public JPG/PNG images for 30 days
      {
        source: '/:path*.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:path*.avif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // Security headers on all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // ─── Resource Limits (For cPanel/Shared Hosting) ───────────────────────────
  experimental: {
    // Restricts the number of CPUs Next.js can use during build.
    // Prevents "EAGAIN" spawn errors caused by hitting cPanel process limits.
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;

