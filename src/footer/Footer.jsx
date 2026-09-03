import React from 'react'
import Logo from '../components/Logo.jsx'
import { Mail, MapPin, ArrowUp } from 'lucide-react'

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0b192c] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block focus-visible:outline-blue-400 rounded-lg">
              <Logo variant="light" size="md" />
            </a>
            <p className="text-sm text-slate-300 font-medium">
              Tecnología que impulsa tu negocio.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Soluciones tecnológicas pensadas para hacer más simple tu trabajo. Desarrollo de software y web, automatización de procesos y soporte técnico.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium pt-1">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Tres Arroyos, Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  ¿Por qué TresaSoft?
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:TresArroyosSoft@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>TresArroyosSoft@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tresasoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>@tresasoft</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 TresaSoft — Soluciones Tecnológicas. Todos los derechos reservados.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 rounded focus-visible:outline-blue-400"
            aria-label="Volver arriba de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}