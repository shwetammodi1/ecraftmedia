import { useCounter } from '../../hooks/useCounter'

const stats = [
  { target: 500, suffix: '+', label: 'Happy Clients', icon: '🤝', color: '#F59E0B' },
  { target: 10, suffix: '+', label: 'Years Experience', icon: '🏆', color: '#8B5CF6' },
  { target: 98, suffix: '%', label: 'Client Retention', icon: '❤️', color: '#10B981' },
  { target: 50, suffix: '+', label: 'Team Experts', icon: '🚀', color: '#F59E0B' },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCounter(stat.target, 1800)
  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="text-2xl mb-3">{stat.icon}</div>
      <div className="font-display font-black text-4xl xl:text-5xl mb-1.5" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <div className="text-[12px] font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="card border-glow-card">
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/[0.05]">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? 'pt-8 lg:pt-0 lg:pl-8' : ''}>
                  <StatItem stat={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
