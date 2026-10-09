import React from 'react'

export function LogoEmblem({ className = "w-10 h-10", variant = "dark" }) {
  return (
    <img
      src={variant === "light" ? "/assets/logo-light.png" : "/assets/logo.png"}
      alt=""
      width="512"
      height="512"
      decoding="async"
      aria-hidden="true"
      className={`brand-mark ${className}`}
    />
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
      emblem: "w-10 h-10",
      title: "text-lg",
      subtitle: "text-[9px]"
    },
    md: {
      emblem: "w-12 h-12",
      title: "text-xl",
      subtitle: "text-[10px]"
    },
    lg: {
      emblem: "w-16 h-16",
      title: "text-2xl sm:text-3xl",
      subtitle: "text-xs"
    }
  }
  const sizeClasses = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoEmblem className={sizeClasses.emblem} variant={variant} />
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight ${sizeClasses.title} ${isLightText ? 'text-white' : 'text-[#091c21]'}`}>
          Tresa<span className={isLightText ? 'text-[#4AA3B8]' : 'text-[#176477]'}>Soft</span>
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
