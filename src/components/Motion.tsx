import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn'
  duration?: number
  once?: boolean
}

const variantMap = { fadeUp, fadeIn, scaleIn }

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  duration = 0.5,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 0.68, 0, 1.1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.22, 0.68, 0, 1.1] }}
    >
      {children}
    </motion.div>
  )
}
