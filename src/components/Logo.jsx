import React from 'react'

export function LogoEmblem({ className = "w-10 h-10" }) {
  return (
    <span className={`brand-emblem ${className}`} aria-hidden="true">
      <img
        src="/assets/imagen1.png"
        alt=""
        width="1254"
        height="1254"
        decoding="async"
      />
    </span>
  )
}

export default function Logo({
  variant = "dark", // "dark" (for light backgrounds) or "light" (for navy backgrounds)
  size = "md",
  showSubtitle = true,
  className = ""
}) {
  const isLightText = variant === "light"

  const sizes = {
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
  }
  const sizeClasses = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoEmblem className={sizeClasses.emblem} />
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight ${sizeClasses.title} ${isLightText ? 'text-white' : 'text-[#0b192c]'}`}>
          Tresa<span className={isLightText ? 'text-[#38BDF8]' : 'text-[#0263E2]'}>Soft</span>
        </span>
        {showSubtitle && (
          <span className={`font-medium tracking-[0.025em] mt-1 ${sizeClasses.subtitle} ${isLightText ? 'text-slate-300' : 'text-slate-500'}`}>
            Soluciones Tecnológicas
          </span>
        )}
      </div>
    </div>
  )
}
