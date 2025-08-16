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
    <div className="relative bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
      <a href="/blog" className="absolute right-4 top-2 px-4 py-1.5 rounded-lg bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition text-sm z-10">Read our Blog</a>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-1 sm:space-y-2 md:space-y-0 md:space-x-8">
          {/* Live Activity - Hidden on mobile */}
          <motion.div 
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="flex items-center space-x-2 border-green-200 bg-green-50 px-3 py-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Live Activity</span>
            </Badge>
          </motion.div>

          {/* Purpose Text - Simplified for mobile */}
          <motion.div 
            className="flex-1 text-center px-1 sm:px-4"
            key={currentPurpose}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
              <span className="hidden sm:inline font-medium">Someone just used GrammarCheck for: </span>
              <span className="sm:hidden font-medium">Used for: </span>
              <span className="font-semibold text-purple-600">{purposes[currentPurpose]}</span>
            </p>
          </motion.div>

          {/* Stats - Simplified for mobile */}
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Show only rating on mobile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden sm:inline">4.9/5 average rating from 2,847 reviews</span>
              <span className="font-medium sm:hidden">4.9/5</span>
            </div>
            {/* Show only time on mobile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden sm:inline">Last usage: few seconds ago</span>
              <span className="font-medium sm:hidden">Just now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 