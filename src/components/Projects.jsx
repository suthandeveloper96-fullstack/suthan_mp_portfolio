import Section from './Section'
import { projects } from '../data/profile'

const themes = ['project__visual--red', 'project__visual--ink', 'project__visual--wine']
const tags = ['Healthcare', 'E-learning', 'Construction']

export default function Projects() {
  return (
    <Section id="projects" label="Selected work" title="Featured" muted="projects.">
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.title} className="project reveal" style={{ '--d': `${i * 0.1}s` }}>
            <div className={`project__visual ${themes[i % themes.length]}`}>
              <span className="project__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="project__mark">{p.title.split(' ')[0]}</span>
              <ul className="project__stack">
                {p.tech.slice(0, 3).map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="project__caption">
              <span>✳ {p.title.split(' (')[0].toUpperCase()}</span>
              <span>/{tags[i] || p.company}</span>
            </div>
            <p className="project__desc">{p.description}</p>
            <div className="project__meta">
              <span>{p.company}</span>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
