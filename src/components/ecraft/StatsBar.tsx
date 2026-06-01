import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '500+', label: 'Happy Clients', icon: '👥' },
  { value: '10+', label: 'Years Experience', icon: '🏆' },
  { value: '98%', label: 'Success Rate', icon: '📈' },
  { value: '50+', label: 'Team Members', icon: '🚀' },
]

export default function StatsBar() {
  const ref = useScrollAnimation()

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="animate-on-scroll glass-card p-2 rounded-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(245,166,35,0.1))', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-8 px-6 text-center group hover:bg-white/5 transition-all duration-300 rounded-2xl animate-on-scroll delay-${(i + 1) * 100}`}
              >
                <span className="text-3xl mb-3">{stat.icon}</span>
                <div
                  className="font-display font-black text-4xl lg:text-5xl text-transparent bg-clip-text mb-2"
                  style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #F5A623, #F7B94A)' : 'linear-gradient(135deg, #6C63FF, #8B85FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
