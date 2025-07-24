'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

interface AnimatedGradientBackgroundProps {
  className?: string
  children?: React.ReactNode
  intensity?: 'subtle' | 'medium' | 'strong'
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

export function Beams({
  className,
  intensity,
  children,
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const minimumBeams = 15
  const pathname = usePathname()
  const resolvedIntensity = intensity ?? getBeamsIntensity(pathname)
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  function createBeamWithTheme(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10
    // Cores consistentes com o tema
    const hue = isDark
      ? 20 + Math.random() * 30 // Tons quentes (laranja/amarelo) para tema escuro
      : 200 + Math.random() * 40 // Tons frios (azul/roxo) para tema claro

    return {
      x: Math.random() * width * 1.5 - width * 0.25,
      y: Math.random() * height * 1.5 - height * 0.25,
      width: 30 + Math.random() * 60,
      length: height * 2.5,
      angle: angle,
      speed: 0.6 + Math.random() * 1.2,
      opacity: 0.12 + Math.random() * 0.16,
      hue: hue,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }
  }

  // Smooth transition for opacity
  const opacityMap = {
    subtle: 0.3,
    medium: 0.8,
    strong: 1,
  }

  const animatedOpacity = useMotionValue(opacityMap[resolvedIntensity])

  useEffect(() => {
    animate(animatedOpacity, opacityMap[resolvedIntensity], {
      duration: 1.2,
      ease: 'easeInOut',
    })
  }, [resolvedIntensity])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const totalBeams = minimumBeams * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeamWithTheme(canvas.width, canvas.height)
      )
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      if (!canvas) return beam
      const newBeam = createBeamWithTheme(canvas.width, canvas.height)
      const column = index % 3
      const spacing = canvas.width / 3
      newBeam.x =
        column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      return Object.assign(beam, newBeam)
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        animatedOpacity.get()

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      gradient.addColorStop(0, `hsla(${beam.hue}, 95%, 60%, 0)`)
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 95%, 60%, ${pulsingOpacity * 0.5})`
      )
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 95%, 60%, ${pulsingOpacity})`
      )
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 95%, 60%, ${pulsingOpacity})`
      )
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 95%, 60%, ${pulsingOpacity * 0.5})`
      )
      gradient.addColorStop(1, `hsla(${beam.hue}, 95%, 60%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    function animateBeams() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = 'blur(35px)'

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
        }

        drawBeam(ctx, beam)
      })

      animationFrameRef.current = requestAnimationFrame(animateBeams)
    }

    animateBeams()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [animatedOpacity, isDark])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden',
        isDark ? 'bg-gray-950' : 'bg-white-50',
        className
      )}
      style={{
        minHeight: '1px',
        ...(typeof window !== 'undefined' && containerRef.current
          ? { height: undefined }
          : {}),
      }}
    >
      <canvas
        ref={canvasRef}
        className='absolute inset-0 z-0 pointer-events-none'
        style={{ filter: 'blur(15px)' }}
      />
      <motion.div
        className='absolute inset-0 z-0 pointer-events-none'
        style={{
          backgroundColor: isDark
            ? 'rgba(10, 10, 20, 0.1)'
            : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(50px)',
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      {children && <div className='relative z-10'>{children}</div>}
    </div>
  )
}

// TODO verificar intensidade dos beams
export function getBeamsIntensity(
  pathname?: string
): 'subtle' | 'medium' | 'strong' {
  // const path =
  //   pathname ??
  //   (typeof window !== 'undefined' ? window.location.pathname : null)
  // if (path === '/' || !path) return 'strong'
  // if (path.startsWith('/imoveis') || path.startsWith('/agentes'))
  //   return 'subtle'
  // return 'medium'
  return 'strong'
}
