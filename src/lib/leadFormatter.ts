import { Lead } from './db';

export function formatLeadText(lead: Lead): string {
  const contactInfo = [
    `Name: ${lead.name || 'Not Provided'}`,
    `Company: ${lead.company || 'Not Provided'}`,
    `Job Title: ${lead.jobTitle || 'Not Provided'}`,
    `Email: ${lead.email || 'Not Provided'}`,
    `Phone: ${lead.phone || 'Not Provided'}`,
    `Country: ${lead.country || 'Not Provided'}`
  ].join('\n');

  const projectInfo = [
    `Service: ${lead.service || 'Not Provided'}`,
    `Project Type: ${lead.projectType || 'Not Provided'}`,
    `Budget: ${lead.budget || 'Not Provided'}`,
    `Timeline / Deadline: ${lead.timeline || 'Not Provided'}`
  ].join('\n');

  const hasMeeting = lead.meetingDate && lead.meetingDate !== 'Not Scheduled' && lead.meetingDate !== '—';
  const meetingInfo = [
    `Meeting Date: ${hasMeeting ? lead.meetingDate : 'Not Scheduled'}`,
    `Meeting Time: ${hasMeeting ? lead.meetingTime : 'Not Scheduled'}`,
    `Meeting Mode: ${hasMeeting ? lead.meetingMode : 'Not Scheduled'}`
  ].join('\n');

  return [
    `NEW LEAD RECEIVED`,
    ``,
    `Contact Information`,
    contactInfo,
    ``,
    `Project Information`,
    projectInfo,
    ``,
    `Meeting Information`,
    meetingInfo,
    ``,
    `Project Description`,
    `Description: ${lead.description || 'Not Provided'}`,
    ``,
    `Lead Information`,
    `Lead Score: ${lead.leadScore ?? 0}`,
    `Submission Date: ${lead.submissionDate}`
  ].join('\n');
}
