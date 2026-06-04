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
    <div ref={ref} className="fade-up card border-glow-card p-6 rounded-[20px] flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04]">
      {/* Stars */}
      <div className="flex gap-1">
        {Array(t.stars).fill(0).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

      {/* Person */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}>
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold text-sm text-white">{t.name}</div>
          <div className="text-[11px] text-slate-500">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-28 px-4 relative overflow-hidden">
      <div className="orb w-96 h-96 bottom-0 left-0 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">Client Love</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Trusted by 500+<br />
            <span className="text-gold">Growing Businesses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't take our word for it — hear what our clients say about working with Ecraft Media.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => <Card key={t.name} t={t} delay={i * 80} />)}
        </div>

        {/* Summary bar */}
        <div className="mt-14 card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {[
            { v: '4.9/5', l: 'Average Rating' },
            { v: '500+', l: 'Happy Clients' },
            { v: '98%', l: 'Would Recommend' },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="font-display font-black text-3xl text-gold">{s.v}</div>
              <div className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
