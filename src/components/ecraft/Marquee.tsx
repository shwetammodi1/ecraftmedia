const items = [
  'SEO Optimization', 'Web Development', 'App Development',
  'Google Ads', 'Social Media Marketing', 'Content Strategy',
  'Brand Identity', 'E-Commerce', 'UI/UX Design', 'Email Marketing',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div
      className="relative py-6 overflow-hidden"
      style={{
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* fade edges — uses page bg so they blend on both dark & light */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--page-bg), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, var(--page-bg), transparent)' }}
      />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 text-[13px] font-medium text-slate-500 transition-colors duration-300 cursor-default"
            style={{ color: 'var(--text-3)' }}
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#F59E0B', opacity: 0.5 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
