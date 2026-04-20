import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*'

interface Props {
  text: string
  className?: string
  as?: 'span' | 'div'
  delay?: number
}

export default function TextScramble({ text, className, as: Tag = 'span', delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const [display, setDisplay] = useState(text)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true

    const length = text.length
    const duration = 1400
    const stepsPerChar = 5
    const totalFrames = length * stepsPerChar
    const frameTime = duration / totalFrames
    let frame = 0

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        frame++
        const resolved = Math.floor(frame / stepsPerChar)

        let result = ''
        for (let i = 0; i < length; i++) {
          if (text[i] === ' ') {
            result += ' '
          } else if (i < resolved) {
            result += text[i]
          } else {
            result += chars[Math.floor(Math.random() * chars.length)]
          }
        }

        setDisplay(result)

        if (resolved >= length) {
          setDisplay(text)
          clearInterval(timer)
        }
      }, frameTime)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [inView, text, delay])

  return (
    <Tag ref={ref as never} className={className}>
      {display}
    </Tag>
  )
}
