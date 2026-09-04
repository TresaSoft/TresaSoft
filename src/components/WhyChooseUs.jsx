import React from 'react'
import { CheckCircle2, ShieldCheck, Clock, Users, Wrench } from 'lucide-react'

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Soluciones a medida',
      desc: 'No vendemos paquetes cerrados ni herramientas que no vas a usar. Analizamos tu caso y armamos lo que realmente te sirve.'
    },
    {
      title: 'Atención personalizada',
      desc: 'Hablás directamente con nosotros. Te respondemos rápido, sin intermediarios ni números de reclamo impersonales.'
    },
    {
      title: 'Tecnología simple y práctica',
      desc: 'Hacemos que lo técnico sea entendible. Te capacitamos de forma sencilla para que uses tus herramientas con total tranquilidad.'
    },
    {
      title: 'Acompañamiento y soporte',
      desc: 'Nuestro compromiso no termina cuando entregamos un trabajo o reparamos un equipo. Seguimos disponibles para lo que necesites.'
    }
  ]

  return (
    <section id="beneficios" className="py-14 sm:py-18 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
              <span>Diferenciales</span>
            </div>
            <h2 className="text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight leading-tight uppercase">
              ¿Por qué elegir{' '}
              <span className="text-blue-600">TresaSoft?</span>
            </h2>
            <p className="mt-3 text-[13px] sm:text-[15px] text-slate-500 leading-relaxed font-normal">
              Entendemos que para muchos comerciantes y profesionales la tecnología puede ser un dolor de cabeza. Por eso nos enfocamos en el trato humano, la honestidad en el diagnóstico y resultados que funcionen de verdad.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Sin promesas exageradas ni estadísticas inventadas: soluciones reales para tu día a día en Tres Arroyos.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Real Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
                    <CheckCircle2 className="w-4 h-4 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-[13px] text-[#0b192c] uppercase tracking-wide transition-colors duration-200 group-hover:text-blue-700">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
