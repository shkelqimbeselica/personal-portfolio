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
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.name}>Shkëlqim Beselica</a>
          {/* Desktop links */}
          <ul className={styles.desktopLinks}>
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
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — rendered outside nav to avoid stacking context issues */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <ul className={styles.overlayLinks} onClick={(e) => e.stopPropagation()}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
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
    </>
  )
}
