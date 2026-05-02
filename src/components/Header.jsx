import { Moon, Sun } from 'lucide-react'

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">JM</div>
          <h1 className="text-xl font-bold">Jagadeesh Madagundi</h1>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}
