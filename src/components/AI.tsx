import { motion } from 'framer-motion'
import { Reveal } from './Motion'
import TextScramble from './TextScramble'
import styles from './AI.module.css'

const items = [
  'Full-stack LLM-powered applications',
  'Agent and sub-agent architectures for multi-step pipelines',
  'Advanced context orchestration',
  'Deterministic outputs and structured data pipelines',
  'Design-to-code automation',
  'LLM API integration',
  'AI-assisted debugging and refactoring',
]

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

export default function AI() {
  return (
    <section id="ai" className={styles.ai}>
      <div className="container">
        <Reveal>
          <div className={styles.label}><TextScramble text="AI Practice" /></div>
        </Reveal>
        <div className={styles.inner}>
          <Reveal>
            <div className={styles.statement}>From prompt to production — engineering AI systems that ship.</div>
            <p className={styles.body}>
              Daily use of Claude Code, Cursor, and Copilot has compressed what used to take days
              into hours. But the more interesting work is architectural — designing agent systems
              that can reason across multiple steps, engineering context windows that produce
              deterministic outputs, and closing the loop between design and shipped code.
            </p>
          </Reveal>
          <motion.div
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
          >
            {items.map((item) => (
              <motion.div
                key={item}
                className={styles.listItem}
                variants={listItem}
                transition={{ duration: 0.4, ease: [0.22, 0.68, 0, 1.1] }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
