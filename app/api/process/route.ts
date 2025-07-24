import { NextRequest, NextResponse } from 'next/server';
import { processText } from '@/lib/ai';

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