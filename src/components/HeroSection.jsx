import React from 'react'
import { ArrowRight, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100svh-76px)] flex items-center overflow-hidden border-b border-slate-200/50 py-16 sm:py-20 lg:py-24"
      style={{
        background: `
          /* Base warm cream */
          linear-gradient(180deg, #fefbf5 0%, #fdf8f0 40%, #f8fafc 100%),
          /* Blue palette depth layers */
          radial-gradient(ellipse 110% 70% at 50% -10%, rgba(37, 99, 235, 0.16) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 100% 20%, rgba(56, 189, 248, 0.12) 0%, transparent 45%),
          radial-gradient(ellipse 70% 55% at 10% 60%, rgba(29, 100, 216, 0.14) 0%, transparent 45%),
          radial-gradient(ellipse 90% 65% at 90% 90%, rgba(14, 165, 233, 0.18) 0%, transparent 40%),
          radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37, 99, 235, 0.12) 0%, transparent 40%)
        `
      }}
    >
      {/* Large soft blue orbs */}
      <div className="absolute top-[-12%] left-[-8%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/10 blur-3xl pointer-events-none animate-[float_22s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute top-[8%] right-[-12%] w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-sky-400/18 to-blue-500/10 blur-3xl pointer-events-none animate-[float_24s_ease-in-out_infinite_reverse]" aria-hidden="true" />
      <div className="absolute bottom-[-8%] left-[12%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-400/15 to-blue-600/8 blur-3xl pointer-events-none animate-[float_20s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute bottom-[3%] right-[-8%] w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-sky-300/15 to-indigo-400/8 blur-3xl pointer-events-none animate-[float_26s_ease-in-out_infinite_reverse]" aria-hidden="true" />
      <div className="absolute top-[28%] left-[50%] w-[280px] h-[280px] rounded-full bg-gradient-to-br from-blue-400/18 to-sky-400/10 blur-2xl pointer-events-none animate-[float_18s_ease-in-out_infinite]" aria-hidden="true" />

      {/* Subtle geometric accents */}
      <div className="absolute top-[18%] left-[4%] w-28 h-28 rotate-12 bg-gradient-to-br from-blue-500/8 to-indigo-500/4 blur-xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[12%] right-[6%] w-20 h-20 rotate-[-12deg] bg-gradient-to-br from-sky-500/8 to-blue-500/4 rounded-2xl blur-xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[18%] right-[4%] w-36 h-36 rotate-4 bg-gradient-to-br from-indigo-500/6 to-blue-600/4 blur-xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[6%] w-18 h-18 rotate-[-6deg] bg-gradient-to-br from-sky-400/8 to-blue-400/4 rounded-xl blur-xl pointer-events-none" aria-hidden="true" />

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,1) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(15,23,42,1) 0.5px, transparent 0.5px)`,
          backgroundSize: '70px 70px'
        }}
        aria-hidden="true"
      />

      {/* Center glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-6xl h-[80%] rounded-3xl bg-gradient-to-b from-blue-500/8 via-indigo-500/4 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Floating blue particles */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-blue-400/40 pointer-events-none animate-[pulse_3s_ease-in-out_infinite]" aria-hidden="true" />
      <div className="absolute top-[10%] right-[12%] w-1.5 h-1.5 rounded-full bg-sky-400/45 pointer-events-none animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" aria-hidden="true" />
      <div className="absolute top-[42%] left-[5%] w-1.5 h-1.5 rounded-full bg-indigo-400/35 pointer-events-none animate-[pulse_3.5s_ease-in-out_infinite_1s]" aria-hidden="true" />
      <div className="absolute top-[52%] right-[8%] w-2 h-2 rounded-full bg-blue-500/40 pointer-events-none animate-[pulse_2.8s_ease-in-out_infinite_1.5s]" aria-hidden="true" />
      <div className="absolute bottom-[15%] left-[18%] w-2 h-2 rounded-full bg-sky-400/40 pointer-events-none animate-[pulse_3.2s_ease-in-out_infinite_0.8s]" aria-hidden="true" />
      <div className="absolute bottom-[8%] right-[20%] w-1.5 h-1.5 rounded-full bg-indigo-400/35 pointer-events-none animate-[pulse_2.7s_ease-in-out_infinite_1.2s]" aria-hidden="true" />
      <div className="absolute top-[68%] left-[4%] w-1.5 h-1.5 rounded-full bg-blue-300/30 pointer-events-none animate-[pulse_3.3s_ease-in-out_infinite_0.3s]" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
        
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-blue-100/60 text-slate-600 text-[12px] sm:text-[13px] font-medium mb-8 px-3 py-1.5 rounded-full shadow-sm shadow-blue-600/5">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span>Tres Arroyos, Buenos Aires</span>
        </div>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-2.5">
          <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500" aria-hidden="true" />
          <span className="text-[12px] sm:text-[13px] font-semibold text-blue-600 tracking-wider uppercase">
            Tecnología con propósito
          </span>
          <span className="h-[2px] w-10 rounded-full bg-gradient-to-l from-blue-500 via-indigo-500 to-sky-500" aria-hidden="true" />
        </div>

        {/* Main Headline */}
        <h1 className="font-[var(--font-display)] text-[clamp(3rem,9vw,6rem)] font-extrabold text-[#0b192c] tracking-[-0.04em] leading-[0.88] mb-6">
          Tresa<span className="relative">
            Soft
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 rounded-full -skew-y-1" aria-hidden="true" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-[16px] sm:text-[19px] text-slate-500 max-w-xl mx-auto leading-relaxed font-normal mb-10">
          Tecnología clara para trabajar mejor: software a medida, automatización y soporte técnico cercano.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#servicios"
            className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[15px] font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Ver servicios</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-slate-700 border border-slate-200/80 text-[15px] font-semibold px-8 py-3.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-slate-900/10 transition-all duration-200"
          >
            <span>Contactarnos</span>
          </a>
        </div>

        {/* Service pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="relative group flex items-center gap-2 text-[13px] text-slate-600 bg-white/95 backdrop-blur-sm border border-blue-100/50 rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
            <span className="relative w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
            <span>Desarrollo web</span>
          </div>
          <div className="relative group flex items-center gap-2 text-[13px] text-slate-600 bg-white/95 backdrop-blur-sm border border-blue-100/50 rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-200">
            <span className="relative w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500" />
            <span>Automatización</span>
          </div>
          <div className="relative group flex items-center gap-2 text-[13px] text-slate-600 bg-white/95 backdrop-blur-sm border border-blue-100/50 rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
            <span className="relative w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600" />
            <span>Soporte técnico</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-medium animate-[bounce_2s_ease-in-out_infinite]">
          <span>Bajar</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </div>

      </div>

      {/* Bottom transition lines */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-0 pointer-events-none z-10" aria-hidden="true">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
        <div className="w-3/5 h-[1px] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent mt-1 mb-3" />
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(25px, -15px) rotate(2deg); }
          50% { transform: translate(-15px, 25px) rotate(-1deg); }
          75% { transform: translate(20px, 20px) rotate(1deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.15); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}