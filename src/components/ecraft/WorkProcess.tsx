import { useRef, useEffect } from 'react'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business, goals, audience, and competition to craft a winning strategy.',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Build a data-driven roadmap — keywords, content plan, tech stack, and campaign structure.',
  },
  {
    n: '03',
    title: 'Creation',
    desc: 'Design, develop, and produce all assets with pixel-perfect attention to quality and detail.',
  },
  {
    n: '04',
    title: 'Optimization',
    desc: 'Technical fixes, speed tuning, on-page SEO, and conversion optimization applied.',
  },
  {
    n: '05',
    title: 'Launch',
    desc: 'Careful deployment with testing, monitoring, and performance benchmarking.',
  },
  {
    n: '06',
    title: 'Growth',
    desc: 'Ongoing optimization, reporting, and scaling to continuously improve your results.',
  },
]

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add('in-view'), i * 90) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [i])

  return (
    <div ref={ref} className="fade-up relative group">
      {/* Connector line (desktop only) */}
      {i < steps.length - 1 && (
        <div
          className="hidden xl:block absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-px pointer-events-none"
          style={{ background: 'var(--border)' }}
        />
      )}

      {/* Number circle */}
      <div className="flex flex-col items-center text-center">
        <div
          className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center mb-4 text-[13px] font-display font-black transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.16), rgba(245,158,11,0.06))',
            border: '1px solid rgba(245,158,11,0.22)',
            color: '#F59E0B',
            boxShadow: '0 8px 20px -8px rgba(245,158,11,0.35)',
          }}
        >
          {s.n}
        </div>

        <h3 className="font-display font-bold text-[15px] text-white mb-2">{s.title}</h3>
        <p className="text-slate-500 text-[12.5px] leading-relaxed max-w-[160px] mx-auto">{s.desc}</p>
      </div>
    </div>
  )
}

export default function WorkProcess() {
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
    <section id="process" className="py-32 px-4">
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <div ref={ref} className="fade-up mb-20">
          <div className="section-tag mb-5">How We Work</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Our Proven 6-Step<br />
              <span className="text-gold">Success Process</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xs sm:text-right leading-relaxed">
              A systematic approach that delivers outstanding results, on time, every time.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="card rounded-[28px] p-8 lg:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-10 xl:gap-4">
            {steps.map((s, i) => (
              <Step key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
