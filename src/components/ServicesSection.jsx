import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import ServiceDetailModal from './ServiceDetailModal.jsx'
import { servicesData } from '../data/servicesData.js'


export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="servicios" aria-labelledby="services-title" className="services-section section-space">
      <div className="page-container">
        <div className="services-heading">
          <p className="section-eyebrow">Servicios</p>
          <h2 id="services-title" className="section-title">Soluciones digitales y soporte técnico</h2>
        </div>

        <div className="sv-list-wrap">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.id} aria-labelledby={`${service.id}-title`} className="sv-card">
                <div className="sv-main">
                  <div className="sv-top">
                    <span className="sv-icon">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="sv-badge">{service.badge}</span>
                  </div>
                  <h3 id={`${service.id}-title`}>{service.title}</h3>
                  <p className="sv-desc">{service.description}</p>
                </div>

                <div className="sv-areas">
                  <p className="sv-kicker">Áreas de trabajo</p>
                  <ul className="sv-list">
                    {service.summaryList.map((bullet) => (
                      <li key={bullet}>
                        <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  aria-haspopup="dialog"
                  aria-label={`Ver detalles de ${service.title}`}
                  className="sv-action group/action"
                >
                  <span>Ver detalles</span>
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/action:translate-x-1" />
                </button>
              </article>
            )
          })}
        </div>

        <p className="services-help">
          Cada proyecto tiene sus particularidades. <a href="#contacto">Consultanos por tu caso</a>.
        </p>
      </div>

      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}
