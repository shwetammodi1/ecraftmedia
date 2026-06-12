import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const clientLogos = [
  'https://ecraftmedia.com/wp-content/uploads/2015/11/A1.png',
  'https://ecraftmedia.com/wp-content/uploads/2015/11/A3.png',
  'https://ecraftmedia.com/wp-content/uploads/2015/11/A4.png',
  'https://ecraftmedia.com/wp-content/uploads/2022/09/free-press-j.png',
  'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Finance360-Purple.png',
]

const metrics = [
  { label: 'Organic Traffic', value: '+320%', width: '82%', color: '#F59E0B' },
  { label: 'Domain Authority', value: '72 / 100', width: '72%', color: '#8B5CF6' },
  { label: 'Keywords Top 10', value: '247', width: '60%', color: '#10B981' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const logoFilter = isLight ? 'grayscale(1) brightness(0.35) contrast(1.2)' : 'grayscale(1) brightness(2.5) contrast(0.9)'

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('in-view'), 80)
    return () => clearTimeout(t)
  }, [])

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--page-bg)' }}
    >
      {/* Mesh gradient backdrop */}
      <div className="mesh-gradient absolute inset-0 pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* Grain texture */}
      <div className="noise-overlay" />

      {/* Ambient glows */}
      <div
        className="orb w-[700px] h-[700px] -top-48 -left-64 opacity-[0.1] animate-float-slow"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-0 -right-40 opacity-[0.08] animate-float"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

          {/* ── Left ── */}
          <div ref={ref} className="fade-up">

            {/* Label */}
            <div className="section-tag mb-7">
              India's Premier Digital Agency · Est. 2014
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black leading-[1.04] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)' }}
            >
              <span className="text-white">Grow Your Business</span>
              <br />
              <span className="text-white">With </span>
              <span className="text-gold">Proven Digital</span>
              <br />
              <span className="text-white">Strategies</span>
            </h1>

            {/* Body */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-[520px] mb-10">
              500+ brands across India scaled their revenue with Ecraft Media.
              We deliver results in SEO, web development, app development,
              and performance marketing — not just promises.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => go('#contact')}
                className="btn-primary text-[14px]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Free Audit
              </button>
              <button
                onClick={() => go('#portfolio')}
                className="btn-ghost text-[14px]"
              >
                View Our Work
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
              {[
                { v: '500+', l: 'Happy Clients' },
                { v: '10+', l: 'Years in Business' },
                { v: '98%', l: 'Client Retention' },
                { v: '₹50Cr+', l: 'Revenue Generated' },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display font-black text-[1.6rem] text-white leading-none">{s.v}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1 tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Trust logos */}
            <div>
              <p className="text-[11px] uppercase tracking-widest text-slate-600 font-semibold mb-4">
                Trusted by leading brands
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {clientLogos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="client"
                    className="h-7 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
                    style={{ filter: logoFilter }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — SEO Performance Card ── */}
          <div className="hidden lg:block">
            <div
              className="card hover-lift rounded-[24px] p-6 relative overflow-hidden"
              style={{ backdropFilter: 'blur(16px)' }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                      style={{ boxShadow: '0 0 6px #10B981' }}
                    />
                    <span className="text-[11px] font-semibold text-emerald-400 tracking-wide uppercase">
                      Live Report
                    </span>
                  </div>
                  <p className="text-white font-display font-bold text-base">
                    SEO Performance
                  </p>
                  <p className="text-slate-500 text-[12px] mt-0.5">ecraftclient.com · Last 90 days</p>
                </div>
                <div className="text-right">
                  <div
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(16,185,129,0.1)', color: '#34D399', border: '1px solid rgba(16,185,129,0.2)' }}
                  >
                    All-time high ↑
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-5 mb-6">
                {metrics.map(m => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] text-slate-400 font-medium">{m.label}</span>
                      <span className="text-[13px] font-bold" style={{ color: m.color }}>{m.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: m.width, background: m.color, opacity: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ background: 'var(--border)' }} />

              {/* Bottom metrics row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Conversion Rate', value: '+185%', color: '#F59E0B' },
                  { label: 'Revenue Impact', value: '₹1.2 Cr', color: '#10B981' },
                  { label: 'Bounce Rate', value: '-34%', color: '#8B5CF6' },
                  { label: 'Pages Indexed', value: '1,840', color: '#F59E0B' },
                ].map(m => (
                  <div key={m.label}
                    className="rounded-xl p-3"
                    style={{ background: 'var(--card-bg-h)', border: '1px solid var(--border)' }}>
                    <p className="text-[10px] text-slate-500 font-medium mb-1">{m.label}</p>
                    <p className="font-display font-bold text-[15px]" style={{ color: m.color }}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://ecraftmedia.com/wp-content/uploads/2018/05/ecraft_logo1.png"
                    alt="Ecraft"
                    className="h-5 w-auto object-contain opacity-60"
                    style={{ filter: isLight ? 'none' : 'brightness(0) invert(1)' }}
                  />
                  <span className="text-[11px] text-slate-600">Ecraft Media Report</span>
                </div>
                <span className="text-[11px] text-slate-600">Updated 2 min ago</span>
              </div>

              {/* Subtle glow behind card */}
              <div
                className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent)', filter: 'blur(32px)' }}
              />
            </div>

            {/* Below card: quick award trust signals */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { v: '10+', l: 'Years Active' },
                { v: '#1', l: 'Mumbai Agency' },
                { v: '4.9★', l: 'Google Rating' },
              ].map(s => (
                <div
                  key={s.l}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                >
                  <div className="font-display font-black text-lg text-white">{s.v}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[9px] tracking-[0.25em] uppercase text-slate-500">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-white/15 flex justify-center pt-1.5">
          <div className="w-px h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
