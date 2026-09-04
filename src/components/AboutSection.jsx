import React from 'react'
import { UserCheck, Wrench, HeartHandshake, Lightbulb } from 'lucide-react'

export default function AboutSection() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Atención personalizada',
      description: 'Hablás directamente con nosotros. Escuchamos lo que necesitás y te respondemos con sinceridad y rapidez.'
    },
    {
      icon: Wrench,
      title: 'Soluciones a medida',
      description: 'No imponemos soluciones complejas: adaptamos la tecnología a tu forma de trabajar y al tamaño de tu negocio.'
    },
    {
      icon: HeartHandshake,
      title: 'Cercanía y compromiso',
      description: 'Somos de Tres Arroyos. Conocemos la realidad de los comercios y profesionales de la zona y estamos cerca cuando nos necesitás.'
    },
    {
      icon: Lightbulb,
      title: 'Tecnología para problemas reales',
      description: 'Sin vueltas ni tecnicismos confusos. Te explicamos en palabras sencillas cómo cada herramienta o arreglo te va a ayudar.'
    }
  ]

  return (
    <section id="nosotros" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
            <span>Nosotros</span>
          </div>
          <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight leading-tight uppercase">
            ¿Quiénes somos?
          </h2>
          <p className="mt-4 text-[13px] sm:text-[15px] text-slate-600 leading-relaxed font-normal">
            Somos un emprendimiento tecnológico de Tres Arroyos enfocado en brindar soluciones simples, prácticas y adaptadas a las necesidades de cada cliente.
          </p>
          <p className="mt-3 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
            Creemos que la tecnología no tiene por qué ser complicada ni costosa para funcionar bien. Nuestro objetivo es ser ese equipo de confianza al que podés consultar cuando necesitás una página web, ordenar tus procesos diarios o reparar tus computadoras de trabajo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 border-t border-slate-200 pt-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={index}
                className="group border-t-2 border-blue-600/60 pt-4 p-3 -mx-3 rounded-b-xl transition-all duration-300 hover:bg-white/80 hover:shadow-xs hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide transition-colors duration-200 group-hover:text-blue-700">
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
