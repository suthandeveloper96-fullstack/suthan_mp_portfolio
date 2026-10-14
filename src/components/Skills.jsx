import Section from './Section'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <Section id="skills" label="What I do" title="Full stack skills" muted="for modern web products.">
      <div className="services">
        {skills.map((s, i) => (
          <article key={s.group} className="service reveal" style={{ '--d': `${i * 0.08}s` }}>
            <span className="service__num">● {String(i + 1).padStart(3, '0')}</span>
            <h3 className="service__title">{s.group}</h3>
            <div className="service__body">
              <p className="service__summary">{s.summary}</p>
              <ul className="pills">
                {s.items.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <span className="arrow-btn arrow-btn--accent">↗</span>
          </article>
        ))}
      </div>
    </Section>
  )
}
