'use server';

import { z } from 'zod';
import { getDb } from '@/lib/db';
import { ai } from '@/ai/genkit';

export interface GenerateProjectDescriptionOutput {
  description: string;
}

export async function createContact(prevState: any, formData: FormData) { 
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { message: 'Error: All fields are required.', errors: null };
  }

  try {
    const pool = await getDb();
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message]
    );

    return { message: 'Success: Message sent successfully!', errors: null };

  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Database Error: Failed to send message.', errors: null };
  }
}

export async function generateDescriptionAction(keywords: string): Promise<GenerateProjectDescriptionOutput> {
  const prompt = `You are a professional copywriter specializing in creating engaging project descriptions for portfolios. Based on the following keywords, generate a compelling and detailed project description. Keywords: ${keywords}, and the description should be less than 100 words`;

  const { text } = await ai.generate({
    // Use the current stable 2.5 Flash release
    model: 'googleai/gemini-2.5-flash', 
    prompt: prompt,
  });

  return { description: text };
}