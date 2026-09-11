import { useId, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, ArrowRight, Users, Sparkles } from 'lucide-react'

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const descriptionId = useId()
  const isVisible = isOpen && Boolean(service)

  useLayoutEffect(() => {
    if (!isVisible) return

    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true })
      }
    }
  }, [isVisible])

  if (!isVisible) return null

  const Icon = service.icon

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="service-dialog m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-[680px] overflow-hidden rounded-xl border border-slate-200/90 bg-white p-0 text-slate-700 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="service-dialog-layout flex max-h-[90dvh] flex-col">
        {/* Top brand accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0263E2] via-[#38BDF8] to-[#0050BD]" aria-hidden="true" />

        {/* Modal Header */}
        <header className="relative shrink-0 border-b border-slate-100 bg-white px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="absolute right-4 top-4 flex size-9 cursor-pointer items-center justify-center rounded-md border border-transparent text-slate-400 transition-colors hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-[#0263E2]"
          >
            <X className="size-4.5" aria-hidden="true" />
          </button>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-100 bg-blue-50/90 px-2.5 py-1 text-xs font-bold text-[#0263E2]">
                <span className="size-1.5 rounded-full bg-[#0263E2]" aria-hidden="true" />
                {service.badge}
              </span>
            </div>

            <div className="flex items-start gap-4 pr-6 sm:pr-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0263E2] to-[#0050BD] text-white shadow-md shadow-blue-600/20">
                <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 id={titleId} className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {service.title}
                </h3>
                <p id={descriptionId} className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {service.fullDescription || service.description}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Modal Content */}
        <div className="min-h-0 space-y-6 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7">
          {/* Features section */}
          <div>
            <div className="mb-3.5 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                <Sparkles className="size-3.5 text-[#0263E2]" aria-hidden="true" />
                <span>Prestaciones incluidas en el servicio</span>
              </h4>
              <span className="text-xs font-semibold text-slate-400">{service.features.length} puntos clave</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200/70 bg-slate-50/50 p-3 transition-colors hover:border-slate-300 hover:bg-slate-50">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-[#0263E2]">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="flex items-start gap-3.5 rounded-lg border border-blue-100 bg-blue-50/50 p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-blue-100 bg-white text-[#0263E2] shadow-sm">
              <Users className="size-4.5" strokeWidth={2} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">¿Para quién está pensado?</h4>
              <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{service.targetAudience}</p>
            </div>
          </div>

          {/* Value proposition / Benefit quote */}
          <div className="rounded-lg border border-slate-200/80 border-l-4 border-l-[#0263E2] bg-white p-4 shadow-sm">
            <p className="text-sm font-medium italic leading-relaxed text-slate-700">
              «{service.benefitQuote}»
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <footer className="flex shrink-0 flex-col-reverse items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:gap-4 sm:px-8 sm:py-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 sm:w-auto"
          >
            Cerrar
          </button>

          <a
            href="#contacto"
            onClick={onClose}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#0263E2] to-[#0050BD] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:from-[#0050BD] hover:to-[#003E94] sm:w-auto"
          >
            <span>Consultar por este servicio</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </dialog>,
    document.body
  )
}
