import { MapPin } from 'lucide-react'

const values = [
  ['Enfoque real', 'Partimos de lo que necesitás resolver hoy.'],
  ['Trato directo', 'Hablás con quienes hacen el trabajo.'],
  ['Sin intermediarios', 'Decisiones claras, respuestas concretas.'],
]

export default function AboutSection() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="about-section section-space">
      <div className="page-container">
        <div className="about-layout">
          <div>
            <p className="section-kicker"><MapPin size={15} aria-hidden="true" /> Hecho en Tres Arroyos</p>
            <h2 id="about-title" className="section-title about-title">
              Tecnología pensada para personas y negocios reales.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Somos un emprendimiento tecnológico de Tres Arroyos. Brindamos soluciones simples, prácticas y adaptadas a las necesidades de cada cliente.
            </p>
            <p>
              Creemos que la tecnología no tiene por qué ser complicada ni costosa para funcionar bien.
            </p>
          </div>
        </div>

        <ul className="about-values">
          {values.map(([title, description]) => (
            <li key={title}><strong>{title}</strong><span>{description}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
