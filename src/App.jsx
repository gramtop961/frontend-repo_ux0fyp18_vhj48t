import HeaderHero from './components/HeaderHero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderHero />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
