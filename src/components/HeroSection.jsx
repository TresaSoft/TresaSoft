import { ArrowDown, ArrowRight, Code2, MapPin, Workflow, Wrench } from 'lucide-react'
import { LogoEmblem } from './Logo.jsx'

const capabilities = [
  { title: 'Software y web', detail: 'Herramientas hechas para tu forma de trabajar', icon: Code2, tone: 'blue' },
  { title: 'Automatización', detail: 'Menos tareas repetidas, más tiempo disponible', icon: Workflow, tone: 'violet' },
  { title: 'Soporte técnico', detail: 'Equipos rápidos, cuidados y listos para usar', icon: Wrench, tone: 'cyan' },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-blueprint" aria-hidden="true" />

      <div className="page-container hero-layout">
        <div className="hero-copy">
          <p className="hero-location">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            Tres Arroyos, Buenos Aires
          </p>

          <h1 id="hero-title" className="hero-title">
            Tresa <span className="text-blue-400">Soft</span>
          </h1>

          <p className="hero-description">
            Creamos software a medida, automatizamos procesos y resolvemos problemas técnicos con un trato cercano y directo.
          </p>

          <div className="hero-actions">
            <a href="#servicios" className="hero-button-primary">
              Conocé lo que hacemos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contacto" className="hero-button-secondary">Contanos tu idea</a>
          </div>

          <a href="#nosotros" className="hero-scroll">
            Conocé TresaSoft
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-system" aria-label="Tres áreas conectadas por TresaSoft">
          <div className="hero-system-top">
            <span>TresaSoft en acción</span>
            <span className="hero-system-status"><i aria-hidden="true" /> Soluciones conectadas</span>
          </div>

          <div className="hero-system-canvas">
            <div className="hero-core" aria-hidden="true"><LogoEmblem className="hero-core-emblem" /><i /></div>
            <div className="hero-connectors" aria-hidden="true"><span /><span /><span /></div>

            <ul className="hero-capabilities">
              {capabilities.map(({ title, detail, icon: Icon, tone }) => (
                <li key={title} className={`hero-capability hero-capability-${tone}`}>
                  <span className="hero-capability-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                </li>
              ))}
            </ul>
          </div>

          <p className="hero-system-note">
            Una sola conversación para entender el problema y encontrar una solución concreta.
          </p>
        </div>
      </div>
    </section>
  )
}
