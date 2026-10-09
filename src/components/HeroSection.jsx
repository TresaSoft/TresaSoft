import { ArrowRight, ArrowUpRight, Code2, MapPin, Workflow, Wrench } from 'lucide-react'

const capabilities = [
  { title: 'Software y web', detail: 'Sistemas de gestión y sitios web a medida', icon: Code2, tone: 'blue' },
  { title: 'Automatización', detail: 'Integración de datos, planillas y procesos', icon: Workflow, tone: 'blue' },
  { title: 'Soporte técnico', detail: 'Diagnóstico, reparación y mantenimiento', icon: Wrench, tone: 'blue' },
]

// Fragmentos decorativos de código (k = palabra clave, s = texto, c = comentario/terminal)
const codeLeft = [
  [['c', '// Desarrollo a medida para comercios y empresas']],
  [['k', 'const'], ['', ' proyecto = {']],
  [['', '  cliente: '], ['s', '"tu negocio"'], ['', ',']],
  [['', '  tipo: '], ['s', '"software y web"'], ['', ',']],
  [['', '  entrega: '], ['s', '"a tu medida"'], ['', ',']],
  [['', '  soporte: '], ['k', 'true'], ['', ',']],
  [['', '};']],
  [],
  [['k', 'async function'], ['', ' consultar() {']],
  [['', '  '], ['k', 'return'], ['', ' tresaSoft.responder(proyecto);']],
  [['', '}']],
]
const codeRight = [
  [['k', '<section'], ['', ' id='], ['s', '"contacto"'], ['k', '>']],
  [['', '  '], ['k', '<h1>'], ['', 'TresaSoft'], ['k', '</h1>']],
  [['', '  '], ['k', '<p>'], ['', 'Software, web y soporte'], ['k', '</p>']],
  [['k', '</section>']],
  [],
  [['c', '$ npm run build']],
  [['c', 'build listo en 0.8 s']],
]

function CodeBlock({ className, lines, numbered = false }) {
  return (
    <pre className={`hero-code ${className}`} aria-hidden="true">
      {lines.map((tokens, i) => (
        <span key={i}>
          {numbered && <span className="n">{String(i + 1).padStart(2, '0')}  </span>}
          {tokens.map(([kind, text], j) => <span key={j} className={kind || undefined}>{text}</span>)}
          {'\n'}
        </span>
      ))}
    </pre>
  )
}

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      {/* Fondo: código muy tenue, luz baja y grano */}
      <div className="hero-aura" aria-hidden="true" />
      <img className="hero-mark" src="/assets/logo.png" alt="" width="512" height="512" aria-hidden="true" />
      <CodeBlock className="hero-code-left" lines={codeLeft} numbered />
      <CodeBlock className="hero-code-right" lines={codeRight} />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="page-container hero-layout">
        <div className="hero-center">
          <div className="hero-title-wrap">
            <h1 id="hero-title" className="hero-title">
              Tresa<span className="hero-title-accent">Soft</span>
            </h1>
          </div>

          <p className="hero-tagline">
            Software, web y soporte técnico <span className="hero-title-accent">a tu medida.</span>
          </p>
          <span className="hero-rule" aria-hidden="true" />
          <div className="hero-actions">
            <a href="#contacto" className="button-primary hero-cta group/cta">
              <span>Consultanos por tu proyecto</span>
              <span className="hero-cta-arrow" aria-hidden="true">
                <ArrowRight size={18} className="transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <nav className="hero-services" aria-label="Servicios principales">
        <ul className="hero-capabilities">
          {capabilities.map(({ title, detail, icon: Icon, tone }) => (
            <li key={title} className={`hero-capability hero-capability-${tone}`}>
              <a href="#servicios" className="hero-capability-link" aria-label={`Conocer más sobre ${title}`}>
                <span className="hero-capability-icon"><Icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                <ArrowUpRight className="hero-capability-arrow" size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="hero-place">
        <MapPin size={12} strokeWidth={2} aria-hidden="true" />
        <span>Tres Arroyos, Buenos Aires</span>
      </p>
    </section>
  )
}
