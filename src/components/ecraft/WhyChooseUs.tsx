import { useRef, useEffect } from 'react'

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const DiamondIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25V12a9 9 0 11-3.375-7.03M21 3l-3.375 4.5M21 3h-6M21 3v6" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const BoltIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const reasons = [
  {
    Icon: GlobeIcon,
    title: 'Global Reach',
    desc: 'Serving clients across India and internationally with world-class digital strategies.',
    color: '#F59E0B',
  },
  {
    Icon: DiamondIcon,
    title: 'Premium Quality',
    desc: 'Every deliverable is crafted with obsessive attention to detail and industry best practices.',
    color: '#8B5CF6',
  },
  {
    Icon: ChartIcon,
    title: '10+ Years Expertise',
    desc: 'A decade of proven results, 500+ successful projects, and deep domain knowledge.',
    color: '#10B981',
  },
  {
    Icon: BoltIcon,
    title: 'Fast Execution',
    desc: 'Agile workflows and dedicated teams ensure quick turnarounds without compromising quality.',
    color: '#EC4899',
  },
  {
    Icon: EyeIcon,
    title: 'Transparent Process',
    desc: 'Regular updates, clear reporting, and open communication at every stage of your project.',
    color: '#F59E0B',
  },
]

function ReasonCard({ r, delay }: { r: typeof reasons[0]; delay: number }) {
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
      className="fade-up p-6 rounded-2xl transition-all duration-300 group"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = `${r.color}28`
        el.style.background = `${r.color}05`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.07)'
        el.style.background = 'rgba(255,255,255,0.02)'
      }}
    >
      <div
        className="svc-icon mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${r.color}10`, border: `1px solid ${r.color}18`, color: r.color }}
      >
        <r.Icon />
      </div>
      <h3 className="font-display font-bold text-[16px] text-white mb-2 leading-snug">{r.title}</h3>
      <p className="text-slate-500 text-[13px] leading-relaxed">{r.desc}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const leftRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = leftRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      <div
        className="orb w-[400px] h-[400px] top-0 right-0 opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">

          {/* Left — editorial heading */}
          <div ref={leftRef} className="fade-up lg:sticky lg:top-28">
            <div className="section-tag mb-6">Why Ecraft</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-[1.08] mb-6">
              Why 500+<br />Businesses<br />
              <span className="text-gold">Choose Us</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              We're not just a vendor — we're your long-term growth partner committed to delivering exceptional results, every single time.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { v: '500+', l: 'Projects Delivered' },
                { v: '10+', l: 'Industries Served' },
                { v: '4.9★', l: 'Google Rating' },
              ].map(s => (
                <div key={s.l} className="flex items-center gap-3">
                  <div
                    className="font-display font-black text-lg w-16 flex-shrink-0"
                    style={{ color: '#F59E0B' }}
                  >
                    {s.v}
                  </div>
                  <div className="text-slate-500 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — reason cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={r.title} className={i === 4 ? 'sm:col-span-2' : ''}>
                <ReasonCard r={r} delay={i * 80} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
