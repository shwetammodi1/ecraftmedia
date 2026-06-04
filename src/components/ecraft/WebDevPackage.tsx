import { useRef, useEffect } from 'react'

const groups = [
  {
    title: 'Design',
    color: '#8B5CF6',
    icon: '🎨',
    items: ['Custom UI/UX Design', 'Responsive Layout', 'Brand Guidelines', 'Figma Prototyping'],
  },
  {
    title: 'Development',
    color: '#F59E0B',
    icon: '💻',
    items: ['React / Next.js', 'WordPress / CMS', 'REST API Integration', 'E-Commerce (Shopify)'],
  },
  {
    title: 'Optimization',
    color: '#10B981',
    icon: '⚡',
    items: ['Core Web Vitals', 'On-Page SEO Setup', 'Analytics & Tracking', 'Speed Optimization'],
  },
  {
    title: 'Support',
    color: '#EC4899',
    icon: '🛡️',
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
    <section id="web-dev" className="py-28 px-4">
      <div className="max-w-[1320px] mx-auto">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag section-tag-violet mx-auto mb-5">Web Development</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Everything You Need<br />
            <span className="text-violet">In One Package</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A complete web solution — beautifully designed, blazing fast, and built to convert.
          </p>
        </div>

        <div className="card rounded-[28px] overflow-hidden">
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
              className="flex-shrink-0 px-8 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1"
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
        <span className="text-xl">{g.icon}</span>
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
