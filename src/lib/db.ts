import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src/data/leads.json');

export interface Lead {
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

export function getLeads(): Lead[] {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('[db] Error reading leads from database:', error);
    return [];
  }
}

export function saveLead(lead: Lead) {
  try {
    const leads = getLeads();
    leads.unshift(lead); // newest first
    fs.writeFileSync(DB_PATH, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('[db] Error writing lead to database:', error);
  }
}
