import React, { useState } from 'react'
import { ArrowRight, ChevronDown, Mail, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { servicesData } from '../data/servicesData.js'

const contactEmail = 'TresArroyosSoft@gmail.com'
const messageMaxLength = 3000
const serviceLabels = {
  'software-web': 'Software y desarrollo web',
  automatizacion: 'Automatización de procesos',
  'soporte-tecnico': 'Soporte técnico informático',
}

export default function ContactSection() {
  const [messageLength, setMessageLength] = useState(0)

  const handleInput = (event) => {
    const field = event.target
    field.setCustomValidity('')
    if (field.name === 'message') setMessageLength(field.value.length)
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const nameField = form.elements.namedItem('name')
    const messageField = form.elements.namedItem('message')

    nameField.setCustomValidity(nameField.value.trim() ? '' : 'Ingresá tu nombre o el de tu negocio.')
    messageField.setCustomValidity(messageField.value.trim() ? '' : 'Describí el motivo de tu consulta.')
    if (!form.reportValidity()) return

    const name = nameField.value.trim()
    const message = messageField.value.trim()
    const service = servicesData.find(({ id }) => id === form.elements.namedItem('service').value)
    const subject = service ? `${service.title} - Consulta de ${name}` : `Consulta de ${name}`
    const serviceLine = service ? `\nServicio de interés: ${service.title}\n` : ''
    const body = `Hola TresaSoft,\n\nMi nombre es ${name}.\n${serviceLine}\nConsulta:\n${message}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="cx-section section-space">
      <div className="page-container">
        <div className="services-heading cx-heading">
          <p className="section-eyebrow">Contacto</p>
          <h2 id="contact-heading" className="section-title">Consultanos por tu proyecto</h2>
          <p className="cx-lead">Escribinos y te respondemos a la brevedad.</p>
        </div>

        <div className="cx">
          {/* Izquierda: medios de contacto directo */}
          <div className="cx-info">
            <Logo variant="light" size="lg" className="cx-logo" />
            <p className="cx-label">Datos de contacto</p>
            <ul className="cx-links">
              <li>
                <a href={`mailto:${contactEmail}`}>
                  <span className="cx-link-icon"><Mail size={20} aria-hidden="true" /></span>
                  <span className="cx-link-text">
                    <span className="cx-link-kicker">Correo</span>
                    <span className="cx-link-value">{contactEmail}</span>
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <span className="cx-link-icon"><MapPin size={20} aria-hidden="true" /></span>
                  <span className="cx-link-text">
                    <span className="cx-link-kicker">Ubicación</span>
                    <span className="cx-link-value">Tres Arroyos, Buenos Aires</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulario por correo */}
          <div className="cx-formcol">
            <form onSubmit={handleEmailSubmit} onInput={handleInput} className="contact-form cx-form" aria-labelledby="contact-form-title">
              <h3 id="contact-form-title" className="cx-form-title">Contactanos por correo</h3>

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">
                    <span>Nombre o negocio</span>
                    <span className="contact-required-mark" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={120}
                    placeholder="Ej.: Juan Gómez"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">
                    <span>Motivo de la consulta</span>
                    <span className="contact-field-optional">Opcional</span>
                  </label>
                  <div className="contact-select">
                    <select id="contact-service" name="service" defaultValue="">
                      <option value="">Consulta general</option>
                      {servicesData.map(({ id, title }) => (
                        <option key={id} value={id}>{serviceLabels[id] ?? title}</option>
                      ))}
                    </select>
                    <ChevronDown size={19} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="contact-field contact-field-message">
                <label htmlFor="contact-message">
                  <span>Detalle de la consulta</span>
                  <span className="contact-required-mark" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={messageMaxLength}
                  aria-describedby="contact-message-hint"
                  placeholder="Ej.: Llevo el stock en Excel y necesito registrar las ventas."
                />
                <div className="contact-message-meta">
                  <p id="contact-message-hint">Incluí las herramientas o el equipo que usás.</p>
                  <span className="contact-message-count" aria-label={`${messageLength} de ${messageMaxLength} caracteres`}>
                    {messageLength} / {messageMaxLength}
                  </span>
                </div>
              </div>

              <div className="contact-form-actions">
                <button type="submit" className="button-primary contact-submit-button group/submit" aria-describedby="contact-email-hint">
                  <span>Continuar en mi correo</span>
                  <ArrowRight size={20} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/submit:translate-x-1" />
                </button>
                <p id="contact-email-hint" className="ct2-hint">Se abrirá tu correo con el mensaje preparado.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
