import React, { useEffect, useRef, useState } from 'react'
import { MessageCircle, ArrowUpRight, X } from 'lucide-react'
import { whatsappContacts } from '../data/whatsappContacts.js'

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const firstContactRef = useRef(null)

  const closeAndRestoreFocus = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    const hero = document.getElementById('inicio')
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting)
      if (entry.isIntersecting) setIsOpen(false)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

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

  if (isHeroVisible) return null

  return (
    <div
      ref={containerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
      }}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {isOpen ? (
        <div id="whatsapp-contacts" role="dialog" aria-labelledby="whatsapp-heading" aria-describedby="whatsapp-description" className="whatsapp-dialog-appear max-h-[calc(100dvh-7rem)] w-[min(21rem,calc(100vw-2.5rem))] overflow-y-auto overscroll-contain rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_50px_-10px_rgba(11,25,44,0.28)]">
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 id="whatsapp-heading" className="text-base font-bold text-[#0b192c]">Hablemos por WhatsApp</h2>
              <p id="whatsapp-description" className="mt-1 text-sm leading-relaxed text-slate-600">Elegí con quién querés conversar.</p>
            </div>
            <button type="button" onClick={closeAndRestoreFocus} className="-mr-2 -mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-all duration-150 hover:bg-slate-100 hover:text-slate-700 active:scale-90" aria-label="Cerrar opciones de WhatsApp">
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {whatsappContacts.map((contact, index) => (
              <a
                key={contact.name}
                ref={index === 0 ? firstContactRef : undefined}
                href={`https://wa.me/${contact.number}?text=${encodeURIComponent(`Hola ${contact.name}! Te contacto desde la web de TresaSoft.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAndRestoreFocus}
                className="group flex min-h-[66px] items-center gap-3.5 rounded-xl border border-slate-200/90 px-3.5 py-3 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50/70 hover:shadow-sm active:scale-[0.98]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100/80 text-base font-bold text-emerald-800 transition-transform duration-200 group-hover:scale-105" aria-hidden="true">{contact.name[0]}</span>
                <span className="flex-1 text-sm font-bold text-[#0b192c]">{contact.name}</span>
                <span className="sr-only">, abrir WhatsApp en una pestaña nueva</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-700" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-3.5 text-center text-xs leading-relaxed text-slate-500">La conversación se abre en WhatsApp.</p>
        </div>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="whatsapp-fab-trigger flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-600 text-white shadow-[0_8px_24px_rgba(4,120,87,0.32)] transition-all duration-200 hover:bg-emerald-700 hover:scale-105 active:scale-95"
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
