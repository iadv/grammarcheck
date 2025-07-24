'use client';

import { CheckCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      className="card-modern w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        >
          <CheckCircle className="w-7 h-7 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-display font-semibold text-gray-900">Results</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-display font-semibold text-gray-900">Style</th>
              <th className="text-left py-3 px-4 font-display font-semibold text-gray-900">Text</th>
              <th className="text-right py-3 px-4 font-display font-semibold text-gray-900">Actions</th>
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
                <p className="text-gray-700 leading-relaxed font-sans">{original}</p>
              </td>
              <td className="py-4 px-4 text-right">
                <motion.button
                  onClick={() => copyToClipboard(original, 'original')}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 ml-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedText === 'original' ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
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
                <p className="text-gray-900 leading-relaxed font-medium font-sans">{corrected}</p>
              </td>
              <td className="py-4 px-4 text-right">
                <motion.button
                  onClick={() => copyToClipboard(corrected, 'corrected')}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 ml-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedText === 'corrected' ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </td>
            </tr>

            {/* Separator */}
            <tr className="border-b-2 border-gray-300 bg-gray-100/50">
              <td colSpan={3} className="py-2 px-4">
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-600 bg-white px-4 py-1 rounded-full border border-gray-200">
                    Writing Style Variations
                  </span>
                </div>
              </td>
            </tr>

            {/* Writing Styles */}
            {Object.entries(rewrites).map(([style, text], index) => (
              <motion.tr 
                key={style}
                className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="py-4 px-4 font-display font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getStyleIcon(style)}</span>
                    <span>{style}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-gray-700 leading-relaxed font-sans">{text}</p>
                </td>
                <td className="py-4 px-4 text-right">
                  <motion.button
                    onClick={() => copyToClipboard(text, style)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50 ml-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copiedText === style ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
} 