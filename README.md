# GrammarCheck - AI-Powered Grammar Correction & Rewriting

A modern, professional grammar correction website with AI-powered text rewriting in multiple styles. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ **Instant Grammar Correction** - Professional-grade grammar, spelling, and punctuation correction
- 🎨 **15+ Writing Styles** - Rewrite text in Formal, Friendly, Casual, Professional, and more
- 🤖 **AI-Powered** - Powered by OpenAI GPT-4 or Google Gemini
- 📱 **Modern UI** - Beautiful, responsive design with liquid software aesthetics
- ⚡ **Real-time Processing** - Instant results with loading states
- 📋 **Copy to Clipboard** - Easy copying of corrected and rewritten text
- 🔧 **Configurable** - Choose between OpenAI and Gemini AI providers

## Writing Styles Available

- Formal
- Friendly
- Casual
- Professional
- Diplomatic
- Confident
- Middle School
- High School
- Academic
- Simplified
- Vivid
- Empathetic
- Luxury
- Engaging
- Direct Persuasive

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **AI Providers**: OpenAI GPT-4 / Google Gemini
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key or Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd grammarcheck
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   # OpenAI API Configuration
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Google Gemini API Configuration
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Choose your preferred AI provider: "openai" or "gemini"
   AI_PROVIDER=openai
   
   # Next.js Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Configuration

### OpenAI Setup
1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to `.env.local` as `OPENAI_API_KEY`
3. Set `AI_PROVIDER=openai`

### Google Gemini Setup
1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `.env.local` as `GEMINI_API_KEY`
3. Set `AI_PROVIDER=gemini`

## Project Structure

```
grammarcheck/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Hero header
│   ├── TextInput.tsx      # Text input form
│   ├── GrammarResult.tsx  # Grammar correction display
│   └── RewriteResults.tsx # Writing styles display
├── lib/                   # Utility functions
│   └── ai.ts             # AI service functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Usage

1. **Enter Text**: Type or paste your text in the input field (max 1000 characters)
2. **Check Grammar**: Click the send button to process your text
3. **View Results**: 
   - See the grammar-corrected version
   - Explore 15+ different writing style rewrites
4. **Copy Text**: Use the copy buttons to copy any result to your clipboard

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app is built with Next.js and can be deployed to any platform that supports Node.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@grammarcheck.com or create an issue in the repository.

---

Built with ❤️ by the GrammarCheck Team 