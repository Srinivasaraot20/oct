import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Scale } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

export const metadata: Metadata = {
  title: 'Terms & Conditions | OCTADECENT',
  description: "Read the Terms & Conditions governing the use of OCTADECENT's website, services, consultations, and digital solutions. OCTADECENT is based in Hyderabad, Telangana, India.",
  keywords: [
    'OCTADECENT terms and conditions',
    'terms of service',
    'user agreement',
    'service terms',
    'legal terms OCTADECENT',
    'terms of use Hyderabad',
    'website terms and conditions India',
    'software service agreement Telangana',
    'intellectual property policy OCTADECENT',
    'payment and billing terms India',
    'consultation terms IT company',
    'limitation of liability software services',
    'confidentiality agreement OCTADECENT Hyderabad',
    'governing law IT services India',
    'digital solutions legal terms Hyderabad India',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'OCTADECENT' }],
  category: 'Legal',
  alternates: {
    canonical: 'https://octadecent.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | OCTADECENT',
    description: "Read the Terms & Conditions governing the use of OCTADECENT's website, services, consultations, and digital solutions.",
    url: 'https://octadecent.com/terms',
    siteName: 'OCTADECENT',
    images: [{ url: 'https://octadecent.com/og-image.png', width: 1200, height: 630, alt: 'OCTADECENT Terms & Conditions' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | OCTADECENT',
    description: "Terms & Conditions governing the use of OCTADECENT's website and services.",
    images: ['https://octadecent.com/og-image.png'],
  },
};

const SECTIONS = [
  { id: 'acceptance-of-terms', title: 'Acceptance of Terms' },
  { id: 'services', title: 'Services' },
  { id: 'user-responsibilities', title: 'User Responsibilities' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'consultation-requests', title: 'Consultation Requests' },
  { id: 'payments-billing', title: 'Payments & Billing' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'confidentiality', title: 'Confidentiality' },
  { id: 'termination', title: 'Termination' },
  { id: 'changes-to-terms', title: 'Changes to Terms' },
  { id: 'governing-law', title: 'Governing Law' },
];

export default function TermsPage() {
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
            <span className="text-white">Terms & Conditions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/20 text-[#ff6b00] mb-6 print:border-none print:bg-transparent print:p-0 print:text-black">
            <Scale className="w-4 h-4" />
            <span className="font-inter text-xs font-bold uppercase tracking-widest">Legal & Compliance</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 print:text-black">
            Terms & Conditions
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
              Welcome to OCTADECENT.
            </p>
            <p>
              By accessing or using our website, services, applications, or digital platforms, you agree to comply with and be bound by these Terms & Conditions.
            </p>
            <p className="text-[#ff6b00] font-semibold print:text-black">
              If you do not agree with any part of these terms, please do not use our services.
            </p>

            <section id="acceptance-of-terms" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-12 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Acceptance of Terms</h2>
              <p>By accessing this website, you acknowledge that:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>You have read these Terms & Conditions</li>
                <li>You understand them</li>
                <li>You agree to be legally bound by them</li>
              </ul>
            </section>

            <section id="services" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Services</h2>
              <p>OCTADECENT provides services including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>E-Commerce Solutions</li>
                <li>Digital Marketing</li>
                <li>AI Solutions</li>
                <li>Business Automation</li>
                <li>Software Development</li>
                <li>Consulting Services</li>
              </ul>
              <p className="mt-4 italic text-sm">Service offerings may change without prior notice.</p>
            </section>

            <section id="user-responsibilities" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">User Responsibilities</h2>
              <p>Users agree:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>To provide accurate information</li>
                <li>Not to misuse the website</li>
                <li>Not to attempt unauthorized access</li>
                <li>Not to upload malicious content</li>
                <li>Not to violate applicable laws</li>
              </ul>
            </section>

            <section id="intellectual-property" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Intellectual Property</h2>
              <p>All content on this website including:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Logos</li>
                <li>Branding</li>
                <li>Graphics</li>
                <li>Code</li>
                <li>Content</li>
                <li>Designs</li>
                <li>Documents</li>
              </ul>
              <p className="mt-4">
                are the exclusive property of OCTADECENT unless otherwise stated. 
                <span className="block mt-2 font-semibold text-[#ff6b00] print:text-black">Unauthorized use is prohibited.</span>
              </p>
            </section>

            <section id="consultation-requests" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Consultation Requests</h2>
              <p>Submitting a consultation request does not create a business contract.</p>
              <p className="mt-4">OCTADECENT reserves the right to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Accept or decline projects</li>
                <li>Request additional information</li>
                <li>Modify service offerings</li>
              </ul>
            </section>

            <section id="payments-billing" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Payments & Billing</h2>
              <p>For paid services:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Payment terms will be specified in project agreements</li>
                <li>Invoices must be paid according to agreed schedules</li>
                <li>Delayed payments may affect project timelines</li>
              </ul>
            </section>

            <section id="limitation-of-liability" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Limitation of Liability</h2>
              <p>OCTADECENT shall not be liable for:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Indirect damages</li>
                <li>Loss of profits</li>
                <li>Business interruptions</li>
                <li>Data loss</li>
                <li>Third-party service failures</li>
              </ul>
              <p className="mt-4 font-semibold text-[#ff6b00] print:text-black">Use of our services is at your own risk.</p>
            </section>

            <section id="third-party-links" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Third-Party Links</h2>
              <p>Our website may contain links to third-party websites.</p>
              <p className="mt-4">We are not responsible for:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Their content</li>
                <li>Privacy practices</li>
                <li>Terms of use</li>
              </ul>
            </section>

            <section id="confidentiality" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Confidentiality</h2>
              <p>Both parties agree to maintain confidentiality regarding sensitive business information shared during consultations and project discussions.</p>
            </section>

            <section id="termination" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Termination</h2>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#ff6b00]">
                <li>Suspend access</li>
                <li>Restrict services</li>
                <li>Terminate accounts</li>
              </ul>
              <p className="mt-4">for violations of these Terms & Conditions.</p>
            </section>

            <section id="changes-to-terms" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Changes to Terms</h2>
              <p>OCTADECENT may update these Terms & Conditions at any time.</p>
              <p>Continued use of the website constitutes acceptance of updated terms.</p>
            </section>

            <section id="governing-law" className="scroll-mt-32">
              <h2 className="font-montserrat font-bold text-2xl text-white mt-16 mb-6 border-b border-white/10 pb-4 print:text-black print:border-black/20">Governing Law</h2>
              <p>These Terms & Conditions shall be governed by the laws applicable in the jurisdiction where OCTADECENT operates.</p>
            </section>



          </div>
        </main>
      </div>

    </div>
  );
}
