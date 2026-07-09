import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { saveLead, Lead } from '@/lib/db';
import { formatLeadText } from '@/lib/leadFormatter';

// ─── Types ───────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
  agree: boolean;
}

const calculateLeadScore = (budget: string, service: string, details: string) => {
  let score = 0;
  if (budget.includes('$100k')) score += 50;
  else if (budget.includes('$25k')) score += 35;
  else if (budget.includes('$10k')) score += 20;

  if (service.includes('AI') || service.includes('E-Commerce') || service.includes('SaaS')) score += 25;
  if (details.length > 50) score += 15;
  return score;
};

// ─── POST Handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const data: ContactPayload = await request.json();

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lead: Lead = {
      id: Math.random().toString(36).substring(2, 11),
      source: 'Contact Form',
      name: data.name || 'Not Provided',
      company: data.company || 'Not Provided',
      jobTitle: 'Not Provided',
      email: data.email || 'Not Provided',
      phone: data.phone || 'Not Provided',
      country: 'Not Provided',
      service: data.service || 'Not Provided',
      projectType: 'Not Provided',
      budget: data.budget || 'Not Provided',
      timeline: data.timeline || 'Not Provided',
      meetingDate: 'Not Scheduled',
      meetingTime: 'Not Scheduled',
      meetingMode: 'Not Scheduled',
      description: data.details || 'Not Provided',
      leadScore: 0,
      submissionDate: submittedAt,
      referralSource: 'Not Provided',
      utmSource: 'direct'
    };

    // ── Save to Database ─────────────────────────────────────────────────────
    saveLead(lead);

    const plainTextNotification = `NEW CONTACT INQUIRY

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
Company: ${lead.company}
Service: ${lead.service}
Budget: ${lead.budget}
Timeline: ${lead.timeline}

Project Details:
${lead.description}

Submitted At: ${lead.submissionDate}`;

    // ── 1. Send Email via Gmail SMTP ─────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"OCTADECENT Forms" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `NEW CONTACT INQUIRY - ${lead.name}`,
      text: plainTextNotification,
      html: `<pre style="font-family: inherit; font-size: 14px; white-space: pre-wrap; line-height: 1.5; color: #d3d3d3; margin: 0; padding: 0; background: none; border: none;">${plainTextNotification}</pre>`,
    });

    // ── 2. Build wa.me WhatsApp URL ──────────────────────────────────────────
    const waMessage = encodeURIComponent(plainTextNotification);
    const adminPhone = process.env.ADMIN_WHATSAPP || '919398820561';
    const waUrl = `https://wa.me/${adminPhone}?text=${waMessage}`;

    return Response.json({ success: true, waUrl }, { status: 200 });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[contact-notification] Error:', message);
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
