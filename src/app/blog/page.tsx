'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

export default function BlogPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <PageHeader 
        title="Commerce & Intelligence Blog" 
        subtitle="Insights" 
        description="Read research documentation, enterprise guides, and technical design specs authored by our division directors."
      />

      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 sm:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-4 font-semibold">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-primary" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> {post.readTime}</span>
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-bold"><Tag className="w-3 h-3 text-primary mr-1" /> {post.category}</span>
              </div>
              <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-white group-hover:text-primary transition-colors leading-tight mb-4">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="font-inter text-sm text-muted leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>
            <Link 
              href={`/blog/${post.slug}`} 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link hover:underline"
            >
              Read Full Article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
