import { useId, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, ArrowRight, Users } from 'lucide-react'

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
      className="service-dialog m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-[720px] overflow-hidden rounded-xl border border-slate-200 bg-white p-0 text-slate-700 shadow-2xl backdrop:bg-slate-950/65 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="service-dialog-layout flex max-h-[90dvh] flex-col">
        <header className={`relative shrink-0 border-b px-5 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-8 ${service.accentBg} ${service.accentBorder}`}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="absolute right-3 top-3 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white hover:text-slate-900 sm:right-4 sm:top-4"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <div className="mb-5 flex items-center gap-3 pr-10">
            <div className={`flex size-11 shrink-0 items-center justify-center rounded-lg text-white ${service.accentIconBg}`}>
              <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
            </div>
            <span className={`text-xs font-semibold ${service.accentText}`}>
              {service.badge}
            </span>
          </div>
          <h3 id={titleId} className="max-w-[32rem] font-[family-name:var(--font-display)] text-[23px] leading-[1.35] font-semibold tracking-[-0.035em] text-[#0b192c] sm:text-[28px]">
            {service.title}
          </h3>
        </header>

        <div className="min-h-0 space-y-7 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-7">
          <p id={descriptionId} className="text-[15px] leading-[1.85] text-slate-600">
            {service.fullDescription || service.description}
          </p>

          <div>
            <h4 className="mb-4 text-base font-bold text-[#0b192c]">¿Qué incluye?</h4>
            <ul className="space-y-4">
              {service.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-[1.75] text-slate-600">
                  <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${service.accentBg} ${service.accentText}`}>
                    <Check className="size-3.5" strokeWidth={2.3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-lg border p-5 ${service.accentBg} ${service.accentBorder}`}>
            <h4 className={`mb-2 flex items-center gap-2 text-sm font-bold ${service.accentText}`}>
              <Users className="size-4 shrink-0" aria-hidden="true" />
              <span>¿Para quién está pensado?</span>
            </h4>
            <p className="text-sm leading-[1.8] text-slate-700">{service.targetAudience}</p>
          </div>

          <p className={`border-l-2 pl-4 text-sm leading-[1.85] text-slate-600 ${service.accentBorder}`}>
            {service.benefitQuote}
          </p>
        </div>

        <footer className="flex shrink-0 flex-col-reverse items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:gap-4 sm:px-8 sm:py-5">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 sm:w-auto"
          >
            Cerrar
          </button>

          <a
            href="#contacto"
            onClick={onClose}
            className={`inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-colors sm:w-auto ${service.accentIconBg} ${service.accentIconHover}`}
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
