import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize AI clients
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export interface GrammarResult {
  corrected: string;
  rewrites: {
    [style: string]: string;
  };
}

const writingStyles = [
  'Formal',
  'Friendly',
  'Casual',
  'Professional',
  'Diplomatic',
  'Confident',
  'Middle School',
  'High School',
  'Academic',
  'Simplified',
  'Vivid',
  'Empathetic',
  'Luxury',
  'Engaging',
  'Direct Persuasive'
];

export async function processText(text: string): Promise<GrammarResult> {
  const provider = process.env.AI_PROVIDER || 'openai';
  
  if (provider === 'openai') {
    return await processWithOpenAI(text);
  } else {
    return await processWithGemini(text);
  }
}

async function processWithOpenAI(text: string): Promise<GrammarResult> {
  try {
    // Grammar correction
    const grammarResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional grammar correction tool. Correct only the grammar, spelling, and punctuation. Do not change the meaning or add explanations. Return only the corrected text."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.1,
    });

    const corrected = grammarResponse.choices[0]?.message?.content || text;

    // Generate rewrites
    const rewritePromises = writingStyles.map(async (style) => {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `Rewrite the following text in a ${style.toLowerCase()} style. Maintain the core meaning but adapt the tone, vocabulary, and structure to match the ${style} style. Return only the rewritten text without any explanations or additional text.`
          },
          {
            role: "user",
            content: text
          }
        ],
        temperature: 0.7,
      });
      
      return {
        style,
        text: response.choices[0]?.message?.content || text
      };
    });

    const rewriteResults = await Promise.all(rewritePromises);
    const rewrites: { [style: string]: string } = {};
    
    rewriteResults.forEach(result => {
      rewrites[result.style] = result.text;
    });

    return {
      corrected,
      rewrites
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to process text with OpenAI');
  }
}

async function processWithGemini(text: string): Promise<GrammarResult> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Grammar correction
    const grammarPrompt = `Correct only the grammar, spelling, and punctuation of this text. Do not change the meaning or add explanations. Return only the corrected text: ${text}`;
    const grammarResult = await model.generateContent(grammarPrompt);
    const corrected = grammarResult.response.text() || text;

    // Generate rewrites
    const rewritePromises = writingStyles.map(async (style) => {
      const prompt = `Rewrite the following text in a ${style.toLowerCase()} style. Maintain the core meaning but adapt the tone, vocabulary, and structure to match the ${style} style. Return only the rewritten text without any explanations or additional text: ${text}`;
      const result = await model.generateContent(prompt);
      
      return {
        style,
        text: result.response.text() || text
      };
    });

    const rewriteResults = await Promise.all(rewritePromises);
    const rewrites: { [style: string]: string } = {};
    
    rewriteResults.forEach(result => {
      rewrites[result.style] = result.text;
    });

    return {
      corrected,
      rewrites
    };
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to process text with Gemini');
  }
} 