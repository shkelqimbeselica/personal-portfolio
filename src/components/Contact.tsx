import { Reveal } from './Motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <Reveal>
          <div className={styles.label}><span>Contact</span></div>
        </Reveal>
        <div className={styles.inner}>
          <div className={styles.links}>
            <Reveal>
              <a className={styles.row} href="mailto:beselicashkelqim@gmail.com">
                <div>
                  <div className={styles.rowLabel}>Email</div>
                  <div className={styles.rowValue}>beselicashkelqim@gmail.com</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                className={styles.row}
                href="https://www.linkedin.com/in/shk%C3%ABlqim-beselica-17935b15a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <div className={styles.rowLabel}>LinkedIn</div>
                  <div className={styles.rowValue}>linkedin.com/in/shkelqimbeselica</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <div className={`${styles.row} ${styles.rowStatic}`}>
                <div>
                  <div className={styles.rowLabel}>Location</div>
                  <div className={styles.rowValue}>Prishtina, Kosovo</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
