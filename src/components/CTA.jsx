import { ExternalLink, Mail, Github, MessageSquare } from 'lucide-react'

export default function CTA({ darkMode }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className={`rounded-lg p-12 text-center ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'}`}>
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm always open to discussing new ideas, sharing knowledge, and collaborating on open-source projects. Let's build something great together!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
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
          <a
            href="https://github.com/jagadeesh545"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
          >
            <Github size={20} />
            Collaborate on GitHub
          </a>
          <a
            href="https://medium.com/@jagadeesh545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <MessageSquare size={20} />
            Read on Medium
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
