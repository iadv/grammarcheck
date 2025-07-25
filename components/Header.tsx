'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-modern"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="text-center">
          {/* Logo and branding */}
          <motion.div 
            className="flex items-center justify-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-soft">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-pink-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </motion.div>
              </motion.div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  Grammar<span className="text-pink-200">Check</span>
                </h1>
                <p className="text-purple-100 text-xs sm:text-sm font-medium mt-1">Powered by AI</p>
              </div>
            </div>
          </motion.div>

          {/* Hero section */}
          <div className="w-full">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-2 sm:mb-3 leading-tight text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block sm:inline-block">Instantly Correct</span>
              <span className="block sm:inline-block text-pink-200 sm:ml-4">Grammar & Rewrite</span>
              <span className="block sm:inline-block text-purple-100 sm:ml-4">in Any Style</span>
            </motion.h2>
            
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-purple-100 mb-2 sm:mb-3 max-w-4xl mx-auto leading-relaxed text-balance px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="hidden sm:inline">Professional-grade grammar correction with AI-powered rewriting in 15+ writing styles. Perfect for students, professionals, and content creators.</span>
              <span className="sm:hidden">AI-powered grammar correction & rewriting in 15+ styles.</span>
            </motion.p>

            {/* Feature highlights */}
            <motion.div 
              className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-6 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Badge 
                variant="secondary"
                className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" />
                <span className="font-medium hidden sm:inline">Instant Results</span>
                <span className="font-medium sm:hidden">Instant</span>
              </Badge>
              <Badge 
                variant="secondary"
                className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" />
                <span className="font-medium hidden sm:inline">15+ Writing Styles</span>
                <span className="font-medium sm:hidden">15+ Styles</span>
              </Badge>
              <Badge 
                variant="secondary"
                className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300" />
                <span className="font-medium hidden sm:inline">AI-Powered</span>
                <span className="font-medium sm:hidden">AI</span>
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
} 