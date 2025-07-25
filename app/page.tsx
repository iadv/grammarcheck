'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TextInput from '@/components/TextInput';
import GrammarResult from '@/components/GrammarResult';
import Testimonials from '@/components/Testimonials';
import SocialProofBanner from '@/components/SocialProofBanner';
import TrustIndicators from '@/components/TrustIndicators';
import { GrammarResult as GrammarResultType } from '@/lib/ai';
import { motion } from 'framer-motion';
import { FileText, Sparkles, TrendingUp, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
      <SocialProofBanner />
      <Header />
      
      <main className="space-y-8">
        {/* Quick Stats Section */}
        <motion.section 
          className="py-4 bg-gradient-to-r from-purple-50 to-pink-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">50K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">2M+ Texts Processed</span>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="py-4 space-y-4">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
            <TextInput onProcess={handleProcessText} isLoading={isLoading} />
          </div>
          
          {error && (
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-3 sm:p-4">
                  <p className="text-red-700 text-sm sm:text-base">{error}</p>
                </CardContent>
              </Card>
            </div>
          )}
          
          {result ? (
            <div className="space-y-6 px-2 sm:px-4 md:px-6 lg:px-8">
              <GrammarResult 
                original={originalText} 
                corrected={result.corrected}
                rewrites={result.rewrites}
              />
            </div>
          ) : !isLoading && (
            <motion.div 
              className="w-full px-2 sm:px-4 md:px-6 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="w-full">
                <CardContent className="text-center py-8 sm:py-16">
                  <motion.div
                    className="flex justify-center mb-4 sm:mb-6"
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">
                    Ready to Transform Your Writing?
                  </h3>
                  
                  <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
                    Enter your text in the input bar above to instantly correct grammar and get 15+ writing style variations. 
                    Perfect for students, professionals, and content creators.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    <Badge variant="secondary" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      <span>Grammar Correction</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                      <span>15+ Writing Styles</span>
                    </Badge>
                    <Badge variant="secondary" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      <span>Instant Results</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA Section */}
        <motion.section 
          className="py-20 gradient-bg-modern text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join 50,000+ Users Who've Transformed Their Writing
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let grammar mistakes hold you back. Start writing with confidence today and see the difference AI-powered correction can make.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-4"
            >
              Start Writing Now - It's Free!
            </Button>
            <p className="text-purple-200 text-sm mt-4">No credit card required • Instant access</p>
          </div>
        </motion.section>
      </main>
    </div>
  );
} 