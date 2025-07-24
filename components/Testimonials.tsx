'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Sarah C.",
    role: "Content Creator",
    avatar: "SC",
    rating: 5,
    text: "GrammarCheck transformed my writing workflow! I went from spending hours proofreading to getting perfect grammar and 15+ style variations in seconds. My engagement rates increased by 40%!",
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "Marcus R.",
    role: "Marketing Director",
    avatar: "MR",
    rating: 5,
    text: "This is a game-changer for our marketing team. We can now create multiple versions of our copy instantly - formal for LinkedIn, casual for Twitter, persuasive for ads. Saves us hours every week!",
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: "Dr. Emily W.",
    role: "Professor",
    avatar: "EW",
    rating: 5,
    text: "I recommend GrammarCheck to all my students. It's like having a professional editor available 24/7. The academic writing style is particularly impressive - maintains scholarly tone perfectly.",
    verified: true,
    featured: false
  },
  {
    id: 4,
    name: "Alex T.",
    role: "Freelance Writer",
    avatar: "AT",
    rating: 5,
    text: "As a freelancer, time is money. GrammarCheck helps me deliver polished content faster than ever. Clients love the quality, and I love the speed. Win-win!",
    verified: true,
    featured: false
  },
  {
    id: 5,
    name: "Priya P.",
    role: "Social Media Manager",
    avatar: "PP",
    rating: 5,
    text: "The different writing styles are incredible! I can adapt the same message for different platforms instantly. Our social media engagement has never been higher.",
    verified: true,
    featured: false
  },
  {
    id: 6,
    name: "David K.",
    role: "Startup Founder",
    avatar: "DK",
    rating: 5,
    text: "GrammarCheck helped us craft the perfect pitch deck. The confident and professional styles made our presentation stand out. We just closed our Series A funding!",
    verified: true,
    featured: true
  }
];

const stats = [
  { number: "50K+", label: "Happy Users", icon: Users },
  { number: "2M+", label: "Texts Processed", icon: TrendingUp },
  { number: "99.8%", label: "Accuracy Rate", icon: CheckCircle },
  { number: "15+", label: "Writing Styles", icon: Zap }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Trusted by <span className="text-gradient-modern">50,000+</span> Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join thousands of professionals, students, and creators who've transformed their writing with AI-powered grammar correction and style variations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-secondary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-display font-semibold">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">Verified User</span>
                  </div>

                  <blockquote className="relative">
                    <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/20" />
                    <p className="text-foreground leading-relaxed pl-6">{testimonial.text}</p>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Transform Your Writing?
              </h3>
              <p className="text-primary-foreground/80 text-xl mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied users who've already improved their writing with AI-powered grammar correction and style variations.
              </p>
                              <div className="flex justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Start Writing Now
                  </Button>
                </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 