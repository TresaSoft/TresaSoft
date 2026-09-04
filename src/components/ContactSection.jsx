import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    const subject = `Consulta de ${name}`
    const body = `Hola TresaSoft,\n\nMi nombre es ${name}.\n\nConsulta:\n${message}`
    const url = `mailto:TresArroyosSoft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="py-14 sm:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Contacto por email</span>
          </div>
          <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight uppercase">
            Hablemos de lo que necesitás
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] text-slate-500 leading-relaxed font-normal">
            Contanos qué necesitás y te respondemos a la brevedad, sin compromiso.
          </p>
        </div>

        {/* Main Grid: Direct WhatsApp Cards on Left, Fast Form on Right */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Mail className="h-4 w-4" />
              </div>
              <h3 className="text-base font-bold text-[#0b192c] uppercase tracking-wide">
              Dejanos tu consulta
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Completá los datos y se abrirá tu aplicación de correo con el mensaje listo.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              
              <div>
                <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Tu nombre o negocio <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Laura / Ferretería Central"
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-xs font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  ¿Qué necesitás? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos brevemente qué necesitás..."
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-xs font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-5 rounded-lg transition-all shadow-sm active:scale-[0.99] uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Preparar email</span>
              </button>

              <p className="text-[10px] text-center text-slate-500 mt-1 uppercase tracking-wider">
                Al presionar, se abrirá tu aplicación de correo.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
