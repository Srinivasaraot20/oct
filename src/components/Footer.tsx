import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Shield, Key, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/5 pt-14 sm:pt-20 pb-8 text-white relative z-10 overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#ff6b00]/5 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
        
          {/* Info Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-5 sm:space-y-6">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="OCTADECENT Home">
              <Image
                alt="OCTADECENT — Premium technology and software company logo"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full shadow-[0_0_16px_rgba(255,92,0,0.25)] group-hover:shadow-[0_0_24px_rgba(255,92,0,0.45)] transition-shadow duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-Ejw9GX39YVfLZY6_rzSHkCuoul10gUogdKujpPFixlahWW2jL_ZOXDnrjTLHlFgKHsIAJWc873fIWb8YEVelu-6TuRrfDQXvkehQd7SrbSkCQ5cXyyLw3GztkBPfDjZWw_o3wGMjeXpkZD9BqAZOHtqvC4qWlF37Y7LKJZjpwYKRD1mmcAiUFZnqJWqYiezpEpIqwt5pN6sgSB8KCV8mR284OINloeTyVCAAQI8EsppwvTSxYS_Wn6nRx_5CM0kKTN0UiX8i48"
                width={36}
                height={36}
                loading="lazy"
              />
              <span className="font-montserrat font-extrabold tracking-tight text-lg sm:text-xl leading-none text-[#ff6b00] transition-colors">
                OCTADECENT
              </span>
            </Link>
            <p className="font-inter text-sm text-[#9a9898] leading-relaxed max-w-[320px]">
              OCTADECENT is a unified commerce and technology ecosystem delivering AI solutions, web development, mobile applications, digital marketing, automation, and business growth services for modern enterprises.
            </p>
            <div className="flex items-center gap-4 text-[#9a9898] flex-wrap">
              {/* 1. LinkedIn */}
              <a href="https://www.linkedin.com/in/devunuri-sathwik-917474410?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Connect on LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* 2. X (Twitter) */}
              <a href="https://x.com/octadecent" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Follow us on X (Twitter)">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* 3. Milkshake */}
              <a href="https://msha.ke/octadecetsoul" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Milkshake Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10.59 13.41c.41.39 1.04.39 1.45 0s.39-1.04 0-1.45c-1.34-1.28-3.22-1.28-4.56 0-1.28 1.22-1.28 3.2 0 4.42l3.43 3.28c1.33 1.27 3.21 1.27 4.54 0 1.28-1.22 1.28-3.2 0-4.42l-1.05-1a.98.98 0 00-1.42 0c-.39.38-.39 1 0 1.38l1.05 1c.53.5.53 1.32 0 1.83-.52.5-1.37.5-1.89 0l-3.43-3.28c-.53-.5-.53-1.32 0-1.83.52-.5 1.37-.5 1.89 0z"/>
                  <path d="M13.41 10.59c-.41-.39-1.04-.39-1.45 0s-.39 1.04 0 1.45c1.34 1.28 3.22 1.28 4.56 0 1.28-1.22 1.28-3.2 0-4.42l-3.43-3.28c-1.33-1.27-3.21-1.27-4.54 0-1.28 1.22-1.28 3.2 0 4.42l1.05 1c.39.38 1.03.38 1.42 0 .39-.38.39-1 0-1.38l-1.05-1c-.53-.5-.53-1.32 0-1.83.52-.5 1.37-.5 1.89 0l3.43 3.28c.53.5.53 1.32 0 1.83-.52.5-1.37.5-1.89 0z"/>
                </svg>
              </a>
              {/* 4. Instagram */}
              <a href="https://www.instagram.com/octadecentfounder?igsh=MXdrN2dkZ3Fxb3dh" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Instagram Octadecent Founder">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* 5. Snapchat */}
              <a href="https://www.snapchat.com/add/octadecent?share_id=t3qcYhoLdpw&locale=en-US" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Snapchat">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9.5 2 7 3.5 6.5 6.5c0 0.5 0 1 0.1 1.5C5.8 8.7 5 9.5 4.5 10.5c-0.5 1 0.2 2 1.3 1.8 1.1-0.2 2.2-0.5 3.2-0.8 0 0.5 0 1-0.1 1.5C8.4 16 7.5 18 6 19.5c-0.8 0.8-1.5 1.5-2.2 2.2-0.6 0.6 0.2 1.3 1.2 1.1s4.5-0.5 6.5-0.5c2 0 5.5 0.3 6.5 0.5s1.8-0.5 1.2-1.1c-0.7-0.7-1.4-1.4-2.2-2.2-1.5-1.5-2.4-3.5-2.9-6.5 0-0.5-0.1-1-0.1-1.5 1 0.3 2.1 0.6 3.2 0.8 1.1 0.2 1.8-0.8 1.3-1.8-0.5-1-1.3-1.8-2.1-2.5 0.1-0.5 0.1-1 0.1-1.5C17 3.5 14.5 2 12 2z" />
                </svg>
              </a>
              {/* 6. Telegram */}
              <a href="https://t.me/octadecent" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="Telegram Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.676c.223-.2-.05-.31-.346-.11l-6.4 4.02-2.76-.86c-.6-.188-.61-.6.125-.89l10.736-4.137c.5-.188.94.116.825.808z"/>
                </svg>
              </a>
              {/* 7. YouTube */}
              <a href="https://youtube.com/@nayasathvi?si=JhxZwNHB6HjEbBOa" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors p-1 hover:-translate-y-1 transform duration-300" aria-label="YouTube Channel">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
 

 
          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4 sm:mb-6">Resources</h4>
            <ul className="space-y-3 sm:space-y-4 font-inter text-sm text-[#9a9898]">
              <li><Link href="/privacy-policy" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Terms & Conditions</Link></li>
              <li><Link href="/book-consultation" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-3 sm:space-y-4 font-inter text-sm text-[#9a9898]">
              <li><Link href="/about" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">About Us</Link></li>
              <li><Link href="/about#leadership" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300">Contact Us</Link></li>
              {/* <li>
  <Link
    href="/admin"
    className="hover:text-[#ff6b00] transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#ff6b00] hover:after:w-full after:transition-all after:duration-300"
  >
    Admin Dashboard
  </Link>
</li> */}
            </ul>
          </div>
 
          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-4 font-inter text-sm text-[#9a9898]">
              <li className="flex items-center gap-3 group">
                <MapPin className="w-4 h-4 text-[#ff6b00] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="whitespace-nowrap">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3 group">
  <Mail className="w-4 h-4 text-[#ff6b00] shrink-0 group-hover:scale-110 transition-transform" />
  <a
    href="mailto:octadecent@gmail.com"
    className="hover:text-[#ff6b00] transition-colors whitespace-nowrap"
  >
    octadecent@gmail.com
  </a>
</li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#ff6b00] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919398820561" className="hover:text-[#ff6b00] transition-colors">+91 9398820561</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe className="w-4 h-4 text-[#ff6b00] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://www.octadecent.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors">www.octadecent.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-6 sm:pt-8 border-t border-white/5 flex justify-center items-center">
        <p className="font-inter text-xs text-[#9a9898] text-center">
          &copy; 2026 OCTADECENT Private Limited. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
