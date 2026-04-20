import { motion } from 'framer-motion'
import styles from './Stats.module.css'

const stats = [
  { num: '40%', label: 'Load time reduction on enterprise legal platform', accent: true },
  { num: '3+', label: 'Products powered by a design system I architected' },
  { num: '7 yrs', label: 'Production React across enterprise and startup' },
  { num: '5', label: 'Global enterprise clients shipped to' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
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
          <motion.div key={s.num} className={styles.item} variants={item}>
            <div className={`${styles.num} ${s.accent ? styles.accent : ''}`}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
