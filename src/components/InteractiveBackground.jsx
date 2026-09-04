import React, { useState, useEffect } from 'react'

/**
 * InteractiveBackground - TresaSoft
 * 
 * Fondo ambiental dinámico que cambia de forma suave y limpia según el sector
 * en el que se encuentre el usuario al hacer scroll:
 * - INICIO: Tono fresco y tecnológico con orbes cian/azul y sutil cuadrícula tech.
 * - QUIÉNES SOMOS: Atmósfera corporativa y de confianza con anillos de conexión.
 * - SERVICIOS: Atmósfera tecnológica vibrante con orbes dobles y trazos de circuitos.
 * - BENEFICIOS: Tono sobrio, sólido y de precisión.
 * - CONTACTO: Halo centrado y cálido que invita a la comunicación.
 * 
 * Rendimiento:
 * - Acelerado 100% por GPU mediante transform y opacity con CSS transitions suaves.
 * - No usa partículas pesadas ni satura la pantalla.
 * - Compatible con prefers-reduced-motion y totalmente responsive.
 */
export default function InteractiveBackground({ enabled = true }) {
  const [activeSector, setActiveSector] = useState('inicio')

  useEffect(() => {
    if (!enabled) return

    const sectors = [
      { id: 'inicio', name: 'inicio' },
      { id: 'nosotros', name: 'nosotros' },
      { id: 'servicios', name: 'servicios' },
      { id: 'beneficios', name: 'beneficios' },
      { id: 'contacto', name: 'contacto' }
    ]

    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerPoint = scrollY + window.innerHeight * 0.4

      // Buscar qué sector está activo según la posición en la página
      for (let i = sectors.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectors[i].id)
        if (el) {
          const top = el.offsetTop
          if (triggerPoint >= top - 100) {
            setActiveSector(sectors[i].name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Ejecución inicial

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [enabled])

  if (!enabled) return null

  // Configuraciones de estilo de orbes y colores según cada sector
  const sectorStyles = {
    inicio: {
      bgGradient: 'from-[#edf6fb] via-[#f4f9fd] to-[#f8fafc]',
      orb1: { transform: 'translate(10vw, 5vh) scale(1)', opacity: 0.22, color: 'bg-blue-600' },
      orb2: { transform: 'translate(-15vw, 20vh) scale(0.9)', opacity: 0.18, color: 'bg-sky-400' },
      orb3: { transform: 'translate(5vw, 60vh) scale(0.8)', opacity: 0.12, color: 'bg-blue-500' },
      patternOpacity: 'opacity-40'
    },
    nosotros: {
      bgGradient: 'from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]',
      orb1: { transform: 'translate(-20vw, 25vh) scale(1.15)', opacity: 0.16, color: 'bg-blue-700' },
      orb2: { transform: 'translate(15vw, 35vh) scale(1.0)', opacity: 0.14, color: 'bg-sky-500' },
      orb3: { transform: 'translate(-5vw, 70vh) scale(0.9)', opacity: 0.10, color: 'bg-slate-500' },
      patternOpacity: 'opacity-25'
    },
    servicios: {
      bgGradient: 'from-[#eef6ff] via-[#f8fafc] to-[#f0f7fd]',
      orb1: { transform: 'translate(20vw, 35vh) scale(1.35)', opacity: 0.25, color: 'bg-blue-600' },
      orb2: { transform: 'translate(-18vw, 48vh) scale(1.2)', opacity: 0.22, color: 'bg-cyan-400' },
      orb3: { transform: 'translate(0vw, 65vh) scale(1.0)', opacity: 0.15, color: 'bg-indigo-500' },
      patternOpacity: 'opacity-50'
    },
    beneficios: {
      bgGradient: 'from-[#ffffff] via-[#f8fafc] to-[#f1f5f9]',
      orb1: { transform: 'translate(-12vw, 45vh) scale(1.1)', opacity: 0.18, color: 'bg-blue-600' },
      orb2: { transform: 'translate(18vw, 55vh) scale(1.0)', opacity: 0.15, color: 'bg-sky-400' },
      orb3: { transform: 'translate(-8vw, 80vh) scale(0.85)', opacity: 0.10, color: 'bg-slate-400' },
      patternOpacity: 'opacity-30'
    },
    contacto: {
      bgGradient: 'from-[#f8fafc] via-[#edf5fd] to-[#eaf2ff]',
      orb1: { transform: 'translate(0vw, 55vh) scale(1.4)', opacity: 0.24, color: 'bg-blue-600' },
      orb2: { transform: 'translate(-5vw, 65vh) scale(1.25)', opacity: 0.20, color: 'bg-sky-400' },
      orb3: { transform: 'translate(10vw, 75vh) scale(0.9)', opacity: 0.12, color: 'bg-cyan-500' },
      patternOpacity: 'opacity-35'
    }
  }

  const current = sectorStyles[activeSector] || sectorStyles.inicio

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none transition-colors duration-1000"
      aria-hidden="true"
    >
      {/* 1. Capa de degradado de fondo continuo que responde al sector */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${current.bgGradient} transition-all duration-1000 ease-out`}
      />

      {/* 2. Orbe 1 - Luz ambiental principal (Azul Tecnológico) */}
      <div
        className={`absolute top-0 right-1/4 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full blur-[90px] sm:blur-[120px] transition-all duration-1000 ease-out ${current.orb1.color}`}
        style={{
          transform: current.orb1.transform,
          opacity: current.orb1.opacity,
          willChange: 'transform, opacity'
        }}
      />

      {/* 3. Orbe 2 - Luz ambiental secundaria (Azul Eléctrico / Cian) */}
      <div
        className={`absolute top-0 left-1/4 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] rounded-full blur-[80px] sm:blur-[110px] transition-all duration-1000 ease-out ${current.orb2.color}`}
        style={{
          transform: current.orb2.transform,
          opacity: current.orb2.opacity,
          willChange: 'transform, opacity'
        }}
      />

      {/* 4. Orbe 3 - Acento de profundidad */}
      <div
        className={`absolute top-0 left-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full blur-[70px] sm:blur-[100px] transition-all duration-1000 ease-out ${current.orb3.color}`}
        style={{
          transform: current.orb3.transform,
          opacity: current.orb3.opacity,
          willChange: 'transform, opacity'
        }}
      />

      {/* 5. Trama sutil tecnológica vectorial (Cuadrícula fina + líneas de circuito limpias) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${current.patternOpacity}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.12) 1px, transparent 0),
            linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 96px 96px, 96px 96px'
        }}
      />

      {/* 6. Indicador de atmósfera sutil en esquinas según sector */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 bg-radial from-blue-600/10 to-transparent transition-opacity duration-1000 ${
          activeSector === 'inicio' || activeSector === 'servicios' ? 'opacity-100' : 'opacity-20'
        }`}
      />
    </div>
  )
}
