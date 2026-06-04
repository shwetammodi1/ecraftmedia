const items = [
  'SEO Optimization', 'Web Development', 'App Development',
  'Google Ads', 'Social Media Marketing', 'Content Strategy',
  'Brand Identity', 'E-Commerce', 'UI/UX Design', 'Email Marketing',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="relative py-6 overflow-hidden border-y border-white/[0.05]"
      style={{ background: 'rgba(255,255,255,0.015)' }}>
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #030712, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(-90deg, #030712, transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-[13px] font-medium text-slate-500 hover:text-slate-300 transition-colors duration-300 cursor-default">
            <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
