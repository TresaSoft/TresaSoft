const values = [
  {
    title: 'Enfoque real',
    description: 'Empezamos por entender qué necesitás resolver hoy y qué puede crecer mañana.',
  },
  {
    title: 'Trato directo',
    description: 'Hablás con las mismas personas que piensan, diseñan y desarrollan tu solución.',
  },
  {
    title: 'Decisiones claras',
    description: 'Te explicamos cada alternativa con honestidad, sin complejidad ni costos innecesarios.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="about-section section-space">
      <div className="page-container">
        <header className="about-heading">
          <h2 id="about-title" className="about-title">Nuestra forma de trabajar</h2>
          <p>Menos vueltas. Más claridad, acompañamiento y resultados que aportan valor.</p>
        </header>

        <ul className="about-values">
          {values.map(({ title, description }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
