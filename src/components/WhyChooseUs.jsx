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
    <section id="beneficios" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden="true" />
              <span>Diferenciales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight leading-tight">
              ¿Por qué elegir <br className="hidden sm:inline" />
              <span className="text-blue-600">TresaSoft?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Entendemos que para muchos comerciantes y profesionales la tecnología puede ser un dolor de cabeza. Por eso nos enfocamos en el trato humano, la honestidad en el diagnóstico y resultados que funcionen de verdad.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 font-medium">
                Sin promesas exageradas ni estadísticas inventadas: soluciones reales para tu día a día en Tres Arroyos.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Real Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0b192c]">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
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
