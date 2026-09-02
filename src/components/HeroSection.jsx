import DashboardPreview from './DashboardPreview.jsx'

function HeroSection() {
  return (
    <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
      <div className="animate-rise">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]">Soporte que sí responde</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] sm:text-7xl">Menos ruido.<br /><span className="text-[var(--color-primary)]">Tecnología sin pausas.</span></h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--color-ink-soft)]">Cuidamos tus equipos, desarrollamos tus herramientas y automatizamos lo repetitivo para que tu empresa siga avanzando.</p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a href="#contacto" className="rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]">Solicitar diagnóstico <span aria-hidden="true">→</span></a>
          <a href="#servicios" className="text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8 hover:decoration-[var(--color-primary)]">Conocer servicios</a>
        </div>
      </div>
      <DashboardPreview />
    </section>
  )
}

export default HeroSection