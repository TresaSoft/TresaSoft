import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const contacts = [
  {
    name: 'Mateo',
    number: '5492983388094',
  },
  {
    name: 'Juan',
    number: '5492983600680',
  },
]

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsapp = (contact) => {
    const text = `Hola ${contact.name}! Te contacto desde la web de TresaSoft.`
    window.open(`https://wa.me/${contact.number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <div className="w-[min(19rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(11,25,44,0.16)]">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
            <div>
              <p className="text-sm font-bold text-slate-900">¿Con quién querés hablar?</p>
              <p className="mt-1 text-xs text-slate-500">Elegí el contacto que necesitás.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Cerrar opciones de WhatsApp"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-2 space-y-1">
            {contacts.map((contact) => (
              <button
                key={contact.name}
                type="button"
                onClick={() => openWhatsapp(contact)}
                className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left transition-colors hover:bg-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg" aria-hidden="true">
                  👨‍💻
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">{contact.name}</span>
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full border-t border-slate-100 pt-3 text-center text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Cancelar
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-transform hover:scale-105 hover:bg-emerald-600"
        aria-label={isOpen ? 'Cerrar opciones de WhatsApp' : 'Elegir contacto de WhatsApp'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  )
}
