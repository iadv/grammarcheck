'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Loader2 } from 'lucide-react';
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
      className="w-full px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="text-input" className="text-lg font-medium">
            Enter your text to check grammar and get rewriting suggestions
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <Textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              className="pl-12 pr-16 min-h-[140px] resize-none text-lg"
              disabled={isLoading}
              maxLength={1000}
            />
            
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <Button
                type="submit"
                disabled={!text.trim() || isLoading}
                size="sm"
                className="h-10 w-10 p-0"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
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
            <Badge variant="secondary" className="text-xs">
              Maximum 1000 characters
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-mono ${
              text.length > 900 ? 'text-orange-500' : 
              text.length > 800 ? 'text-yellow-500' : 
              'text-muted-foreground'
            }`}>
              {text.length}/1000
            </span>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
} 