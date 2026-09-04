import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
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

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                {service.badge}
              </span>
              <h3 id="modal-service-title" className="text-base font-extrabold text-[#0b192c] uppercase tracking-wide">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de detalles"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors focus-visible:outline-blue-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Main summary */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.fullDescription || service.description}
          </p>

          {/* Section: ¿Qué hacemos? */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#0b192c] mb-2.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>¿Qué incluye?</span>
            </h4>
            <ul className="space-y-2">
              {service.features.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: ¿Para quién es? */}
          <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-700 mb-1.5 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>¿Para quién está pensado?</span>
            </h4>
            <p className="text-[13px] text-slate-700 font-medium">
              {service.targetAudience}
            </p>
          </div>

          {/* Real Work Benefit */}
          <div className="border-l-[3px] border-blue-600 pl-3 py-0.5 text-slate-500 text-[13px] italic">
            "{service.benefitQuote}"
          </div>

        </div>

        {/* Modal Footer / Action */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 rounded-md transition-colors uppercase tracking-wider"
          >
            Cerrar
          </button>

          <a
            href="#contacto"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-md transition-all shadow-sm active:scale-[0.99] uppercase tracking-wider"
          >
            <span>Consultar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>,
    document.body
  )
}
