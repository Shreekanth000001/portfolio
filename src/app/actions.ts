'use server';

import { z } from 'zod';
import { getDb } from '@/lib/db';

export async function createContact(prevState: any, formData: FormData) { // Add prevState as the first parameter
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Basic validation (you might want to add more robust validation)
  if (!name || !email || !message) {
 return { message: 'Error: All fields are required.', errors: null };
  }

  try {
    console.log('Attempting to get database connection pool...');
    // Get a connection pool from the getDb function
    const pool = await getDb();
    console.log('Database connection pool obtained.');

    // Create table if it doesn't exist
    // Modify the CREATE TABLE statement for PostgreSQL
    console.log('Attempting to create contacts table if it does not exist...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing primary key
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP -- Use TIMESTAMP WITH TIME ZONE
      )
    `);

    console.log('Contacts table checked/created.');
    // Insert data into the contacts table
    const result = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message]
    );

    console.log('Contact form submitted successfully:', result.rows[0]);

 return { message: 'Success: Message sent successfully!', errors: null };

  } catch (error) {
    console.error('Database Error:', error);
 return { message: 'Database Error: Failed to send message.', errors: null };
  }
}
