import { ExternalLink, Mail } from 'lucide-react'

export default function CTA({ darkMode }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className={`rounded-lg p-12 text-center ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'}`}>
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Follow my journey and connect with me on LinkedIn to stay updated with my latest projects and insights.
        </p>
        <a
          href="https://www.linkedin.com/in/jagadeeshmadagundi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail size={20} />
          Connect on LinkedIn
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  )
}
