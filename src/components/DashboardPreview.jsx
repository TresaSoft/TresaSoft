const chartHeights = [42, 65, 48, 82, 59, 91, 74]
const chartLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

function DashboardPreview() {
  return (
    <div id="servicios" className="relative animate-rise-delayed" aria-label="Resumen de servicios de TresaSoft">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[var(--color-sky-strong)]" aria-hidden="true" />
      <div className="relative rounded-[28px] border border-[var(--color-line)] bg-white p-4 shadow-[0_24px_70px_rgba(37,99,235,0.12)] sm:p-6">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-5"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Estado del servicio</p><p className="mt-1 text-xl font-semibold tracking-[-0.04em]">Tecnología bajo control</p></div><span className="rounded-full bg-[var(--color-sky)] px-3 py-1 text-xs font-bold text-[var(--color-primary)]">Activo</span></div>
        <div className="mt-6 grid grid-cols-2 gap-3"><MetricCard label="Equipos revisados" value="48" /><MetricCard label="Automatizaciones" value="12" dark /></div>
        <div className="mt-5 rounded-2xl border border-[var(--color-line)] p-4"><div className="mb-4 flex items-center justify-between text-xs font-semibold"><span>Actividad de soporte</span><span className="text-[var(--color-muted)]">Esta semana</span></div><div className="flex h-24 items-end gap-2 sm:gap-3">{chartHeights.map((height, index) => <div key={chartLabels[index]} className="flex flex-1 flex-col items-center gap-2"><div className={`w-full rounded-t-md ${index === 5 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-sky-strong)]'}`} style={{ height: `${height}%` }} /><span className="text-[10px] text-[var(--color-muted)]">{chartLabels[index]}</span></div>)}</div></div>
      </div>
    </div>
  )
}

function MetricCard({ label, value, dark = false }) {
  return <div className={`rounded-2xl p-4 ${dark ? 'bg-[var(--color-ink)] text-white' : 'bg-[var(--color-sky)]'}`}><p className={`text-xs ${dark ? 'text-[var(--color-sky-strong)]' : 'text-[var(--color-ink-soft)]'}`}>{label}</p><p className="mt-2 text-3xl font-semibold tracking-[-0.06em]">{value}</p>{dark ? <p className="mt-4 text-xs text-[var(--color-accent)]">Flujos conectados</p> : <div className="mt-4 h-1.5 rounded-full bg-[var(--color-sky-strong)]"><div className="h-full w-4/5 rounded-full bg-[var(--color-primary)]" /></div>}</div>
}

export default DashboardPreview