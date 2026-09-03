import React, { useState } from 'react'
import { Code2, Cpu, Wrench, ArrowRight, Check, Sparkles } from 'lucide-react'
import ServiceDetailModal from './ServiceDetailModal.jsx'

export const servicesData = [
  {
    id: 'software-web',
    title: 'Desarrollo de Software y Web',
    badge: 'Sistemas & Web',
    icon: Code2,
    color: 'blue',
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
    color: 'sky',
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
    <section id="servicios" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
            ¿Qué hacemos?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Brindamos soluciones concretas, explicadas en tu idioma y adaptadas al tamaño de tu proyecto.
          </p>
        </div>

        {/* 3 Main Services Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm transition-card hover:shadow-xl hover:border-blue-300"
              >
                <div>
                  {/* Card Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b192c] tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Summary Bullets */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                    {service.summaryList.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all focus-visible:outline-blue-600"
                  >
                    <span>Ver más detalles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            ¿Tenés dudas sobre cuál de estos servicios es el adecuado para tu caso?{' '}
            <a
              href="#contacto"
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Consultanos sin compromiso
            </a>
          </p>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}
