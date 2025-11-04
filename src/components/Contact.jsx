import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const email = 'you@example.com'
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <section id="contact" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Kontak</h2>
              <p className="mt-2 text-gray-600">Mari berdiskusi tentang projek Anda.</p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p className="flex items-center gap-2"><Mail size={16}/> {email}</p>
                <p className="flex items-center gap-2"><Phone size={16}/> +62 812-3456-7890</p>
                <p className="flex items-center gap-2"><MapPin size={16}/> Indonesia (Remote-friendly)</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-white shadow-lg shadow-pink-200">Email</a>
                <button onClick={copy} className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-800 ring-1 ring-gray-200 hover:ring-gray-300">
                  {copied ? 'Tersalin!' : 'Salin email'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Nama" />
                <input className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Email" type="email" />
                <input className="sm:col-span-2 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Subjek" />
                <textarea className="sm:col-span-2 h-32 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300" placeholder="Pesan" />
                <button className="sm:col-span-2 inline-flex justify-center rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Kirim (dummy)</button>
              </form>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm"><Github size={16}/> GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-800 ring-1 ring-gray-200"><Linkedin size={16}/> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
