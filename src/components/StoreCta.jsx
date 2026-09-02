function StoreCta() {
  return (
    <section id="tienda" className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:px-10 lg:pb-20">
      <div className="flex flex-col gap-6 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-sky)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Tienda TresaSoft</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">PCs y consolas, próximamente.</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-ink-soft)]">Estamos preparando una selección de equipos, componentes y PlayStation para que encuentres todo en un mismo lugar.</p>
        </div>
        <a href="#tienda" aria-label="Tienda próximamente" className="shrink-0 rounded-full border border-[var(--color-primary)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white">Ir a la tienda <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default StoreCta