import type { Metadata } from 'next'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GrammarCheck - AI-Powered Grammar Correction & Rewriting',
  description: 'Instantly correct grammar and rewrite text in multiple styles with AI. Professional, formal, casual, and more writing styles available.',
  keywords: 'grammar correction, AI writing, text rewriting, writing styles, grammar check',
  authors: [{ name: 'GrammarCheck Team' }],
  openGraph: {
    title: 'GrammarCheck - AI-Powered Grammar Correction',
    description: 'Instantly correct grammar and rewrite text in multiple styles with AI.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          {children}
        </div>
      </body>
    </html>
  )
} 