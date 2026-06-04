import { useRef, useEffect } from 'react'

const steps = [
  { n: '01', icon: '🔍', title: 'Discovery', desc: 'Deep dive into your business, goals, audience, and competition to craft a winning strategy.' },
  { n: '02', icon: '🗺️', title: 'Strategy', desc: 'Build a data-driven roadmap — keywords, content plan, tech stack, and campaign structure.' },
  { n: '03', icon: '✏️', title: 'Creation', desc: 'Design, develop, and produce all assets with pixel-perfect attention to quality and detail.' },
  { n: '04', icon: '🔧', title: 'Optimization', desc: 'Technical fixes, speed tuning, on-page SEO, and conversion optimization applied.' },
  { n: '05', icon: '🚀', title: 'Launch', desc: 'Careful deployment with testing, monitoring, and performance benchmarking at every step.' },
  { n: '06', icon: '📈', title: 'Growth', desc: 'Ongoing optimization, reporting, and scaling to continuously improve your results.' },
]

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add('in-view'), i * 100) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [i])

  const isGold = i % 2 === 0
  const color = isGold ? '#F59E0B' : '#8B5CF6'

  return (
    <div ref={ref} className="fade-up flex flex-col items-center text-center relative group">
      {/* Connector line (desktop) */}
      {i < steps.length - 1 && (
        <div className="hidden xl:block absolute top-10 left-[calc(50%+44px)] right-[calc(-50%+44px)] h-px z-0"
          style={{ background: `linear-gradient(90deg, ${color}40, ${isGold ? '#8B5CF6' : '#F59E0B'}40)` }} />
      )}

      {/* Icon box */}
      <div className="relative z-10 w-[72px] h-[72px] rounded-2xl flex flex-col items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}18, ${color}08)`,
          border: `1px solid ${color}30`,
          boxShadow: `0 0 0 0 ${color}30`,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${color}30` }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${color}30` }}>
        <span className="text-xl mb-0.5">{s.icon}</span>
        <span className="font-display font-black text-[10px]" style={{ color }}>{s.n}</span>
      </div>

      <h3 className="font-display font-bold text-base text-white mb-2">{s.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed px-1">{s.desc}</p>
    </div>
  )
}

export default function WorkProcess() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="process" className="py-28 px-4 relative">
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">How We Work</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Our Proven 6-Step<br />
            <span className="text-gold">Success Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A systematic approach that consistently delivers outstanding results, on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-4">
          {steps.map((s, i) => <Step key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
