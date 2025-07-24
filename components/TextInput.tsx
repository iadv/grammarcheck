'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Loader2 } from 'lucide-react';

interface TextInputProps {
  onProcess: (text: string) => void;
  isLoading: boolean;
}

export default function TextInput({ onProcess, isLoading }: TextInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onProcess(text.trim());
    }
  };

  return (
    <motion.div 
      className="w-full px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here to check grammar and get rewriting suggestions..."
            className="input-field pl-12 pr-16 py-4 min-h-[140px] resize-none text-lg w-full font-sans"
            disabled={isLoading}
            maxLength={1000}
          />
          
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <motion.button
              type="submit"
              disabled={!text.trim() || isLoading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              whileHover={!isLoading && text.trim() ? { scale: 1.05 } : {}}
              whileTap={!isLoading && text.trim() ? { scale: 0.95 } : {}}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          className="mt-3 flex justify-between items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-medium">Maximum 1000 characters</span>
          <span className={`font-mono ${text.length > 900 ? 'text-orange-500' : text.length > 800 ? 'text-yellow-500' : 'text-gray-500'}`}>
            {text.length}/1000
          </span>
        </motion.div>
      </form>
    </motion.div>
  );
} 