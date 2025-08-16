import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
      <article className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">How writing with clear grammar gets you an edge in your workplace</h2>
        <p className="text-sm text-gray-500 mb-4">Published: July 2024</p>
        <div className="prose prose-lg max-w-none">
          <p>
            In today&apos;s fast-paced professional world, clear and correct grammar is more than just a nicety—it&apos;s a competitive advantage. Whether you&apos;re writing emails, reports, or presentations, your ability to communicate clearly can set you apart from your peers.
          </p>
          <p>
            Well-written communication reduces misunderstandings, builds trust, and demonstrates attention to detail. Employers and colleagues are more likely to value your input when your writing is concise and error-free. In fact, studies show that professionals who write well are often perceived as more competent and credible.
          </p>
          <p>
            By prioritizing clear grammar, you not only avoid costly mistakes but also position yourself as a leader in your workplace. Start refining your writing today and experience the difference it can make in your career!
          </p>
        </div>
      </article>
      <div className="text-center">
        <a href="/" className="text-purple-600 hover:underline">&larr; Back to Home</a>
      </div>
    </div>
  );
}