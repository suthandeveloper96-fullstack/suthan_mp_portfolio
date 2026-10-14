import { useEffect, useState } from 'react'
import { profile, skills, experience, projects } from '../data/profile'

const pad = (n) => String(n).padStart(2, '0')

const links = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills', count: skills.length },
  { id: 'experience', label: 'Experience', count: experience.length },
  { id: 'projects', label: 'Work', count: projects.length },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Switch to the solid bar once the hero is scrolled past
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Back to top">
          <span className="nav__badge">SM</span>
          <span className="nav__brand">{profile.name}</span>
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              <span className="nav__text">{l.label}</span>
              {l.count && <sup>({pad(l.count)})</sup>}
            </a>
          ))}
        </nav>
        <button className="nav__burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
    </header>
  )
}
