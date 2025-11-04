import { Mail, Github, Linkedin, Sparkles } from 'lucide-react'

export default function HeaderHero() {
  return (
    <header id="home" className="relative overflow-hidden">
      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-violet-50 to-white" aria-hidden="true" />

      {/* twinkling particles */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          {Array.from({ length: 40 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 100 + '%'} cy={Math.random() * 100 + '%'} r={Math.random() * 1.2 + 0.3} fill="url(#g)" />
          ))}
        </svg>
      </div>

      <nav className="relative z-10 mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-400 to-violet-500 grid place-items-center text-white shadow-lg">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold text-gray-800">My Animefolio</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Proyek</a>
          <a href="#about" className="hover:text-gray-900">Tentang</a>
          <a href="#contact" className="hover:text-gray-900">Kontak</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm ring-1 ring-gray-200">
              <span className="inline-block h-2 w-2 rounded-full bg-pink-500" />
              Open to opportunities
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-gray-900">Halo, saya </span>
              <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">Developer Frontend</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Suka membangun antarmuka yang bersih, responsif, dan terinspirasi nuansa anime. Fokus pada pengalaman pengguna dan performa.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-white shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-shadow">
                <Mail size={18} /> Hubungi saya
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-800 ring-1 ring-gray-200 hover:ring-gray-300">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-800 ring-1 ring-gray-200 hover:ring-gray-300">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-tr from-pink-200 via-violet-200 to-indigo-200 p-1 shadow-xl">
              <div className="h-full w-full rounded-full bg-white grid place-items-center text-7xl">
                <span role="img" aria-label="anime">🌸</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-gray-100 text-xs">
              <span className="font-semibold">Tailwind</span> • React • UX
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
