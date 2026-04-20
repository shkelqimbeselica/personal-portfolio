import { useEffect, useRef, useState } from 'react'
import styles from './GridBackground.module.css'

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Desktop: cursor-reactive dots
  useEffect(() => {
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = -1000
    let mouseY = -1000

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouse)

    const spacing = 40
    const baseRadius = 1
    const glowRadius = 120

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const influence = Math.max(0, 1 - dist / glowRadius)
          const alpha = 0.08 + influence * 0.35
          const radius = baseRadius + influence * 1.5

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = influence > 0.1
            ? `rgba(150, 255, 188, ${alpha})`
            : `rgba(112, 112, 120, ${alpha})`
          ctx.fill()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [isMobile])

  // Mobile: dot grid with animated pulse waves
  useEffect(() => {
    if (!isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spacing = 36
    const baseRadius = 0.8
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1
      const maxDist = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing

          const dist = Math.sqrt(x * x + y * y)
          const normalized = dist / maxDist

          // Single slow wave, very soft
          const wave = Math.sin(normalized * 10 - time * 2) * 0.5 + 0.5
          const pulse = Math.pow(wave, 6)

          const alpha = 0.06 + pulse * 0.08
          const radius = baseRadius + pulse * 0.4

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)

          if (pulse > 0.1) {
            ctx.fillStyle = `rgba(150, 255, 188, ${alpha})`
          } else {
            ctx.fillStyle = `rgba(112, 112, 120, ${alpha})`
          }
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
