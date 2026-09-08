import React from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const handleEmailSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const nameField = form.elements.namedItem('name')
    const messageField = form.elements.namedItem('message')

    nameField.setCustomValidity(nameField.value.trim() ? '' : 'Escribí tu nombre o el de tu negocio.')
    messageField.setCustomValidity(messageField.value.trim() ? '' : 'Contanos brevemente qué necesitás.')
    if (!form.reportValidity()) return

    const name = nameField.value.trim()
    const message = messageField.value.trim()
    const subject = `Consulta de ${name}`
    const body = `Hola TresaSoft,\n\nMi nombre es ${name}.\n\nConsulta:\n${message}`
    window.location.href = `mailto:TresArroyosSoft@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="contact-section section-space">
      <div className="page-container">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="section-kicker">Empecemos por una conversación</p>
            <h2 id="contact-heading" className="section-title">Hablemos de lo que necesitás.</h2>
            <p className="section-intro">
              Contanos tu idea, el problema a resolver o lo que querés mejorar. No hace falta que tengas la solución definida.
            </p>

            <ul className="contact-direct">
              <li><MapPin aria-hidden="true" /><span><strong>Cerca tuyo</strong>Tres Arroyos, Buenos Aires</span></li>
              <li><MessageCircle aria-hidden="true" /><span><strong>Trato directo</strong>Hablás con quienes hacen el trabajo</span></li>
              <li><Mail aria-hidden="true" /><span><strong>También por correo</strong><a href="mailto:TresArroyosSoft@gmail.com">TresArroyosSoft@gmail.com</a></span></li>
            </ul>
          </div>

          <form onSubmit={handleEmailSubmit} onInput={(event) => event.target.setCustomValidity('')} className="contact-form">
            <div className="contact-form-heading">
              <div><span>Tu consulta</span><strong>Contanos el contexto</strong></div>
              <span>2 campos</span>
            </div>

            <div>
              <label htmlFor="contact-name">Tu nombre o negocio</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Ej.: Laura / Ferretería Central" />
            </div>

            <div>
              <label htmlFor="contact-message">¿Qué necesitás?</label>
              <textarea id="contact-message" name="message" required rows={6} maxLength={3000} aria-describedby="contact-message-hint" placeholder="Me gustaría crear una web para mi negocio…" />
              <p id="contact-message-hint">Con unas líneas alcanza para empezar.</p>
            </div>

            <button type="submit" className="button-primary w-full" aria-describedby="contact-email-hint">
              Preparar correo <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            <p id="contact-email-hint" className="contact-email-hint">
              Se abrirá tu aplicación de correo con el mensaje listo para revisar y enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
