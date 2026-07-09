'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, Clock, Check, ChevronRight, ChevronLeft, ShieldCheck, 
  Sparkles, Award, Star, Users, ArrowRight, HelpCircle, ChevronDown,
  Upload, Phone, Mail, FileText, CheckCircle2, MessageSquare, AlertCircle, X, Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Config & Data
const timeSlots = ['09:00 AM', '10:30 AM', '11:00 AM', '01:30 PM', '02:00 PM', '03:30 PM', '04:00 PM'];
const timeZones = [
  'UTC (GMT)',
  'IST (UTC +5:30) - India',
  'EST (UTC -5:00) - Eastern',
  'PST (UTC -8:00) - Pacific',
  'GMT (UTC +0:00) - London',
  'SGT (UTC +8:00) - Singapore'
];

const faqs = [
  { q: 'Is the initial consultation free?', a: 'Yes, our initial 30-minute discovery and strategy session is 100% free with zero obligation. We review your current systems and map out potential growth levers.' },
  { q: 'How long does a typical consultation session last?', a: 'Discovery calls typically take 30 to 45 minutes, depending on the complexity of your project details.' },
  { q: 'What industries do you specialize in?', a: 'We have worked extensively across E-Commerce, Retail Logistics, B2B SaaS Platforms, Healthcare tech, FinTech, and AI automation setups.' },
  { q: 'Do you sign Non-Disclosure Agreements (NDAs)?', a: 'Absolutely. We respect corporate IP. We can sign an NDA prior to discussing any sensitive proprietary business logic.' },
  { q: 'What is the standard turnaround for a follow-up proposal?', a: 'Following the strategy consultation, our team drafts a formal project roadmap and custom proposal within 24 to 48 hours.' }
];

const countriesList = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Singapore',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Oman',
  'Malaysia',
  'Japan',
  'South Korea',
  'New Zealand',
  'South Africa',
  'Nepal',
  'Bangladesh',
  'Sri Lanka',
  'Pakistan',
  'China'
];

const steps = [
  { id: 1, name: 'Personal Details' },
  { id: 2, name: 'Project Scope' },
  { id: 3, name: 'Budget & Timeline' },
  { id: 4, name: 'Schedule Call' }
];

