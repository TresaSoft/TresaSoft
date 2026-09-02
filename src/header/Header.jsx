function Header() {
  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-10">
      <nav className="flex items-center justify-between py-7" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-bold tracking-[-0.04em]">
          <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-[var(--color-primary)] text-sm font-black text-white" aria-hidden="true">T</span>
          TresaSoft
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--color-ink-soft)] md:flex">
          <a href="#servicios" className="transition hover:text-[var(--color-primary)]">Servicios</a>
          <a href="#beneficios" className="transition hover:text-[var(--color-primary)]">Servicios</a>
          <a href="#contacto" className="transition hover:text-[var(--color-primary)]">Contacto</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#tienda" className="hidden rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:block">Tienda <span className="ml-1 text-[10px] font-bold uppercase text-[var(--color-primary)]">Próximamente</span></a>
          <a href="#contacto" className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]">Hablemos <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}

export default Header