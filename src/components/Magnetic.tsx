import { useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  strength?: number
  style?: CSSProperties
}

export default function Magnetic({ children, className, strength = 0.3, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTransform(`translate(${x * strength}px, ${y * strength}px)`)
  }

  const handleLeave = () => {
    setTransform('translate(0px, 0px)')
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transform,
        transition: transform === 'translate(0px, 0px)' ? 'transform 0.4s cubic-bezier(0.22, 0.68, 0, 1.1)' : 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
