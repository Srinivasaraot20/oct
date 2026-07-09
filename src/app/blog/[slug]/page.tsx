import PageHeader from '@/components/PageHeader';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const postUrl = `https://octadecent.com/blog/${post.slug}`;

  return {
    title: `${post.title} | OCTADECENT Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: "OCTADECENT", url: "https://octadecent.com" }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "OCTADECENT",
      images: [{ url: "https://octadecent.com/og-image.png", width: 1200, height: 630, alt: post.title }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://octadecent.com/og-image.png"],
      creator: "@octadecent",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background-dark min-h-screen text-white">
      <PageHeader 
        title={post.title} 
        subtitle={post.category} 
        description={post.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Glass Content Card */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/5 space-y-8">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted font-semibold border-b border-white/5 pb-6">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {post.readTime}</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-bold"><Tag className="w-3.5 h-3.5 text-primary mr-1" /> {post.category}</span>
          </div>

          {/* HTML Article Content */}
          <div 
            className="prose prose-invert prose-orange max-w-none font-inter text-sm sm:text-base text-[#bab8b7] leading-relaxed space-y-6 blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
