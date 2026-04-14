import { Resend } from "resend";

import type { ContactFormValues } from "@/lib/validators";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInquiryType(value: ContactFormValues["inquiryType"]) {
  switch (value) {
    case "general":
      return "General inquiry";
    case "partnership":
      return "Partnership";
    case "administrative":
      return "Administrative matter";
    case "other":
      return "Other";
    default:
      return "Not specified";
  }
}

function formatPreferredLanguage(value: ContactFormValues["preferredLanguage"]) {
  switch (value) {
    case "fr":
      return "French";
    case "en":
      return "English";
    default:
      return "Not specified";
  }
}

function renderValue(value: string) {
  return escapeHtml(value.trim() || "Not provided");
}

function buildEmailHtml(payload: ContactFormValues) {
  const rows = [
    ["Full name", renderValue(payload.fullName)],
    ["Company", renderValue(payload.company)],
    ["Email", renderValue(payload.email)],
    ["Phone", renderValue(payload.phone)],
    ["City / Country", renderValue(payload.cityCountry)],
    ["Inquiry type", formatInquiryType(payload.inquiryType)],
    ["Preferred language", formatPreferredLanguage(payload.preferredLanguage)],
    ["Subject", renderValue(payload.subject)],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #dce5de;font-weight:600;color:#111814;">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #dce5de;color:#26312c;">${value}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f3f7f4;padding:32px;color:#111814;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #dce5de;border-radius:10px;overflow:hidden;">
        <div style="padding:20px 24px;background:#007435;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;">ETS RUNI contact form</h1>
          <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">New message received from etsruni.com</p>
        </div>
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tbody>${rows}</tbody>
        </table>
        <div style="padding:24px;border-top:1px solid #dce5de;">
          <h2 style="margin:0 0 12px;font-size:16px;color:#111814;">Message</h2>
          <div style="white-space:pre-wrap;line-height:1.7;color:#26312c;">${renderValue(payload.message)}</div>
        </div>
      </div>
    </div>
  `;
}

function buildEmailText(payload: ContactFormValues) {
  return `ETS RUNI contact form

Full name: ${payload.fullName}
Company: ${payload.company || "Not provided"}
Email: ${payload.email}
Phone: ${payload.phone}
City / Country: ${payload.cityCountry || "Not provided"}
Inquiry type: ${formatInquiryType(payload.inquiryType)}
Preferred language: ${formatPreferredLanguage(payload.preferredLanguage)}
Subject: ${payload.subject}

Message:
${payload.message}
`;
}

export async function sendContactEmail(payload: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Missing Resend configuration.");
  }

  const resend = new Resend(apiKey);
  const response = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `ETS RUNI contact: ${payload.subject}`,
    html: buildEmailHtml(payload),
    text: buildEmailText(payload),
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}
