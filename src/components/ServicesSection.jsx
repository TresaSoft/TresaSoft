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
          <div>
            <p className="section-kicker">Soluciones TresaSoft</p>
            <h2 id="services-title" className="section-title">Lo que necesitás, sin vueltas.</h2>
          </div>
        </div>

        <div className="services-list">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                aria-labelledby={`${service.id}-title`}
                className="service-row group"
              >
                <div className="service-row-main">
                  <div className="service-row-meta">
                    <span className="service-row-icon">
                      <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="service-badge-pill">{service.badge}</span>
                  </div>
                  <h3 id={`${service.id}-title`}>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-action-wrap">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      aria-haspopup="dialog"
                      aria-label={`Ver más información sobre ${service.title}`}
                      className="service-row-action group/action"
                    >
                      <span>Ver más información</span>
                      <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/action:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div className="service-row-detail">
                  <div className="service-detail-kicker">¿Qué incluye este servicio?</div>
                  <ul>
                    {service.summaryList.map((bullet) => (
                      <li key={bullet}>
                        <span className="service-check-badge">
                          <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <p className="services-help">
          ¿No sabés por dónde empezar? <a href="#contacto">Contanos qué querés resolver</a> y te orientamos.
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
