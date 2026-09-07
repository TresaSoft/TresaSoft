import React, { useState } from 'react'
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
    color: 'emerald',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    accentText: 'text-emerald-700',
    accentIconBg: 'bg-emerald-600',
    accentIconHover: 'hover:bg-emerald-700',
    accentShadow: 'shadow-emerald-600/20',
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

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', iconBg: 'bg-blue-600', iconHover: 'hover:bg-blue-700', shadow: 'shadow-blue-600/20', buttonHover: 'hover:bg-blue-600', buttonBase: 'bg-blue-600' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', iconBg: 'bg-indigo-600', iconHover: 'hover:bg-indigo-700', shadow: 'shadow-indigo-600/20', buttonHover: 'hover:bg-indigo-600', buttonBase: 'bg-indigo-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-700', iconBg: 'bg-emerald-600', iconHover: 'hover:bg-emerald-700', shadow: 'shadow-emerald-600/20', buttonHover: 'hover:bg-emerald-600', buttonBase: 'bg-emerald-600' },
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="servicios" className="bg-services py-20 sm:py-28 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-balance text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight">
            ¿Qué hacemos?
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-normal">
            Soluciones concretas, explicadas en tu idioma y adaptadas al tamaño de tu proyecto.
          </p>
        </div>

        {/* 3 Main Services Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((service) => {
            const Icon = service.icon
            const c = colorMap[service.color]
            return (
              <div
                key={service.id}
                className="card-service group flex flex-col justify-between rounded-xl bg-white border border-slate-200/60 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 transition-shadow duration-300"
              >
                <div>
                  {/* Card Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-lg ${c.iconBg} ${c.iconHover} flex items-center justify-center text-white shadow-md ${c.shadow} transition-all duration-300 group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${c.bg} ${c.accentText} ${c.accentBorder}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-[16px] sm:text-lg font-bold text-[#0b192c] tracking-tight transition-colors duration-200 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-[14px] sm:text-[15px] text-slate-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Summary Bullets */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {service.summaryList.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-slate-600 font-medium">
                        <Check className={`w-3.5 h-3.5 ${c.accentText} shrink-0 mt-0.5`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-[13px] ${c.buttonBase} text-white transition-colors duration-200 ${c.buttonHover}`}
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Reassurance */}
        <div className="mt-10 text-center">
          <p className="text-[14px] text-slate-500">
            ¿Tenés dudas sobre cuál servicio necesitás?{' '}
            <a href="#contacto" className="font-semibold text-blue-600 hover:text-blue-800">
              Consultanos sin compromiso
            </a>
          </p>
        </div>

      </div>

      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}