import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0b192c] text-white overflow-hidden circuit-dark-pattern">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-sky-300 text-xs sm:text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Estamos a un mensaje de distancia</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          ¿Tenés un problema tecnológico?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Contanos qué necesitás y vemos juntos la mejor solución. Te escuchamos y te asesoramos con claridad.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.99]"
          >
            <span>Dejanos tu consulta</span>
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base px-8 py-4 rounded-xl transition-all"
          >
            <span>Ver datos de contacto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
