import React from 'react'
import { CheckCircle2, ShieldCheck, Users, Cpu, Wrench, Sparkles } from 'lucide-react'

const whyPoints = [
  {
    title: 'Soluciones a medida',
    desc: 'No vendemos paquetes cerrados ni herramientas que no vas a usar. Analizamos tu caso y armamos lo que realmente te sirve.',
    icon: Sparkles,
    accent: 'blue',
    iconBg: 'bg-blue-600',
    iconHover: 'group-hover:bg-blue-700',
    checkColor: 'text-blue-600',
    titleHover: 'group-hover:text-blue-700',
    borderHover: 'hover:border-blue-300',
  },
  {
    title: 'Atención personalizada',
    desc: 'Hablás directamente con nosotros. Te respondemos rápido, sin intermediarios ni números de reclamo impersonales.',
    icon: Users,
    accent: 'emerald',
    iconBg: 'bg-emerald-600',
    iconHover: 'group-hover:bg-emerald-700',
    checkColor: 'text-emerald-600',
    titleHover: 'group-hover:text-emerald-700',
    borderHover: 'hover:border-emerald-300',
  },
  {
    title: 'Tecnología simple y práctica',
    desc: 'Hacemos que lo técnico sea entendible. Te capacitamos de forma sencilla para que uses tus herramientas con total tranquilidad.',
    icon: Cpu,
    accent: 'indigo',
    iconBg: 'bg-indigo-600',
    iconHover: 'group-hover:bg-indigo-700',
    checkColor: 'text-indigo-600',
    titleHover: 'group-hover:text-indigo-700',
    borderHover: 'hover:border-indigo-300',
  },
  {
    title: 'Acompañamiento y soporte',
    desc: 'Nuestro compromiso no termina cuando entregamos un trabajo o reparamos un equipo. Seguimos disponibles para lo que necesites.',
    icon: Wrench,
    accent: 'amber',
    iconBg: 'bg-amber-600',
    iconHover: 'group-hover:bg-amber-700',
    checkColor: 'text-amber-600',
    titleHover: 'group-hover:text-amber-700',
    borderHover: 'hover:border-amber-300',
  }
]

export default function WhyChooseUs() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-why border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="heading-balance text-[1.65rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-[#0b192c] tracking-tight leading-tight">
              ¿Por qué elegir TresaSoft?
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-normal">
              Para muchos comerciantes y profesionales la tecnología puede ser un dolor de cabeza. Nosotros nos enfocamos en el trato humano, la honestidad en el diagnóstico y resultados que funcionen de verdad.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-[14px] text-slate-600 leading-relaxed">
                Sin promesas exageradas ni estadísticas inventadas: soluciones reales para tu día a día en Tres Arroyos.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyPoints.map((pt, idx) => {
              const Icon = pt.icon
              return (
                <div
                  key={idx}
                  className={`card-why group p-5 rounded-xl border border-slate-200 bg-white transition-all duration-200 ${pt.borderHover}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${pt.iconBg} ${pt.iconHover} text-white flex items-center justify-center shadow-md shadow-blue-600/20 transition-all duration-200 group-hover:scale-105`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className={`font-bold text-[14px] text-[#0b192c] transition-colors duration-200 ${pt.titleHover}`}>
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}