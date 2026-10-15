import { useState } from 'react'
import { SplitWords } from './Section'
import { profile } from '../data/profile'

const empty = { name: '', email: '', subject: '', message: '', _honey: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Sends the message straight to the inbox via FormSubmit (no email app needed)
  const onSubmit = async (e) => {
    e.preventDefault()
    if (form._honey) return // bot filled the hidden field
    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio: ${form.subject || `Message from ${form.name}`}`,
          _replyto: form.email,
          _template: 'table',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error(data.message)
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  const tiles = [
    { label: 'Location', value: profile.location },
    profile.phone && {
      label: 'Phone / WhatsApp',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      extra: profile.whatsapp && { label: 'Chat on WhatsApp ↗', href: profile.whatsapp },
    },
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Status', value: 'Open to new opportunities' },
  ].filter(Boolean)

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact">
          <form className="contact__form reveal" onSubmit={onSubmit}>
            <div className="contact__form-head">{profile.name}</div>
            <h3>Reach out to me</h3>
            <label>
              Name
              <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
            </label>
            <label>
              Subject
              <input name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" value={form.message} onChange={onChange} required placeholder="Your message" />
            </label>
            {/* Honeypot: hidden from people, catches spam bots */}
            <input type="text" name="_honey" value={form._honey} onChange={onChange} className="form__honey" tabIndex="-1" autoComplete="off" />
            <button type="submit" className="btn-dark" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Email'}
            </button>
            {status === 'sent' && <p className="form__msg form__msg--ok">✓ Thanks! Your message has been sent. I'll reply soon.</p>}
            {status === 'error' && (
              <p className="form__msg form__msg--err">
                Something went wrong. Please email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}
          </form>

          <div className="contact__pitch">
            <span className="chip chip--light reveal">Let's talk</span>
            <h2 className="contact__title split"><SplitWords text="Let's build something together" /></h2>
            <span className="contact__star">✳</span>
            <p className="contact__lead reveal">Open to full-time roles and freelance projects</p>
            <p className="contact__text reveal">
              Have a product to build, a team to join, or a question? Send me a message and I'll get back to you soon.
            </p>
          </div>
        </div>

        <div className="tiles">
          {tiles.map((t, i) => (
            <div key={t.label} className="tile reveal" style={{ '--d': `${i * 0.08}s` }}>
              <span>{t.label}</span>
              <div className="tile__links">
                {t.href ? <a href={t.href}>{t.value}</a> : <strong>{t.value}</strong>}
                {t.extra && (
                  <a href={t.extra.href} target="_blank" rel="noreferrer" className="tile__wa">{t.extra.label}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
