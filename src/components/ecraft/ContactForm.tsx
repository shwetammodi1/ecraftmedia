import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const services = [
  'SEO Services',
  'Web Development',
  'App Development',
  'Digital Marketing',
  'Social Media Marketing',
  'PPC / Google Ads',
  'Content Marketing',
  'Other',
]

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactForm() {
  const titleRef = useScrollAnimation()
  const formRef = useScrollAnimation()
  const infoRef = useScrollAnimation()

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(245,166,35,0.1) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#F5A623] border border-[#F5A623]/30 bg-[#F5A623]/10 mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Grow Your{' '}
            <span className="text-gradient-gold">Business Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a tailored strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div ref={infoRef} className="animate-on-scroll lg:col-span-2 space-y-6">
            <div
              className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.1), rgba(108,99,255,0.1))', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-6">Contact Info</h3>
              <div className="space-y-5">
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  label="Phone"
                  value="+91 8850183944"
                  href="tel:+918850183944"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  label="Email"
                  value="info@ecraftmedia.com"
                  href="mailto:info@ecraftmedia.com"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  label="Location"
                  value="Mumbai, Maharashtra, India"
                />
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h4 className="font-semibold text-white mb-4">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Monday – Friday</span>
                  <span className="text-[#F5A623]">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Saturday</span>
                  <span className="text-[#F5A623]">10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="animate-on-scroll lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-3xl p-12 flex flex-col items-center justify-center text-center h-full"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.05))', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(16,185,129,0.2)', border: '2px solid rgba(16,185,129,0.5)' }}>
                  <svg className="w-10 h-10 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <FormField label="Your Name" required>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                      style={inputStyle}
                    />
                  </FormField>
                  <FormField label="Email Address" required>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="form-input"
                      style={inputStyle}
                    />
                  </FormField>
                  <FormField label="Phone Number">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={inputStyle}
                    />
                  </FormField>
                  <FormField label="Service Interested In">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none' }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </FormField>
                </div>
                <FormField label="Your Message" required>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 py-4 rounded-2xl font-bold text-base text-[#0A0F1E] transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #F7B94A)', boxShadow: '0 10px 30px rgba(245,166,35,0.3)' }}
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#ffffff',
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.2s ease',
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {required && <span className="text-[#F5A623] ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4 group/item">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#F5A623]"
        style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</div>
        <div className="text-white font-medium group-hover/item:text-[#F5A623] transition-colors duration-300">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href}>{content}</a> : <div>{content}</div>
}
