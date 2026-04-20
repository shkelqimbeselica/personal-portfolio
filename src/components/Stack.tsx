import { motion } from 'framer-motion'
import { Reveal } from './Motion'
import styles from './Stack.module.css'

interface StackGroup {
  category: string
  tags: { label: string; accent?: boolean }[]
}

const stack: StackGroup[] = [
  {
    category: 'Core',
    tags: [
      { label: 'TypeScript', accent: true }, { label: 'React', accent: true }, { label: 'Redux' },
      { label: 'Next.js', accent: true }, { label: 'React Native' }, { label: 'Vue / Vuex' },
      { label: 'RTK Query' }, { label: 'React Query' }, { label: 'Node.js' },
    ],
  },
  {
    category: 'Styling & UI',
    tags: [
      { label: 'Tailwind', accent: true }, { label: 'Shadcn/ui', accent: true }, { label: 'SCSS' },
      { label: 'Bootstrap' }, { label: 'HTML5 / CSS3' },
    ],
  },
  {
    category: 'APIs & Testing',
    tags: [
      { label: 'GraphQL', accent: true }, { label: 'REST' }, { label: 'Firebase' },
      { label: 'Vitest', accent: true }, { label: 'Jest' }, { label: 'Zod', accent: true },
      { label: 'NX' }, { label: 'Git' },
    ],
  },
  {
    category: 'AI & LLM',
    tags: [
      { label: 'LLM Integration', accent: true },
      { label: 'Agent Design', accent: true },
      { label: 'Prompt Engineering', accent: true },
      { label: 'Claude Code' }, { label: 'Cursor' },
      { label: 'Copilot' }, { label: 'Kombai' },
    ],
  },
]

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className="container">
        <Reveal>
          <div className={styles.label}><span>Stack</span></div>
        </Reveal>
        <div className={styles.grid}>
          {stack.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.08}>
              <div className={styles.group}>
                <div className={styles.cat}>{group.category}</div>
                <motion.div
                  className={styles.tags}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.03, delayChildren: gi * 0.08 }}
                >
                  {group.tags.map((t) => (
                    <motion.span
                      key={t.label}
                      className={`${styles.tag} ${t.accent ? styles.tagAccent : ''}`}
                      variants={tagVariants}
                      transition={{ duration: 0.3, ease: [0.22, 0.68, 0, 1.1] }}
                    >
                      {t.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
