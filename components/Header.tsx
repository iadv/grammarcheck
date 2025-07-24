'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle } from 'lucide-react';

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

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo and branding */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-soft">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-7 h-7 bg-secondary-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
              <div>
                <h1 className="text-4xl font-display font-bold text-white">
                  Grammar<span className="text-secondary-200">Check</span>
                </h1>
                <p className="text-primary-100 text-sm font-medium mt-1">Powered by AI</p>
              </div>
            </div>
          </motion.div>

          {/* Hero section */}
          <div className="w-full">
            <motion.h2 
              className="text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">Instantly Correct</span>
              <span className="inline-block text-secondary-200 ml-6">Grammar & Rewrite</span>
              <span className="inline-block text-primary-100 ml-6">in Any Style</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-primary-100 mb-10 max-w-4xl mx-auto leading-relaxed text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional-grade grammar correction with AI-powered rewriting in 15+ writing styles. 
              Perfect for students, professionals, and content creators.
            </motion.p>

            {/* Feature highlights */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="w-4 h-4 text-secondary-300" />
                <span className="text-white text-sm font-medium">Instant Results</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-4 h-4 text-secondary-300" />
                <span className="text-white text-sm font-medium">15+ Writing Styles</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-secondary-300" />
                <span className="text-white text-sm font-medium">AI-Powered</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
} 