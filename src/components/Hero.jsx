import { ExternalLink, LinkedinIcon, Github, MessageSquare } from 'lucide-react'

export default function Hero({ darkMode }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold">Software Engineer</h2>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Building scalable systems, backend services, and AI/HPC solutions
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.linkedin.com/in/jagadeeshmadagundi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <LinkedinIcon size={20} />
            LinkedIn
            <ExternalLink size={16} />
          </a>
          <a
            href="https://medium.com/@jagadeesh545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <MessageSquare size={20} />
            Medium
            <ExternalLink size={16} />
          </a>
          <a
            href="#about"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
