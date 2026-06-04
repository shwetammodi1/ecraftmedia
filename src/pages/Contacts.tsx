import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'

const services = ['SEO', 'Web Development', 'Digital Marketing', 'App Development']

const contactMethods = [
  { icon: '📞', label: 'Phone', value: '+91 8850183944', href: 'tel:+918850183944', color: '#F59E0B' },
  { icon: '✉️', label: 'E-mail', value: 'info@ecraftmedia.com', href: 'mailto:info@ecraftmedia.com', color: '#8B5CF6' },
  { icon: '💬', label: 'Skype', value: 'ecraftmedia', href: 'skype:ecraftmedia', color: '#10B981' },
  { icon: '📘', label: 'Facebook', value: 'facebook.com/ecraftmediaa', href: 'https://facebook.com/ecraftmediaa', color: '#3B82F6', ext: true },
  { icon: '🐦', label: 'Twitter', value: 'twitter.com/ecraftmedia1', href: 'https://twitter.com/ecraftmedia1', color: '#1DA1F2', ext: true },
]

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-16">
            <div
              className="section-tag mx-auto mb-5"
              style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)', color: '#10B981' }}
            >
              Contact
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl leading-tight tracking-tight mb-5">
              Contact Us and We&rsquo;ll Give<br />
              <span style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                You a Solution!
              </span>
            </h1>
            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              We appreciate your business and guarantee a response within 24 Business hours which would include our Packages and Pricing.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* Left — contact info */}
            <div className="space-y-5">
              {/* Contact methods */}
              <div className="card border-glow-card rounded-[28px] p-7">
                <h2 className="font-display font-bold text-xl text-white mb-6">Let&rsquo;s Connect</h2>
                <div className="space-y-4">
                  {contactMethods.map(c => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.ext ? '_blank' : undefined}
                      rel={c.ext ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 group"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = `${c.color}30`
                        el.style.background = `${c.color}06`
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = 'rgba(255,255,255,0.05)'
                        el.style.background = 'rgba(255,255,255,0.02)'
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${c.color}12`, border: `1px solid ${c.color}20` }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-0.5">{c.label}</div>
                        <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working hours */}
              <div className="card rounded-[24px] p-6">
                <h3 className="font-semibold text-white text-sm mb-4">Working Hours</h3>
                <div className="space-y-3 text-[13px]">
                  {[
                    { d: 'Monday – Friday', h: '9:00 AM – 7:00 PM' },
                    { d: 'Saturday', h: '10:00 AM – 5:00 PM' },
                    { d: 'Sunday', h: 'Closed' },
                  ].map(row => (
                    <div key={row.d} className="flex justify-between items-center">
                      <span className="text-slate-500">{row.d}</span>
                      <span className={`font-medium ${row.h === 'Closed' ? 'text-slate-600' : 'text-gold'}`}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free strategy call */}
              <div
                className="card rounded-[24px] p-6"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.06))', border: '1px solid rgba(245,158,11,0.15)' }}
              >
                <div className="font-display font-bold text-white text-lg mb-2">Free Strategy Call</div>
                <p className="text-slate-400 text-sm mb-4">
                  Book a 30-min free consultation with our experts. Get a tailored growth plan for your business.
                </p>
                <a href="tel:+918850183944" className="btn-primary text-sm px-5 py-2.5 w-full justify-center">
                  📞 Call Now: +91 8850183944
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'sent' ? (
                <div
                  className="card border-glow-card rounded-[28px] p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.04))', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-4xl"
                    style={{ background: 'rgba(16,185,129,0.15)' }}
                  >
                    ✅
                  </div>
                  <h2 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will contact you within 24 hours with a personalized strategy.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card border-glow-card rounded-[28px] p-8 space-y-5">
                  <div>
                    <h2 className="font-display font-bold text-2xl text-white mb-1">Send Message</h2>
                    <p className="text-slate-500 text-sm">Fill in the form and we'll respond within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Your Name <span className="text-gold">*</span>
                      </span>
                      <input
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full rounded-2xl border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Email <span className="text-gold">*</span>
                      </span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        placeholder="rahul@company.com"
                        className="w-full rounded-2xl border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Phone
                      </span>
                      <input
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      />
                    </label>
                    <label className="block">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Select Service Required
                      </span>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-2xl border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      >
                        <option value="">Select Service Required</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Message <span className="text-gold">*</span>
                    </span>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full rounded-2xl border border-white/[0.06] bg-[#02050B] px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
                      style={{ resize: 'none' }}
                    />
                  </label>

                  <button type="submit" className="btn-primary w-full py-4 text-[15px] justify-center">
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
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
