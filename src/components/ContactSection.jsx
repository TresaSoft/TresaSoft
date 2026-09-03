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
    <section id="contacto" className="py-16 sm:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-3">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Contacto por email</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight">
            Hablemos de lo que necesitás
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Contanos qué necesitás y te respondemos a la brevedad, sin compromiso.
          </p>
        </div>

        {/* Main Grid: Direct WhatsApp Cards on Left, Fast Form on Right */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-md p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0b192c]">
              Dejanos tu consulta
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Completá los datos y se abrirá tu aplicación de correo con el mensaje listo.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Tu nombre o negocio <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Laura / Ferretería Central"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  ¿Qué necesitás? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos brevemente qué necesitás (ej: necesito una página web, se me tilda la computadora, quiero automatizar un proceso)..."
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3.5 px-6 rounded-md transition-all shadow-sm active:scale-[0.99]"
              >
                <Send className="w-5 h-5" />
                <span>Preparar email</span>
              </button>

              <p className="text-xs text-center text-slate-500 mt-2">
                Al presionar, se abrirá tu aplicación de correo.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
