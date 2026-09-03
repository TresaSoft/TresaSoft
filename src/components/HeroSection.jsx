import React from 'react'
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Laptop, Cpu, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 circuit-bg-pattern border-b border-slate-200/60"
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, accessible headline & value proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Tres Arroyos, Buenos Aires</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" aria-hidden="true" />
              <span className="text-blue-700 font-medium">Atención cercana</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b192c] tracking-tight leading-[1.12]">
              Tecnología que impulsa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                tu negocio.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Soluciones tecnológicas pensadas para hacer más simple tu trabajo. Desarrollamos software a medida, automatizamos tareas repetitivas y mantenemos tus computadoras siempre listas.
            </p>

            {/* Quick Benefits Bullet Points for non-technical clients */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 font-medium">
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
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-7 py-4 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.99] text-center"
              >
                <span>Ver nuestros servicios</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-base font-semibold px-7 py-4 rounded-xl shadow-xs hover:border-slate-400 transition-all text-center"
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
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(11,25,44,0.08)]">
                
                {/* Header of the showcase card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/imagen1.png"
                      alt="TresaSoft"
                      className="w-10 h-10 rounded-full object-cover shadow-xs"
                    />
                    <div>
                      <div className="font-extrabold text-[#0b192c] text-base leading-tight">
                        Tresa<span className="text-blue-600">Soft</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        Soluciones Tecnológicas
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    En actividad
                  </span>
                </div>

                {/* Two Main Visual Cards representing the real services from the promotional graphic */}
                <div className="space-y-3.5">
                  
                  {/* Pillar 1: Soporte y Asistencia Técnica */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-blue-50/40 hover:border-blue-200">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-xs">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                            Soporte y Asistencia Técnica
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 shrink-0">
                            Puesta a punto
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                          Mantenimiento preventivo, diagnóstico y reparación, limpieza profunda y formateo para que tus computadoras funcionen sin fallas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: Desarrollo y Automatización */}
                  <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:bg-blue-50/40 hover:border-blue-200">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-[#0b192c] text-white shrink-0 shadow-xs">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                            Desarrollo y Automatización
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                            A medida
                          </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                          Sistemas adaptados a tu negocio, páginas web y automatización de tareas repetitivas para ahorrar tiempo y evitar errores.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Slogan Bar mirroring the promotional graphic */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
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

              {/* Small Floating Card badge */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-4 bg-[#0b192c] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold">
                  Consultas directas por WhatsApp
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}