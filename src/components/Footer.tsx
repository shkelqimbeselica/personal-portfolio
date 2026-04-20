import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className="container">
      <footer className={styles.footer}>
        <span className={styles.name}>Shkëlqim Beselica · 2025</span>
        <span className={styles.note}>Built with React, TypeScript, Tailwind</span>
      </footer>
    </div>
  )
}
