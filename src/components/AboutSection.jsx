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
    <section id="nosotros" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
            <span>Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
            ¿Quiénes somos?
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
            Somos un emprendimiento tecnológico de Tres Arroyos enfocado en brindar soluciones simples, prácticas y adaptadas a las necesidades de cada cliente.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Creemos que la tecnología no tiene por qué ser complicada ni costosa para funcionar bien. Nuestro objetivo es ser ese equipo de confianza al que podés consultar cuando necesitás una página web, ordenar tus procesos diarios o reparar tus computadoras de trabajo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-slate-200 pt-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="border-t-2 border-blue-600/70 pt-5">
                <div className="w-10 h-10 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
