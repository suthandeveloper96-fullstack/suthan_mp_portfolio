import { profile } from '../data/profile'
import { icons } from './SocialIcons'

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
    profile.socials.linkedin && ['LinkedIn', profile.socials.linkedin, 'linkedin'],
    profile.socials.instagram && ['Instagram', profile.socials.instagram, 'instagram'],
    profile.socials.github && ['GitHub', profile.socials.github, 'github'],
    profile.whatsapp && ['WhatsApp', profile.whatsapp, 'whatsapp'],
    ['Email', `mailto:${profile.email}`, 'email'],
    profile.phone && ['Call', `tel:${profile.phone.replace(/\s/g, '')}`, 'phone'],
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
              <div className="footer__socials">
                {social.map(([l, h, icon]) => (
                  <a
                    key={l}
                    href={h}
                    className={`footer__social footer__social--${icon}`}
                    target={h.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={l}
                    title={l}
                  >
                    <span className="footer__icon">{icons[icon]}</span>
                  </a>
                ))}
              </div>
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
