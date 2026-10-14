import { profile } from '../data/profile'

const nav = [
  ['Home', '#top'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Work', '#projects'],
  ['Contact', '#contact'],
]

export default function Footer() {
  const social = [
    profile.socials.linkedin && ['LinkedIn', profile.socials.linkedin],
    profile.socials.github && ['GitHub', profile.socials.github],
    ['Email', `mailto:${profile.email}`],
    profile.phone && ['Call', `tel:${profile.phone.replace(/\s/g, '')}`],
  ].filter(Boolean)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <p>
              Focused on building clean, reliable and scalable web applications that help businesses
              <strong> serve their users better.</strong>
            </p>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`} className="footer__email">{profile.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <span className="footer__label">Navigation</span>
              {nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
            </div>
            <div>
              <span className="footer__label">Social</span>
              {social.map(([l, h]) => (
                <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l} ↗</a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">{profile.name}</div>
      </div>
      <div className="footer__bar">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
