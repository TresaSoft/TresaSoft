const benefits = [
  ['01', 'Limpieza y mantenimiento', 'Revisamos, limpiamos y optimizamos tus PCs para alargar su vida útil.'],
  ['02', 'Desarrollo a medida', 'Creamos herramientas digitales que encajan con las necesidades de tu negocio.'],
  ['03', 'Automatización de procesos', 'Conectamos tus sistemas para que el trabajo repetitivo se haga solo.'],
]

function BenefitsSection() {
  return <section id="beneficios" className="border-t border-[var(--color-line)] bg-white"><div className="mx-auto grid max-w-7xl gap-0 px-6 py-16 sm:grid-cols-3 lg:px-10 lg:py-20">{benefits.map(([number, title, text]) => <article key={number} className="border-b border-[var(--color-line)] py-6 first:pt-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-0 sm:last:pr-0 sm:py-0"><p className="text-xs font-bold text-[var(--color-primary)]">{number}</p><h2 className="mt-5 text-xl font-semibold tracking-[-0.04em]">{title}</h2><p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-ink-soft)]">{text}</p></article>)}</div></section>
}

export default BenefitsSection