import { useRef, useEffect } from 'react'

const reasons = [
  { icon: '🌍', title: 'Global Reach', desc: 'Serving clients across India and internationally with world-class digital strategies.', color: '#F59E0B' },
  { icon: '💎', title: 'Premium Quality', desc: 'Every deliverable is crafted with obsessive attention to detail and industry best practices.', color: '#8B5CF6' },
  { icon: '📊', title: '10+ Years Expertise', desc: 'A decade of proven results, 500+ successful projects, and deep domain knowledge.', color: '#10B981' },
  { icon: '⚡', title: 'Fast Execution', desc: 'Agile workflows and dedicated teams ensure quick turnarounds without compromising quality.', color: '#EC4899' },
  { icon: '🤝', title: 'Transparent Process', desc: 'Regular updates, clear reporting, and open communication at every stage of your project.', color: '#F59E0B' },
]

function Card({ r, delay }: { r: typeof reasons[0]; delay: number }) {
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
    <div ref={ref} className="fade-up card border-glow-card p-7 rounded-[20px] text-center transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${r.color}12`, border: `1px solid ${r.color}20` }}>
        {r.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-white mb-3">{r.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in-view') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-0 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div ref={ref} className="fade-up text-center mb-16">
          <div className="section-tag mx-auto mb-5">Why Ecraft</div>
          <h2 className="font-display font-black text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-5">
            Why 500+ Businesses<br />
            <span className="text-gold">Choose Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We're not just a vendor — we're your long-term growth partner committed to delivering exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {reasons.map((r, i) => <Card key={r.title} r={r} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}
