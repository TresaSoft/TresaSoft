import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-14 sm:py-18 bg-[#0b192c] text-white overflow-hidden circuit-dark-pattern">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-sky-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Estamos a un mensaje de distancia</span>
        </div>

        {/* Headline */}
        <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold tracking-tight text-white leading-tight uppercase">
          ¿Tenés un problema tecnológico?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[13px] sm:text-[15px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Contanos qué necesitás y vemos juntos la mejor solución. Te escuchamos y te asesoramos con claridad.
        </p>

        {/* CTA Button */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] sm:text-xs px-7 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.99] uppercase tracking-wider"
          >
            <span>Dejanos tu consulta</span>
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700/80 font-semibold text-[11px] sm:text-xs px-7 py-3 rounded-xl transition-all uppercase tracking-wider"
          >
            <span>Datos de contacto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
