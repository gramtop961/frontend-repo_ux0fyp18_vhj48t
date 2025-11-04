import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AniList UI Clone',
    desc: 'Eksperimen UI anime dengan fokus pada performa dan aksesibilitas.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#'
  },
  {
    title: 'Manga Reader PWA',
    desc: 'Pembaca manga offline-first dengan navigasi gestur yang halus.',
    tags: ['PWA', 'TypeScript'],
    link: '#'
  },
  {
    title: 'Portfolio v2',
    desc: 'Desain minimalis bergaya pastel dengan animasi halus.',
    tags: ['Design', 'Framer Motion'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Proyek Pilihan</h2>
            <p className="mt-2 text-gray-600">Beberapa karya yang saya banggakan.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-violet-600 hover:text-violet-700">Butuh sesuatu? Hubungi →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl bg-white p-5 shadow-lg ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-xl">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-pink-100 via-violet-100 to-indigo-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-700">
                Lihat proyek <ExternalLink size={16} />
              </a>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-violet-200" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
