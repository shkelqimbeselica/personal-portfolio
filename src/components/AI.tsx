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

export default function AI() {
  return (
    <section id="ai" className={styles.ai}>
      <div className="container">
        <div className={`${styles.label} reveal`}>
          <span>AI Practice</span>
        </div>
        <div className={styles.inner}>
          <div className="reveal">
            <div className={styles.statement}>I build with AI. Not just use it.</div>
            <p className={styles.body}>
              Daily use of Claude Code, Cursor, and Copilot has compressed what used to take days
              into hours. But the more interesting work is architectural — designing agent systems
              that can reason across multiple steps, engineering context windows that produce
              deterministic outputs, and closing the loop between design and shipped code.
            </p>
          </div>
          <div className={`${styles.list} reveal reveal-delay-1`}>
            {items.map((item) => (
              <div key={item} className={styles.listItem}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
