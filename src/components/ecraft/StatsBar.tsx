import { useCounter } from '../../hooks/useCounter'

const stats = [
  { target: 500, suffix: '+', label: 'Happy Clients', color: '#F59E0B' },
  { target: 10, suffix: '+', label: 'Years Experience', color: '#8B5CF6' },
  { target: 98, suffix: '%', label: 'Client Retention', color: '#10B981' },
  { target: 50, suffix: '+', label: 'Team Experts', color: '#F59E0B' },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCounter(stat.target, 1800)
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <div
        className="font-display font-black leading-none mb-2"
        style={{ fontSize: '2.75rem', color: stat.color, letterSpacing: '-0.04em' }}
      >
        {count}{stat.suffix}
      </div>
      <div className="text-[12px] font-medium text-slate-500 uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1320px] mx-auto">
        <div
          className="rounded-2xl py-10 px-6"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={i > 0 ? 'pt-8 lg:pt-0 lg:pl-0' : ''}
                style={i > 0 ? { borderColor: 'rgba(255,255,255,0.05)' } : {}}
              >
                <StatItem stat={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
