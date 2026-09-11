import React, { useEffect, useRef, useState } from 'react'
import { MessageCircle, ArrowUpRight, X } from 'lucide-react'

const contacts = [
  { name: 'Mateo', number: '5492983388094' },
  { name: 'Juan', number: '5492983600680' },
]

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const firstContactRef = useRef(null)

  const closeAndRestoreFocus = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!isOpen) return

    firstContactRef.current?.focus()

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {isOpen ? (
        <div id="whatsapp-contacts" role="dialog" aria-labelledby="whatsapp-heading" aria-describedby="whatsapp-description" className="max-h-[calc(100dvh-7rem)] w-[min(21rem,calc(100vw-2.5rem))] overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white p-5 shadow-[0_16px_56px_-8px_rgba(11,25,44,0.24)]">
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 id="whatsapp-heading" className="text-base font-bold text-[#0b192c]">Hablemos por WhatsApp</h2>
              <p id="whatsapp-description" className="mt-1.5 text-sm leading-relaxed text-slate-600">Elegí con quién querés conversar.</p>
            </div>
            <button type="button" onClick={closeAndRestoreFocus} className="-mr-2 -mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800" aria-label="Cerrar opciones de WhatsApp">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {contacts.map((contact, index) => (
              <a
                key={contact.name}
                ref={index === 0 ? firstContactRef : undefined}
                href={`https://wa.me/${contact.number}?text=${encodeURIComponent(`Hola ${contact.name}! Te contacto desde la web de TresaSoft.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAndRestoreFocus}
                className="group flex min-h-[68px] items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 transition-colors hover:border-emerald-200 hover:bg-emerald-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-base font-bold text-emerald-800" aria-hidden="true">{contact.name[0]}</span>
                <span className="flex-1 text-sm font-bold text-[#0b192c]">{contact.name}</span>
                <span className="sr-only">, abrir WhatsApp en una pestaña nueva</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-emerald-700" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">La conversación se abre en WhatsApp.</p>
        </div>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-700 text-white shadow-[0_6px_24px_rgba(4,120,87,0.25)] transition-colors hover:bg-emerald-800"
        aria-label={isOpen ? 'Cerrar opciones de WhatsApp' : 'Elegir contacto de WhatsApp'}
        aria-expanded={isOpen}
        aria-controls="whatsapp-contacts"
        aria-haspopup="dialog"
      >
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageCircle className="h-7 w-7" aria-hidden="true" />}
      </button>
    </div>
  )
}
