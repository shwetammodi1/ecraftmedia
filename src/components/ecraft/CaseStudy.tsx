import { useRef, useEffect } from 'react'

const cases = [
  {
    client: 'E-Commerce Brand',
    service: 'SEO + Content',
    color: '#F59E0B',
    before: [
      { label: 'Monthly Traffic',   before: '1,200',   after: '38,500'  },
      { label: 'Keyword Rankings',  before: '12',      after: '284'     },
      { label: 'Monthly Revenue',   before: '₹2.1L',   after: '₹18.4L'  },
    ],
    months: 6,
    logo: 'EC',
  },
  {
    client: 'Real Estate Portal',
    service: 'Google Ads + SEO',
    color: '#8B5CF6',
    before: [
      { label: 'Monthly Leads',     before: '34',      after: '420'     },
      { label: 'Cost Per Lead',     before: '₹1,800',  after: '₹310'    },
      { label: 'Domain Authority',  before: '18',      after: '52'      },
    ],
    months: 5,
    logo: 'RE',
  },
  {
    client: 'Health & Wellness App',
    service: 'App Dev + Marketing',
    color: '#10B981',
    before: [
      { label: 'App Downloads',     before: '0',       after: '52,000'  },
      { label: 'User Rating',       before: '—',       after: '4.8 ★'   },
      { label: 'MRR',               before: '₹0',      after: '₹9.6L'   },
    ],
    months: 8,
    logo: 'HW',
  },
]

function CaseCard({ c, delay }: { c: typeof cases[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => el.classList.add('in-view'), delay) },
      { threshold: 0.1 }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="fade-up card rounded-[28px] p-7 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-sm text-white flex-shrink-0"
          style={{ background: `${c.color}20`, border: `1px solid ${c.color}30`, color: c.color }}
        >
          {c.logo}
        </div>
        <div>
          <div className="font-semibold text-white text-[15px]">{c.client}</div>
          <div className="text-[11px] font-medium mt-0.5" style={{ color: c.color }}>{c.service}</div>
        </div>
        <div className="ml-auto text-right flex-shrink-0">
          <div className="font-display font-black text-lg text-white">{c.months}mo</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wide">Results</div>
        </div>
      </div>

      {/* Before / After rows */}
      <div className="space-y-4">
        {c.before.map(m => (
          <div key={m.label}>
            <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-2 font-medium">{m.label}</div>
            <div className="flex items-center gap-3">
              {/* Before */}
              <div
                className="flex-1 rounded-xl px-3 py-2.5 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}
              >
                <div className="text-[10px] text-slate-600 uppercase tracking-wider mb-1">Before</div>
                <div className="font-display font-bold text-[15px] text-slate-400">{m.before}</div>
              </div>

              {/* Arrow */}
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
                style={{ color: c.color }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* After */}
              <div
                className="flex-1 rounded-xl px-3 py-2.5 text-center"
                style={{ background: `${c.color}10`, border: `1px solid ${c.color}25` }}
              >
                <div className="text-[10px] uppercase tracking-wider mb-1 font-medium" style={{ color: c.color }}>After</div>
                <div className="font-display font-bold text-[15px] text-white">{m.after}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const headRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = headRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--page-bg)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(139,92,246,0.06), transparent)' }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={headRef} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">Proven Results</div>
          <h2
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Real Clients.{' '}
            <span className="text-brand-gradient">Real Numbers.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Not just promises — here's the measurable impact we've delivered across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => <CaseCard key={c.client} c={c} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}
