import { useRef, useEffect } from 'react'

const plans = [
  {
    name: 'Standard',
    tag: null,
    pages: '10 Pages',
    keywords: '10 Keywords',
    color: '#8B5CF6',
    features: ['On-Page SEO', 'Technical SEO Audit', 'Google Search Console', 'Competitor Analysis', 'Monthly Report', 'Email Support'],
  },
  {
    name: 'Premium',
    tag: 'Most Popular',
    pages: '15 Pages',
    keywords: '25 Keywords',
    color: '#F59E0B',
    features: ['Everything in Standard', 'Advanced Link Building', 'Content Strategy', 'Core Web Vitals Fix', 'Bi-Weekly Reports', 'Priority Support', 'Local SEO'],
  },
  {
    name: 'Delux',
    tag: 'Enterprise',
    pages: '30 Pages',
    keywords: '40 Keywords',
    color: '#10B981',
    features: ['Everything in Premium', 'Authority Link Building', 'Full Content Creation', 'Schema Markup', 'Weekly Reports', 'Dedicated Manager', '24/7 Support'],
  },
]

export default function SeoPackages() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="seo" className="py-28 px-4 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">SEO Packages</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Rank Higher,<br />
            <span className="text-gold">Convert More</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Transparent, results-driven SEO packages designed for every stage of business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => <PlanCard key={p.name} p={p} delay={i * 120} />)}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ p, delay }: { p: typeof plans[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isPopular = p.tag === 'Most Popular'

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
    <div ref={ref} className="fade-up relative">
      {p.tag && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full text-[11px] font-bold text-black whitespace-nowrap"
          style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
          {p.tag}
        </div>
      )}

      <div className={`card rounded-[24px] p-7 transition-all duration-500 hover:-translate-y-2 ${isPopular ? 'ring-1' : ''}`}
        style={isPopular ? {
          background: `linear-gradient(135deg, ${p.color}12, ${p.color}06)`,
          border: `1px solid ${p.color}35`,
          boxShadow: `0 0 60px ${p.color}18`,
        } : {}}>

        {/* Header */}
        <div className="mb-6">
          <h3 className="font-display font-bold text-2xl text-white mb-3">{p.name}</h3>
          <div className="flex gap-3">
            <span className="text-[12px] px-3 py-1 rounded-full font-medium"
              style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25` }}>
              {p.pages}
            </span>
            <span className="text-[12px] px-3 py-1 rounded-full font-medium"
              style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}25` }}>
              {p.keywords}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {p.features.map(f => (
            <li key={f} className="flex items-start gap-3 text-[13px] text-slate-300">
              <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${p.color}20` }}>
                <svg className="w-2.5 h-2.5" fill="none" stroke={p.color} viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          style={isPopular
            ? { background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, color: '#030712', boxShadow: `0 8px 24px ${p.color}40` }
            : { background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}25` }}>
          Get Started
        </button>
      </div>
    </div>
  )
}
