import { useId, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, ArrowRight } from 'lucide-react'

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
      className="service-dialog m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-[620px] overflow-hidden rounded-xl border border-slate-200 bg-white p-0 text-slate-700 shadow-2xl backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="service-dialog-layout flex max-h-[90dvh] flex-col">
        {/* Modal Header: Differentiated from the list body */}
        <header className="relative shrink-0 border-b border-slate-200 bg-[#f8fafc] px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="absolute right-4 top-4 flex size-9 cursor-pointer items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200/70 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-[#0263E2]"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-start gap-4 pr-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm">
              <Icon className="size-5.5 text-[#0263E2]" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-500">
                {service.badge}
              </span>
              <h3 id={titleId} className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {service.title}
              </h3>
              <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.fullDescription || service.description}
              </p>
            </div>
          </div>
        </header>

        {/* Modal Content: Clean white body with list items without boxes */}
        <div className="min-h-0 overflow-y-auto overscroll-contain bg-white px-6 py-6 sm:px-8 sm:py-7">
          <div className="mb-5 flex items-center gap-2.5 pb-3 border-b border-slate-200">
            <span className="inline-block h-5 w-1.5 rounded-full bg-[#0263E2]" aria-hidden="true" />
            <h4 className="font-[family-name:var(--font-display)] text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              ¿Qué incluye este servicio?
            </h4>
          </div>
          
          <ul className="space-y-3.5">
            {service.features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center text-[#0263E2]" aria-hidden="true">
                  <Check className="size-4" strokeWidth={2.4} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer: Action button only */}
        <footer className="flex shrink-0 items-center justify-end border-t border-slate-200 bg-[#f8fafc] px-6 py-4 sm:px-8">
          <a
            href="#contacto"
            onClick={onClose}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#0263E2] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0050BD] sm:w-auto"
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
