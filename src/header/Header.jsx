import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from '../components/Logo.jsx'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

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

  const renderLink = ({ label, href }) => (
    <a
      key={href}
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      aria-current={activeSection === href.slice(1) ? 'location' : undefined}
      className={`nav-link ${href === '#contacto' ? 'nav-link-contact' : ''}`}
    >
      {label}
      {href === '#contacto' ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
    </a>
  )

  return (
    <header ref={headerRef} className="site-header site-header-solid">
      <div className="page-container flex min-h-20 items-center justify-between gap-6">
        <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="rounded-md" aria-label="TresaSoft, volver al inicio">
          <Logo size="md" variant="dark" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map(renderLink)}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="menu-toggle lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
        >
          {isMobileMenuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation lg:hidden"
        aria-label="Navegación móvil"
        hidden={!isMobileMenuOpen}
      >
        <div className="page-container flex flex-col gap-1 py-4">
          {navLinks.map(renderLink)}
        </div>
      </nav>
    </header>
  )
}
