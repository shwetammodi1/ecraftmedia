import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const services = [
  {
    id: 'seo',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Services',
    subtitle: 'Rank #1 on Google',
    description: 'Dominate search rankings with our data-driven SEO strategies. We optimize every aspect of your digital presence to drive organic traffic and conversions.',
    features: ['Technical SEO', 'On-Page Optimization', 'Link Building', 'Local SEO'],
    color: '#F5A623',
    gradient: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(245,166,35,0.05))',
    border: 'rgba(245,166,35,0.3)',
    glow: 'rgba(245,166,35,0.2)',
    href: '#seo',
  },
  {
    id: 'web-dev',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    subtitle: 'Stunning Websites',
    description: 'We craft fast, beautiful, and conversion-optimized websites that represent your brand and drive business growth in the digital landscape.',
    features: ['Custom Design', 'E-Commerce', 'CMS Development', 'Performance Optimization'],
    color: '#6C63FF',
    gradient: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(108,99,255,0.05))',
    border: 'rgba(108,99,255,0.3)',
    glow: 'rgba(108,99,255,0.2)',
    href: '#web-dev',
  },
  {
    id: 'app-dev',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'App Development',
    subtitle: 'iOS & Android Apps',
    description: 'Build powerful, user-centric mobile applications for iOS and Android that engage your audience and accelerate your business growth.',
    features: ['iOS Development', 'Android Development', 'React Native', 'UI/UX Design'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))',
    border: 'rgba(16,185,129,0.3)',
    glow: 'rgba(16,185,129,0.2)',
    href: '#app-dev',
  },
  {
    id: 'digital-marketing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Digital Marketing',
    subtitle: 'Grow Your Brand',
    description: 'Comprehensive digital marketing solutions including social media, PPC, content marketing, and email campaigns that deliver measurable ROI.',
    features: ['Social Media Marketing', 'PPC Campaigns', 'Content Marketing', 'Email Marketing'],
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.05))',
    border: 'rgba(236,72,153,0.3)',
    glow: 'rgba(236,72,153,0.2)',
    href: '#digital-marketing',
  },
]

export default function Services() {
  const titleRef = useScrollAnimation()

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#F5A623] border border-[#F5A623]/30 bg-[#F5A623]/10 mb-4">
            Our Expertise
          </span>
          <h2 className="section-title">
            Services That Drive{' '}
            <span className="text-gradient-gold">Real Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From search engine domination to stunning digital experiences — we cover every aspect of your online growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${delay} group relative rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2`}
      style={{
        background: service.gradient,
        border: `1px solid ${service.border}`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${service.glow}`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${service.color}20`, color: service.color, border: `1px solid ${service.color}30` }}
      >
        {service.icon}
      </div>

      {/* Content */}
      <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: service.color }}>
        {service.subtitle}
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <div className="mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3" style={{ color: service.color }}>
        Learn More
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Glow corner */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: service.color, filter: 'blur(30px)' }}
      />
    </div>
  )
}
