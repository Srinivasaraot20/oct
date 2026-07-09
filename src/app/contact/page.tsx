'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Send, Check, Clock, ChevronDown, 
  HelpCircle, Sparkles, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HeartHandshake, Laptop, BrainCircuit
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';

const contactSchema = z.object({
  name: z.string()
    .min(3, { message: 'Full name must be at least 3 characters long.' })
    .max(50, { message: 'Full name must be between 3 and 50 characters.' })
    .refine(val => /^[A-Za-z\s]+$/.test(val.trim()), { message: 'Full name can contain only letters and spaces.' }),
  email: z.string().email({ message: 'Please provide a valid work email.' }),
  phone: z.string().refine(val => /^\d{10}$/.test(val), { message: 'Phone number must contain exactly 10 digits.' }),
  company: z.string()
    .min(2, { message: 'Company Name must be at least 2 characters.' })
    .max(100, { message: 'Company name can contain only letters and spaces.' })
    .refine(val => /^[A-Za-z\s]+$/.test(val.trim()), { message: 'Company name can contain only letters and spaces.' }),
  service: z.string(),
  country: z.string(),
  budget: z.string(),
  timeline: z.string(),
  details: z.string().min(10, { message: 'Project Details must be at least 10 characters.' }),
  agree: z.boolean().refine(val => val === true, { message: 'You must agree to receive communications.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: 'E-Commerce',
      country: 'India',
      budget: '₹50,000 – ₹2,00,000',
      timeline: '< 1 Month',
      agree: false,
    }
  });

  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError('');

    try {
      const res = await fetch('/api/contact-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Notification failed. Please try again.');
      }

      // Open WhatsApp in new tab for admin notification
      if (json.waUrl) {
        window.open(json.waUrl, '_blank', 'noopener,noreferrer');
      }

      setSubmitted(true);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff5c00', '#ff7b26', '#ffffff'],
      });
      
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong.');
    }
  };

  const faqs = [
    { q: 'What is the typical response time?', a: 'Our team typically responds within 4-6 business hours for general inquiries. Priority clients receive a dedicated response within 1 hour.' },
    { q: 'Do you work with early-stage startups?', a: 'Yes, we have a specialized "Startups" program designed to help promising startups build a scalable commerce foundation from day one.' },
    { q: 'Is the initial consultation free?', a: 'Our first discovery call is always free. It\'s a no-obligation session to understand your needs and see if OCTADECENT is the right fit.' },
    { q: 'How do you handle ongoing support?', a: 'We offer several support tiers, from basic maintenance to full-stack managed services where we act as your outsourced technical team.' },
  ];

  return (
    <div className="bg-background-dark min-h-screen text-white relative">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <PageHeader 
        title="Let's Talk About Your Next Growth Opportunity" 
        subtitle="LET'S BUILD SOMETHING GREAT TOGETHER" 
        description="Whether you're launching an online business, building a commerce platform, automating operations with AI, or scaling through digital growth, OCTADECENT is here to help."
      />

      {/* Quick Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-16 sm:mb-24 md:mb-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group h-full justify-between"
        >
          <div className="flex-grow flex flex-col items-center justify-start w-full">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white mb-2">Call Us</h3>
            <p className="font-inter text-sm text-muted mb-8">Speak directly with our team for immediate assistance.</p>
          </div>
          <a href="tel:9398820561" className="w-full py-3 border border-white/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-bold rounded-xl uppercase tracking-wider text-xs text-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,92,0,0.4)] cursor-pointer">
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group h-full justify-between"
        >
          <div className="flex-grow flex flex-col items-center justify-start w-full">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white mb-2">Email Us</h3>
            <p className="font-inter text-sm text-muted mb-8">Send us your project requirements for detailed review.</p>
          </div>
          <a href="mailto:octadecent@gmail.com" className="w-full py-3 border border-white/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-bold rounded-xl uppercase tracking-wider text-xs text-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,92,0,0.4)] cursor-pointer">
            Send Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group h-full justify-between"
        >
          <div className="flex-grow flex flex-col items-center justify-start w-full">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current text-[#ff5c00]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.535 0 10.04-4.501 10.043-10.04 0-2.684-1.045-5.207-2.943-7.107C16.518 1.558 13.99 1.514 12 1.514c-5.536 0-10.04 4.502-10.044 10.041 0 1.957.51 3.864 1.478 5.574l-.997 3.642 3.734-.98c1.629.888 3.255 1.393 4.886 1.393z"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </div>
            <h3 className="font-montserrat font-bold text-xl text-white mb-2">WhatsApp</h3>
            <p className="font-inter text-sm text-muted mb-8">Chat instantly with our global support team.</p>
          </div>
          <a href="https://wa.me/919398820561" target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-white/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-bold rounded-xl uppercase tracking-wider text-xs text-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,92,0,0.4)] cursor-pointer">
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-16 sm:mb-24 md:mb-32 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Contact Form (60%) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[60%] glass-card p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <h2 className="font-montserrat font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-8">Tell Us About Your Project</h2>
          
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white">Message Dispatched</h3>
              <p className="font-inter text-sm text-muted max-w-xs mx-auto leading-relaxed">
                Your parameters have been logged. A partner from our Hyderabad office will connect with you within 4 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Full Name</label>
                  <input 
                    type="text" 
                    {...register('name', {
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '').replace(/\s+/g, ' ');
                      }
                    })}
                    placeholder="John Doe" 
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter focus:bg-white/5" 
                  />
                  {errors.name && <p className="text-red-500 text-xs font-semibold">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Work Email</label>
                  <input 
                    type="email" 
                    {...register('email')}
                    placeholder="john@company.com" 
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter focus:bg-white/5" 
                  />
                  {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Country</label>
                  <select
                    {...register('country')}
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Brazil">Brazil</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    inputMode="numeric"
                    maxLength={10}
                    {...register('phone', {
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/\D/g, '');
                      }
                    })}
                    placeholder="9876543210" 
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter focus:bg-white/5" 
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Company Name</label>
                  <input 
                    type="text" 
                    {...register('company', {
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '').replace(/\s+/g, ' ');
                      }
                    })}
                    placeholder="Acme Corp" 
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter focus:bg-white/5" 
                  />
                  {errors.company && <p className="text-red-500 text-xs font-semibold">{errors.company.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Service</label>
                  <select 
                    {...register('service')}
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                  >
                    <option value="All Services">All Services</option>
                    <option value="E-Commerce & Quick Commerce Solutions">E-Commerce & Quick Commerce Solutions</option>
                    <option value="AI & Business Automation">AI & Business Automation</option>
                    <option value="Web, App & Software Development">Web, App & Software Development</option>
                    <option value="Creative Studio">Creative Studio</option>
                    <option value="Digital Marketing & Brand Growth">Digital Marketing & Brand Growth</option>
                    <option value="Business Strategy & Startup Consulting">Business Strategy & Startup Consulting</option>
                    <option value="Supply Chain, Logistics & Global Trade">Supply Chain, Logistics & Global Trade</option>
                    <option value="Talent, Freelancing & Community">Talent, Freelancing & Community</option>
                    <option value="Retail & Lifestyle Commerce">Retail & Lifestyle Commerce</option>
                    <option value="Innovation, Research & Venture Building">Innovation, Research & Venture Building</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Budget Range</label>
                  <select 
                    {...register('budget')}
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                  >
                    <option value="₹5,000 – ₹20,000">₹5,000 – ₹20,000</option>
                    <option value="₹20,000 – ₹50,000">₹20,000 – ₹50,000</option>
                    <option value="Above ₹50,000">Above ₹50,000</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold">Timeline</label>
                  <select 
                    {...register('timeline')}
                    className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                  >
                    <option value="< 1 Month">&lt; 1 Month</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted font-bold">Project Details</label>
                <textarea 
                  rows={4}
                  {...register('details')}
                  placeholder="How can we help you scale?" 
                  className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter resize-none" 
                />
                {errors.details && <p className="text-red-500 text-xs font-semibold">{errors.details.message}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    {...register('agree')}
                    className="mt-1 rounded bg-transparent border-white/20 text-primary focus:ring-primary" 
                  />
                  <p className="text-xs text-muted font-inter leading-relaxed">
                    I agree to receive communications from OCTADECENT regarding services and growth opportunities. You can unsubscribe at any time.
                  </p>
                </div>
                {errors.agree && <p className="text-red-500 text-xs font-semibold">{errors.agree.message}</p>}
              </div>

              {submitError && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-xs font-semibold text-center">
                  {submitError}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto sm:px-10 min-h-[44px] py-4 bg-primary hover:bg-primary-dark text-white font-inter font-bold text-sm rounded-xl flex items-center justify-center gap-2 orange-glow transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer ml-auto"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Location & Contact Info (40%) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[40%] flex flex-col gap-5 sm:gap-6"
        >
          {/* Map & Location Card */}
          <div className="glass-card p-6 rounded-[2rem] flex flex-col gap-6 w-full relative overflow-hidden">
            {/* Interactive Google Map with dark styling */}
            <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden relative border border-white/5">
              <iframe
                title="OCTADECENT Office Location"
                src="https://maps.google.com/maps?q=The%20Grand%20Villa%20Apartments,%20Jeedimetla%20Pipeline%20Road,%20Hyderabad,%20Telangana%20500055,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale invert contrast-[1.2]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Company Info */}
            <div className="space-y-4 font-inter text-sm px-1">
              <div>
                <p className="text-primary font-montserrat font-bold text-base flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> OCTADECENT Private Limited
                </p>
                <p className="text-muted leading-relaxed mt-2 pl-7">
                  The Grand Villa Apartments, Flat No. 302,<br />
                  Jeedimetla Pipeline Road, Hyderabad,<br />
                  Telangana – 500055, India
                </p>
              </div>

              <div className="flex items-center gap-2 pl-1">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919398820561" className="text-muted hover:text-primary transition-colors pl-2">+91 9398820561</a>
              </div>

              <div className="flex items-center gap-2 pl-1">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:octadecent@gmail.com" className="text-muted hover:text-primary transition-colors pl-2">octadecent@gmail.com</a>
              </div>

              <div className="border-t border-white/5 pt-4">
                <p className="text-white font-bold text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Business Hours
                </p>
                <div className="text-muted text-xs mt-2 pl-6 space-y-1">
                  <p>Monday – Saturday: 10:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=The+Grand+Villa+Apartments,+Jeedimetla+Pipeline+Road,+Hyderabad,+Telangana+500055,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border border-white/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-bold rounded-xl uppercase tracking-wider text-[10px] text-center hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] cursor-pointer"
              >
                Get Directions
              </a>
              <a
                href="https://maps.google.com/?q=The+Grand+Villa+Apartments,+Jeedimetla+Pipeline+Road,+Hyderabad,+Telangana+500055,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border border-white/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-inter font-bold rounded-xl uppercase tracking-wider text-[10px] text-center hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] cursor-pointer"
              >
                Open In Maps
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Why Contact Section (4 Feature Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-16 sm:mb-24 md:mb-32">
        <h2 className="font-montserrat font-extrabold text-white text-center mb-10 sm:mb-16 text-2xl md:text-3xl lg:text-4xl">Why Partner with OCTADECENT?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {[
            { icon: ShieldCheck, title: 'Commerce Experts', desc: 'Years of experience building massive-scale e-commerce ecosystems that convert.' },
            { icon: BrainCircuit, title: 'AI & Automation', desc: 'Leverage predictive analytics and autonomous operations to outpace your competition.' },
            { icon: Laptop, title: 'End-To-End Ecosystem', desc: 'From initial code to global scaling, we provide every layer of infrastructure needed.' },
            { icon: HeartHandshake, title: 'Long-Term Partnership', desc: 'We don\'t just ship projects; we grow with you as your dedicated commerce partner.' }
          ].map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border-t-2 border-t-primary/30"
            >
              <feat.icon className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-white font-montserrat font-bold text-lg mb-3">{feat.title}</h4>
              <p className="font-inter text-sm text-muted leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 my-16 sm:my-24 md:my-32">
        <h2 className="font-montserrat font-extrabold text-white text-center mb-8 sm:mb-12 text-2xl md:text-3xl lg:text-4xl">Common Inquiries</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.q}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="p-6 flex items-center justify-between">
                <span className="text-white font-inter font-bold text-sm">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-primary transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence initial={false}>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-muted text-xs font-inter leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-16 sm:mb-24 md:mb-32">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-8 gap-x-8 sm:gap-x-12">
          {[
            'Technology Solutions',
            'Commerce Infrastructure',
            'AI Automation',
            'Marketing Growth',
            'Analytics & Insights',
            'Long-Term Partnership'
          ].map((trust) => (
            <div key={trust} className="flex items-center gap-3 group">
              <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-white font-inter text-sm font-semibold">{trust}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-16">
        <div className="relative bg-primary rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden text-center group orange-glow">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10">
            <h2 className="font-montserrat font-extrabold text-white mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Ready To Build, Grow, And Scale?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-xl font-inter font-bold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]">
                SEND MESSAGE <Mail className="w-4 h-4" />
              </Link>
              <Link href="/book-consultation" className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-inter font-bold text-sm hover:bg-black/40 hover:border-white/40 transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]">
                SCHEDULE CONSULTATION <Clock className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
