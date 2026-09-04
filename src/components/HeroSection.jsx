import React from 'react'
import { ArrowRight, ShieldCheck, Laptop, Cpu, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-white border-b border-slate-200 py-10 sm:py-14 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clear, accessible headline & value proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 text-slate-500 text-[11px] sm:text-xs font-semibold mb-5 uppercase tracking-widest">
              <MapPin className="w-3 h-3 text-blue-600" />
              <span>Tres Arroyos, Buenos Aires</span>
              <span className="w-1 h-1 rounded-full bg-blue-400" aria-hidden="true" />
              <span className="text-slate-400">Atención cercana</span>
            </div>

            {/* Main Headline */}
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-[2px] w-8 rounded-full bg-blue-600" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
                Tecnología con propósito
              </span>
            </div>
            <h1 className="max-w-2xl font-[var(--font-display)] text-[clamp(2.5rem,6.5vw,4.25rem)] font-bold text-[#0b192c] tracking-[-0.04em] leading-[0.95] uppercase">
              Tresa<span className="relative text-blue-600">Soft<span className="absolute -bottom-1.5 left-0 h-1 w-2/3 rounded-full bg-blue-200" aria-hidden="true" /></span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[13px] sm:text-[15px] text-slate-500 max-w-lg leading-relaxed font-normal">
              Tecnología clara para trabajar mejor: software a medida, automatización y soporte técnico cercano.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.99] text-center"
              >
                <span>Ver servicios</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all text-center"
              >
                <span>Contactarnos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition with TresaSoft Promo Card & Services Showcase */}
          <div className="lg:col-span-5 w-full lg:-translate-x-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container */}
              <div className="relative overflow-hidden border-l-2 border-blue-600/60 pl-4 pr-1 py-2 text-slate-900 sm:pl-6">
                
                {/* Header of the showcase card */}
                <div className="relative flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div>
                      <div className="font-extrabold text-[#0b192c] text-sm leading-tight uppercase tracking-wide">
                        Tresa<span className="text-blue-600">Soft</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold">
                        Soluciones Tecnológicas
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-emerald-600 text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Activo
                  </span>
                </div>

                {/* Two Main Visual Cards representing the real services from the promotional graphic */}
                <div className="relative space-y-3">
                  
                  {/* Pillar 1: Soporte y Asistencia Técnica */}
                  <div className="group border-b border-slate-200 pb-4 p-2 -mx-2 rounded-lg transition-all duration-300 hover:bg-blue-50/60 hover:translate-x-1 hover:shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-blue-600 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-[13px] uppercase tracking-wide transition-colors duration-200 group-hover:text-blue-700">
                            Soporte Técnico
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 shrink-0 transition-colors duration-200 group-hover:bg-blue-100">
                            Puesta a punto
                          </span>
                        </div>
                        <p className="mt-1 text-[13px] text-slate-500 leading-snug">
                          Mantenimiento preventivo, diagnóstico, reparación y formateo para computadoras sin fallas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: Desarrollo y Automatización */}
                  <div className="group pt-1 p-2 -mx-2 rounded-lg transition-all duration-300 hover:bg-blue-50/60 hover:translate-x-1 hover:shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-blue-600 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-[13px] uppercase tracking-wide transition-colors duration-200 group-hover:text-blue-700">
                            Desarrollo Web
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 shrink-0 transition-colors duration-200 group-hover:bg-blue-100">
                            A medida
                          </span>
                        </div>
                        <p className="mt-1 text-[13px] text-slate-500 leading-snug">
                          Sistemas adaptados a tu negocio, páginas web y automatización para ahorrar tiempo.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Slogan Bar mirroring the promotional graphic */}
                <div className="relative mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span className="uppercase tracking-wider text-[10px]">Garantía de servicio</span>
                  </div>
                  <a
                    href="#contacto"
                    className="font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider text-[10px]"
                  >
                    Consultar →
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