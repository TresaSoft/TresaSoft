import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../components/Logo.jsx'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const mainLinks = navLinks.filter(({ href }) => href !== '#contacto')

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isPastHeroHalf, setIsPastHeroHalf] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  const isSolid = isPastHeroHalf || isMobileMenuOpen

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const updateHeader = () => {
      // El header pasa a blanco cuando ya se recorrió el 80 % del home
      const threshold = hero.offsetTop + hero.offsetHeight * 0.8
      const nextValue = window.scrollY >= threshold
      setIsPastHeroHalf((currentValue) => (currentValue === nextValue ? currentValue : nextValue))
    }

    const resizeObserver = new ResizeObserver(updateHeader)
    resizeObserver.observe(hero)
    window.addEventListener('scroll', updateHeader, { passive: true })
    updateHeader()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateHeader)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -55% 0px' })

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsMobileMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('focusin', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('focusin', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [isMobileMenuOpen])

  return (
    <header ref={headerRef} className={`site-header ${isSolid ? 'site-header-solid' : 'site-header-dark'}`}>
      <div className="page-container header-inner">
        <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="header-brand" aria-label="TresaSoft, volver al inicio">
          <Logo size="md" variant={isSolid ? 'dark' : 'light'} />
        </a>

        {/* Desktop Central Navigation Pill */}
        <nav className="nav-capsule hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {mainLinks.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'location' : undefined}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                <span>{label}</span>
              </a>
            )
          })}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="header-actions hidden items-center lg:flex">
          <a
            href="#contacto"
            className="nav-cta-btn group/cta"
            aria-label="Ir a sección de contacto"
            aria-current={activeSection === 'contacto' ? 'location' : undefined}
          >
            <span>Contacto</span>
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="menu-toggle lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
        >
          {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav
        id="mobile-navigation"
        className="mobile-navigation lg:hidden"
        aria-label="Navegación móvil"
        hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-panel">
          <div className="flex flex-col gap-1">
            {mainLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                >
                  <span>{label}</span>
                </a>
              )
            })}
          </div>
          <div className="pt-2 mt-2 border-t border-slate-100">
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-nav-cta"
              aria-current={activeSection === 'contacto' ? 'location' : undefined}
            >
              <span>Contacto</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
