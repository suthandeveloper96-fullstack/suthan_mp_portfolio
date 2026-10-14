import { skills } from '../data/profile'

const items = skills.flatMap((s) => s.items).filter((t) => !['HTML5', 'CSS3', 'Axios'].includes(t))

export default function Marquee() {
  // Rendered twice so the strip loops seamlessly
  const row = items.map((t) => (
    <span key={t} className="marquee__item">{t}<b>✳</b></span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">{row}{row}</div>
    </div>
  )
}
