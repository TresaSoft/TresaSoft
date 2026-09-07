import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 bg-cta text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <h2 className="heading-balance text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold tracking-tight text-white leading-tight">
          ¿Tenés un problema tecnológico?
        </h2>

        <p className="mt-4 text-[15px] sm:text-[16px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Contanos qué necesitás y vemos juntos la mejor solución. Te escuchamos y te asesoramos con claridad.
        </p>

        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0b192c] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xl hover:bg-slate-100 hover:shadow-2xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>Contanos tu caso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="mt-6 text-[13px] text-slate-400">
          O escribínos directo: <a href="mailto:TresArroyosSoft@gmail.com" className="font-semibold text-white hover:text-slate-300 underline underline-offset-2">TresArroyosSoft@gmail.com</a>
        </p>

      </div>
    </section>
  )
}