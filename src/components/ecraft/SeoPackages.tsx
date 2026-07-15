import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Standard',
    tag: null,
    tagColor: '',
    pages: '10 Pages',
    keywords: '10 Keywords',
    price: '₹9,999',
    period: '/mo',
    color: '#8B5CF6',
    grad: 'from-violet-500/10 to-violet-500/5',
    features: ['On-Page SEO', 'Technical SEO Audit', 'Google Search Console', 'Competitor Analysis', 'Monthly Report', 'Email Support'],
  },
  {
    name: 'Premium',
    tag: 'Most Popular',
    tagColor: '#F59E0B',
    pages: '15 Pages',
    keywords: '25 Keywords',
    price: '₹18,999',
    period: '/mo',
    color: '#F59E0B',
    grad: 'from-amber-500/10 to-amber-500/5',
    features: ['Everything in Standard', 'Advanced Link Building', 'Content Strategy', 'Core Web Vitals Fix', 'Bi-Weekly Reports', 'Priority Support', 'Local SEO'],
  },
  {
    name: 'Delux',
    tag: 'Enterprise',
    tagColor: '#10B981',
    pages: '30 Pages',
    keywords: '40 Keywords',
    price: '₹34,999',
    period: '/mo',
    color: '#10B981',
    grad: 'from-emerald-500/10 to-emerald-500/5',
    features: ['Everything in Premium', 'Authority Link Building', 'Full Content Creation', 'Schema Markup', 'Weekly Reports', 'Dedicated Manager', '24/7 Support'],
  },
]

function PlanCard({ p, delay }: { p: typeof plans[0]; delay: number }) {
  const cardRef  = useRef<HTMLDivElement>(null)
  const glowRef  = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isPopular = p.tag === 'Most Popular'

  /* Scroll reveal */
  useEffect(() => {
    const el = cardRef.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay) },
      { threshold: 0.15 }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [delay])

  /* Mouse-tracking spotlight */
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current; const glow = glowRef.current
    if (!card || !glow) return
    const { left, top } = card.getBoundingClientRect()
    glow.style.left = `${e.clientX - left}px`
    glow.style.top  = `${e.clientY - top}px`
    glow.style.opacity = '1'
  }
  const onMouseLeave = () => { if (glowRef.current) glowRef.current.style.opacity = '0' }

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(.22,1,.36,1)',
      }}
    >
      {/* Badge */}
      {p.tag && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap flex items-center gap-1.5"
          style={{
            background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`,
            color: p.name === 'Premium' ? '#1c0f00' : '#fff',
            boxShadow: `0 4px 20px ${p.color}55`,
            animation: isPopular ? 'pulse-badge 2s ease-in-out infinite' : 'none',
          }}
        >
          {isPopular && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
          {p.tag}
        </div>
      )}

      {/* Card */}
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative overflow-hidden rounded-[28px] p-7 flex flex-col"
        style={{
          background: isPopular
            ? `linear-gradient(145deg, ${p.color}14 0%, ${p.color}07 100%)`
            : 'var(--card-bg)',
          border: `1px solid ${isPopular ? p.color + '40' : 'var(--border)'}`,
          boxShadow: isPopular
            ? `0 0 0 1px ${p.color}20, 0 30px 80px -20px ${p.color}30, 0 8px 32px rgba(0,0,0,0.4)`
            : '0 8px 32px rgba(0,0,0,0.25)',
          transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = isPopular
            ? `0 0 0 1px ${p.color}50, 0 40px 100px -20px ${p.color}45, 0 16px 48px rgba(0,0,0,0.5)`
            : `0 0 0 1px ${p.color}25, 0 20px 60px ${p.color}20, 0 16px 48px rgba(0,0,0,0.4)`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = isPopular
            ? `0 0 0 1px ${p.color}20, 0 30px 80px -20px ${p.color}30, 0 8px 32px rgba(0,0,0,0.4)`
            : '0 8px 32px rgba(0,0,0,0.25)'
          onMouseLeave()
        }}
      >
        {/* Mouse spotlight glow */}
        <div
          ref={glowRef}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 220, height: 220,
            marginLeft: -110, marginTop: -110,
            background: `radial-gradient(circle, ${p.color}22 0%, transparent 70%)`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0,
          }}
        />

        {/* Animated border shimmer on popular */}
        {isPopular && (
          <div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${p.color}18 50%, transparent 60%)`,
              backgroundSize: '200% 200%',
              animation: 'shimmer-card 3s linear infinite',
              zIndex: 0,
            }}
          />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Plan name */}
          <div className="mb-1">
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: p.color }}
            >
              {p.name}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-1 mb-5">
            <span
              className="font-display font-black leading-none"
              style={{ fontSize: '2.6rem', color: isPopular ? p.color : 'var(--text-1)' }}
            >
              {p.price}
            </span>
            <span className="text-slate-500 text-sm mb-2">{p.period}</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {[p.pages, p.keywords].map(tag => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full font-semibold"
                style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}22` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${p.color}30, transparent)` }} />

          {/* Features */}
          <ul className="space-y-3 mb-8 flex-1">
            {p.features.map((f, fi) => (
              <li
                key={f}
                className="flex items-center gap-3 text-[13px]"
                style={{
                  color: 'var(--text-2)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                  transition: `opacity 0.4s ease ${delay + 200 + fi * 60}ms, transform 0.4s ease ${delay + 200 + fi * 60}ms`,
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}
                >
                  <svg className="w-2.5 h-2.5" fill="none" stroke={p.color} viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contacts"
            className="w-full py-3.5 rounded-[16px] font-semibold text-sm text-center transition-all duration-300 hover:-translate-y-0.5 block"
            style={isPopular
              ? {
                  background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`,
                  color: '#1c0f00',
                  boxShadow: `0 8px 28px ${p.color}50`,
                }
              : {
                  background: `${p.color}10`,
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
          >
            {isPopular ? '🚀 Get Started' : 'Get Started →'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SeoPackages() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section id="seo" className="py-32 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.07), transparent 70%)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-20">
          <div className="section-tag mx-auto mb-5">SEO Packages</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl leading-tight mb-5"
            style={{ color: 'var(--text-1)' }}>
            Rank Higher,<br />
            <span className="text-gold">Convert More</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Transparent, results-driven SEO packages designed for every stage of business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 items-start mt-8">
          {plans.map((p, i) => <PlanCard key={p.name} p={p} delay={i * 130} />)}
        </div>
      </div>
    </section>
  )
}