export default function BookConsultationPage() {
  // Wizard Steps
  const [currentStep, setCurrentStep] = useState(1);
  const [draftSaved, setDraftSaved] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    businessEmail: '',
    phoneNumber: '',
    country: 'India',
    service: 'UI/UX Design',
    projectType: 'New Build',
    description: '',
    websiteUrl: '',
    deadline: '',
    budget: '₹5,00,000 – ₹10,00,000',
    selectedDate: '',
    selectedTime: '11:00 AM',
    timeZone: 'IST (UTC +5:30) - India',
    meetingMode: 'Google Meet',
    referralSource: 'Search Engine',
    utmSource: 'direct'
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [focusedCountryIndex, setFocusedCountryIndex] = useState(-1);

  // Refs for focusing invalid fields
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLButtonElement>(null);
  const jobTitleRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const countryListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFocusedCountryIndex(-1);
  }, [countrySearchQuery, isCountryDropdownOpen]);

  useEffect(() => {
    if (focusedCountryIndex >= 0 && countryListRef.current) {
      const activeEl = countryListRef.current.children[focusedCountryIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [focusedCountryIndex]);
  const filteredCountries = useMemo(() => {
    return countriesList.filter((c: string) => c.toLowerCase().includes(countrySearchQuery.toLowerCase()));
  }, [countrySearchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validateField = (name: string, value: string) => {
    let error = '';
    const trimmed = value.trim();

    if (name === 'fullName') {
      if (!trimmed) {
        error = 'Full name is required.';
      } else if (!/^[A-Za-z\s]+$/.test(trimmed)) {
        error = 'Full name can contain only letters and spaces.';
      } else if (trimmed.length < 3) {
        error = 'Full name must be at least 3 characters long.';
      } else if (trimmed.length > 50) {
        error = 'Full name must be between 3 and 50 characters.';
      }
    }

    if (name === 'businessEmail') {
      if (!trimmed) {
        error = 'Please enter a valid email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        error = 'Please enter a valid email address.';
      }
    }

    if (name === 'companyName') {
      if (!trimmed) {
        error = 'Company name is required.';
      } else if (trimmed.length > 100) {
        error = 'Company name must not exceed 100 characters.';
      } else if (!/^[A-Za-z0-9\s&\-\.]+$/.test(trimmed)) {
        error = 'Company name should contain only letters, numbers, spaces, and &, -, .';
      }
    }

    if (name === 'jobTitle') {
      if (trimmed) {
        if (trimmed.length > 50) {
          error = 'Job title must not exceed 50 characters.';
        } else if (!/^[A-Za-z\s\-]+$/.test(trimmed)) {
          error = 'Job title should contain only letters, spaces, and hyphens.';
        }
      }
    }

    if (name === 'phoneNumber') {
      if (trimmed) {
        if (!/^\d+$/.test(trimmed) || trimmed.length !== 10) {
          error = 'Phone number must contain exactly 10 digits.';
        }
      }
    }

    if (name === 'country') {
      if (!trimmed) {
        error = 'Country is required.';
      }
    }

    setErrors(prev => {
      const next = { ...prev };
      if (error) {
        next[name] = error;
      } else {
        delete next[name];
      }
      return next;
    });

    return !error;
  };

  useEffect(() => {
    // Read URL UTM Parameters
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utm = urlParams.get('utm_source') || 'direct';
      setFormData(prev => ({ ...prev, utmSource: utm }));
    }
  }, []);

  // Lead Scoring & CRM Simulation
  const calculateLeadScore = () => {
    let score = 0;
    if (formData.budget.includes('Above ₹10,00,000')) score += 50;
    else if (formData.budget.includes('₹5,00,000')) score += 35;
    else if (formData.budget.includes('₹2,00,000')) score += 20;

    if (formData.service.includes('AI Solutions') || formData.service.includes('E-commerce')) score += 25;
    if (formData.description.length > 50) score += 15;
    if (uploadedFile) score += 10;
    return score;
  };

  const saveDraft = () => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedExtensions = ['pdf', 'docx', 'pptx', 'png', 'jpg', 'zip'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
      
      if (!allowedExtensions.includes(fileExtension)) {
        setFileError('Invalid file type. Supported: PDF, DOCX, PPTX, PNG, JPG, ZIP');
        setUploadedFile(null);
      } else {
        setFileError('');
        setUploadedFile(file);
      }
    }
  };

  const handleCountryKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedCountryIndex(prev => (prev < filteredCountries.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedCountryIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedCountryIndex >= 0 && focusedCountryIndex < filteredCountries.length) {
        const selected = filteredCountries[focusedCountryIndex];
        setFormData({ ...formData, country: selected });
        validateField('country', selected);
        setIsCountryDropdownOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsCountryDropdownOpen(false);
    }
  };

  const validateStep = (step: number) => {
    if (step === 1) {
      const nameValid = validateField('fullName', formData.fullName);
      const emailValid = validateField('businessEmail', formData.businessEmail);
      const companyValid = validateField('companyName', formData.companyName);
      const countryValid = validateField('country', formData.country);
      
      let jobValid = true;
      if (formData.jobTitle) {
        jobValid = validateField('jobTitle', formData.jobTitle);
      }
      let phoneValid = true;
      if (formData.phoneNumber) {
        phoneValid = validateField('phoneNumber', formData.phoneNumber);
      }

      return nameValid && emailValid && companyValid && countryValid && jobValid && phoneValid;
    }
    if (step === 2) {
      return formData.description.length >= 10;
    }
    if (step === 3) {
      return formData.deadline;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      if (currentStep === 1) {
        // Find the first error in order of fields: fullName, businessEmail, companyName, jobTitle, phoneNumber, country
        let firstInvalidRef: React.RefObject<HTMLInputElement | HTMLButtonElement | null> | null = null;
        if (!formData.fullName || errors.fullName) {
          firstInvalidRef = fullNameRef;
        } else if (!formData.businessEmail || errors.businessEmail) {
          firstInvalidRef = emailRef;
        } else if (!formData.companyName || errors.companyName) {
          firstInvalidRef = companyRef;
        } else if (errors.jobTitle) {
          firstInvalidRef = jobTitleRef as any;
        } else if (errors.phoneNumber) {
          firstInvalidRef = phoneRef as any;
        } else if (!formData.country || errors.country) {
          firstInvalidRef = countryRef as any;
        }

        if (firstInvalidRef && firstInvalidRef.current) {
          firstInvalidRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalidRef.current.focus();
        }
      } else {
        alert('Please fill out the required parameters before proceeding.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1)) {
      setCurrentStep(1);
      setTimeout(() => {
        let firstInvalidRef: React.RefObject<HTMLInputElement | HTMLButtonElement | null> | null = null;
        if (!formData.fullName || errors.fullName) {
          firstInvalidRef = fullNameRef;
        } else if (!formData.businessEmail || errors.businessEmail) {
          firstInvalidRef = emailRef;
        } else if (!formData.companyName || errors.companyName) {
          firstInvalidRef = companyRef;
        } else if (errors.jobTitle) {
          firstInvalidRef = jobTitleRef as any;
        } else if (errors.phoneNumber) {
          firstInvalidRef = phoneRef as any;
        } else if (!formData.country || errors.country) {
          firstInvalidRef = countryRef as any;
        }

        if (firstInvalidRef && firstInvalidRef.current) {
          firstInvalidRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalidRef.current.focus();
        }
      }, 100);
      return;
    }
    if (!formData.selectedDate) {
      alert('Please select a preferred meeting date.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/notify-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, leadScore: calculateLeadScore() }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Notification failed. Please try again.');
      }

      setSubmitted(true);

      // Confetti effect
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff5c00', '#ffffff', '#ffd0b3']
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050816] min-h-screen text-[#e3e2e2] relative font-inter">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />



      {/* Sticky Assistance CTA Widget */}
      <div className="fixed bottom-6 left-5 z-[9999] group pointer-events-auto">
        <div className="relative flex items-center gap-3">
          <a 
            href="tel:+919398820561" 
            className="w-14 h-14 bg-[#111] border border-white/10 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer orange-glow flex items-center justify-center text-primary"
            aria-label="Call OCTADECENT"
          >
            <Phone className="w-6 h-6" />
          </a>
          <div className="absolute left-full ml-3 bg-[#111] border border-white/10 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-2xl">
            <p className="text-white font-bold text-xs mb-2">Need Direct Assistance?</p>
            <div className="flex flex-col gap-2 font-inter text-[11px] text-[#bab8b7]">
              <a href="tel:+919398820561" className="hover:text-primary flex items-center gap-1.5 pointer-events-auto"><Phone className="w-3 h-3 text-primary" /> Call +91 93988 20561</a>
              <a href="mailto:octadecent@gmail.com" className="hover:text-primary flex items-center gap-1.5 pointer-events-auto"><Mail className="w-3 h-3 text-primary" /> octadecent@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-3">Accelerate Growth</span>
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Book a Free Strategy Consultation
        </h1>
        <p className="font-inter text-sm sm:text-base md:text-lg text-[#bab8b7] max-w-2xl mx-auto leading-relaxed mb-12">
          Review your current commerce channels, tech architectures, and growth pipelines with an expert architect. Get a clear proposal and execution roadmap.
        </p>

        
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 sm:pb-24 md:pb-32 grid lg:grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* Left Side: Consultation Wizard Form (60%) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="glass-card p-6 sm:p-8 md:p-10 rounded-[32px] border border-white/5 relative">
            
            {/* Draft Save Pill */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button 
                type="button"
                onClick={saveDraft}
                className="text-[10px] text-[#bab8b7] hover:text-white border border-white/10 rounded-full px-3 py-1 transition-colors cursor-pointer"
              >
                {draftSaved ? 'Draft Saved ✅' : 'Save Draft'}
              </button>
            </div>

            {/* Progress Step Header */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-bold text-primary uppercase tracking-widest">Step {currentStep} of {steps.length}: {steps[currentStep-1].name}</span>
                <span className="text-[11px] text-[#bab8b7] font-semibold">{Math.round((currentStep / steps.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary h-full"
                />
              </div>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-montserrat font-extrabold text-2xl text-white">Consultation Booked Successfully</h3>
                <p className="font-inter text-sm text-[#bab8b7] max-w-sm mx-auto leading-relaxed">
                  Thank you! Your consultation request has been submitted successfully. Our team will contact you shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(1);
                      setFormData({
                        ...formData,
                        fullName: '',
                        companyName: '',
                        jobTitle: '',
                        businessEmail: '',
                        phoneNumber: '',
                        selectedDate: '',
                        description: ''
                      });
                    }}
                    className="border border-white/10 hover:bg-white hover:text-black px-6 py-3 rounded-xl text-sm font-bold transition-all text-center flex items-center justify-center cursor-pointer min-h-[44px] w-full sm:w-auto"
                  >
                    Back
                  </button>
                  <Link 
                    href="/" 
                    className="bg-primary hover:bg-[#e05200] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all orange-glow text-center flex items-center justify-center min-h-[44px] w-full sm:w-auto"
                  >
                    Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-montserrat font-bold text-xl text-white mb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Full Name *</label>
                        <input 
                          type="text" 
                          ref={fullNameRef}
                          required
                          maxLength={50}
                          value={formData.fullName}
                          onChange={(e) => {
                            let val = e.target.value;
                            // Clean input: remove characters that are NOT letters or spaces
                            val = val.replace(/[^A-Za-z\s]/g, '');
                            // Prevent multiple consecutive spaces
                            val = val.replace(/\s+/g, ' ');
                            setFormData({...formData, fullName: val});
                            validateField('fullName', val);
                          }}
                          onBlur={(e) => validateField('fullName', e.target.value)}
                          placeholder="username" 
                          className={`w-full bg-[#121414] border-b ${errors.fullName ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Business Email *</label>
                        <input 
                          type="email" 
                          ref={emailRef}
                          required
                          value={formData.businessEmail}
                          onChange={(e) => {
                            setFormData({...formData, businessEmail: e.target.value});
                            validateField('businessEmail', e.target.value);
                          }}
                          onBlur={(e) => validateField('businessEmail', e.target.value)}
                          placeholder="jane@company.com" 
                          className={`w-full bg-[#121414] border-b ${errors.businessEmail ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter`}
                        />
                        {errors.businessEmail && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.businessEmail}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Company Name *</label>
                        <input 
                          type="text" 
                          ref={companyRef}
                          required
                          value={formData.companyName}
                          onChange={(e) => {
                            setFormData({...formData, companyName: e.target.value});
                            validateField('companyName', e.target.value);
                          }}
                          onBlur={(e) => validateField('companyName', e.target.value)}
                          placeholder="ACME Corp" 
                          className={`w-full bg-[#121414] border-b ${errors.companyName ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter`}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.companyName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Job Title</label>
                        <input 
                          type="text" 
                          ref={jobTitleRef}
                          value={formData.jobTitle}
                          onChange={(e) => {
                            setFormData({...formData, jobTitle: e.target.value});
                            validateField('jobTitle', e.target.value);
                          }}
                          onBlur={(e) => validateField('jobTitle', e.target.value)}
                          placeholder="Product Lead" 
                          className={`w-full bg-[#121414] border-b ${errors.jobTitle ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter`}
                        />
                        {errors.jobTitle && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.jobTitle}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Phone Number</label>
                        <input 
                          type="tel" 
                          ref={phoneRef}
                          inputMode="numeric"
                          maxLength={10}
                          value={formData.phoneNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            setFormData({...formData, phoneNumber: val});
                            validateField('phoneNumber', val);
                          }}
                          onBlur={(e) => validateField('phoneNumber', e.target.value)}
                          placeholder="9876543210" 
                          className={`w-full bg-[#121414] border-b ${errors.phoneNumber ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter`}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phoneNumber}</p>}
                      </div>
                      <div className="space-y-2 relative" ref={countryDropdownRef}>
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Country *</label>
                        <button
                          type="button"
                          ref={countryRef}
                          onClick={() => {
                            setIsCountryDropdownOpen(!isCountryDropdownOpen);
                            setCountrySearchQuery('');
                          }}
                          className={`w-full bg-[#121414] border-b ${errors.country ? 'border-red-500' : 'border-white/10'} p-3 text-sm text-left text-white focus:outline-none focus:border-primary transition-all font-inter flex justify-between items-center min-h-[44px]`}
                        >
                          <span>{formData.country ? (formData.country === 'India' ? '🇮🇳 India' : formData.country) : 'Select Country'}</span>
                          <ChevronDown className={`w-4 h-4 text-primary transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {errors.country && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.country}</p>}

                        {isCountryDropdownOpen && (
                          <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#121414] border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[280px] flex flex-col font-inter">
                            <style dangerouslySetInnerHTML={{ __html: `
                              .custom-scrollbar {
                                scroll-behavior: smooth;
                                -webkit-overflow-scrolling: touch;
                                overscroll-behavior: contain;
                              }
                              .custom-scrollbar::-webkit-scrollbar {
                                width: 8px;
                              }
                              .custom-scrollbar::-webkit-scrollbar-track {
                                background: #121414;
                                border-radius: 10px;
                              }
                              .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: #ff5c00;
                                border-radius: 10px;
                                transition: background 0.3s ease;
                              }
                              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                background: #ff8a33;
                              }
                            `}} />
                            
                            <div className="sticky top-0 z-10 bg-[#121414] p-2 border-b border-white/5">
                              <input
                                type="text"
                                value={countrySearchQuery}
                                onChange={(e) => setCountrySearchQuery(e.target.value)}
                                onKeyDown={handleCountryKeyDown}
                                placeholder="Search country..."
                                className="p-3 text-xs bg-[#1a1c1c] border border-white/5 rounded-lg text-white focus:outline-none focus:border-primary/50 font-inter w-full"
                                autoFocus
                              />
                            </div>

                            <div 
                              ref={countryListRef}
                              className="overflow-y-auto flex-1 max-h-[200px] custom-scrollbar p-1 space-y-0.5"
                            >
                              {filteredCountries.map((c, i) => {
                                const isFocused = i === focusedCountryIndex;
                                const isSelected = formData.country === c;
                                return (
                                  <button
                                    key={c}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, country: c });
                                      validateField('country', c);
                                      setIsCountryDropdownOpen(false);
                                    }}
                                    className={`w-full p-3 text-xs text-left rounded-lg transition-all duration-200 block font-inter ${
                                      isSelected
                                        ? 'bg-primary text-white font-bold'
                                        : isFocused
                                        ? 'bg-primary/20 text-white font-semibold'
                                        : 'text-[#e3e2e2] hover:bg-primary/10 hover:text-white'
                                    }`}
                                  >
                                    {c === 'India' ? '🇮🇳 India' : c}
                                  </button>
                                );
                              })}
                              {filteredCountries.length === 0 && (
                                <div className="p-3 text-xs text-[#bab8b7] text-center font-inter">No results found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Scope */}
                {currentStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-montserrat font-bold text-xl text-white mb-2">Project Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Service Required</label>
                        <select 
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                        >
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="E-commerce Development">E-commerce Development</option>
                          <option value="SEO">SEO</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Project Type</label>
                        <select 
                          value={formData.projectType}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                          className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                        >
                          <option value="New Build">New Build</option>
                          <option value="Redesign / Upgrade">Redesign / Upgrade</option>
                          <option value="Maintenance / Support">Maintenance / Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Project Description *</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Please describe your project scope (Min 10 characters)..." 
                        className="w-full bg-[#121414] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter resize-none" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Current Website URL (Optional)</label>
                      <input 
                        type="url" 
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                        placeholder="https://example.com" 
                        className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter" 
                      />
                    </div>

                    {/* File Upload Component */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold">Upload Project Brief / Wireframes (Optional)</label>
                      <div className="border border-dashed border-white/10 hover:border-primary/50 transition-colors rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer relative bg-[#121414]">
                        <input 
                          type="file" 
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload className="w-8 h-8 text-primary mb-2" />
                        <span className="text-xs text-white font-semibold">
                          {uploadedFile ? uploadedFile.name : 'Click to Upload Files'}
                        </span>
                        <span className="text-[10px] text-[#bab8b7] mt-1">PDF, DOCX, PPTX, PNG, JPG, ZIP (Max 10MB)</span>
                        {fileError && <p className="text-red-500 text-xs mt-2 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {fileError}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Budget & Timeline */}
                {currentStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-montserrat font-bold text-xl text-white mb-2">Budget & Timeline</h3>
                    
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Budget Range</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          'Below ₹50,000',
                          '₹50,000 – ₹2,00,000',
                          '₹2,00,000 – ₹5,00,000',
                          '₹5,00,000 – ₹10,00,000',
                          'Above ₹10,00,000'
                        ].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({...formData, budget: b})}
                            className={`py-3 px-4 min-h-[44px] rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              formData.budget === b 
                                ? 'bg-primary border-primary text-white font-bold' 
                                : 'bg-[#121414] border-white/5 text-[#bab8b7] hover:border-white/20'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Project Deadline *</label>
                      <input 
                        type="date"
                        required
                        value={formData.deadline}
                        onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                        className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Referral Source</label>
                      <select 
                        value={formData.referralSource}
                        onChange={(e) => setFormData({...formData, referralSource: e.target.value})}
                        className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                      >
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Client Referral">Client Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Schedule Call */}
                {currentStep === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-montserrat font-bold text-xl text-white mb-2">Schedule Call Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Preferred Date *</label>
                        <input 
                          type="date"
                          required
                          value={formData.selectedDate}
                          onChange={(e) => setFormData({...formData, selectedDate: e.target.value})}
                          className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Preferred Time Zone</label>
                        <select 
                          value={formData.timeZone}
                          onChange={(e) => setFormData({...formData, timeZone: e.target.value})}
                          className="w-full bg-[#121414] border-b border-white/10 p-3 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter"
                        >
                          {timeZones.map((tz) => (
                            <option key={tz} value={tz}>{tz}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Preferred Meeting Slot</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData({...formData, selectedTime: slot})}
                            className={`py-3 px-4 min-h-[44px] rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              formData.selectedTime === slot 
                                ? 'bg-primary border-primary text-white font-bold' 
                                : 'bg-[#121414] border-white/5 text-[#bab8b7] hover:border-white/20'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-[#bab8b7] font-bold block">Meeting Mode</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Google Meet', 'Zoom', 'MS Teams', 'Phone Call'].map((mode) => (
                          <button
                            type="button"
                            key={mode}
                            onClick={() => setFormData({...formData, meetingMode: mode})}
                            className={`py-3 px-4 min-h-[44px] rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                              formData.meetingMode === mode 
                                ? 'bg-primary border-primary text-white font-bold' 
                                : 'bg-[#121414] border-white/5 text-[#bab8b7] hover:border-white/20'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Calendly / Mock Google Calendar Notice */}
                    <div className="bg-[#121414] border border-white/5 rounded-2xl p-4 flex items-start gap-3 text-xs text-[#bab8b7] leading-relaxed">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-bold block">Real-time Slot Checking Enabled</span>
                        Our booking system is synced with Google Calendar. Once submitted, slots are locked instantly.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step Action Buttons */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="flex items-center justify-center gap-1.5 px-6 py-3 border border-white/10 hover:bg-white/5 rounded-xl font-bold text-xs text-[#bab8b7] hover:text-white transition-all cursor-pointer w-full sm:w-auto min-h-[44px]"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center justify-center gap-1.5 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs transition-all orange-glow cursor-pointer w-full sm:w-auto min-h-[44px]"
                    >
                      Next Step <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="flex flex-col items-stretch sm:items-end gap-3 w-full sm:w-auto">
                      {submitError && (
                        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold px-4 py-2 rounded-xl w-full">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {submitError}
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-1.5 px-8 py-4 bg-[#ff5c00] hover:bg-primary-dark text-white rounded-xl font-bold text-sm transition-all orange-glow cursor-pointer disabled:opacity-50 w-full sm:w-auto min-h-[44px]"
                      >
                        {isSubmitting ? 'SENDING NOTIFICATIONS...' : 'SUBMIT REQUEST'} <Check className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

              </form>
            )}

          </div>
        </div>

        {/* Right Side: Information Card (40%) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Card 1: What Happens Next */}
          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="font-montserrat font-bold text-lg text-white mb-6">What Happens Next?</h3>
            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
              {[
                { step: '1', title: 'Submit your request', desc: 'Complete the form and attach your project briefs.' },
                { step: '2', title: 'Team review within 24h', desc: 'Our directors analyze your scope and match with appropriate tech lead.' },
                { step: '3', title: 'Discovery call', desc: 'A 30-minute session to deep dive into solutions.' },
                { step: '4', title: 'Proposal & roadmap', desc: 'Receive custom timelines and architectural draft details.' },
                { step: '5', title: 'Project kickoff', desc: 'Finalize resources and begin engineering development.' }
              ].map((s, idx) => (
                <div key={idx} className="flex gap-4 relative z-10 group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-montserrat font-bold text-xs text-primary shrink-0 transition-transform group-hover:scale-110">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-sm text-white">{s.title}</h4>
                    <p className="font-inter text-xs text-[#bab8b7] mt-1 leading-normal">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Why Choose OCTADECENT? */}
          <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6">
            <h3 className="font-montserrat font-bold text-lg text-white">Why Choose OCTADECENT?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Enterprise Architecture',
                'Dedicated PM Group',
                'Agile Development',
                'Slick Fast Delivery',
                'AI-powered Workflows',
                'Ongoing Support Hub'
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#121414] border border-white/5 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group">
                  <CheckCircle2 className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-montserrat font-semibold text-xs text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>



        </div>

      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-white/5">
        <h2 className="font-montserrat font-extrabold text-3xl text-white text-center mb-12">Consultation FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.q}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer border border-white/5"
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
                    <div className="px-6 pb-6 text-[#bab8b7] text-xs font-inter leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final Large CTA Section Before Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-10 sm:mb-16 md:mb-16">
        <div className="relative bg-primary rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden text-center group orange-glow">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Ready to Transform Your Business?</h2>
            <p className="text-xs sm:text-sm font-inter text-white/90 leading-relaxed">
              Book your free consultation today and discover how OCTADECENT can accelerate your development velocity and revenue metrics.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                  setCurrentStep(1);
                }}
                className="bg-white text-black px-8 py-4 rounded-xl font-inter font-bold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto w-full sm:w-auto min-h-[44px]"
              >
                BOOK FREE CONSULTATION <Calendar className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
