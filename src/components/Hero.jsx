import { profile } from '../data/profile'
import photo from '../assets/suthan-bust.webp'

export default function Hero() {
  const firstName = profile.name.split(' ')[0].toUpperCase()

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__ghost" aria-hidden="true">{firstName}</div>

      <img className="hero__photo" src={photo} alt={profile.name} />

      {/* Mobile-only round avatar with animated ring */}
      <div className="hero__avatar" aria-hidden="true">
        <span className="hero__avatar-orbit"><i /></span>
        <img src={photo} alt="" className="hero__avatar-img" />
        <span className="hero__avatar-badge"><b />Open to work</span>
      </div>

      <p className="hero__intro load" style={{ '--d': '0.5s' }}>
        Engineering high-performance web solutions — intuitive React interfaces backed by scalable Node.js microservices on AWS.
      </p>

      <div className="hero__namewrap">
        <h1 className="hero__name" aria-label={profile.name}>
          {firstName.split('').map((ch, i) => (
            <span key={i} className="hero__letter" style={{ '--i': i }}>{ch}</span>
          ))}
        </h1>
      </div>

      <a href="#projects" className="hero__card load" style={{ '--d': '0.9s' }}>
        <div className="code">
          <div className="code__dots"><i /><i /><i /></div>
          <pre>
            <span className="c-k">const</span> dev = {'{'}{'\n'}
            {'  '}name: <span className="c-s">'{profile.name}'</span>,{'\n'}
            {'  '}role: <span className="c-s">'Full Stack'</span>,{'\n'}
            {'  '}stack: [<span className="c-s">'React'</span>, <span className="c-s">'Node'</span>],{'\n'}
            {'  '}cloud: <span className="c-s">'AWS'</span>,{'\n'}
            {'}'}
          </pre>
        </div>
        <div className="hero__card-foot">
          <span>✳ SMARTSCRIPTS</span>
          <span>/Full Stack</span>
        </div>
      </a>

      <a href="#contact" className="hero__talk load" style={{ '--d': '1.1s' }}>
        <img src={photo} alt="" className="hero__talk-img" />
        <div>
          <span className="hero__talk-label">Let's Talk</span>
          <strong>{profile.name}</strong>
          <span className="hero__talk-role">{profile.role}</span>
        </div>
        <span className="hero__talk-star">✳</span>
        <span className="arrow-btn">↗</span>
      </a>
    </section>
  )
}
