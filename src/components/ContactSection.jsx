import React, { useState } from 'react'
import { MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [selectedRecipient, setSelectedRecipient] = useState('mate') // 'mate' or 'juan'

  const handleQuickWhatsapp = (e) => {
    e.preventDefault()
    const targetNumber = selectedRecipient === 'juan' ? '5492983600680' : '5492983388094'
    const recipientName = selectedRecipient === 'juan' ? 'Juan' : 'Mate'
    
    let text = `Hola ${recipientName}! Mi nombre es ${name || 'un visitante de la web'}.`
    if (phone) text += ` Mi teléfono es ${phone}.`
    if (message) text += ` Consulta: ${message}`
    else text += ` Quisiera hacerles una consulta sobre sus servicios tecnológicos.`

    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
            <span>Canales directos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            ¿Hablamos?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Ponete en contacto con nosotros directamente. Respondemos a la brevedad para asesorarte sin compromiso.
          </p>
        </div>

        {/* Main Grid: Direct WhatsApp Cards on Left, Fast Form on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Founder Contacts and Channels */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WhatsApp Cards Header */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                WhatsApp Directo (Prioridad)
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Mate WhatsApp */}
                <a
                  href="https://wa.me/5492983388094?text=Hola%20Mate!%20Te%20contacto%20desde%20la%20web%20de%20TresaSoft%20para%20hacerte%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-500 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-extrabold text-slate-900 text-lg">Mate</span>
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-emerald-800">
                    2983 - 388094
                  </span>
                  <span className="mt-2 text-xs font-semibold text-emerald-700 inline-flex items-center gap-1">
                    <span>Escribir por WhatsApp</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </a>

                {/* Juan WhatsApp */}
                <a
                  href="https://wa.me/5492983600680?text=Hola%20Juan!%20Te%20contacto%20desde%20la%20web%20de%20TresaSoft%20para%20hacerte%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-500 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-extrabold text-slate-900 text-lg">Juan</span>
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-emerald-800">
                    2983 - 600680
                  </span>
                  <span className="mt-2 text-xs font-semibold text-emerald-700 inline-flex items-center gap-1">
                    <span>Escribir por WhatsApp</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </a>

              </div>
            </div>

            {/* Other Direct Channels: Email, Instagram & Location */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">
                Otros medios de contacto
              </h3>

              {/* Email */}
              <a
                href="mailto:TresArroyosSoft@gmail.com?subject=Consulta%20desde%20la%20web%20TresaSoft"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase text-slate-500">Correo Electrónico</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 truncate">TresArroyosSoft@gmail.com</div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/tresasoft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-pink-300 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-600/10 text-pink-600 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase text-slate-500">Instagram</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">@tresasoft</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase text-slate-500">Ubicación</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-800">Tres Arroyos, Buenos Aires, Argentina</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Simple, Non-Intimidating Message Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-[#0b192c] mb-2">
              Envianos tu consulta directa
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Completá estos campos simples y abrí la conversación en WhatsApp con el mensaje ya listo:
            </p>

            <form onSubmit={handleQuickWhatsapp} className="space-y-4">
              
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nombre o Negocio <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Laura / Ferretería Central"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Teléfono / WhatsApp de contacto (opcional)
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej: 2983 - 123456"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  ¿Con quién querés comunicarte?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRecipient('mate')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedRecipient === 'mate'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    Mate (2983-388094)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRecipient('juan')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedRecipient === 'juan'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    Juan (2983-600680)
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos brevemente qué necesitás (ej: necesito una página web, se me tilda la computadora, quiero automatizar un proceso)..."
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-xl transition-all shadow-sm active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enviar consulta a WhatsApp</span>
              </button>

              <p className="text-xs text-center text-slate-500 mt-2">
                Al presionar, se abrirá WhatsApp con tu mensaje listo para enviar.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
