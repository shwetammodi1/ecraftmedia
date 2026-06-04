import { useState, useRef, useEffect } from 'react'

const services = ['SEO Services', 'Web Development', 'App Development', 'Digital Marketing', 'Google / Meta Ads', 'Content Marketing', 'Other']

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
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
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">Get In Touch</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Let's Build Something<br />
            <span className="text-gold">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a tailored strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon="📞" label="Phone" value="+91 88501 83944" href="tel:+918850183944" color="#F59E0B" />
            <InfoCard icon="✉️" label="Email" value="info@ecraftmedia.com" href="mailto:info@ecraftmedia.com" color="#8B5CF6" />
            <InfoCard icon="📍" label="Location" value="Mumbai, Maharashtra, India" color="#10B981" />

            {/* Hours */}
            <div className="card rounded-2xl p-6">
              <h4 className="font-semibold text-white text-sm mb-4">Working Hours</h4>
              <div className="space-y-2.5 text-[13px]">
                {[
                  { d: 'Monday – Friday', h: '9:00 AM – 7:00 PM' },
                  { d: 'Saturday', h: '10:00 AM – 5:00 PM' },
                  { d: 'Sunday', h: 'Closed' },
                ].map(row => (
                  <div key={row.d} className="flex justify-between">
                    <span className="text-slate-500">{row.d}</span>
                    <span className={row.h === 'Closed' ? 'text-slate-600' : 'text-gold font-medium'}>{row.h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="card rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.06))', border: '1px solid rgba(245,158,11,0.15)' }}>
              <div className="font-display font-bold text-white text-lg mb-2">Free Strategy Call</div>
              <p className="text-slate-400 text-sm mb-4">Book a 30-min free consultation with our experts.</p>
              <a href="tel:+918850183944"
                className="btn-primary text-sm px-5 py-2.5 inline-flex w-full justify-center">
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {state === 'done' ? (
              <div className="card rounded-[24px] p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.04))', border: '1px solid rgba(16,185,129,0.2)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-4xl"
                  style={{ background: 'rgba(16,185,129,0.15)' }}>✅</div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-sm">Thank you for reaching out. Our team will contact you within 24 hours with a personalized strategy.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card rounded-[24px] p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" required>
                    <input type="text" placeholder="Rahul Sharma" required
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                  </Field>
                  <Field label="Email Address" required>
                    <input type="email" placeholder="rahul@company.com" required
                      value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                  </Field>
                  <Field label="Phone Number">
                    <input type="tel" placeholder="+91 98765 43210"
                      value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                  </Field>
                  <Field label="Service Required">
                    <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Tell us about your project" required>
                  <textarea rows={5} placeholder="Describe your project, goals, timeline..." required
                    value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ resize: 'none' }} />
                </Field>
                <button type="submit" disabled={state === 'loading'}
                  className="btn-primary w-full py-4 text-[15px] justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {state === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
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

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px', borderRadius: '12px',
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
  color: '#F8FAFC', fontSize: '14px', transition: 'all 0.2s ease',
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactElement }) {
  return (
    <div>
      <label className="block text-[12px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      {React.cloneElement(children, { style: inputStyle })}
    </div>
  )
}

function InfoCard({ icon, label, value, href, color }: { icon: string; label: string; value: string; href?: string; color: string }) {
  const inner = (
    <div className="card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.04] group">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
        style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">{label}</div>
        <div className="text-sm font-medium text-white group-hover:text-gold transition-colors">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href}>{inner}</a> : inner
}

// Need React for cloneElement
import React from 'react'
