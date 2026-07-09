import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | OCTADECENT',
  description: 'Learn how OCTADECENT collects, uses, stores, and protects your information while using our website and services. We are committed to data privacy and transparency for users in Hyderabad, India and worldwide.',
  keywords: [
    'OCTADECENT privacy policy',
    'data protection',
    'user privacy',
    'cookie policy',
    'information security',
    'GDPR compliance India',
    'data privacy Hyderabad',
    'personal data protection Telangana',
    'website privacy policy OCTADECENT',
    'user data collection policy India',
    'secure data handling practices',
    'third-party data sharing policy',
    'IT company privacy policy Hyderabad India',
    'online privacy and cookie consent',
    'data retention and user rights OCTADECENT',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'OCTADECENT' }],
  category: 'Legal',
  alternates: {
    canonical: 'https://octadecent.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | OCTADECENT',
    description: 'Learn how OCTADECENT collects, uses, stores, and protects your information while using our website and services.',
    url: 'https://octadecent.com/privacy-policy',
    siteName: 'OCTADECENT',
    images: [{ url: 'https://octadecent.com/og-image.png', width: 1200, height: 630, alt: 'OCTADECENT Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | OCTADECENT',
    description: 'Learn how OCTADECENT collects, uses, stores, and protects your information.',
    images: ['https://octadecent.com/og-image.png'],
  },
};

const SECTIONS = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'contact-forms', title: 'Contact Forms' },
  { id: 'cookies-policy', title: 'Cookies Policy' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'childrens-privacy', title: "Children's Privacy" },
  { id: 'international-users', title: 'International Users' },
  { id: 'changes-to-policy', title: 'Changes To This Policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e3e2e2]">
      
      {/* ── Hero Header ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-white/5 print:border-none print:pt-10 print:pb-6">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5c00]/5 blur-[100px] rounded-full pointer-events-none print:hidden" aria-hidden="true" />
        
        <div className="relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#9a9898] mb-8 font-inter print:hidden">
            <Link href="/" className="hover:text-[#ff6b00] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] mb-6 print:border-none print:bg-transparent print:p-0 print:text-black">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-inter text-xs font-bold uppercase tracking-widest">Legal & Privacy</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 print:text-black">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 font-inter text-sm text-[#9a9898]">
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10 print:bg-transparent print:border-none print:p-0 print:text-black">
              Last Updated: June 2026
            </span>
            <PrintButton />
          </div>
        </div>
      </section>

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-16 print:py-6 print:block">
        
        {/* Sticky Sidebar */}
        <aside className="lg:w-1/4 hidden lg:block print:hidden">
          <div className="sticky top-32 glass-card p-6 rounded-2xl bg-[#121414] border border-white/5 shadow-2xl">
            <h4 className="font-montserrat font-bold text-white text-sm mb-6 uppercase tracking-widest">Contents</h4>
            <nav className="space-y-1 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/5 rounded-full" />
              
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="relative flex items-center pl-6 py-2 text-[13px] font-inter font-semibold text-[#9a9898] hover:text-[#ff6b00] transition-colors group"
                >
                  <span className="absolute left-[4px] w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#ff6b00] transition-colors group-hover:scale-150 shadow-[0_0_10px_rgba(255,107,0,0)] group-hover:shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:w-3/4 max-w-3xl font-inter text-[#bab8b7] space-y-16 leading-relaxed print:w-full print:text-black print:space-y-8">
          
          <div className="prose prose-invert prose-orange max-w-none print:prose-p:text-black print:prose-h2:text-black print:prose-h3:text-black print:prose-li:text-black">
            <p className="text-lg text-white font-medium print:text-black">
              At OCTADECENT, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or use our services.
            </p>

            {/* Section 1 */}
            <section id="information-we-collect" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-12 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Information We Collect</h2>
              
              <h3 className="font-bold text-white text-lg mt-8 mb-4 print:text-black">Personal Information</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Name</li>
                <li>Job Title</li>
                <li>Country</li>
                <li>Contact Form Details</li>
                <li>Consultation Requests</li>
              </ul>

              <h3 className="font-bold text-white text-lg mt-8 mb-4 print:text-black">Technical Information</h3>
              <p>We may automatically collect:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Website Usage Data</li>
                <li>Cookies and Analytics Data</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="how-we-use" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Respond to inquiries</li>
                <li>Schedule consultations</li>
                <li>Provide requested services</li>
                <li>Improve website performance</li>
                <li>Enhance customer experience</li>
                <li>Send important updates</li>
                <li>Analyze website traffic</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="contact-forms" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Contact Forms</h2>
              <p>When you submit forms on our website:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Information is securely stored</li>
                <li>Data may be sent to our sales and support teams</li>
                <li>Information is used only for business communication</li>
                <li>We <span className="text-[#ff6b00] font-semibold print:text-black">do not sell</span> submitted information</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookies-policy" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Cookies Policy</h2>
              <p>Our website may use cookies to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Improve performance</li>
                <li>Remember preferences</li>
                <li>Measure traffic</li>
                <li>Enhance user experience</li>
              </ul>
              <p className="mt-4">Users can disable cookies through browser settings.</p>
            </section>

            {/* Section 5 */}
            <section id="data-security" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Data Security</h2>
              <p>OCTADECENT implements industry-standard security measures including:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Secure HTTPS encryption</li>
                <li>Access controls</li>
                <li>Firewall protection</li>
                <li>Secure cloud infrastructure</li>
                <li>Regular security monitoring</li>
              </ul>
              <p className="mt-4 italic text-sm">However, no online transmission is 100% secure.</p>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Third-Party Services</h2>
              <p>We may use trusted third-party services including:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Google Analytics</li>
                <li>Email Providers</li>
                <li>Cloud Hosting Services</li>
                <li>CRM Platforms</li>
                <li>Payment Providers (if applicable)</li>
              </ul>
              <p className="mt-4">These providers maintain their own privacy policies.</p>
            </section>

            {/* Section 7 */}
            <section id="data-retention" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Data Retention</h2>
              <p>We retain information only as long as necessary to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Provide services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Improve customer support</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="your-rights" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Your Rights</h2>
              <p>You may request to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Withdraw consent</li>
                <li>Request a copy of your stored data</li>
              </ul>
              <p className="mt-4">To make a request, contact us using the details below.</p>
            </section>

            {/* Section 9 */}
            <section id="childrens-privacy" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age.</p>
              <p>We do not knowingly collect personal information from minors.</p>
            </section>

            {/* Section 10 */}
            <section id="international-users" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">International Users</h2>
              <p>By using our website, you understand that information may be processed and stored in different countries where our infrastructure operates.</p>
            </section>

            {/* Section 11 */}
            <section id="changes-to-policy" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Changes To This Policy</h2>
              <p>We may update this Privacy Policy periodically.</p>
              <p>Changes will be posted on this page with an updated revision date.</p>
            </section>



          </div>
        </main>
      </div>

    </div>
  );
}
