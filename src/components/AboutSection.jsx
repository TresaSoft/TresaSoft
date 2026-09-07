import React from 'react'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-about border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-balance text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight leading-tight">
            ¿Quiénes somos?
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
            Somos un emprendimiento tecnológico de Tres Arroyos enfocado en brindar soluciones simples, prácticas y adaptadas a las necesidades de cada cliente.
          </p>
          <p className="mt-3 text-[14px] sm:text-[15px] text-slate-500 leading-relaxed">
            Creemos que la tecnología no tiene por qué ser complicada ni costosa para funcionar bien.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-[12px] sm:text-[13px] font-medium text-slate-400">
            <span>Enfoque real</span>
            <span className="w-px h-3 bg-slate-300" />
            <span>Trato directo</span>
            <span className="w-px h-3 bg-slate-300" />
            <span>Sin intermediarios</span>
          </div>
        </div>
      </div>
    </section>
  )
}
