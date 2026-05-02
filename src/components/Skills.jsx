export default function Skills({ darkMode }) {
  const skills = [
    {
      category: 'Backend Development',
      items: ['Python', 'FastAPI', 'Django', 'Microservices', 'REST APIs']
    },
    {
      category: 'Frontend Development',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Specializations',
      items: ['HPC Systems', 'AI/ML', 'System Architecture', 'Database Design', 'DevOps']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'CI/CD', 'Linux', 'AWS']
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillSet, idx) => (
          <div
            key={idx}
            className={`card rounded-lg p-6 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
          >
            <h3 className="text-lg font-bold mb-4">{skillSet.category}</h3>
            <ul className="space-y-2">
              {skillSet.items.map((skill, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
