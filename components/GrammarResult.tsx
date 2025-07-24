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
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <CheckCircle className="w-7 h-7 text-green-500" />
            </motion.div>
            <span className="text-2xl font-display">Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-display font-semibold">Style</th>
                  <th className="text-left py-3 px-4 font-display font-semibold">Text</th>
                  <th className="text-right py-3 px-4 font-display font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Grammar Correction Section */}
                <tr className="border-b-2 border-green-200 bg-green-50/30">
                  <td className="py-4 px-4 font-display font-medium text-green-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Original</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-foreground leading-relaxed">{original}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      onClick={() => copyToClipboard(original, 'original')}
                      variant="outline"
                      size="sm"
                      className="ml-auto"
                    >
                      {copiedText === 'original' ? (
                        <>
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </td>
                </tr>
                
                <tr className="border-b-2 border-green-200 bg-green-50/30">
                  <td className="py-4 px-4 font-display font-medium text-green-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Corrected</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-foreground leading-relaxed font-medium">{corrected}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      onClick={() => copyToClipboard(corrected, 'corrected')}
                      variant="outline"
                      size="sm"
                      className="ml-auto"
                    >
                      {copiedText === 'corrected' ? (
                        <>
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </td>
                </tr>

                {/* Separator */}
                <tr className="border-b-2 border-border bg-muted/50">
                  <td colSpan={3} className="py-2 px-4">
                    <div className="text-center">
                      <Badge variant="secondary" className="px-4 py-1">
                        Writing Style Variations
                      </Badge>
                    </div>
                  </td>
                </tr>

                {/* Writing Styles */}
                {Object.entries(rewrites).map(([style, text], index) => (
                  <motion.tr 
                    key={style} 
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="py-4 px-4 font-display font-medium">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getStyleIcon(style)}</span>
                        <span>{style}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-foreground leading-relaxed">{text}</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button
                        onClick={() => copyToClipboard(text, style)}
                        variant="outline"
                        size="sm"
                        className="ml-auto"
                      >
                        {copiedText === style ? (
                          <>
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 