import React, { useState, useRef, useEffect } from 'react'

const services = [
  'SEO Services', 'Web Development', 'App Development',
  'Digital Marketing', 'Google / Meta Ads', 'Content Marketing', 'Other',
]

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

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setTimeout(() => setState('done'), 1600)
  }

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden" style={{ background: 'var(--page-bg-alt)' }}>
      <div
        className="orb w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">

        {/* Header */}
        <div ref={ref} className="fade-up mb-14">
          <div className="section-tag mb-5">Get In Touch</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Let's Build Something<br />
              <span className="text-gold">Extraordinary</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xs sm:text-right leading-relaxed">
              We'll get back within 24 hours with a tailored strategy.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── Info column ── */}
          <div className="lg:col-span-2 space-y-4">
            <InfoCard
              Icon={PhoneIcon}
              label="Phone"
              value="+91 88501 83944"
              href="tel:+918850183944"
              color="#F59E0B"
            />
            <InfoCard
              Icon={MailIcon}
              label="Email"
              value="info@ecraftmedia.com"
              href="mailto:info@ecraftmedia.com"
              color="#8B5CF6"
            />
            <InfoCard
              Icon={LocationIcon}
              label="Location"
              value="Mumbai, Maharashtra, India"
              color="#10B981"
            />

            {/* Hours */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <h4 className="font-semibold text-white text-[13px] mb-4">Working Hours</h4>
              <div className="space-y-3 text-[13px]">
                {[
                  { d: 'Monday – Friday', h: '9:00 AM – 7:00 PM' },
                  { d: 'Saturday', h: '10:00 AM – 5:00 PM' },
                  { d: 'Sunday', h: 'Closed' },
                ].map(row => (
                  <div key={row.d} className="flex justify-between items-center">
                    <span className="text-slate-500">{row.d}</span>
                    <span
                      className="font-medium text-[12px]"
                      style={{ color: row.h === 'Closed' ? '#334155' : '#F59E0B' }}
                    >
                      {row.h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.14)' }}
            >
              <div className="font-display font-bold text-white text-[17px] mb-2">Free Strategy Call</div>
              <p className="text-slate-400 text-[13px] mb-5">
                Book a 30-min free consultation with our digital experts.
              </p>
              <a
                href="tel:+918850183944"
                className="btn-primary text-[13px] inline-flex w-full justify-center"
              >
                <PhoneIcon />
                Call Now
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            {state === 'done' ? (
              <div
                className="rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[440px]"
                style={{
                  background: 'rgba(16,185,129,0.04)',
                  border: '1px solid rgba(16,185,129,0.18)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-emerald-400"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  <CheckIcon />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a personalized strategy.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    />
                  </Field>
                  <Field label="Email Address" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    />
                  </Field>
                  <Field label="Service Required">
                    <select
                      value={form.service}
                      onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    >
                      <option value="">Select a service…</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Tell us about your project" required>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ resize: 'none' }}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary w-full py-4 text-[14px] justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendIcon />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: '10px',
  background: 'var(--input-bg)',
  border: '1px solid var(--input-border)',
  color: 'var(--text-1, #F8FAFC)',
  fontSize: '14px',
  transition: 'border-color 0.2s, background 0.2s',
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactElement
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-2, #94A3B8)' }}>
        {label}
        {required && <span className="text-amber-400 ml-1">*</span>}
      </label>
      {React.cloneElement(children, { style: inputBase })}
    </div>
  )
}

function InfoCard({
  Icon,
  label,
  value,
  href,
  color,
}: {
  Icon: React.FC
  label: string
  value: string
  href?: string
  color: string
}) {
  const inner = (
    <div
      className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 group"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${color}28`
        el.style.background = `${color}05`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.background = 'var(--card-bg)'
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ background: `${color}10`, border: `1px solid ${color}20`, color }}
      >
        <Icon />
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-3, #475569)' }}>
          {label}
        </div>
        <div className="text-[14px] font-medium text-white group-hover:opacity-80 transition-opacity">
          {value}
        </div>
      </div>
    </div>
  )
  return href ? <a href={href} className="block">{inner}</a> : inner
}
