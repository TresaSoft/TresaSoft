import { Code2, MapPin, Workflow, Wrench } from 'lucide-react'

const capabilities = [
  { title: 'Software y web', detail: 'Sistemas de gestión y sitios web a medida', icon: Code2, tone: 'blue' },
  { title: 'Automatización', detail: 'Integración de datos, planillas y procesos', icon: Workflow, tone: 'blue' },
  { title: 'Soporte técnico', detail: 'Diagnóstico, reparación y mantenimiento', icon: Wrench, tone: 'blue' },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-blueprint" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true" />
      <div className="hero-meteors" aria-hidden="true"><span /><span /><span /></div>

      <div className="page-container hero-layout">
        <div className="hero-copy">
          <div className="hero-location-badge">
            <span className="hero-location-dot" aria-hidden="true" />
            <MapPin size={14} strokeWidth={2} aria-hidden="true" />
            <span>Tres Arroyos, Buenos Aires</span>
          </div>

          <div className="hero-intro-row">
            <h1 id="hero-title" className="hero-title">
              Tresa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0263E2] to-[#38BDF8]">Soft</span>
            </h1>

            <div className="hero-message">
              <p className="hero-description">
                Desarrollamos software y sitios web, automatizamos tareas y brindamos soporte informático a comercios, profesionales y empresas.
              </p>
            </div>
          </div>
        </div>

        <section className="hero-system" aria-label="Servicios principales">
          <ul className="hero-capabilities">
            {capabilities.map(({ title, detail, icon: Icon, tone }) => (
              <li key={title} className={`hero-capability hero-capability-${tone}`}>
                <span className="hero-capability-icon"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
