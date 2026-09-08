import { Cpu, ShieldCheck, Sparkles, Users, Wrench } from 'lucide-react'

const whyPoints = [
  {
    title: 'Soluciones a medida',
    desc: 'Analizamos tu caso y armamos lo que realmente te sirve, sin paquetes cerrados ni funciones que no vas a usar.',
    icon: Sparkles,
  },
  {
    title: 'Atención personalizada',
    desc: 'Hablás directamente con nosotros. Sin intermediarios ni números de reclamo impersonales.',
    icon: Users,
  },
  {
    title: 'Tecnología simple y práctica',
    desc: 'Hacemos que lo técnico sea entendible y te acompañamos para que uses tus herramientas con tranquilidad.',
    icon: Cpu,
  },
  {
    title: 'Acompañamiento y soporte',
    desc: 'Seguimos disponibles después de entregar un trabajo o reparar un equipo.',
    icon: Wrench,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="why-section section-space">
      <div className="page-container">
        <div className="why-layout">
          <div className="why-panel">
            <div className="why-panel-circuit" aria-hidden="true" />
            <p className="why-label"><ShieldCheck size={17} aria-hidden="true" /> Nuestro compromiso</p>
            <h2 id="benefits-title">Tecnología simple. Soporte humano.</h2>
            <p>
              Para muchos comerciantes y profesionales la tecnología puede ser un dolor de cabeza. Nosotros la convertimos en una herramienta clara para trabajar mejor.
            </p>
            <blockquote>
              Un diagnóstico honesto, trato directo y soluciones reales para tu día a día en Tres Arroyos.
            </blockquote>
          </div>

          <ul className="why-principles">
            {whyPoints.map(({ title, desc, icon: Icon }) => (
              <li key={title}>
                <span className="why-node"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
