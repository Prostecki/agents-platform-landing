'use server';

import { db, admin } from '@/app/lib/firebase-admin';
import { z } from 'zod';

// Схема валидации
const NewsletterSchema = z.object({
  email: z.string()
    .email('Некорректный формат email')
    .min(5, 'Email слишком короткий')
    .max(255, 'Email слишком длинный')
    .transform((str) => str.toLowerCase().trim()),
});

export async function subscribeToNewsletter(prevState: unknown, formData: FormData) {
  // Имитация задержки для UI (опционально)
  // await new Promise(res => setTimeout(res, 1000));

  const rawEmail = formData.get('email');
  
  // Валидация
  const validatedFields = NewsletterSchema.safeParse({
    email: rawEmail,
  });

  if (!validatedFields.success) {
    return { 
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Ошибка валидации' 
    };
  }

  const { email } = validatedFields.data;

  // Honeypot (защита от ботов)
  const honeypot = formData.get('website');
  if (honeypot) {
    console.warn('Bot detected via honeypot:', email);
    return { error: 'Bot detected' };
  }

  try {
    // Проверка на существующую подписку
    const snapshot = await db.collection('subscribers')
      .where('email', '==', email)
      .limit(1)
      .get();
    
    if (!snapshot.empty) {
      return { success: true, message: 'Вы уже подписаны!' };
    }

    // Сохранение в Firestore
    await db.collection('subscribers').add({
      email,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
      source: 'landing-page',
      status: 'active',
      userAgent: 'server-action', // Можно расширить данными из заголовков
    });

    return { success: true, message: 'Спасибо за подписку!' };
  } catch (error) {
    console.error('Newsletter Subscription Error:', error);
    return { error: 'Произошла ошибка на сервере. Попробуйте позже.' };
  }
}
