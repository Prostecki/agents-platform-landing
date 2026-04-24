---
name: backend-lead
description: Expert in backend development, cloud integrations (Firebase/Firestore), Server Actions, and database architecture for the Athlete AI landing page. Use this skill when implementing data storage, newsletter subscriptions, or any server-side logic.
---

# Backend Lead Skill

This skill provides guidance for backend development and cloud service integration, specifically focused on Firestore and Next.js Server Actions.

## Core Responsibilities

- **Cloud Integration**: Connecting the application to Firebase/Firestore.
- **Data Management**: Designing schemas for storing user data (e.g., newsletter subscribers).
- **Server Actions**: Implementing secure, type-safe server functions to handle form submissions.
- **Security**: Ensuring cloud credentials and API keys are handled securely via environment variables.

## Firestore Integration Workflow

### 1. Configuration
Always use `firebase-admin` for server-side operations. Initialize the app in a singleton pattern to avoid multiple connections during hot reloads in development.

```typescript
// lib/firebase-admin.ts
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const db = admin.firestore();
```

### 2. Newsletter Subscription Action
Implement newsletter logic as a Next.js Server Action to handle data submission directly from the client.

```typescript
'use server'

import { db } from '@/lib/firebase-admin';

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  
  if (!email || !email.includes('@')) {
    return { error: 'Invalid email address' };
  }

  try {
    await db.collection('subscribers').add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error('Firestore Error:', error);
    return { error: 'Failed to subscribe' };
  }
}
```

## Security Standards
- **Never** commit service account keys to the repository.
- Use `.env.local` for local development and platform-specific environment variables for production.
- Always validate input on the server side using libraries like `zod`.
