import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={`${styles.label} reveal`}>
          <span>Contact</span>
        </div>
        <div className={styles.inner}>
          <div className={styles.links}>
            <a className={`${styles.row} reveal`} href="mailto:beselicashkelqim@gmail.com">
              <div>
                <div className={styles.rowLabel}>Email</div>
                <div className={styles.rowValue}>beselicashkelqim@gmail.com</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
            <a
              className={`${styles.row} reveal reveal-delay-1`}
              href="https://linkedin.com/in/shkelqimbeselica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <div className={styles.rowLabel}>LinkedIn</div>
                <div className={styles.rowValue}>linkedin.com/in/shkelqimbeselica</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
            <div className={`${styles.row} ${styles.rowStatic} reveal reveal-delay-2`}>
              <div>
                <div className={styles.rowLabel}>Location</div>
                <div className={styles.rowValue}>Prishtina, Kosovo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
