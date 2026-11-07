"use server";

import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function submitContactForm(formData: FormData) {
  // Honeypot spam check
  const honeypot = formData.get('_gotcha') as string;
  if (honeypot && honeypot.trim().length > 0) {
    return { success: true };
  }

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Save to Database
    // Note: This will fail locally if DATABASE_URL is invalid, so we wrap in try/catch
    try {
      await prisma.lead.create({
        data: { firstName, lastName, email, service, message }
      });
    } catch (dbError) {
      console.warn("Database save failed (expected if DB is not provisioned yet):", dbError);
    }

    // 2. Send Email via Resend
    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Resend test email
        to: 'harviitsolutions@gmail.com',
        subject: `New Lead: ${firstName} ${lastName} - ${service}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
      });
    } catch (emailError) {
      console.warn("Email send failed (expected if RESEND_API_KEY is missing):", emailError);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
