import { Compass, MessagesSquare, Search } from 'lucide-react'

const values = [
  {
    icon: Search,
    title: 'Análisis del trabajo',
    description: 'Revisamos cómo trabajás, qué herramientas usás y dónde aparecen las dificultades.',
  },
  {
    icon: MessagesSquare,
    title: 'Trato directo',
    description: 'Conversás con quienes llevan adelante el proyecto, desde la primera consulta hasta la entrega.',
  },
  {
    icon: Compass,
    title: 'Criterio técnico',
    description: 'Evaluamos las alternativas y te explicamos qué conviene hacer, por qué y qué implica.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="about-section section-space">
      <div className="page-container">
        <header className="about-heading">
          <p className="section-eyebrow">Cómo trabajamos</p>
          <h2 id="about-title" className="section-title">Nuestra forma de trabajar</h2>
        </header>

        <ul className="about-values">
          {values.map(({ icon: Icon, title, description }) => (
            <li key={title} className="about-value-item">
              <span className="about-value-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.75} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
