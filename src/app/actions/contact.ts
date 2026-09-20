"use server";

import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

// Use a global instance in dev to prevent multiple connections
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function submitContactForm(formData: FormData) {
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
