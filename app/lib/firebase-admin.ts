import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    console.log('Initializing Firebase Admin with:', {
      projectId: process.env.FIREBASE_PROJECT_ID ? 'EXISTS' : 'MISSING',
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL ? 'EXISTS' : 'MISSING',
      privateKey: process.env.FIREBASE_PRIVATE_KEY ? 'EXISTS' : 'MISSING',
    });

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Handling both raw newlines and escaped newlines from env variables
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
    console.log('Firebase Admin initialized successfully');
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

export const db = admin.firestore();
export { admin };
