import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { saveLead, Lead } from '@/lib/db';

// ─── Types ───────────────────────────────────────────────────────────────────
interface ConsultationPayload {
  fullName: string;
  companyName: string;
  jobTitle: string;
  businessEmail: string;
  phoneNumber: string;
  country: string;
  service: string;
  projectType: string;
  description: string;
  websiteUrl: string;
  deadline: string;
  budget: string;
  selectedDate: string;
  selectedTime: string;
  timeZone: string;
  meetingMode: string;
  referralSource: string;
  utmSource: string;
  leadScore?: number;
}

// ─── Server-side WhatsApp delivery helper ─────────────────────────────────────
async function sendWhatsAppServerSide(lead: Lead, msgText: string) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || process.env.ADMIN_WHATSAPP || '919398820561';
  
  // 1. Try WhatsApp Business Cloud API
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (accessToken && phoneNumberId) {
    try {
      const response = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: whatsappNumber,
          type: 'text',
          text: { body: msgText }
        })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('[WhatsApp Cloud API] Message sent successfully:', data);
        return true;
      }
      console.error('[WhatsApp Cloud API] Error response:', data);
    } catch (err) {
      console.error('[WhatsApp Cloud API] Exception:', err);
    }
  }

  // 2. Try Twilio WhatsApp API
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioSender = process.env.TWILIO_SENDER_NUMBER || 'whatsapp:+14155238886';
  if (twilioSid && twilioAuthToken) {
    try {
      const auth = Buffer.from(`${twilioSid}:${twilioAuthToken}`).toString('base64');
      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          From: twilioSender,
          To: `whatsapp:+${whatsappNumber.replace('+', '')}`,
          Body: msgText
        })
      });
      const data = await response.json();
      if (response.ok) {
        console.log('[Twilio WhatsApp] Message sent successfully:', data.sid);
        return true;
      }
      console.error('[Twilio WhatsApp] Error response:', data);
    } catch (err) {
      console.error('[Twilio WhatsApp] Exception:', err);
    }
  }

  console.log('[WhatsApp Service] No server-side API credentials matched. Skipping API message delivery.');
  return false;
}

// ─── POST Handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const data: ConsultationPayload = await request.json();

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lead: Lead = {
      id: Math.random().toString(36).substring(2, 11),
      source: 'Consultation Form',
      name: data.fullName || 'Not Provided',
      company: data.companyName || 'Not Provided',
      jobTitle: data.jobTitle || 'Not Provided',
      email: data.businessEmail || 'Not Provided',
      phone: data.phoneNumber || 'Not Provided',
      country: data.country || 'Not Provided',
      service: data.service || 'Not Provided',
      projectType: data.projectType || 'Not Provided',
      budget: data.budget || 'Not Provided',
      timeline: data.deadline || 'Not Provided',
      meetingDate: data.selectedDate || 'Not Scheduled',
      meetingTime: `${data.selectedTime || 'Not Scheduled'} (${data.timeZone || 'IST'})`,
      meetingMode: data.meetingMode || 'Not Scheduled',
      description: data.description || 'Not Provided',
      leadScore: data.leadScore ?? 0,
      submissionDate: submittedAt,
      websiteUrl: data.websiteUrl || 'Not Provided',
      referralSource: data.referralSource || 'Not Provided',
      utmSource: data.utmSource || 'direct'
    };

    // Save to Database
    saveLead(lead);

    // Build plain text message for notifications
    const notificationText = `📩 New Book Consultation Request

👤 Name:
${lead.name}

🏢 Company:
${lead.company}

📧 Email:
${lead.email}

📱 Phone:
${lead.phone}

🌍 Country:
${lead.country}

💼 Project Type:
${lead.projectType}

🛠 Services:
${lead.service}

💰 Budget:
${lead.budget}

📅 Deadline:
${lead.timeline}

⏰ Meeting:
${lead.meetingTime} via ${lead.meetingMode}

🔍 Referral:
${lead.referralSource}

📝 Description:
${lead.description}

⏰ Submitted:
${lead.submissionDate}`;

    // ── 1. Send Email via SMTP ───────────────────────────────────────────────
    try {
      const smtpHost = process.env.SMTP_HOST || '';
      const smtpPort = parseInt(process.env.SMTP_PORT || '587');
      const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || '';
      const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';
      const recipient = process.env.CONSULTATION_EMAIL || process.env.ADMIN_EMAIL || 'contact@octadecent.com';

      if (smtpUser && smtpPass) {
        let transporter;
        if (smtpHost) {
          transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });
        } else {
          transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });
        }

        const htmlTemplate = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; background-color: #050816; color: #e3e2e2; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background-color: #121414; padding: 30px; border-radius: 16px; border: 1px solid #ff5c00; }
              h2 { color: #ff5c00; margin-bottom: 20px; }
              table { width: 100%; border-collapse: collapse; margin-top: 15px; }
              td { padding: 10px; border-bottom: 1px solid #1c1c1c; }
              .label { font-weight: bold; color: #bab8b7; width: 150px; }
              .value { color: #ffffff; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Consultation Request</h2>
              <table>
                <tr><td class="label">Full Name:</td><td class="value">${lead.name}</td></tr>
                <tr><td class="label">Business Email:</td><td class="value">${lead.email}</td></tr>
                <tr><td class="label">Company:</td><td class="value">${lead.company}</td></tr>
                <tr><td class="label">Job Title:</td><td class="value">${lead.jobTitle}</td></tr>
                <tr><td class="label">Phone:</td><td class="value">${lead.phone}</td></tr>
                <tr><td class="label">Country:</td><td class="value">${lead.country}</td></tr>
                <tr><td class="label">Project Type:</td><td class="value">${lead.projectType}</td></tr>
                <tr><td class="label">Services:</td><td class="value">${lead.service}</td></tr>
                <tr><td class="label">Budget:</td><td class="value">${lead.budget}</td></tr>
                <tr><td class="label">Project Deadline:</td><td class="value">${lead.timeline}</td></tr>
                <tr><td class="label">Meeting Time:</td><td class="value">${lead.meetingTime}</td></tr>
                <tr><td class="label">Meeting Mode:</td><td class="value">${lead.meetingMode}</td></tr>
                <tr><td class="label">Referral Source:</td><td class="value">${lead.referralSource}</td></tr>
                <tr><td class="label">Project Description:</td><td class="value">${lead.description}</td></tr>
                <tr><td class="label">Submitted On:</td><td class="value">${lead.submissionDate}</td></tr>
              </table>
            </div>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"OCTADECENT Bookings" <${smtpUser}>`,
          to: recipient,
          subject: 'New Book Consultation Request',
          text: notificationText,
          html: htmlTemplate
        });
        console.log('[notify-consultation] Email sent successfully to:', recipient);
      } else {
        console.warn('[notify-consultation] SMTP credentials missing. Skipping email.');
      }
    } catch (emailErr) {
      console.error('[notify-consultation] Email delivery failed:', emailErr);
    }

    // ── 2. Send WhatsApp Server-side ──────────────────────────────────────────
    try {
      await sendWhatsAppServerSide(lead, notificationText);
    } catch (waErr) {
      console.error('[notify-consultation] WhatsApp delivery failed:', waErr);
    }

    return Response.json({ success: true }, { status: 200 });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[notify-consultation] Error:', message);
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
