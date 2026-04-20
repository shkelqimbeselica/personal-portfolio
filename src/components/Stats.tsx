import { useEffect, useRef, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import styles from './Stats.module.css'

interface StatData {
  value: number
  suffix: string
  label: string
  accent?: boolean
}

const stats: StatData[] = [
  { value: 40, suffix: '%', label: 'Load time reduction on enterprise legal platform', accent: true },
  { value: 3, suffix: '+', label: 'Products powered by a design system I architected' },
  { value: 7, suffix: ' yrs', label: 'Production React across enterprise and startup' },
  { value: 5, suffix: '', label: 'Global enterprise clients shipped to' },
]

function CountUp({ value, suffix, accent }: { value: number; suffix: string; accent?: boolean }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView) return

    const duration = 1600
    const steps = 60
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      const progress = current / steps
      // spring-like overshoot ease
      const eased = progress < 0.8
        ? 1 - Math.pow(1 - progress * 1.25, 4)
        : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.02 * (1 - progress) * 5

      setCount(Math.round(Math.min(eased, 1.05) * value))

      if (current >= steps) {
        setCount(value)
        setDone(true)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className={`${styles.num} ${accent ? styles.accent : ''}`}
      initial={{ filter: 'blur(8px)', opacity: 0 }}
      animate={inView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.span
        animate={done ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ display: 'inline-block' }}
      >
        {count}{suffix}
      </motion.span>
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.68, 0, 1.1] } },
}

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {stats.map((s) => (
          <motion.div key={s.label} className={styles.item} variants={item}>
            <CountUp value={s.value} suffix={s.suffix} accent={s.accent} />
            <div className={styles.label}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
