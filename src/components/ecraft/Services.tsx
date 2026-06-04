import { useRef, useEffect } from 'react'

const services = [
  {
    icon: '🔍',
    title: 'SEO & Ranking',
    desc: 'Dominate Google search results with data-driven SEO strategies that bring qualified traffic and convert visitors.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page & Off-Page', 'Local SEO', 'Monthly Reports'],
    color: '#F59E0B',
    href: '#seo',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Blazing-fast, conversion-optimized websites built with modern technology that represent your brand perfectly.',
    features: ['Custom UI/UX Design', 'CMS Integration', 'E-Commerce', 'Performance Optimization', 'SEO-Ready'],
    color: '#8B5CF6',
    href: '#web-dev',
  },
  {
    icon: '📱',
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps for iOS & Android that engage users and accelerate business growth.',
    features: ['iOS & Android', 'React Native', 'API Integration', 'UI/UX Design', 'App Store Optimization'],
    color: '#10B981',
    href: '#app-dev',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc: 'Full-funnel digital marketing strategies — from awareness to conversion — delivering measurable ROI every time.',
    features: ['Google & Meta Ads', 'Social Media', 'Content Marketing', 'Email Campaigns', 'Analytics'],
    color: '#EC4899',
    href: '#digital-marketing',
  },
]

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add('in-view'), delay) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-up border-glow-card group cursor-default" style={{ transitionDelay: `${delay}ms` }}>
      <div className="card h-full p-7 rounded-[20px] transition-all duration-500 group-hover:bg-white/[0.045]">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
          {s.icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-3">{s.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {s.features.map(f => (
            <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-400">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Link */}
        <a href={s.href} onClick={e => { e.preventDefault(); document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 group-hover:gap-2.5"
          style={{ color: s.color }}>
          Learn more
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Glow bg */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ background: s.color, filter: 'blur(40px)' }} />
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="py-28 px-4">
      <div className="max-w-[1320px] mx-auto">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">Our Expertise</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Services That Drive<br />
            <span className="text-gold">Real Business Growth</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From search engine domination to stunning digital experiences — complete digital solutions under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}
