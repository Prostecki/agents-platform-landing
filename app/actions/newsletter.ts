'use server';

import { z } from 'zod';
import { db } from '@/app/lib/firebase-admin';

// Validation schema
const EmailSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .min(5, 'Email is too short')
    .max(255, 'Email is too long'),
});

type ActionState = {
  error?: string;
  success?: boolean;
  message?: string;
} | null;

export async function subscribeToNewsletter(prevState: ActionState, formData: FormData) {
  const email = formData.get('email');
  
  // Simulated delay for UI (optional)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Validation
  const validatedFields = EmailSchema.safeParse({ email });

  if (!validatedFields.success) {
    return { 
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Validation error' 
    };
  }

  const validEmail = validatedFields.data.email;

  // Honeypot (bot protection)
  const botField = formData.get('website');
  if (botField) {
    return { error: 'Bot detected' };
  }

  try {
    const subscriptionsRef = db.collection('newsletter_subscriptions');
    
    // Check for existing subscription
    const existingSub = await subscriptionsRef
      .where('email', '==', validEmail.toLowerCase())
      .limit(1)
      .get();

    if (!existingSub.empty) {
      return { success: true, message: 'You are already subscribed!' };
    }

    // Save to Firestore
    await subscriptionsRef.add({
      email: validEmail.toLowerCase(),
      subscribedAt: new Date(),
      status: 'active',
      source: 'footer-cta',
      userAgent: 'server-action',
    });

    return { success: true, message: 'Thank you for subscribing!' };
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return { error: 'A server error occurred. Please try again later.' };
  }
}
