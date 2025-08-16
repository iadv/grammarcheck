import { NextRequest, NextResponse } from 'next/server';
import { processText } from '@/lib/ai';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });

async function logSession(inputText: string, ipAddress: string | null, userAgent: string | null) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      input_text TEXT NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  await pool.query(
    'INSERT INTO sessions (input_text, ip_address, user_agent) VALUES ($1, $2, $3)',
    [inputText, ipAddress, userAgent]
  );
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Text is required and must be a string' },
        { status: 400 }
      );
    }

    if (text.length > 1000) {
      return NextResponse.json(
        { error: 'Text must be 1000 characters or less' },
        { status: 400 }
      );
    }

    // Get IP address and user agent
    const ip = request.headers.get('x-forwarded-for') || request.ip || null;
    const userAgent = request.headers.get('user-agent') || null;

    await logSession(text, ip, userAgent);

    const result = await processText(text);

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process text. Please try again.' },
      { status: 500 }
    );
  }
} 