import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <div className={`${styles.meta} reveal`}>
              <span>Senior Frontend Engineer</span>
              <span className={styles.sep}>/</span>
              <span>Frontend Lead · Ritech International AG</span>
            </div>
            <h1 className={`${styles.h1} reveal reveal-delay-1`}>
              Senior frontend engineer building production React for Nissan, Honda, and Samsung.
            </h1>
            <p className={`${styles.sub} reveal reveal-delay-2`}>
              Architecting design systems and shipping LLM-powered features. Currently leading frontend at Ritech.
            </p>
          </div>
          <div className={`${styles.aside} reveal reveal-delay-1`}>
            <div className={styles.asideItem}>Prishtina, Kosovo</div>
            <div className={styles.asideItem}>7 yrs production React</div>
            <div className={`${styles.asideItem} ${styles.accent}`}>BSc AI in progress</div>
          </div>
        </div>
      </div>
    </section>
  )
}
