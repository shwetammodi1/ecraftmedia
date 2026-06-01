import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Reach',
    description: 'We serve clients across India and internationally, bringing world-class digital marketing strategies to every business.',
    color: '#F5A623',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Prices',
    description: 'Premium quality digital services at competitive prices. Maximum ROI for every rupee you invest with transparent pricing.',
    color: '#6C63FF',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Big Experience',
    description: 'Over 10 years of proven expertise in digital marketing. We\'ve helped 500+ businesses achieve their online goals.',
    color: '#10B981',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Convenience',
    description: 'One-stop shop for all your digital needs. From strategy to execution, we handle everything so you can focus on your business.',
    color: '#EC4899',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Strength',
    description: '50+ specialists including SEO experts, developers, designers, and marketing strategists — all working for your success.',
    color: '#F59E0B',
  },
]

export default function WhyChooseUs() {
  const titleRef = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.1) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#6C63FF] border border-[#6C63FF]/30 bg-[#6C63FF]/10 mb-4">
            Why Ecraft Media
          </span>
          <h2 className="section-title">
            Why Businesses Choose{' '}
            <span className="text-gradient-purple">Us</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We're not just another digital agency — we're your growth partners committed to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, delay }: { reason: typeof reasons[0]; delay: number }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${delay} group relative p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 cursor-default`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = `${reason.color}0A`
        el.style.border = `1px solid ${reason.color}30`
        el.style.boxShadow = `0 20px 50px ${reason.color}15`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.background = 'rgba(255,255,255,0.03)'
        el.style.border = '1px solid rgba(255,255,255,0.08)'
        el.style.boxShadow = 'none'
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${reason.color}15`, color: reason.color, border: `1px solid ${reason.color}25` }}
      >
        {reason.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-white mb-3">{reason.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
    </div>
  )
}
