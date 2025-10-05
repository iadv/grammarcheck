'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

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
      className="w-full px-2 sm:px-4 md:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor="text-input" className="text-sm sm:text-lg md:text-xl font-semibold block">
            Enter your text to check grammar and get rewriting suggestions
          </Label>
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <Textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="pl-10 pr-4 min-h-[120px] sm:min-h-[140px] md:min-h-[200px] resize-none text-sm sm:text-base md:text-lg font-normal bg-white/95 rounded-xl shadow-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all placeholder:font-medium placeholder:text-gray-400"
              disabled={isLoading}
              maxLength={10000}
            />
          </div>
          
          {/* Mobile-optimized submit button */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              type="submit"
              disabled={!text.trim() || isLoading}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white font-semibold shadow-lg text-sm sm:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 h-12 sm:h-14"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin mr-2" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="hidden sm:inline">Click to Refine Text</span>
                  <span className="sm:hidden">Refine Text</span>
                </>
              )}
            </Button>
            
            {/* Character count - mobile optimized */}
            <div className="flex justify-between items-center sm:ml-auto">
              <Badge variant="secondary" className="text-xs">
                Max 10,000 chars
              </Badge>
              <span className={`text-xs font-mono ${
                text.length > 9000 ? 'text-orange-500' : 
                text.length > 8000 ? 'text-yellow-500' : 
                'text-muted-foreground'
              }`}>
                {text.length}/10,000
              </span>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
} 