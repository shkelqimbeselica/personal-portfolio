import { motion } from 'framer-motion'
import TextScramble from './TextScramble'
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
              <TextScramble text="Senior Frontend Engineer" delay={0.3} />
              <span className={styles.sep}>/</span>
              <TextScramble text="Frontend Lead" delay={0.5} />
            </motion.div>
            <motion.h1
              className={styles.h1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <span className={styles.highlight}>Senior frontend engineer</span> building production React at scale for global enterprise clients.
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
            <div className={styles.asideItem}><TextScramble text="7 yrs production React" delay={0.4} /></div>
            <div className={`${styles.asideItem} ${styles.accent}`}><TextScramble text="BSc AI in progress" delay={0.5} /></div>
          </motion.div>
        </div>
      </div>
      <motion.div
          className={styles.marqueeWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <div className={styles.marqueeLabel}>Shipped for</div>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeInner}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className={styles.marqueeSet}>
                  {[
                    { name: 'Nissan', logo: '/logos/nissan.svg', w: 28 },
                    { name: 'Honda', logo: '/logos/honda.svg', w: 32 },
                    { name: 'Mitsubishi', logo: '/logos/mitsubishi.svg', w: 26 },
                    { name: 'Samsung', logo: '/logos/samsung.svg', w: 90 },
                    { name: 'Ritech', logo: '/logos/ritech.svg', w: 80 },
                    { name: 'Gjirafa', logo: '/logos/gjirafa.svg', w: 85 },
                    { name: 'Sogody', logo: '/logos/sogody.svg', w: 75 },
                  ].map((brand) => (
                    <span key={brand.name} className={styles.marqueeItem}>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className={styles.logo}
                        style={{ width: brand.w, height: 'auto' }}
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      <div className={styles.gradientLine} />
    </section>
  )
}
