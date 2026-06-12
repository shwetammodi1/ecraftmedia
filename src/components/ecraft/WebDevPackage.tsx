import { useRef, useEffect } from 'react'

const PaletteIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18c4.97 0 9 3.582 9 8 0 1.105-.672 2-1.8 2h-2.55c-.95 0-1.65.826-1.65 1.7 0 .874.7 1.3 1.65 1.3.6 0 1.35.3 1.35 1.1 0 1.05-1.05 1.9-2.1 1.9H12z" />
    <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="11" cy="7" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="8" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
  </svg>
)

const BoltIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const groups = [
  {
    title: 'Design',
    color: '#8B5CF6',
    Icon: PaletteIcon,
    items: ['Custom UI/UX Design', 'Responsive Layout', 'Brand Guidelines', 'Figma Prototyping'],
  },
  {
    title: 'Development',
    color: '#F59E0B',
    Icon: CodeIcon,
    items: ['React / Next.js', 'WordPress / CMS', 'REST API Integration', 'E-Commerce (Shopify)'],
  },
  {
    title: 'Optimization',
    color: '#10B981',
    Icon: BoltIcon,
    items: ['Core Web Vitals', 'On-Page SEO Setup', 'Analytics & Tracking', 'Speed Optimization'],
  },
  {
    title: 'Support',
    color: '#EC4899',
    Icon: ShieldIcon,
    items: ['SSL Certificate', '3 Months Free Support', 'Source Code Delivery', 'Training Session'],
  },
]

export default function WebDevPackage() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="web-dev" className="py-32 px-4" style={{ background: 'var(--page-bg-alt)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div ref={ref} className="fade-up text-center mb-20">
          <div className="section-tag section-tag-violet mx-auto mb-5">Web Development</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Everything You Need<br />
            <span className="text-violet">In One Package</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A complete web solution — beautifully designed, blazing fast, and built to convert.
          </p>
        </div>

        <div className="card rounded-[32px] overflow-hidden">
          {/* Top banner */}
          <div className="px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-white/[0.06]"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.04))' }}>
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-violet-light mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                Standard Package — Most Requested
              </div>
              <h3 className="font-display font-bold text-3xl text-white">Complete Web Solution</h3>
              <p className="text-slate-400 text-sm mt-1">Design → Development → Launch — handled end to end</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 px-8 py-3.5 rounded-[20px] font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', boxShadow: '0 10px 30px rgba(139,92,246,0.35)' }}>
              Get a Custom Quote
            </button>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
            {groups.map((g, i) => <FeatureGroup key={g.title} g={g} delay={i * 100} />)}
          </div>

          {/* Bottom */}
          <div className="px-8 py-5 border-t border-white/[0.06] flex flex-wrap items-center gap-6">
            {['Fast Delivery', 'Source Code Included', 'Free Domain Setup', '3 Months Support'].map(tag => (
              <span key={tag} className="flex items-center gap-2 text-[12px] text-slate-400">
                <svg className="w-3.5 h-3.5 text-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureGroup({ g, delay }: { g: typeof groups[0]; delay: number }) {
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
    <div ref={ref} className="fade-up p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <span style={{ color: g.color }}><g.Icon /></span>
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: g.color }}>{g.title}</span>
      </div>
      <ul className="space-y-2.5">
        {g.items.map(item => (
          <li key={item} className="flex items-start gap-2.5 text-[13px] text-slate-300">
            <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke={g.color} viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
