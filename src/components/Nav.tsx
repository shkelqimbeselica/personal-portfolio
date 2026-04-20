import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#ai', label: 'AI' },
  { href: '#contact', label: 'Contact', isContact: true },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 80) {
          current = s.id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.name}>Shkëlqim Beselica</a>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${l.isContact ? styles.contactLink : ''} ${
                  active === l.href.slice(1) ? styles.active : ''
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
