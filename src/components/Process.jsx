import Section from './Section'
import { process } from '../data/profile'

const icons = ['✳', '✦', '❖', '✺']

export default function Process() {
  return (
    <Section id="process" label="My process" title="A development process" muted="that works.">
      <div className="process">
        {process.map((p, i) => (
          <div key={p.title} className="process__card reveal" style={{ '--d': `${i * 0.12}s` }}>
            <span className="process__icon">{icons[i]}</span>
            <span className="process__step">{String(i + 1).padStart(2, '0')}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
