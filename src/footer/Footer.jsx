import React from 'react'
import Logo from '../components/Logo.jsx'
import { Mail, MapPin, ArrowUp } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#38BDF8]" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const navigation = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#beneficios', label: '¿Por qué TresaSoft?' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#07101d] text-slate-300">
      <div className="page-container pb-24 pt-14 sm:pb-8 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#inicio" aria-label="TresaSoft, volver al inicio" className="inline-block rounded-lg focus-visible:outline-[#0263E2]">
              <Logo variant="light" size="md" />
            </a>
            <p className="mt-6 text-base font-semibold text-white">Tecnología que impulsa tu negocio.</p>
            <p className="mt-3 max-w-[350px] text-sm leading-7 text-slate-400">
              Soluciones tecnológicas pensadas para hacer más simple tu trabajo. Desarrollo de software y web, automatización de procesos y soporte técnico.
            </p>
            <p className="mt-5 flex items-start gap-2.5 text-sm leading-6 text-slate-300">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#38BDF8]" aria-hidden="true" />
              <span>Tres Arroyos, Buenos Aires, Argentina</span>
            </p>
          </div>

          <nav aria-label="Navegación del pie de página" className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold text-white">Navegación</h3>
            <ul className="space-y-0.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-10 items-center rounded transition-colors hover:text-white focus-visible:outline-[#0263E2]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-4">
            <h3 className="mb-4 text-sm font-bold text-white">Contacto directo</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:TresArroyosSoft@gmail.com" className="inline-flex min-h-10 max-w-full items-center gap-3 rounded transition-colors hover:text-white focus-visible:outline-[#0263E2]">
                  <Mail className="h-4 w-4 shrink-0 text-[#38BDF8]" aria-hidden="true" />
                  <span className="break-all">TresArroyosSoft@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tresasoft" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-3 rounded transition-colors hover:text-white focus-visible:outline-[#0263E2]">
                  <InstagramIcon />
                  <span>@tresasoft</span>
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:pr-20 lg:mt-16">
          <p>© {new Date().getFullYear()} TresaSoft · Soluciones Tecnológicas</p>
          <a href="#inicio" className="inline-flex min-h-11 items-center gap-2 rounded px-1 text-slate-300 transition-colors hover:text-white focus-visible:outline-[#0263E2]">
            <span>Volver arriba</span>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
