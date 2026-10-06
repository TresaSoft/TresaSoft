const values = [
  {
    step: '01',
    title: 'Análisis del trabajo',
    description: 'Revisamos cómo trabajás, qué herramientas usás y dónde aparecen las dificultades.',
  },
  {
    step: '02',
    title: 'Trato directo',
    description: 'Conversás con quienes llevan adelante el proyecto, desde la primera consulta hasta la entrega.',
  },
  {
    step: '03',
    title: 'Criterio técnico',
    description: 'Evaluamos las alternativas y te explicamos qué conviene hacer, por qué y qué implica.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="about-section section-space">
      <div className="page-container">
        <header className="about-heading">
          <h2 id="about-title" className="section-title">Nuestra forma de trabajar</h2>
        </header>

        <ul className="about-values">
          {values.map(({ step, title, description }) => (
            <li key={title} className="about-value-item">
              <span className="about-step-badge" aria-hidden="true">{step}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
