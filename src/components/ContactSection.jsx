import React, { useState } from 'react'
import { ArrowRight, ChevronDown, Cpu, ShieldCheck, Sparkles, Users, Wrench } from 'lucide-react'
import { servicesData } from '../data/servicesData.js'

const contactEmail = 'TresArroyosSoft@gmail.com'
const messageMaxLength = 3000
const serviceLabels = {
  'software-web': 'Software y desarrollo web',
  automatizacion: 'Automatización de procesos',
  'soporte-tecnico': 'Soporte técnico informático',
}

const whyPoints = [
  {
    title: 'Evaluación de tu consulta',
    desc: 'Revisamos tu necesidad y las herramientas disponibles para proponer un trabajo con un objetivo concreto.',
    icon: Sparkles,
  },
  {
    title: 'Contacto con el equipo',
    desc: 'Juan y Mateo atienden las consultas y llevan adelante el trabajo. Podés hablar con ellos durante el proyecto.',
    icon: Users,
  },
  {
    title: 'Orientación técnica',
    desc: 'Te explicamos las recomendaciones y respondemos tus dudas para que puedas decidir con información.',
    icon: Cpu,
  },
  {
    title: 'Asistencia después de la entrega',
    desc: 'Podés consultarnos sobre el uso de las herramientas y las necesidades de mantenimiento que surjan.',
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
    <section id="contacto" aria-labelledby="contact-heading" className="contact-section section-space">
      <div className="page-container">
        {/* Encabezado centrado de la sección */}
        <div className="contact-header-block">
          <h2 id="contact-heading" className="section-title">
            Consultanos por tu proyecto
          </h2>
          <p className="section-intro contact-intro">
            Contanos qué necesitás desarrollar, qué proceso querés mejorar o qué problema tiene tu equipo.
          </p>
        </div>

        <div className="contact-shell">
          <div className="contact-main-col">
            {/* Columna izquierda: Información clara y atención cercana */}
            <div className="contact-trust-wrapper">
              <div className="contact-trust-header">
                <span className="contact-trust-kicker">El equipo de TresaSoft</span>
                <h3>Una consulta es el punto de partida</h3>
                <p className="contact-trust-intro">
                  No hace falta que tengas una solución definida. Conocer tu actividad y el problema que querés resolver nos permite evaluar cómo ayudarte.
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
                  <h3 id="contact-form-title">Consulta por correo</h3>
                  <p className="contact-form-subtext">
                    Dejanos el contexto de tu consulta para poder evaluarla.
                  </p>
                </div>

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
                    rows={5}
                    maxLength={messageMaxLength}
                    aria-describedby="contact-message-hint"
                    placeholder="Ej.: Llevo el stock en Excel y necesito registrar las ventas y actualizar las cantidades."
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
                  <div className="contact-submit-footer">
                    <ShieldCheck size={18} className="text-emerald-700 shrink-0" aria-hidden="true" />
                    <p id="contact-email-hint" className="contact-email-hint">
                      Se abrirá tu aplicación de correo con el mensaje preparado. Revisalo y enviá la consulta desde allí.
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

