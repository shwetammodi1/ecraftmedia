import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SeoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

const WebIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
)

const AppIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
  </svg>
)

const MarketingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const services = [
  {
    Icon: SeoIcon,
    title: 'SEO & Ranking',
    desc: 'Dominate Google search results with data-driven SEO strategies that bring qualified traffic and convert visitors into customers.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page & Off-Page', 'Local SEO', 'Monthly Reports'],
    color: '#F59E0B',
    href: '/seo',
    stat: { v: '#1', l: 'Avg. Google Rank' },
    wide: true,
  },
  {
    Icon: AppIcon,
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps for iOS & Android that engage users and accelerate business growth.',
    features: ['iOS & Android', 'React Native', 'API Integration', 'App Store Optimization'],
    color: '#10B981',
    href: '/app-development',
    stat: { v: '50K+', l: 'App Downloads' },
    wide: false,
  },
  {
    Icon: WebIcon,
    title: 'Web Development',
    desc: 'Blazing-fast, conversion-optimized websites built with modern technology.',
    features: ['Custom UI/UX Design', 'CMS & E-Commerce', 'Performance Optimization', 'SEO-Ready'],
    color: '#8B5CF6',
    href: '/web-development',
    stat: { v: '3x', l: 'Avg. Conversion' },
    wide: false,
  },
  {
    Icon: MarketingIcon,
    title: 'Digital Marketing',
    desc: 'Full-funnel digital marketing strategies — from awareness to conversion — delivering measurable ROI every time.',
    features: ['Google & Meta Ads', 'Social Media Management', 'Content Marketing', 'Email Campaigns', 'Analytics & Reporting'],
    color: '#EC4899',
    href: '/digital-marketing',
    stat: { v: '₹2Cr', l: 'Revenue in 90 Days' },
    wide: true,
  },
]

function ServiceCard({
  s,
  delay,
}: {
  s: typeof services[0]
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setTimeout(() => el.classList.add('in-view'), delay)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className="fade-up group h-full"
    >
      <div
        className="h-full flex flex-col p-7 rounded-2xl transition-all duration-300"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = `${s.color}30`
          el.style.background = `${s.color}06`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.borderColor = 'var(--border)'
          el.style.background = 'var(--card-bg)'
        }}
      >
        {/* Icon + stat row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="svc-icon"
            style={{ background: `${s.color}12`, border: `1px solid ${s.color}20`, color: s.color }}
          >
            <s.Icon />
          </div>
          <div className="text-right">
            <div className="font-display font-black text-xl" style={{ color: s.color }}>
              {s.stat.v}
            </div>
            <div className="text-[10px] text-slate-600 font-medium mt-0.5">{s.stat.l}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
          {s.title}
        </h3>

        {/* Desc */}
        <p className="text-slate-400 text-[13.5px] leading-relaxed mb-5 flex-1">
          {s.desc}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-7">
          {s.features.map(f => (
            <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-400">
              <span style={{ color: s.color }}>
                <CheckIcon />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={s.href}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-200 group-hover:gap-2.5 mt-auto"
          style={{ color: s.color }}
        >
          Learn more
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default function Services() {
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
    <section id="services" className="py-28 px-4">
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <div ref={ref} className="fade-up mb-16">
          <div className="section-tag mb-5">Our Expertise</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Services That Drive<br />
              <span className="text-gold">Real Business Growth</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xs sm:text-right leading-relaxed">
              Complete digital solutions under one roof — from search to sale.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: SEO wide (2 cols) + App (1 col) */}
          <div className="lg:col-span-2">
            <ServiceCard s={services[0]} delay={0} />
          </div>
          <div className="lg:col-span-1">
            <ServiceCard s={services[1]} delay={80} />
          </div>
          {/* Row 2: Web (1 col) + Marketing wide (2 cols) */}
          <div className="lg:col-span-1">
            <ServiceCard s={services[2]} delay={160} />
          </div>
          <div className="lg:col-span-2">
            <ServiceCard s={services[3]} delay={240} />
          </div>
        </div>
      </div>
    </section>
  )
}
