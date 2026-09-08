import { useState } from 'react'
import { Code2, Cpu, Wrench, ArrowRight, Check } from 'lucide-react'
import ServiceDetailModal from './ServiceDetailModal.jsx'

export const servicesData = [
  {
    id: 'software-web',
    title: 'Desarrollo de Software y Web',
    badge: 'Sistemas & Web',
    icon: Code2,
    color: 'blue',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    accentText: 'text-blue-700',
    accentIconBg: 'bg-blue-600',
    accentIconHover: 'hover:bg-blue-700',
    accentShadow: 'shadow-blue-600/20',
    description: 'Desarrollamos sistemas y páginas web adaptadas a las necesidades de cada proyecto.',
    fullDescription: 'Creamos herramientas digitales claras, modernas y accesibles para que tu negocio tenga presencia en internet y gestione sus operaciones sin complicaciones.',
    summaryList: [
      'Sistemas de gestión adaptados a tu negocio',
      'Páginas web claras y adaptadas a celulares',
      'Soluciones a medida para tu forma de trabajar',
      'Optimización de procesos existentes'
    ],
    features: [
      'Desarrollo de sistemas a medida: control de stock, clientes, ventas y facturación.',
      'Diseño y desarrollo de páginas web corporativas con navegación intuitiva.',
      'Sistemas adaptados a las necesidades reales del cliente, sin funciones innecesarias.',
      'Optimización y renovación de páginas web o herramientas digitales ya existentes.',
      'Acompañamiento en el aprendizaje para que vos y tu equipo sepan usarlo sin dificultad.'
    ],
    targetAudience: 'Comercios, emprendimientos, profesionales, estudios contables y pequeñas empresas.',
    benefitQuote: 'Una herramienta pensada para tu trabajo te ahorra horas de esfuerzo y hace que tu negocio se vea más profesional.',
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos',
    badge: 'Ahorro de Tiempo',
    icon: Cpu,
    color: 'indigo',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-100',
    accentText: 'text-indigo-700',
    accentIconBg: 'bg-indigo-600',
    accentIconHover: 'hover:bg-indigo-700',
    accentShadow: 'shadow-indigo-600/20',
    description: 'Automatizamos tareas y procesos para ahorrar tiempo y simplificar el trabajo.',
    fullDescription: 'Conectamos tus sistemas y planillas para que lo repetitivo se haga de manera automática, reduciendo errores humanos y liberando tu tiempo.',
    summaryList: [
      'Automatización de tareas repetitivas',
      'Conexión entre planillas y sistemas',
      'Optimización de tiempos de trabajo',
      'Soluciones escalables e inteligentes'
    ],
    features: [
      'Automatización de tareas repetitivas en planillas Excel, Google Sheets o sistemas de gestión.',
      'Envío programado de reportes diarios de ventas, stock o caja.',
      'Integración y sincronización de datos entre distintas aplicaciones.',
      'Flujos de trabajo simplificados para que los pedidos y consultas no se pierdan.',
      'Capacitación simple para el control y seguimiento diario de los procesos.'
    ],
    targetAudience: 'Pequeños negocios, comercios y empresas que pierden tiempo cargando datos a mano todos los días.',
    benefitQuote: 'Dejá que la tecnología haga el trabajo mecánico y dedicate a atender a tus clientes y hacer crecer tu negocio.',
  },
  {
    id: 'soporte-tecnico',
    title: 'Soporte y Asistencia Técnica',
    badge: 'Puesta a Punto',
    icon: Wrench,
    color: 'teal',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-100',
    accentText: 'text-teal-700',
    accentIconBg: 'bg-teal-700',
    accentIconHover: 'hover:bg-teal-800',
    accentShadow: 'shadow-teal-700/20',
    description: 'Mantenimiento, diagnóstico, reparación y puesta a punto de equipos informáticos.',
    fullDescription: 'Cuidamos las computadoras de tu hogar o lugar de trabajo para que funcionen con la velocidad, seguridad y confiabilidad que necesitás.',
    summaryList: [
      'Mantenimiento preventivo y limpieza',
      'Diagnóstico y reparación de fallas',
      'Actualización de equipos (SSD y RAM)',
      'Equipos siempre listos y rápidos'
    ],
    features: [
      'Mantenimiento preventivo para alargar la vida útil de tus computadoras.',
      'Diagnóstico certero y reparación de fallas de hardware y sistema operativo.',
      'Limpieza física profunda de componentes internos y cambio de pasta térmica.',
      'Formateo, reinstalación de Windows y eliminación completa de virus y programas lentos.',
      'Actualización de equipos: colocación de discos de estado sólido (SSD) y memoria RAM para multiplicar la velocidad.',
      'Puesta a punto general para que trabajes rápido y sin interrupciones.'
    ],
    targetAudience: 'Comerciantes, profesionales, oficinas y particulares que necesitan que sus computadoras funcionen sin fallas.',
    benefitQuote: 'Una computadora limpia y con disco sólido nuevo revive por completo y te rinde como una máquina moderna.',
  }
]

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
          <p className="section-intro">
            Soluciones concretas, explicadas en tu idioma y adaptadas al tamaño de tu proyecto.
          </p>
        </div>

        <div className="services-list">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                aria-labelledby={`${service.id}-title`}
                className={`service-row service-row-${service.color}`}
              >
                <div className="service-row-main">
                  <div className="service-row-meta">
                    <span className="service-row-icon"><Icon size={24} strokeWidth={1.65} aria-hidden="true" /></span>
                    <span>{service.badge}</span>
                  </div>
                  <h3 id={`${service.id}-title`}>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    aria-haspopup="dialog"
                    aria-label={`Ver más sobre ${service.title}`}
                    className="service-row-action"
                  >
                    Ver el servicio <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </div>

                <div className="service-row-detail">
                  <ul>
                    {service.summaryList.map((bullet) => (
                      <li key={bullet}>
                        <Check size={17} strokeWidth={2.2} aria-hidden="true" />
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
