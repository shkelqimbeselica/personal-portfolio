import styles from './About.module.css'

const facts = [
  { label: 'Location', value: 'Prishtina, Kosovo' },
  { label: 'Languages', value: 'English C1 · Albanian native' },
  { label: 'Current role', value: 'Frontend Lead · Ritech International AG' },
  { label: 'Education', value: 'BSc Artificial Intelligence — AAB College (in progress) · BSc Computer Software Engineering — UBT (2022)' },
  { label: 'Certifications', value: 'Claude Code in Action (Anthropic) · AI Agents & AI Agents Fundamentals (Hugging Face) · Intro to Generative AI & Intro to LLMs (Google) · Front-End Developer (Shkolla Digjitale)' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={`${styles.label} reveal`}>
          <span>About</span>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.bio} reveal`}>
            <p>
              Seven years of shipping production React across enterprise and startup — from a global
              automotive social platform for Nissan, Honda, and Mitsubishi to a real-time seating
              chart and ticketing platform for venue events. I specialize in translating
              sophisticated design systems into pixel-perfect, high-performance interfaces, and
              taking full architectural ownership from concept to production.
            </p>
            <p>
              Currently leading frontend at Ritech International AG, where I set direction on stack,
              tooling, and engineering practice. My recent work sits at the intersection of frontend
              architecture and AI: building LLM-powered features, agent orchestration systems, and
              design-to-code pipelines that compress the gap between design intent and shipped
              product.
            </p>
            <p>BSc in Computer Software Engineering from UBT, currently pursuing a BSc in Artificial Intelligence at AAB College. Certified by Anthropic, Hugging Face, Google, and Shkolla Digjitale.</p>
          </div>
          <div className={`${styles.facts} reveal reveal-delay-1`}>
            {facts.map((f) => (
              <div key={f.label} className={styles.factItem}>
                <div className={styles.factLabel}>{f.label}</div>
                <div className={styles.factValue}>{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
