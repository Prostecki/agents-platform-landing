'use server';

import { db, admin } from '@/app/lib/firebase-admin';

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return { error: 'Invalid email address' };
  }

  // Basic honeypot check (optional, if you add a hidden field)
  const honeypot = formData.get('website');
  if (honeypot) {
    return { error: 'Bot detected' };
  }

  try {
    // Check if email already exists
    const snapshot = await db.collection('subscribers').where('email', '==', email).get();
    
    if (!snapshot.empty) {
      return { success: true, message: 'You are already subscribed!' };
    }

    await db.collection('subscribers').add({
      email,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
      source: 'landing-page-newsletter',
      status: 'active'
    });

    return { success: true, message: 'Thank you for subscribing!' };
  } catch (error) {
    console.error('Newsletter Subscription Error:', error);
    return { error: 'Internal server error. Please try again later.' };
  }
}
