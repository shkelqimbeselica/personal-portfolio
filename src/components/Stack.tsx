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

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className="container">
        <div className={`${styles.label} reveal`}>
          <span>Stack</span>
        </div>
        <div className={styles.grid}>
          {stack.map((group) => (
            <div key={group.category} className={`${styles.group} reveal`}>
              <div className={styles.cat}>{group.category}</div>
              <div className={styles.tags}>
                {group.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`${styles.tag} ${t.accent ? styles.tagAccent : ''}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
