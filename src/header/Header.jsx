import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo.jsx'
import { Menu, X, MessageCircle, PhoneCall } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: '¿Por qué TresaSoft?', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="focus-visible:outline-blue-600 rounded-lg transition-opacity hover:opacity-95"
            aria-label="TresaSoft - Volver al inicio"
          >
            <Logo size="md" variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5492983388094?text=Hola%20TresaSoft!%20Quisiera%20hacerles%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/5492983388094?text=Hola%20TresaSoft!%20Quisiera%20hacerles%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp con TresaSoft"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-blue-600"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/5492983388094?text=Hola%20TresaSoft!%20Quisiera%20hacerles%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escribir por WhatsApp (Mate)</span>
              </a>
              <a
                href="https://wa.me/5492983600680?text=Hola%20TresaSoft!%20Quisiera%20hacerles%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Escribir por WhatsApp (Juan)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}