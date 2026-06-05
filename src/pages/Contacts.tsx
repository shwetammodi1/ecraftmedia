import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'

const services = ['SEO', 'Web Development', 'Digital Marketing', 'App Development']

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)
const SkypeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .789-.688 1.238-1.469 1.238-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.198 1.257 2.252 1.503l2.465.601c2.897.703 3.655 2.281 3.655 3.858-.001 2.642-2.017 4.381-5.606 4.381zm11.931.906c0 3.227-2.617 4.22-4.109 4.22-.862 0-3.01.001-3.01-1.327 0-1.337 1.133-.945 1.133-2.573V3.548C17.014 2.24 15.827 2 16.027 2h0c1.641 0 4.139.988 4.139 4.22l-.166 13.56z" />
  </svg>
)
const FbIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const TwIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const contactMethods = [
  { Icon: PhoneIcon, label: 'Phone', value: '+91 8850183944', href: 'tel:+918850183944', color: '#F59E0B' },
  { Icon: MailIcon, label: 'E-mail', value: 'info@ecraftmedia.com', href: 'mailto:info@ecraftmedia.com', color: '#8B5CF6' },
  { Icon: SkypeIcon, label: 'Skype', value: 'ecraftmedia', href: 'skype:ecraftmedia', color: '#10B981' },
  { Icon: FbIcon, label: 'Facebook', value: 'facebook.com/ecraftmediaa', href: 'https://facebook.com/ecraftmediaa', color: '#3B82F6', ext: true },
  { Icon: TwIcon, label: 'Twitter', value: 'twitter.com/ecraftmedia1', href: 'https://twitter.com/ecraftmedia1', color: '#1DA1F2', ext: true },
]

const inputCls = 'w-full rounded-xl border px-4 py-3 text-sm outline-none transition'

export default function Contacts() {
  usePageMeta(
    'Contacts — Ecraft Media',
    'Contact Ecraft Media for a fast digital marketing solution, pricing details, and project consultation.'
  )

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent'>('idle')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <main className="min-h-screen bg-base text-white">
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.1),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.06),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="mb-14">
            <div className="section-tag mb-5" style={{ color: '#10B981' }}>
              Contact
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl leading-tight tracking-tight mb-4">
              Contact Us and We'll Give<br />
              <span style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                You a Solution!
              </span>
            </h1>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              We guarantee a response within 24 Business hours including our Packages and Pricing.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">

            {/* Left — contact info */}
            <div className="space-y-4">
              {/* Contact methods */}
              <div className="card rounded-2xl p-6">
                <h2 className="font-display font-bold text-[17px] text-white mb-5">Let's Connect</h2>
                <div className="space-y-3">
                  {contactMethods.map(c => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.ext ? '_blank' : undefined}
                      rel={c.ext ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = `${c.color}30`
                        el.style.background = `${c.color}06`
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = 'var(--border)'
                        el.style.background = 'var(--card-bg)'
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ background: `${c.color}12`, border: `1px solid ${c.color}20`, color: c.color }}
                      >
                        <c.Icon />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-3)' }}>{c.label}</div>
                        <div className="text-sm font-medium text-white group-hover:opacity-80 transition-opacity">{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working hours */}
              <div className="card rounded-2xl p-5">
                <h3 className="font-semibold text-white text-[13px] mb-4">Working Hours</h3>
                <div className="space-y-3 text-[13px]">
                  {[
                    { d: 'Monday – Friday', h: '9:00 AM – 7:00 PM' },
                    { d: 'Saturday', h: '10:00 AM – 5:00 PM' },
                    { d: 'Sunday', h: 'Closed' },
                  ].map(row => (
                    <div key={row.d} className="flex justify-between items-center">
                      <span className="text-slate-500">{row.d}</span>
                      <span className="font-medium text-[12px]" style={{ color: row.h === 'Closed' ? 'var(--text-3)' : '#F59E0B' }}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free strategy call */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.14)' }}
              >
                <div className="font-display font-bold text-white text-[17px] mb-2">Free Strategy Call</div>
                <p className="text-slate-400 text-[13px] mb-5">
                  Book a 30-min free consultation with our experts. Get a tailored growth plan for your business.
                </p>
                <a href="tel:+918850183944" className="btn-primary text-[13px] w-full justify-center">
                  <PhoneIcon />
                  Call: +91 8850183944
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'sent' ? (
                <div
                  className="card rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
                  style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.18)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-emerald-400"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will contact you within 24 hours with a personalized strategy.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card rounded-2xl p-7 space-y-5"
                >
                  <div>
                    <h2 className="font-display font-bold text-2xl text-white mb-1">Send Message</h2>
                    <p className="text-slate-500 text-sm">Fill in the form and we'll respond within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name" required>
                      <input
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        className={inputCls}
                        style={fieldStyle}
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        className={inputCls}
                        style={fieldStyle}
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputCls}
                        style={fieldStyle}
                      />
                    </Field>
                    <Field label="Service Required">
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className={inputCls}
                        style={fieldStyle}
                      >
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" required>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      className={inputCls}
                      style={{ ...fieldStyle, resize: 'none' }}
                    />
                  </Field>

                  <button type="submit" className="btn-primary w-full py-4 text-[14px] justify-center">
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const fieldStyle: React.CSSProperties = {
  background: 'var(--input-bg)',
  border: '1px solid var(--input-border)',
  color: 'var(--text-1)',
  borderRadius: '10px',
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactElement }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-2)' }}>
        {label}{required && <span className="text-amber-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

// needed for React.ReactElement
import React from 'react'
