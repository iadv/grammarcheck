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
        <div className="space-y-1">
          <Label htmlFor="text-input" className="text-lg sm:text-xl font-semibold">
            Enter your text to check grammar and get rewriting suggestions
          </Label>
          <div className="relative">
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            
            <Textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="pl-10 sm:pl-12 pr-20 sm:pr-24 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] resize-none text-base sm:text-xl border-2 border-primary/20 focus:border-primary shadow-lg"
              disabled={isLoading}
              maxLength={10000}
            />
            
            <div className="absolute inset-y-0 right-0 pr-2 sm:pr-4 flex items-center">
              <Button
                type="submit"
                disabled={!text.trim() || isLoading}
                size="sm"
                className="h-8 sm:h-10 md:h-12 px-3 sm:px-4 md:px-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg text-sm sm:text-base md:text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Processing...</span>
                    <span className="sm:hidden">...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                    <span className="hidden md:inline">Refine Text</span>
                    <span className="hidden sm:inline md:hidden">Refine</span>
                    <span className="sm:hidden">Go</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs sm:text-sm">
              Maximum 10,000 characters
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-sm sm:text-base font-mono ${
              text.length > 9000 ? 'text-orange-500' : 
              text.length > 8000 ? 'text-yellow-500' : 
              'text-muted-foreground'
            }`}>
              {text.length}/10,000
            </span>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
} 