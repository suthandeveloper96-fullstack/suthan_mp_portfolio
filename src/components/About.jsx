import Section from './Section'
import { profile, education } from '../data/profile'

export default function About() {
  return (
    <Section id="about" label="About me" title="Building digital products" muted="that are fast, reliable and easy to use.">
      <div className="about">
        <div className="about__text">
          {profile.about.map((p, i) => (
            <p key={i} className="reveal" style={{ '--d': `${i * 0.1}s` }}>{p}</p>
          ))}
          {education.map((e) => (
            <div key={e.degree} className="about__edu reveal">
              <span className="about__edu-label">Education</span>
              <strong>{e.degree}</strong>
              <span>{e.school} · {e.period}</span>
            </div>
          ))}
        </div>
        <div className="about__stats">
          {profile.stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ '--d': `${i * 0.12}s` }}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
