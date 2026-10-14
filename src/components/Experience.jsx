import Section from './Section'
import { experience } from '../data/profile'

const years = (period) => period.match(/\d{4}|Present/g).join(' – ')

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've" muted="built and shipped." dark>
      <div className="jobs">
        {experience.map((job, i) => (
          <article key={job.company} className="job reveal" style={{ '--d': `${i * 0.12}s` }}>
            <div className="job__head">
              <span className="job__tag">
                {job.company.split(' ')[0].toUpperCase()}_[{years(job.period)}]
              </span>
              <span className="job__loc">{job.location}</span>
            </div>
            <h3 className="job__role">{job.role}</h3>
            <p className="job__company">{job.company} · {job.period}</p>
            <ul className="job__points">
              {job.points.map((p, k) => <li key={k}>{p}</li>)}
            </ul>
            <ul className="pills pills--dark">
              {job.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
