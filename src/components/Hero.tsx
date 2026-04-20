import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const ease = [0.22, 0.68, 0, 1.1] as const

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <motion.div
              className={styles.meta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span>Senior Frontend Engineer</span>
              <span className={styles.sep}>/</span>
              <span>Frontend Lead</span>
            </motion.div>
            <motion.h1
              className={styles.h1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <span className={styles.highlight}>Senior frontend engineer</span> building production React for Nissan, Honda, and Samsung.
            </motion.h1>
            <motion.p
              className={styles.sub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              Architecting design systems and shipping LLM-powered features. Currently leading frontend at Ritech.
            </motion.p>
          </div>
          <motion.div
            className={styles.aside}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            <div className={styles.asideItem}>7 yrs production React</div>
            <div className={`${styles.asideItem} ${styles.accent}`}>BSc AI in progress</div>
          </motion.div>
        </div>
      </div>
      <div className={styles.gradientLine} />
    </section>
  )
}
