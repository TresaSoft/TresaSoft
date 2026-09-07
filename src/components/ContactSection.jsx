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
    <section id="contacto" className="py-20 sm:py-28 bg-contact border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-balance text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight">
            Hablemos de lo que necesitás
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-normal">
            Completá el formulario y te respondemos a la brevedad, sin compromiso.
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm shadow-slate-900/5">
            <form onSubmit={handleEmailSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="contact-name" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  Tu nombre o negocio <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Laura / Ferretería Central"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none text-[14px] font-medium transition-all duration-200 hover:border-slate-400"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[13px] font-semibold text-slate-700 mb-1.5">
                  ¿Qué necesitás? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos brevemente qué necesitás…"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none text-[14px] font-medium resize-y transition-all duration-200 hover:border-slate-400 min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-md shadow-blue-600/25 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar consulta</span>
              </button>

              <p className="text-[12px] text-center text-slate-400">
                Se abrirá tu aplicación de correo con el mensaje listo para enviar.
              </p>

            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[13px] text-slate-500">
              ¿Preferís escribir directo?{' '}
              <a href="mailto:TresArroyosSoft@gmail.com" className="font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2">
                TresArroyosSoft@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}