'use client';

import { useState, useEffect } from 'react';
import { 
  Users, Mail, Phone, Calendar, Briefcase, DollarSign, Clock, 
  MapPin, Award, Trash2, Search, Filter, RefreshCw, X, AlertCircle, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Lead {
  id: string;
  source: 'Contact Form' | 'Consultation Form';
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  projectType: string;
  budget: string;
  timeline: string;
  meetingDate: string;
  meetingTime: string;
  meetingMode: string;
  description: string;
  leadScore: number;
  submissionDate: string;
  websiteUrl?: string;
  referralSource?: string;
  utmSource?: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSource, setFilterSource] = useState<'All' | 'Contact Form' | 'Consultation Form'>('All');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      } else {
        setError(data.error || 'Failed to fetch leads');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.name.toLowerCase().includes(query) ||
      lead.company.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.service.toLowerCase().includes(query);
      
    const matchesSource = filterSource === 'All' || lead.source === filterSource;
    return matchesSearch && matchesSource;
  });

  const getScoreBadgeColor = (score: number) => {
    if (score >= 50) return 'bg-red-500/20 text-red-400 border border-red-500/30';
    if (score >= 30) return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
    return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  };

  const getScoreText = (score: number) => {
    if (score >= 50) return 'High Priority';
    if (score >= 30) return 'Medium Priority';
    return 'General Lead';
  };

  return (
    <div className="bg-[#050816] min-h-screen text-[#e3e2e2] font-inter pt-28 pb-16 px-4 sm:px-6 md:px-12 relative">
      {/* Background grids and glowing blobs */}
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Admin Area
            </div>
            <h1 className="font-montserrat font-extrabold text-3xl md:text-5xl text-white tracking-tight">
              Lead Control Center
            </h1>
            <p className="font-inter text-sm text-[#bab8b7] mt-2 leading-relaxed">
              Monitor, score, and manage all contact inquiries and strategy session requests.
            </p>
          </div>
          
          <button 
            onClick={fetchLeads}
            className="flex items-center justify-center gap-2 px-5 py-3 border border-white/10 hover:bg-white/5 font-bold text-xs rounded-xl tracking-wider uppercase transition-all duration-300 cursor-pointer self-start"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Refresh Database
          </button>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0a0d1a]/60 backdrop-blur-xl border border-white/5 p-4 rounded-2xl">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#777] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads name, company, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121414]/80 border-b border-white/10 pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-all font-inter rounded-xl"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
            <Filter className="w-4 h-4 text-primary shrink-0" />
            <select
              value={filterSource}
              onChange={(e: any) => setFilterSource(e.target.value)}
              className="bg-[#121414]/80 border-b border-white/10 p-2.5 text-xs font-bold text-white rounded-xl focus:outline-none"
            >
              <option value="All">All Form Sources</option>
              <option value="Contact Form">Contact Form Submissions</option>
              <option value="Consultation Form">Consultation Bookings</option>
            </select>
          </div>
          
          <div className="text-xs text-[#bab8b7] font-semibold ml-auto">
            Showing {filteredLeads.length} of {leads.length} Leads
          </div>
        </div>

        {/* Dashboard Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <RefreshCw className="w-12 h-12 text-primary animate-spin" />
            <p className="text-sm text-[#bab8b7] font-bold">Scanning database for submissions...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 max-w-md mx-auto">
            <AlertCircle className="w-16 h-16 text-red-500/80" />
            <h3 className="font-montserrat font-bold text-xl text-white">Data Fetch Failed</h3>
            <p className="text-sm text-[#bab8b7] leading-relaxed">{error}</p>
            <button 
              onClick={fetchLeads}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold font-inter transition-all orange-glow"
            >
              Retry Connection
            </button>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-32 bg-[#0a0d1a]/40 rounded-3xl border border-white/5 p-8 max-w-md mx-auto">
            <Users className="w-12 h-12 text-[#444] mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-lg text-white">No Leads Found</h3>
            <p className="text-xs text-[#bab8b7] leading-relaxed mt-2">
              No matching submission records were found in the local database storage.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeads.map((lead) => (
              <div 
                key={lead.id}
                className="group relative flex flex-col justify-between h-full rounded-2xl bg-[#0a0d1a]/60 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden p-6"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      lead.source === 'Consultation Form' 
                        ? 'bg-[#ff5c00]/15 text-[#ff5c00] border border-[#ff5c00]/20' 
                        : 'bg-white/5 text-white/80 border border-white/10'
                    }`}>
                      {lead.source}
                    </span>
                    {lead.source === 'Consultation Form' && (
                      <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${getScoreBadgeColor(lead.leadScore)}`}>
                        Score: {lead.leadScore} ({getScoreText(lead.leadScore)})
                      </span>
                    )}
                  </div>

                  {/* Name & Contact Info */}
                  <div className="mb-4">
                    <h3 className="font-montserrat font-bold text-lg text-white group-hover:text-primary transition-colors">
                      {lead.name}
                    </h3>
                    <p className="font-inter text-xs text-[#bab8b7] mt-0.5">
                      {lead.company}
                      {lead.source === 'Consultation Form' && lead.jobTitle && lead.jobTitle !== 'Not Provided' && (
                        <> — <span className="italic">{lead.jobTitle}</span></>
                      )}
                    </p>
                  </div>

                  {/* Meta details list (no truncation) */}
                  <div className="space-y-2 font-inter text-xs text-[#b5b5b5] pt-3 border-t border-white/5">
                    {lead.source === 'Consultation Form' ? (
                      <>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{lead.phone}</span>
                        </div>
                        {lead.country && lead.country !== 'Not Provided' && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{lead.country}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{lead.service} — <span className="text-white/60 font-semibold">{lead.projectType}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[#ff5c00] font-bold">{lead.budget}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>Deadline: {lead.timeline}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>Name: {lead.name}</div>
                        <div>Email: {lead.email}</div>
                        <div>Phone: {lead.phone}</div>
                        <div>Company: {lead.company}</div>
                        <div>Service: {lead.service}</div>
                        <div>Budget: {lead.budget}</div>
                        <div>Timeline: {lead.timeline}</div>
                      </>
                    )}
                  </div>

                  {/* Description Box */}
                  <div className="mt-4 p-3 rounded-lg bg-[#121414] border border-white/5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#666] mb-1">Project Brief</p>
                    <p className="font-inter text-xs text-[#b5b5b5] line-clamp-3 leading-relaxed whitespace-pre-wrap">{lead.description}</p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedLead(lead)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-primary hover:border-primary font-bold text-xs tracking-wide transition-all duration-300 uppercase cursor-pointer text-white"
                  >
                    View Full Lead Details <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Glassmorphic Modal for Full Lead Details */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111318] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8"
            >
              <button 
                onClick={() => setSelectedLead(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#bab8b7] hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedLead.source === 'Contact Form' ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-montserrat font-extrabold text-2xl text-white tracking-tight border-b border-white/5 pb-4">
                      NEW CONTACT INQUIRY
                    </h2>
                  </div>

                  <div className="bg-[#161922] border border-white/5 rounded-xl p-6 font-mono text-sm text-[#e3e2e2] whitespace-pre-wrap leading-relaxed">
{`NEW CONTACT INQUIRY

Name: ${selectedLead.name}
Email: ${selectedLead.email}
Phone: ${selectedLead.phone}
Company: ${selectedLead.company}
Service: ${selectedLead.service}
Budget: ${selectedLead.budget}
Timeline: ${selectedLead.timeline}

Project Details:
${selectedLead.description}

Submitted At: ${selectedLead.submissionDate}`}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-montserrat font-extrabold text-2xl text-white tracking-tight border-b border-white/5 pb-4">
                      NEW LEAD RECEIVED
                    </h2>
                  </div>

                  <div className="bg-[#161922] border border-white/5 rounded-xl p-6 font-mono text-sm text-[#e3e2e2] whitespace-pre-wrap leading-relaxed">
{`NEW LEAD RECEIVED

Contact Information
Name: ${selectedLead.name}
Company: ${selectedLead.company}
Job Title: ${selectedLead.jobTitle}
Email: ${selectedLead.email}
Phone: ${selectedLead.phone}
Country: ${selectedLead.country}

Project Information
Service: ${selectedLead.service}
Project Type: ${selectedLead.projectType}
Budget: ${selectedLead.budget}
Timeline / Deadline: ${selectedLead.timeline}

Meeting Information
Meeting Date: ${selectedLead.meetingDate}
Meeting Time: ${selectedLead.meetingTime}
Meeting Mode: ${selectedLead.meetingMode}

Project Description
Description: ${selectedLead.description}

Lead Information
Lead Score: ${selectedLead.leadScore}
Submission Date: ${selectedLead.submissionDate}`}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
