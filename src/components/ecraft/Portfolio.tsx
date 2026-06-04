import { useRef, useEffect } from 'react'

const projects = [
  {
    title: 'LuxeCart E-Commerce',
    type: 'Web Development + SEO',
    result: '+420% Organic Traffic',
    category: 'E-Commerce',
    gradient: 'linear-gradient(135deg, #F59E0B20, #F59E0B08)',
    accent: '#F59E0B',
    emoji: '🛍️',
  },
  {
    title: 'MediCare Health App',
    type: 'iOS & Android App',
    result: '50K+ App Downloads',
    category: 'Mobile App',
    gradient: 'linear-gradient(135deg, #8B5CF620, #8B5CF608)',
    accent: '#8B5CF6',
    emoji: '🏥',
  },
  {
    title: 'TechVision SaaS',
    type: 'Web Development',
    result: '3x Conversion Rate',
    category: 'SaaS Platform',
    gradient: 'linear-gradient(135deg, #10B98120, #10B98108)',
    accent: '#10B981',
    emoji: '⚡',
  },
  {
    title: 'BoldBrew Coffee Brand',
    type: 'Digital Marketing',
    result: '₹2Cr Revenue in 90 Days',
    category: 'Brand + Marketing',
    gradient: 'linear-gradient(135deg, #EC489920, #EC489908)',
    accent: '#EC4899',
    emoji: '☕',
  },
  {
    title: 'RealEstateNow Portal',
    type: 'SEO + Content',
    result: '#1 Rank for 200+ Keywords',
    category: 'Real Estate',
    gradient: 'linear-gradient(135deg, #F59E0B20, #8B5CF608)',
    accent: '#F59E0B',
    emoji: '🏠',
  },
  {
    title: 'FitLife Wellness App',
    type: 'App + Social Media',
    result: '200K+ Active Users',
    category: 'Health & Fitness',
    gradient: 'linear-gradient(135deg, #10B98120, #8B5CF608)',
    accent: '#10B981',
    emoji: '💪',
  },
]

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
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
    <div ref={ref} className="fade-up group cursor-default">
      <div className="card rounded-[20px] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 h-full"
        style={{ background: p.gradient, border: `1px solid ${p.accent}18` }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 64px ${p.accent}20` }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}>

        {/* Visual area */}
        <div className="relative h-44 flex items-center justify-center overflow-hidden"
          style={{ background: `${p.accent}08` }}>
          <span className="text-7xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 select-none">
            {p.emoji}
          </span>
          {/* Category badge */}
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}30` }}>
            {p.category}
          </span>
          {/* Result badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(3,7,18,0.7)', border: `1px solid ${p.accent}25`, backdropFilter: 'blur(8px)' }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.accent }} />
            <span className="text-[12px] font-bold" style={{ color: p.accent }}>{p.result}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-white mb-1">{p.title}</h3>
          <p className="text-[12px] text-slate-500 font-medium">{p.type}</p>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-28 px-4 relative">
      <div className="orb w-96 h-96 top-0 right-0 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag section-tag-violet mb-5">Our Work</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight">
              Results That<br />
              <span className="text-violet">Speak Louder</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm sm:text-right">
            500+ successful projects delivered across industries. Here's a glimpse of what we've built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 80} />)}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost">
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
