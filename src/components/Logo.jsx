import React from 'react'

export function LogoEmblem({ className = "w-10 h-10", isDarkBackground = false }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden ${className}`}>
      {/* High-definition emblem from official brand assets */}
      <img
        src="/assets/imagen1.png"
        alt="Isotipo TresaSoft"
        className="w-full h-full object-cover rounded-full shadow-sm"
        loading="eager"
      />
    </div>
  )
}

export default function Logo({
  variant = "dark", // "dark" (for light backgrounds) or "light" (for navy backgrounds)
  size = "md",
  showSubtitle = true,
  className = ""
}) {
  const isLightText = variant === "light"

  const sizeClasses = {
    sm: {
      emblem: "w-8 h-8",
      title: "text-lg",
      subtitle: "text-[9px]"
    },
    md: {
      emblem: "w-10 h-10",
      title: "text-xl",
      subtitle: "text-[10px]"
    },
    lg: {
      emblem: "w-14 h-14",
      title: "text-2xl sm:text-3xl",
      subtitle: "text-xs"
    }
  }[size] || sizeClasses.md

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoEmblem className={sizeClasses.emblem} isDarkBackground={isLightText} />
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight ${sizeClasses.title} ${isLightText ? 'text-white' : 'text-[#0b192c]'}`}>
          Tresa<span className="text-[#2563eb]">Soft</span>
        </span>
        {showSubtitle && (
          <span className={`font-semibold uppercase tracking-[0.14em] mt-0.5 ${sizeClasses.subtitle} ${isLightText ? 'text-slate-300' : 'text-slate-500'}`}>
            Soluciones Tecnológicas
          </span>
        )}
      </div>
    </div>
  )
}
