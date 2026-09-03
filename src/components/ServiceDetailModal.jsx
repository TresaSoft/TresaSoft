import React, { useEffect } from 'react'
import { X, CheckCircle2, ArrowRight, Users, Sparkles } from 'lucide-react'

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !service) return null

  const Icon = service.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                {service.badge}
              </span>
              <h3 id="modal-service-title" className="text-xl font-extrabold text-[#0b192c]">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors focus-visible:outline-blue-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body (Scrollable if content exceeds) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Main summary */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            {service.fullDescription || service.description}
          </p>

          {/* Section: ¿Qué hacemos? */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0b192c] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>¿Qué incluye este servicio?</span>
            </h4>
            <ul className="space-y-3">
              {service.features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: ¿Para quién es? */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>¿Para quién está pensado?</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-800 font-medium">
              {service.targetAudience}
            </p>
          </div>

          {/* Real Work Benefit */}
          <div className="border-l-4 border-blue-600 pl-4 py-1 text-slate-600 text-sm italic">
            "{service.benefitQuote}"
          </div>

        </div>

        {/* Modal Footer / Action */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
          >
            Volver a la página
          </button>

          <a
            href="#contacto"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl transition-all shadow-sm active:scale-[0.99]"
          >
            <span>Consultar por este servicio</span>
          </a>
        </div>

      </div>
    </div>
  )
}
