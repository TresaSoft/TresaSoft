import React from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Laptop, Cpu, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#eef8fc] pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-[#d9edf5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clear, accessible headline & value proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Tres Arroyos, Buenos Aires</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" aria-hidden="true" />
              <span className="text-slate-500 font-medium">Atención cercana</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-[#0b192c] tracking-tight leading-[1.08] max-w-3xl">
              Tecnología que impulsa <br />
              <span className="text-blue-600">
                tu negocio.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Soluciones tecnológicas pensadas para hacer más simple tu trabajo. Desarrollamos software a medida, automatizamos tareas repetitivas y mantenemos tus computadoras siempre listas.
            </p>

            {/* Quick Benefits Bullet Points for non-technical clients */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[0.9375rem] text-slate-600 font-medium max-w-xl">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Trato directo con los técnicos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Sistemas adaptados a tu forma de trabajar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Mantenimiento y soporte local</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Sin tecnicismos complicados</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[0.9375rem] font-semibold px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.99] text-center"
              >
                <span>Ver nuestros servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/70 hover:bg-white text-slate-800 border border-slate-300 text-[0.9375rem] font-semibold px-5 py-3 rounded-lg transition-all text-center"
              >
                <span>Contactarnos</span>
              </a>
            </div>

            {/* Reassurance text */}
            <p className="mt-4 text-xs text-slate-500 font-normal">
              Orientado a comercios, pymes, profesionales y emprendedores de Tres Arroyos y la zona.
            </p>
          </div>

          {/* Right Column: Visual Composition with TresaSoft Promo Card & Services Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container */}
              <div className="relative overflow-hidden border-l-2 border-blue-600/60 bg-white/25 pl-5 sm:pl-6 py-5 pr-5 text-slate-900 shadow-none backdrop-blur-[1px]">
                
                {/* Header of the showcase card */}
                <div className="relative flex items-center justify-between border-b border-white/15 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-extrabold text-[#0b192c] text-lg leading-tight">
                        Tresa<span className="text-blue-600">Soft</span>
                      </div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                        Soluciones Tecnológicas
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-emerald-700 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    En actividad
                  </span>
                </div>

                {/* Two Main Visual Cards representing the real services from the promotional graphic */}
                <div className="relative space-y-3.5">
                  
                  {/* Pillar 1: Soporte y Asistencia Técnica */}
                  <div className="group border-b border-slate-200 pb-5 p-2.5 -mx-2.5 rounded-xl transition-all duration-300 hover:bg-white/60 hover:translate-x-1.5 hover:border-blue-300">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-base transition-colors duration-200 group-hover:text-blue-700">
                            Soporte y Asistencia Técnica
                          </h3>
                          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 shrink-0 transition-colors duration-200 group-hover:bg-blue-100">
                            Puesta a punto
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">
                          Mantenimiento preventivo, diagnóstico y reparación, limpieza profunda y formateo para que tus computadoras funcionen sin fallas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: Desarrollo y Automatización */}
                  <div className="group pt-2 p-2.5 -mx-2.5 rounded-xl transition-all duration-300 hover:bg-white/60 hover:translate-x-1.5">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-slate-100 text-blue-600 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-base transition-colors duration-200 group-hover:text-blue-700">
                            Desarrollo y Automatización
                          </h3>
                          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 shrink-0 transition-colors duration-200 group-hover:bg-blue-100">
                            A medida
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">
                          Sistemas adaptados a tu negocio, páginas web y automatización de tareas repetitivas para ahorrar tiempo y evitar errores.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Slogan Bar mirroring the promotional graphic */}
                <div className="relative mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Servicio confiable y garantizado</span>
                  </div>
                  <a
                    href="#contacto"
                    className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Hacer una consulta →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}