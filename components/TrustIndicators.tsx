'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Award, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "📘" },
  { name: "Netflix", logo: "📺" },
  { name: "Spotify", logo: "🎵" },
  { name: "Amazon", logo: "📦" },
  { name: "Tesla", logo: "⚡" },
  { name: "Uber", logo: "🚗" },
  { name: "Airbnb", logo: "🏠" },
  { name: "Slack", logo: "💬" },
  { name: "Zoom", logo: "📹" },
  { name: "Salesforce", logo: "☁️" },
  { name: "Adobe", logo: "🎨" },
  { name: "Oracle", logo: "🗄️" },
  { name: "IBM", logo: "🔵" },
  { name: "Intel", logo: "🔴" },
  { name: "Cisco", logo: "🌐" },
  { name: "Dell", logo: "💻" },
  { name: "HP", logo: "🖨️" },
  { name: "Samsung", logo: "📱" },
  { name: "Sony", logo: "🎮" },
  { name: "LG", logo: "📺" },
  { name: "Panasonic", logo: "🔋" },
  { name: "Philips", logo: "💡" },
  { name: "Siemens", logo: "⚙️" },
  { name: "GE", logo: "🏭" },
  { name: "BMW", logo: "🚙" },
  { name: "Mercedes", logo: "🚗" },
  { name: "Audi", logo: "🏎️" },
  { name: "Volkswagen", logo: "🚐" },
  { name: "Toyota", logo: "🚙" },
  { name: "Honda", logo: "🏍️" },
  { name: "Nissan", logo: "🚗" },
  { name: "Ford", logo: "🚙" },
  { name: "Chevrolet", logo: "🏁" },
  { name: "McDonald's", logo: "🍔" },
  { name: "KFC", logo: "🍗" },
  { name: "Subway", logo: "🥪" },
  { name: "Starbucks", logo: "☕" },
  { name: "Pizza Hut", logo: "🍕" },
  { name: "Domino's", logo: "🍕" },
  { name: "Burger King", logo: "🍔" },
  { name: "Wendy's", logo: "🍔" },
  { name: "Taco Bell", logo: "🌮" },
  { name: "Chipotle", logo: "🌯" },
  { name: "Panera", logo: "🥖" },
  { name: "Dunkin'", logo: "🍩" },
  { name: "Insosys", logo: "💼" },
  { name: "TCS", logo: "💼" },
  { name: "Capgemini", logo: "💼" },
  { name: "Accenture", logo: "💼" },
  { name: "Deloitte", logo: "💼" },
  { name: "PwC", logo: "💼" },
  { name: "EY", logo: "💼" },
  { name: "KPMG", logo: "💼" },
  { name: "McKinsey", logo: "💼" },
  { name: "BCG", logo: "💼" },
  { name: "Bain", logo: "💼" },
  { name: "Goldman Sachs", logo: "💼" },
  { name: "JP Morgan", logo: "💼" },
  { name: "Morgan Stanley", logo: "💼" },
  { name: "Bank of America", logo: "💼" },
  { name: "Wells Fargo", logo: "💼" },
  { name: "Citigroup", logo: "💼" },
  { name: "American Express", logo: "💼" },
  { name: "Visa", logo: "💳" },
  { name: "Mastercard", logo: "💳" },
  { name: "PayPal", logo: "💳" },
  { name: "Square", logo: "💳" },
  { name: "Stripe", logo: "💳" },
  { name: "Shopify", logo: "🛒" },
  { name: "Etsy", logo: "🛍️" },
  { name: "eBay", logo: "🛒" },
  { name: "Walmart", logo: "🛒" },
  { name: "Target", logo: "🎯" },
  { name: "Costco", logo: "🛒" },
  { name: "Home Depot", logo: "🔨" },
  { name: "Lowe's", logo: "🔧" },
  { name: "Best Buy", logo: "📱" },
  { name: "GameStop", logo: "🎮" },
  { name: "Nike", logo: "👟" },
  { name: "Adidas", logo: "👟" },
  { name: "Under Armour", logo: "👕" },
  { name: "Gap", logo: "👖" },
  { name: "H&M", logo: "👗" },
  { name: "Zara", logo: "👔" },
  { name: "Uniqlo", logo: "👕" },
  { name: "Forever 21", logo: "👗" },
  { name: "Victoria's Secret", logo: "👙" },
  { name: "Lululemon", logo: "🧘" },
  { name: "Patagonia", logo: "🏔️" },
  { name: "North Face", logo: "🏔️" },
  { name: "Columbia", logo: "🏔️" },
  { name: "Timberland", logo: "👢" },
  { name: "Dr. Martens", logo: "👢" },
  { name: "Converse", logo: "👟" },
  { name: "Vans", logo: "🛹" },
  { name: "Crocs", logo: "👡" },
  { name: "Birkenstock", logo: "👡" },
  { name: "UGG", logo: "👢" },
  { name: "Coach", logo: "👜" },
  { name: "Michael Kors", logo: "👜" },
  { name: "Kate Spade", logo: "👜" },
  { name: "Tory Burch", logo: "👜" },
  { name: "Fossil", logo: "⌚" },
  { name: "Swatch", logo: "⌚" },
  { name: "Casio", logo: "⌚" },
  { name: "Seiko", logo: "⌚" },
  { name: "Citizen", logo: "⌚" },
  { name: "Timex", logo: "⌚" },
  { name: "Ray-Ban", logo: "🕶️" },
  { name: "Oakley", logo: "🕶️" },
  { name: "Polaroid", logo: "📷" },
  { name: "GoPro", logo: "📹" },
  { name: "Canon", logo: "📷" },
  { name: "Nikon", logo: "📷" },
  { name: "Sony", logo: "📷" },
  { name: "Fujifilm", logo: "📷" },
  { name: "Kodak", logo: "📷" },
  { name: "Leica", logo: "📷" },
  { name: "DJI", logo: "🚁" },
  { name: "Parrot", logo: "🚁" },
  { name: "Yuneec", logo: "🚁" },
  { name: "Autel", logo: "🚁" },
  { name: "Skydio", logo: "🚁" },
  { name: "Holy Stone", logo: "🚁" },
  { name: "Potensic", logo: "🚁" },
  { name: "Snaptain", logo: "🚁" },
  { name: "Contixo", logo: "🚁" },
  { name: "Force1", logo: "🚁" },
  { name: "UDI", logo: "🚁" },
  { name: "Syma", logo: "🚁" },
  { name: "Hubsan", logo: "🚁" },
  { name: "Eachine", logo: "🚁" },
  { name: "Walkera", logo: "🚁" },
  { name: "Blade", logo: "🚁" },
  { name: "Horizon", logo: "🚁" },
  { name: "E-flite", logo: "🚁" },
  { name: "ParkZone", logo: "🚁" },
  { name: "Dynam", logo: "🚁" },
  { name: "FMS", logo: "🚁" },
  { name: "Volantex", logo: "🚁" },
  { name: "WLtoys", logo: "🚁" },
  { name: "JJRC", logo: "🚁" },
  { name: "Cheerson", logo: "🚁" },
  { name: "MJX", logo: "🚁" },
  { name: "XK", logo: "🚁" }
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos - Horizontal Scrolling Ticker */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-8 text-lg">Trusted by teams at</p>
          
          {/* Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of companies */}
              {companies.map((company, index) => (
                <motion.div
                  key={`first-${company.name}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap mx-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-medium text-lg">{company.name}</span>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <motion.div
                  key={`second-${company.name}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap mx-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="font-medium text-lg">{company.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Section */}
        <Card className="bg-gradient-to-r from-muted/50 to-primary/5">
          <CardContent className="p-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-bold mb-4">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Your data security is our top priority. GrammarCheck meets the highest industry standards for security and privacy.
              </p>
              <p className="text-primary font-medium">
                Available. Please contact us for enterprise solutions.
              </p>
            </motion.div>
          </CardContent>
        </Card>

        {/* Trust Badge */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="inline-flex items-center space-x-3 bg-green-50 border-green-200 px-6 py-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-green-700 font-medium">Verified by 50,000+ users worldwide</span>
          </Badge>
        </motion.div>
      </div>
    </section>
  );
} 