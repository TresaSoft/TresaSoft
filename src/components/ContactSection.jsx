import React, { useState } from 'react'
import { ArrowRight, ChevronDown, Cpu, ShieldCheck, Sparkles, Users, Wrench } from 'lucide-react'
import { servicesData } from '../data/servicesData.js'

const contactEmail = 'TresArroyosSoft@gmail.com'
const messageMaxLength = 3000
const serviceLabels = {
  'software-web': 'Software y páginas web',
  automatizacion: 'Automatización de tareas',
  'soporte-tecnico': 'Soporte y reparación técnica',
}

const whyPoints = [
  {
    title: 'Soluciones a tu medida',
    desc: 'Conversamos sobre tu caso y te ofrecemos justo lo que necesitás, sin complicaciones ni costos de más.',
    icon: Sparkles,
  },
  {
    title: 'Trato directo y personal',
    desc: 'Hablás directamente con nosotros (Juan o Mateo). Sin intermediarios ni respuestas automáticas.',
    icon: Users,
  },
  {
    title: 'Explicaciones claras y con paciencia',
    desc: 'Te explicamos todo sin palabras raras ni tecnicismos difíciles. Te acompañamos para que uses todo con total confianza.',
    icon: Cpu,
  },
  {
    title: 'Acompañamiento y soporte continuo',
    desc: 'Seguimos a tu disposición después de terminar el trabajo para ayudarte con cualquier duda.',
    icon: Wrench,
  },
]

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

    nameField.setCustomValidity(nameField.value.trim() ? '' : 'Por favor, escribí tu nombre o el de tu negocio.')
    messageField.setCustomValidity(messageField.value.trim() ? '' : 'Por favor, contanos brevemente qué necesitás.')
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
    <section id="contacto" aria-labelledby="contact-heading" className="contact-section section-space">
      <div className="page-container">
        {/* Encabezado centrado de la sección */}
        <div className="contact-header-block">
          <h2 id="contact-heading" className="section-title contact-title">
            Hablemos de lo que necesitás
          </h2>
          <p className="section-intro contact-intro">
            Completá el formulario o consultanos lo que haga falta. Te respondemos con claridad, paciencia y sin vueltas.
          </p>
        </div>

        <div className="contact-shell">
          <div className="contact-main-col">
            {/* Columna izquierda: Información clara y atención cercana */}
            <div className="contact-trust-wrapper">
              <div className="contact-trust-header">
                <span className="contact-trust-kicker">Atención cercana</span>
                <h3>¿Por qué comunicarte con nosotros?</h3>
                <p className="contact-trust-intro">
                  Sabemos que los temas de computación y sistemas a veces generan dudas. Nuestro objetivo es hacerte las cosas fáciles y resolver tus problemas sin rodeos.
                </p>
              </div>
              <div className="contact-trust-grid">
                {whyPoints.map(({ title, desc, icon: Icon }) => (
                  <div key={title} className="contact-trust-card">
                    <div className="contact-trust-icon">
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="contact-trust-info">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: Formulario con alto contraste y letras grandes */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleEmailSubmit} onInput={handleInput} className="contact-form" aria-labelledby="contact-form-title">
                <div className="contact-form-heading">
                  <h3 id="contact-form-title">Envianos tu consulta</h3>
                  <p className="contact-form-subtext">
                    Escribí tus datos acá abajo y te responderemos a la brevedad.
                  </p>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      <span>Tu nombre o negocio</span>
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
                    <span>¿En qué te podemos ayudar?</span>
                    <span className="contact-required-mark" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    maxLength={messageMaxLength}
                    aria-describedby="contact-message-hint"
                    placeholder="Contanos qué problema tenés o qué te gustaría mejorar en tu negocio o computadora..."
                  />
                  <div className="contact-message-meta">
                    <p id="contact-message-hint">Escribí con tranquilidad y con tus propias palabras.</p>
                    <span className="contact-message-count" aria-label={`${messageLength} de ${messageMaxLength} caracteres`}>
                      {messageLength} / {messageMaxLength}
                    </span>
                  </div>
                </div>

                <div className="contact-form-actions">
                  <button type="submit" className="button-primary contact-submit-button group/submit" aria-describedby="contact-email-hint">
                    <span>Enviar mi consulta</span>
                    <ArrowRight size={20} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/submit:translate-x-1" />
                  </button>
                  <div className="contact-submit-footer">
                    <ShieldCheck size={18} className="text-emerald-700 shrink-0" aria-hidden="true" />
                    <p id="contact-email-hint" className="contact-email-hint">
                      Al presionar, se abrirá tu aplicación de correo habitual para enviar el mensaje.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

