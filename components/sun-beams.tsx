'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'motion/react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

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
export function SunBeams({
  className,
  intensity,
  children,
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const MINIMUM_BEAMS = 20
  const pathname = usePathname()
  const resolvedIntensity = intensity ?? getSunBeamsIntensity(pathname)
  const [isDark, setIsDark] = useState(false)

  function createBeamWithTheme(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10
    // Quentes no dark, frios (azul/roxo) no light
    const hue = isDark
      ? 10 + Math.random() * 50 // quentes: laranja, amarelo, vermelho
      : 210 + Math.random() * 40 // frios: azul (210-240), roxo (até 250)
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
      ctx.setTransform(1, 0, 0, 1, 0, 0) // Reset transform before scaling
      ctx.scale(dpr, dpr)

      const totalBeams = MINIMUM_BEAMS * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeamWithTheme(canvas.width, canvas.height)
      )
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      if (!canvas) return beam
      // Cria um novo beam com a cor correta do tema
      const newBeam = createBeamWithTheme(canvas.width, canvas.height)
      // Mantém a posição x baseada na coluna para manter o padrão
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animatedOpacity])

  useEffect(() => {
    // Detecta tema inicial
    const checkTheme = () => {
      if (typeof window !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'))
      }
    }
    checkTheme()
    // Observa mudanças de tema
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  // Recria todos os beams ao trocar de tema
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const totalBeams = MINIMUM_BEAMS * 1.5
    beamsRef.current = Array.from({ length: totalBeams }, () =>
      createBeamWithTheme(canvas.width, canvas.height)
    )
  }, [isDark])

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full overflow-hidden bg-white-950', className)}
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
        className='absolute inset-0 bg-white-950/5 z-0 pointer-events-none'
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY,
        }}
        style={{
          backdropFilter: 'blur(50px)',
        }}
      />
      {children && <div className='relative z-10'>{children}</div>}
    </div>
  )
}

export function getSunBeamsIntensity(
  pathname?: string
): 'subtle' | 'medium' | 'strong' {
  if (!pathname) {
    if (typeof window !== 'undefined') {
      pathname = window.location.pathname
    } else {
      return 'strong'
    }
  }
  if (pathname === '/') return 'strong'
  if (pathname.startsWith('/imoveis') || pathname.startsWith('/about'))
    return 'subtle'
  return 'medium'
}
