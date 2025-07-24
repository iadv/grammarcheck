'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';
import GrammarResult from '@/components/GrammarResult';
import { GrammarResult as GrammarResultType } from '@/lib/ai';
import { motion } from 'framer-motion';
import { FileText, Sparkles } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GrammarResultType | null>(null);
  const [originalText, setOriginalText] = useState('');
  const [error, setError] = useState('');

  const handleProcessText = async (text: string) => {
    setIsLoading(true);
    setError('');
    setOriginalText(text);

    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process text');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12 space-y-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <TextInput onProcess={handleProcessText} isLoading={isLoading} />
        </div>
        
        {error && (
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}
        
        {result ? (
          <div className="space-y-8 px-4 sm:px-6 lg:px-8">
            <GrammarResult 
              original={originalText} 
              corrected={result.corrected}
              rewrites={result.rewrites}
            />
          </div>
        ) : !isLoading && (
          <motion.div 
            className="w-full px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-modern w-full">
              <div className="text-center py-16">
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center shadow-soft">
                    <FileText className="w-10 h-10 text-primary-600" />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                  Ready to Transform Your Text
                </h3>
                
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                  Enter your text in the input bar above to instantly correct grammar and get 15+ writing style variations. 
                  Perfect for students, professionals, and content creators.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-primary-500" />
                    <span>Grammar Correction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-secondary-500" />
                    <span>15+ Writing Styles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-primary-500" />
                    <span>Instant Results</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
} 