'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const purposes = [
  "LinkedIn Post", "Email", "Greetings", "PTO Request", "SMS", "Casual Email", 
  "Work Email", "Review", "Marketing", "Ecommerce Post", "Instagram Post", 
  "Twitter Post", "Facebook Post", "Resume", "Cover Letter", "Proposal", 
  "Report", "Presentation", "Blog Post", "Newsletter", "Press Release", 
  "Product Description", "Customer Service", "Apology", "Thank You", 
  "Invitation", "Announcement", "Update", "Feedback", "Complaint", 
  "Recommendation", "Testimonial", "Bio", "Profile", "Status Update", 
  "Comment", "Reply", "Message", "Note", "Memo", "Agenda", "Minutes", 
  "Summary", "Abstract", "Conclusion", "Introduction", "Description", 
  "Instructions", "Guidelines", "Policy", "Terms", "Conditions", 
  "Disclaimer", "Warning", "Notice", "Alert", "Reminder", "Schedule", 
  "Calendar", "Event", "Meeting", "Appointment", "Booking", "Reservation", 
  "Order", "Invoice", "Receipt", "Quote", "Estimate", "Budget", "Plan", 
  "Strategy", "Goal", "Objective", "Target", "Milestone", "Deadline", 
  "Timeline", "Roadmap", "Blueprint", "Framework", "Template", "Format", 
  "Structure", "Outline", "Draft", "Version", "Revision", "Edit", 
  "Proofread", "Check", "Verify", "Validate", "Confirm", "Approve", 
  "Sign", "Submit", "Send", "Share", "Publish", "Post", "Upload", 
  "Download", "Save", "Store", "Archive", "Backup", "Restore", "Recover"
];

const liveStats = [
  { icon: Star, text: "4.9/5 average rating from 2,847 reviews" },
  { icon: Clock, text: "Last usage: few seconds ago" },
];

export default function SocialProofBanner() {
  const [currentPurpose, setCurrentPurpose] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPurpose((prev) => (prev + 1) % purposes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-8">
          {/* Live Activity */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="flex items-center space-x-1 sm:space-x-2 border-green-200 bg-green-50 px-2 sm:px-3 py-1 sm:py-1.5">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-green-700">Live Activity</span>
            </Badge>
          </motion.div>

          {/* Purpose Text */}
          <motion.div 
            className="flex-1 text-center px-2 sm:px-4"
            key={currentPurpose}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
              <span className="font-medium">Someone just used GrammarCheck for: </span>
              <span className="font-semibold text-purple-600">{purposes[currentPurpose]}</span>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {liveStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-1 sm:space-x-2">
                <stat.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">{stat.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 