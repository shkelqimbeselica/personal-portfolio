import styles from './Stats.module.css'

const stats = [
  { num: '40%', label: 'Load time reduction on enterprise legal platform', accent: true },
  { num: '3+', label: 'Products powered by a design system I architected' },
  { num: '7 yrs', label: 'Production React across enterprise and startup' },
  { num: '5', label: 'Global enterprise clients shipped to' },
]

export default function Stats() {
  return (
    <section id="stats" className={styles.stats}>
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <div key={s.num} className={`${styles.item} reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            <div className={`${styles.num} ${s.accent ? styles.accent : ''}`}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
