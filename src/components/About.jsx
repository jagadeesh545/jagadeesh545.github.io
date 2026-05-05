export default function About({ darkMode }) {
  return (
    <section id="about" className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-16`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className={`rounded-lg p-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm a passionate software engineer with expertise in backend development, microservices architecture, and high-performance computing. I specialize in building robust, scalable systems using modern technologies and best practices.
          </p>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            With a strong foundation in Python and full-stack development, I'm constantly exploring new technologies in AI, HPC, and distributed systems. I'm actively seeking opportunities to collaborate on open-source projects, share my knowledge through technical writing, and connect with like-minded professionals in the community.
          </p>
        </div>
      </div>
    </section>
  )
}
