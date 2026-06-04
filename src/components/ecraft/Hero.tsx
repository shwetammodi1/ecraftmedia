import { useEffect, useRef } from 'react'

const floatingCards = [
  { label: 'Organic Traffic', value: '+320%', color: '#F59E0B', icon: '📈', delay: '0s' },
  { label: 'Conversion Rate', value: '+185%', color: '#8B5CF6', icon: '🎯', delay: '1.5s' },
  { label: 'Revenue Growth', value: '+240%', color: '#10B981', icon: '💰', delay: '3s' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('in-view'), 80)
    return () => clearTimeout(t)
  }, [])

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#030712' }}>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Glow orbs */}
      <div className="orb w-[600px] h-[600px] -top-32 -left-48 opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
      <div className="orb w-[500px] h-[500px] top-1/2 -right-48 opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
      <div className="orb w-[400px] h-[400px] bottom-0 left-1/3 opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div ref={ref} className="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 section-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              India's Premier Digital Marketing Agency
            </div>

            {/* Headline */}
            <h1 className="font-display font-black leading-[1.08] tracking-tight text-5xl sm:text-6xl xl:text-7xl text-white mb-6">
              Transform Your<br />
              Business With<br />
              <span className="text-aurora">Digital Power</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-10">
              We build brands, rank websites, and drive measurable growth through
              <span className="text-white font-medium"> SEO</span>,
              <span className="text-white font-medium"> Web Development</span>,
              <span className="text-white font-medium"> App Development</span> &
              <span className="text-white font-medium"> Digital Marketing</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14">
              <button onClick={() => go('#contact')} className="btn-primary text-[15px] px-7 py-3.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Your Project
              </button>
              <button onClick={() => go('#portfolio')} className="btn-ghost text-[15px] px-7 py-3.5">
                View Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { v: '500+', l: 'Happy Clients' },
                { v: '10+', l: 'Years in Business' },
                { v: '98%', l: 'Client Retention' },
                { v: '50+', l: 'Team Experts' },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display font-black text-2xl text-gold">{s.v}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating metric cards */}
          <div className="hidden lg:flex items-center justify-center relative h-[520px]">
            {/* Central card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-center">
                  <div className="font-display font-black text-6xl text-white mb-2">₹50Cr+</div>
                  <div className="text-slate-400 text-sm font-medium">Revenue Generated</div>
                  <div className="text-slate-600 text-xs mt-1">for our clients in 2025</div>
                </div>
                {/* Ring */}
                <div className="absolute inset-[-1px] rounded-3xl border border-gold/20" />
              </div>
            </div>

            {/* Floating metric cards */}
            {floatingCards.map((card, i) => (
              <div key={card.label}
                className="absolute card px-4 py-3 min-w-[160px]"
                style={{
                  top: i === 0 ? '6%' : i === 1 ? '78%' : '44%',
                  left: i === 0 ? '5%' : i === 1 ? '15%' : i === 2 ? '68%' : '5%',
                  animation: `float ${6 + i * 2}s ease-in-out ${card.delay} infinite`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)`,
                }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{card.icon}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{card.label}</span>
                </div>
                <div className="font-display font-black text-xl" style={{ color: card.color }}>{card.value}</div>
              </div>
            ))}

            {/* Orbit decoration */}
            <div className="absolute inset-0 rounded-full border border-white/[0.03] animate-spin-slow"
              style={{ width: 440, height: 440, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
