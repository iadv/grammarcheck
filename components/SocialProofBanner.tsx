'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock, MapPin, Star, Users } from 'lucide-react';

const recentActivities = [
  { text: "Sarah from San Francisco just corrected her resume", time: "2 min ago" },
  { text: "Marcus from NYC improved his LinkedIn post", time: "4 min ago" },
  { text: "Emily from London rewrote her academic paper", time: "6 min ago" },
  { text: "Alex from Toronto enhanced his marketing copy", time: "8 min ago" },
  { text: "Priya from Mumbai optimized her social media content", time: "10 min ago" },
  { text: "David from Seattle polished his pitch deck", time: "12 min ago" },
];

const liveStats = [
  { icon: Users, text: "47 people using GrammarCheck right now" },
  { icon: Star, text: "4.9/5 average rating from 2,847 reviews" },
  { icon: Clock, text: "Last review: 2 minutes ago" },
];

export default function SocialProofBanner() {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % recentActivities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          {/* Live Activity */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Live Activity</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{recentActivities[currentActivity].time}</span>
            </div>
          </motion.div>

          {/* Activity Text */}
          <motion.div 
            className="flex-1 text-center"
            key={currentActivity}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-700">
              <span className="font-medium">{recentActivities[currentActivity].text}</span>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex items-center space-x-4 text-sm text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {liveStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-1">
                <stat.icon className="w-4 h-4" />
                <span>{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 