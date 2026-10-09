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
      className="service-dialog sd"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="service-dialog-layout sd-layout">
        <header className="sd-header">
          <button type="button" onClick={onClose} aria-label="Cerrar ventana de detalles" className="sd-close">
            <X size={20} aria-hidden="true" />
          </button>

          <div className="sd-heading">
            <span className="sd-icon" aria-hidden="true">
              <Icon size={22} strokeWidth={1.75} />
            </span>
            <span className="sd-badge">{service.badge}</span>
          </div>
          <h3 id={titleId} className="sd-title">{service.title}</h3>
          <p className="sd-lead">{service.fullDescription}</p>
        </header>

        <div className="sd-body">
          <p className="sd-label">Trabajos que realizamos</p>
          <ul className="sd-list">
            {service.features.map((item) => (
              <li key={item}>
                <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sd-audience">
            <span>Ideal para</span> {service.targetAudience}
          </p>
        </div>

        <footer className="sd-footer">
          <button type="button" onClick={onClose} className="sd-secondary">Cerrar</button>
          <a
            href="#contacto"
            onClick={() => {
              onClose()
              setTimeout(() => {
                const select = document.getElementById('contact-service')
                if (select && service?.id) {
                  select.value = service.id
                  select.dispatchEvent(new Event('change', { bubbles: true }))
                }
              }, 50)
            }}
            className="sd-cta group/modal-btn"
          >
            <span>Consultar por este servicio</span>
            <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/modal-btn:translate-x-1" />
          </a>
        </footer>
      </div>
    </dialog>,
    document.body
  )
}
