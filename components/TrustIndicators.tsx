'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Award, Zap, CheckCircle } from 'lucide-react';

const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "📘" },
  { name: "Netflix", logo: "📺" },
  { name: "Spotify", logo: "🎵" },
];

const securityFeatures = [
  { icon: Shield, text: "Enterprise-grade security", description: "SOC 2 Type II certified" },
  { icon: Lock, text: "End-to-end encryption", description: "Your data is protected" },
  { icon: Award, text: "99.9% uptime guarantee", description: "Reliable service" },
  { icon: Zap, text: "Lightning fast processing", description: "Results in seconds" },
];

const certifications = [
  { name: "ISO 27001", description: "Information Security" },
  { name: "GDPR Compliant", description: "Data Protection" },
  { name: "SOC 2 Type II", description: "Security & Privacy" },
  { name: "HIPAA Ready", description: "Healthcare Standards" },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8 text-lg">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-lg">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-gray-900 mb-2">{feature.text}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your data security is our top priority. GrammarCheck meets the highest industry standards for security and privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-4 shadow-soft">
                  <div className="flex justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-display font-semibold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-green-700 font-medium">Verified by 50,000+ users worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 