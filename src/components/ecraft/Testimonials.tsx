import { useRef, useEffect } from 'react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO, TechVision India',
    text: 'Ecraft Media completely transformed our online presence. Our organic traffic grew by 420% in just 6 months. The SEO team is exceptional — they know exactly what works.',
    stars: 5,
    avatar: 'RS',
    color: '#F59E0B',
  },
  {
    name: 'Priya Mehta',
    role: 'Founder, LuxeCart',
    text: 'The website they built for us is stunning. Sales doubled within the first quarter. Their attention to detail and understanding of our brand was remarkable.',
    stars: 5,
    avatar: 'PM',
    color: '#8B5CF6',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Director, MediCare Health',
    text: 'Our app got 50,000 downloads in the first month. Ecraft delivered quality beyond our expectations — on time and within budget. Truly a premium agency.',
    stars: 5,
    avatar: 'AK',
    color: '#10B981',
  },
  {
    name: 'Sneha Patel',
    role: 'Marketing Head, BoldBrew',
    text: 'From zero to ₹2 crore revenue in 90 days through their digital marketing campaigns. The ROI we got was unbelievable. Best investment we\'ve made.',
    stars: 5,
    avatar: 'SP',
    color: '#EC4899',
  },
  {
    name: 'Vikram Singh',
    role: 'Owner, RealEstateNow',
    text: 'We rank #1 for over 200 keywords now. Ecraft\'s SEO team is the real deal. Organic leads increased by 300% and our cost per acquisition dropped massively.',
    stars: 5,
    avatar: 'VS',
    color: '#F59E0B',
  },
  {
    name: 'Ananya Joshi',
    role: 'Co-Founder, FitLife App',
    text: 'Ecraft built our app from scratch and handled all our social media. 200K users in 8 months — results that we couldn\'t have achieved with any other agency.',
    stars: 5,
    avatar: 'AJ',
    color: '#8B5CF6',
  },
]

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5">
    {Array(n).fill(0).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

function Card({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add('in-view'), delay) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className="fade-up flex flex-col gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Quote mark */}
      <svg
        className="w-7 h-7 flex-shrink-0 opacity-25"
        fill="currentColor"
        viewBox="0 0 32 32"
        style={{ color: t.color }}
      >
        <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
      </svg>

      <p className="text-slate-300 text-[13.5px] leading-relaxed flex-1">
        {t.text}
      </p>

      {/* Person */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[11px] text-white flex-shrink-0"
          style={{ background: `${t.color}25`, border: `1px solid ${t.color}30`, color: t.color }}
        >
          {t.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-white truncate">{t.name}</div>
          <div className="text-[11px] text-slate-500 truncate">{t.role}</div>
        </div>
        <Stars n={t.stars} />
      </div>
    </div>
  )
}

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="py-28 px-4 relative overflow-hidden">
      <div
        className="orb w-96 h-96 bottom-0 left-0 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up mb-16">
          <div className="section-tag mb-5">Client Love</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Trusted by 500+<br />
              <span className="text-gold">Growing Businesses</span>
            </h2>
            <div className="flex items-center gap-6 flex-shrink-0">
              {[
                { v: '4.9/5', l: 'Rating' },
                { v: '98%', l: 'Recommend' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="font-display font-black text-2xl text-white">{s.v}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Card key={t.name} t={t} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
