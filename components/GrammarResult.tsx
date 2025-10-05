'use client';

import { CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface GrammarResultProps {
  original: string;
  corrected: string;
  rewrites: { [style: string]: string };
}

export default function GrammarResult({ original, corrected, rewrites }: GrammarResultProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getStyleIcon = (style: string) => {
    const icons = {
      'Formal': '🎩',
      'Friendly': '😊',
      'Casual': '👕',
      'Professional': '💼',
      'Diplomatic': '🤝',
      'Confident': '💪',
      'Middle School': '📚',
      'High School': '🎓',
      'Academic': '🎓',
      'Simplified': '✨',
      'Vivid': '🎨',
      'Empathetic': '❤️',
      'Luxury': '💎',
      'Engaging': '🎯',
      'Direct Persuasive': '🎯'
    };
    return icons[style as keyof typeof icons] || '📝';
  };

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
            </motion.div>
            <span className="text-lg sm:text-2xl font-display">Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mobile-optimized layout */}
          <div className="space-y-4">
            {/* Original Text */}
            <div className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-gray-50/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Original</span>
                </div>
                <Button
                  onClick={() => copyToClipboard(original, 'original')}
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                >
                  {copiedText === 'original' ? (
                    <>
                      <Check className="w-3 h-3 text-green-500 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{original}</p>
            </div>

            {/* Corrected Text */}
            <div className="border border-green-200 rounded-lg p-3 sm:p-4 bg-green-50/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Corrected</span>
                </div>
                <Button
                  onClick={() => copyToClipboard(corrected, 'corrected')}
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                >
                  {copiedText === 'corrected' ? (
                    <>
                      <Check className="w-3 h-3 text-green-500 mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">{corrected}</p>
            </div>

            {/* Writing Styles Section */}
            <div className="border-t pt-4">
              <div className="text-center mb-4">
                <Badge variant="secondary" className="px-3 py-1 text-xs">
                  Writing Style Variations
                </Badge>
              </div>
              
              <div className="space-y-3">
                {Object.entries(rewrites).map(([style, text], index) => (
                  <motion.div 
                    key={style} 
                    className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white hover:bg-gray-50/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{getStyleIcon(style)}</span>
                        <span className="text-sm font-medium text-gray-700">{style}</span>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(text, style)}
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs"
                      >
                        {copiedText === style ? (
                          <>
                            <Check className="w-3 h-3 text-green-500 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 