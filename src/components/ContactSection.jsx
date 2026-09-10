import React, { useState } from 'react'
import { ArrowUpRight, ChevronDown, Cpu, Mail, Sparkles, Users, Wrench } from 'lucide-react'
import { servicesData } from './ServicesSection.jsx'

const contactEmail = 'TresArroyosSoft@gmail.com'
const messageMaxLength = 3000
const serviceLabels = {
  'software-web': 'Software y web',
  automatizacion: 'Automatización',
  'soporte-tecnico': 'Soporte técnico',
}

const whyPoints = [
  {
    title: 'Soluciones a medida',
    desc: 'Analizamos tu caso y armamos lo que realmente te sirve, sin paquetes cerrados ni funciones que no vas a usar.',
    icon: Sparkles,
  },
  {
    title: 'Atención personalizada',
    desc: 'Hablás directamente con nosotros. Sin intermediarios ni números de reclamo impersonales.',
    icon: Users,
  },
  {
    title: 'Tecnología simple y práctica',
    desc: 'Hacemos que lo técnico sea entendible y te acompañamos para que uses tus herramientas con tranquilidad.',
    icon: Cpu,
  },
  {
    title: 'Acompañamiento y soporte',
    desc: 'Seguimos disponibles después de entregar un trabajo o reparar un equipo.',
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

    nameField.setCustomValidity(nameField.value.trim() ? '' : 'Escribí tu nombre o el de tu negocio.')
    messageField.setCustomValidity(messageField.value.trim() ? '' : 'Contanos brevemente qué necesitás.')
    if (!form.reportValidity()) return

    const name = nameField.value.trim()
    const message = messageField.value.trim()
    const service = servicesData.find(({ id }) => id === form.elements.namedItem('service').value)
    const subject = service ? `${service.title} - Consulta de ${name}` : `Consulta de ${name}`
    const serviceLine = service ? `\nServicio: ${service.title}\n` : ''
    const body = `Hola TresaSoft,\n\nMi nombre es ${name}.\n${serviceLine}\nConsulta:\n${message}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="contact-section section-space">
      <div className="page-container">
        <div className="contact-shell">
          <div className="contact-main-col">
            <div className="contact-overview">
              <div className="contact-intro">
                <h2 id="contact-heading" className="section-title">Hablemos de lo que necesitás.</h2>
                <p className="section-intro">
                  Contanos tu idea, el problema a resolver o lo que querés mejorar. No hace falta que tengas la solución definida.
                </p>
              </div>

              <ul className="contact-support" aria-label="Forma de trabajo">
                {whyPoints.map(({ title, desc, icon: Icon }) => (
                  <li key={title}>
                    <span>
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleEmailSubmit} onInput={handleInput} className="contact-form" aria-labelledby="contact-form-title">
              <div className="contact-form-heading">
                <div>
                  <h3 id="contact-form-title">Tu consulta</h3>
                  <a className="contact-recipient" href={`mailto:${contactEmail}`}>
                    <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                    <span>{contactEmail}</span>
                  </a>
                </div>
              </div>

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Nombre o negocio</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Ej.: Laura" />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Motivo <span className="contact-field-optional">Opcional</span></label>
                  <div className="contact-select">
                    <select id="contact-service" name="service" defaultValue="">
                      <option value="">Consulta general</option>
                      {servicesData.map(({ id, title }) => (
                        <option key={id} value={id}>{serviceLabels[id] ?? title}</option>
                      ))}
                    </select>
                    <ChevronDown size={17} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="contact-field contact-field-message">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea id="contact-message" name="message" required rows={5} maxLength={messageMaxLength} aria-describedby="contact-message-hint" placeholder="Me gustaría crear una web para mi negocio…" />
                <div className="contact-message-meta">
                  <p id="contact-message-hint">Contanos qué necesitás resolver.</p>
                  <span className="contact-message-count" aria-label={`${messageLength} de ${messageMaxLength} caracteres`}>{messageLength} / {messageMaxLength}</span>
                </div>
              </div>

              <div className="contact-form-actions">
                <p id="contact-email-hint" className="contact-email-hint">
                  Revisá y enviá el mensaje desde tu aplicación de correo.
                </p>
                <button type="submit" className="button-primary" aria-describedby="contact-email-hint">
                  Preparar consulta <ArrowUpRight size={18} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
