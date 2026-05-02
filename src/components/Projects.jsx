import { ExternalLink, Github } from 'lucide-react'

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: 'Python Learning Platform',
      description: 'Comprehensive learning roadmap for Python backend development and microservices',
      tags: ['React', 'Python', 'Backend', 'Educational'],
      github: 'https://github.com/jagadeesh545/python-learning',
      live: 'https://jagadeesh545.github.io/python-learning/'
    },
    {
      title: 'HPC & AI Learning Guide',
      description: 'Complete guide for learning High-Performance Computing and AI systems',
      tags: ['HPC', 'AI/ML', 'Systems', 'Educational'],
      github: 'https://github.com/jagadeesh545/hpc-ai',
      live: 'https://jagadeesh545.github.io/hpc-ai/'
    }
  ]

  return (
    <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`card rounded-lg p-8 ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'}`}
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-gray-600 text-gray-200' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Github size={18} />
                  Repository
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
