// Splits text into words that blur/slide in one after another when scrolled into view
export function SplitWords({ text, start = 0 }) {
  return text.split(' ').map((w, i) => (
    <span key={i} className="word" style={{ '--i': start + i }}>
      {w}&nbsp;
    </span>
  ))
}

export default function Section({ id, label, title, muted, dark, children }) {
  const titleWords = title.split(' ').length
  return (
    <section id={id} className={`section ${dark ? 'section--dark' : ''}`}>
      <div className="container">
        <span className="chip reveal">{label}</span>
        <h2 className="heading split">
          <SplitWords text={title} />
          {muted && (
            <span className="heading__muted">
              <SplitWords text={muted} start={titleWords} />
            </span>
          )}
        </h2>
        {children}
      </div>
    </section>
  )
}
