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
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
  { Icon: WhatsAppIcon, label: 'WhatsApp', value: '+91 88501 83944', href: 'https://wa.me/918850183944', color: '#25D366', ext: true },
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
      <section className="relative overflow-hidden px-4 py-32">
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
              <div className="card rounded-[20px] p-6">
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
              <div className="card rounded-[20px] p-5">
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
                className="rounded-[20px] p-6"
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
                  className="card rounded-[20px] p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
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
                  className="card rounded-[20px] p-7 space-y-5"
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
