import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    title: 'Market Analysis',
    description: 'Deep dive into your industry, competitors, and target audience to craft a winning strategy tailored to your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Semantic Core',
    description: 'Build a comprehensive keyword universe — high-intent terms that bring in the right visitors ready to convert.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Onpage Optimization',
    description: 'Optimize meta tags, headings, content, images, and internal linking for maximum search engine visibility.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Technical Fix',
    description: 'Resolve crawl errors, improve site speed, implement schema markup, and ensure perfect technical SEO health.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Usability',
    description: 'Enhance user experience, improve page flow, and optimize conversion paths to turn visitors into loyal customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Results',
    description: 'Track rankings, traffic, and conversions with detailed reports. Continuous optimization to maximize your ROI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function WorkProcess() {
  const titleRef = useScrollAnimation()

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,166,35,0.15) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#F5A623] border border-[#F5A623]/30 bg-[#F5A623]/10 mb-4">
            Our Process
          </span>
          <h2 className="section-title">
            How We Deliver{' '}
            <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A systematic, proven 6-step process that consistently delivers outstanding results for our clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.4), rgba(108,99,255,0.4), transparent)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useScrollAnimation()
  const isGold = index % 2 === 0
  const color = isGold ? '#F5A623' : '#6C63FF'

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${index * 100} group relative flex flex-col items-center text-center`}
    >
      {/* Circle with icon */}
      <div className="relative mb-6">
        <div
          className="relative z-10 w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}08)`,
            border: `1px solid ${color}40`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 40px ${color}30`
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
          }}
        >
          <div style={{ color }} className="mb-1">{step.icon}</div>
          <span className="font-display font-black text-xs" style={{ color }}>{step.number}</span>
        </div>
        {/* Connector dot for large screens */}
        <div
          className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{ background: color }}
        />
      </div>

      <h3 className="font-display font-bold text-base text-white mb-2">{step.title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
    </div>
  )
}
