import { useId, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, ArrowRight } from 'lucide-react'

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  const dialogRef = useRef(null)
  const titleId = useId()
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
      className="service-dialog m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-[620px] overflow-hidden rounded-xl border border-[#c8ddf6] bg-white p-0 text-slate-700 shadow-2xl backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm"
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
        <header className="relative shrink-0 border-b border-[#c8ddf6] bg-[#f8fafc] px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-lg text-slate-700 bg-slate-100 transition-all duration-150 hover:bg-slate-200 hover:text-slate-900 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#0263E2]"
          >
            <X className="size-6" aria-hidden="true" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border-2 border-[#c8ddf6] bg-white text-slate-800 shadow-sm">
              <Icon className="size-6 text-[#0263E2]" strokeWidth={2} aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0263E2]">
                {service.badge}
              </span>
              <h3 id={titleId} className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-slate-900">
                {service.title}
              </h3>
            </div>
          </div>
        </header>

        {/* Modal Content: Clean white body with list items */}
        <div className="min-h-0 overflow-y-auto overscroll-contain bg-white px-6 py-6 sm:px-8 sm:py-7">
          <div className="mb-5 pb-3 border-b border-[#c8ddf6]">
            <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900 tracking-tight">
              Trabajos que realizamos
            </h4>
          </div>
          
          <ul className="space-y-4">
            {service.features.map((item) => (
              <li key={item} className="flex items-start gap-3.5 text-base leading-relaxed text-slate-800 font-normal">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-[#0263E2]" aria-hidden="true">
                  <Check className="size-5" strokeWidth={2.6} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer: Action button only */}
        <footer className="flex shrink-0 items-center justify-end border-t border-[#c8ddf6] bg-[#f8fafc] px-6 py-4 sm:px-8">
          <a
            href="#contacto"
            onClick={onClose}
            className="group/modal-btn inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#0263E2] px-7 py-3 text-base font-bold text-white shadow-sm transition-all duration-150 hover:bg-[#0050BD] active:scale-[0.98] sm:w-auto"
          >
            <span>Consultar por este servicio</span>
            <ArrowRight className="size-5 transition-transform duration-200 ease-out group-hover/modal-btn:translate-x-1" aria-hidden="true" />
          </a>
        </footer>
      </div>
    </dialog>,
    document.body
  )
}
