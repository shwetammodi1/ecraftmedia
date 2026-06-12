import { useRef, useEffect } from 'react'

const ShoppingBagIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5V6a4.5 4.5 0 10-9 0v1.5M3.75 7.5h16.5l-1.06 12.06A2.25 2.25 0 0117 21.75H7a2.25 2.25 0 01-2.24-2.19L3.75 7.5z" />
  </svg>
)

const HeartPulseIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l2-4 3 7 2-5 2 2h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c-4.5-2.7-8.25-5.85-8.25-10.1A4.65 4.65 0 0112 6.6a4.65 4.65 0 018.25 3.55c0 4.25-3.75 7.4-8.25 10.1z" />
  </svg>
)

const BoltSquareIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2.25L4.5 13.5h6l-1 8.25L18 10.5h-6l1-8.25z" />
  </svg>
)

const MegaphoneIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c1.83.247 3.62.692 5.31 1.31m-5.31-1.31a32.36 32.36 0 011.71-.99M10.34 6.6a32.36 32.36 0 011.71-.99m-1.71.99c-.86-.18-1.7-.4-2.51-.66m9.86 4.06A6.75 6.75 0 0015.6 4.5m1.61 11.4a6.75 6.75 0 01-1.61-6.9" />
  </svg>
)

const HomeIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0L22.28 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  </svg>
)

const DumbbellIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5v9M3 9.75v4.5M17.25 7.5v9M21 9.75v4.5M6.75 12h10.5" />
  </svg>
)

const projects = [
  {
    title: 'LuxeCart E-Commerce',
    type: 'Web Development + SEO',
    result: '+420% Organic Traffic',
    category: 'E-Commerce',
    gradient: 'linear-gradient(135deg, #F59E0B20, #F59E0B08)',
    accent: '#F59E0B',
    Icon: ShoppingBagIcon,
  },
  {
    title: 'MediCare Health App',
    type: 'iOS & Android App',
    result: '50K+ App Downloads',
    category: 'Mobile App',
    gradient: 'linear-gradient(135deg, #8B5CF620, #8B5CF608)',
    accent: '#8B5CF6',
    Icon: HeartPulseIcon,
  },
  {
    title: 'TechVision SaaS',
    type: 'Web Development',
    result: '3x Conversion Rate',
    category: 'SaaS Platform',
    gradient: 'linear-gradient(135deg, #10B98120, #10B98108)',
    accent: '#10B981',
    Icon: BoltSquareIcon,
  },
  {
    title: 'BoldBrew Coffee Brand',
    type: 'Digital Marketing',
    result: '₹2Cr Revenue in 90 Days',
    category: 'Brand + Marketing',
    gradient: 'linear-gradient(135deg, #EC489920, #EC489908)',
    accent: '#EC4899',
    Icon: MegaphoneIcon,
  },
  {
    title: 'RealEstateNow Portal',
    type: 'SEO + Content',
    result: '#1 Rank for 200+ Keywords',
    category: 'Real Estate',
    gradient: 'linear-gradient(135deg, #F59E0B20, #8B5CF608)',
    accent: '#F59E0B',
    Icon: HomeIcon,
  },
  {
    title: 'FitLife Wellness App',
    type: 'App + Social Media',
    result: '200K+ Active Users',
    category: 'Health & Fitness',
    gradient: 'linear-gradient(135deg, #10B98120, #8B5CF608)',
    accent: '#10B981',
    Icon: DumbbellIcon,
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
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}25`, color: p.accent }}
          >
            <p.Icon />
          </div>
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
    <section id="portfolio" className="py-28 px-4 relative" style={{ background: 'var(--page-bg-alt)' }}>
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
