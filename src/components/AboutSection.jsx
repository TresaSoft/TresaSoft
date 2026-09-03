import React from 'react'
import { UserCheck, Wrench, HeartHandshake, Lightbulb, MapPin } from 'lucide-react'

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
    <section id="nosotros" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
            <span>Nosotros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight">
            ¿Quiénes somos?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
            Somos un emprendimiento tecnológico de Tres Arroyos enfocado en brindar soluciones simples, prácticas y adaptadas a las necesidades de cada cliente.
          </p>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Creemos que la tecnología no tiene por qué ser complicada ni costosa para funcionar bien. Nuestro objetivo es ser ese equipo de confianza al que podés consultar cuando necesitás una página web, ordenar tus procesos diarios o reparar tus computadoras de trabajo.
          </p>
        </div>

        {/* Two-column layout: Pillars on Left, Business Card & Visual on Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 hover:bg-blue-50/30 hover:border-blue-200 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
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

          {/* Right Visual: Real Brand Card & Context */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group">
              <img
                src="/assets/tresasoft.png"
                alt="Tarjeta de presentación oficial de TresaSoft - Soluciones Tecnológicas"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Tres Arroyos, Buenos Aires</span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  "Somos personas que podemos ayudarte con la tecnología de tu negocio."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
