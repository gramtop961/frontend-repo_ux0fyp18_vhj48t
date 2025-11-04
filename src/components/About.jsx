export default function About() {
  const skills = ['React', 'Tailwind', 'TypeScript', 'Framer Motion', 'FastAPI']
  return (
    <section id="about" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tentang Saya</h2>
            <p className="mt-2 text-gray-600">Bio singkat dan kepribadian.</p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Saya seorang pengembang frontend yang menyukai estetika anime: palet warna lembut, tipografi bersih, dan detail kecil yang membuat interaksi terasa hidup. Saya percaya desain yang baik harus sederhana, mudah dibaca, dan cepat di semua perangkat.
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900">Keahlian utama</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-full bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1 text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
