import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const packages = [
  {
    name: 'Standard',
    price: 'Custom',
    badge: null,
    description: 'Perfect for small businesses starting their SEO journey',
    color: '#6C63FF',
    features: [
      '10 Web Pages Optimization',
      '10 Target Keywords',
      'On-Page SEO',
      'Technical SEO Audit',
      'Google Search Console Setup',
      'Monthly Reporting',
      'Email Support',
    ],
  },
  {
    name: 'Premium',
    price: 'Custom',
    badge: 'Most Popular',
    description: 'Ideal for growing businesses wanting serious organic growth',
    color: '#F5A623',
    features: [
      '15 Web Pages Optimization',
      '25 Target Keywords',
      'On-Page + Off-Page SEO',
      'Advanced Technical SEO',
      'Competitor Analysis',
      'Link Building Campaign',
      'Content Strategy',
      'Bi-Weekly Reporting',
      'Priority Support',
    ],
  },
  {
    name: 'Delux',
    price: 'Custom',
    badge: 'Enterprise',
    description: 'Complete SEO domination for large-scale businesses',
    color: '#10B981',
    features: [
      '30 Web Pages Optimization',
      '40 Target Keywords',
      'Full SEO Suite',
      'Enterprise Technical SEO',
      'Deep Competitor Intelligence',
      'Premium Link Building',
      'Content Creation',
      'Weekly Reporting',
      'Dedicated Account Manager',
      '24/7 Priority Support',
    ],
  },
]

export default function SeoPackages() {
  const titleRef = useScrollAnimation()

  return (
    <section id="seo" className="py-24 px-4 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#F5A623] border border-[#F5A623]/30 bg-[#F5A623]/10 mb-4">
            SEO Packages
          </span>
          <h2 className="section-title">
            Rank Higher,{' '}
            <span className="text-gradient-gold">Grow Faster</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose the right SEO package to skyrocket your search rankings and drive qualified traffic to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ pkg, delay }: { pkg: typeof packages[0]; delay: number }) {
  const ref = useScrollAnimation()
  const isPopular = pkg.badge === 'Most Popular'

  return (
    <div
      ref={ref}
      className={`animate-on-scroll relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${isPopular ? 'ring-2' : ''}`}
      style={{
        background: isPopular
          ? `linear-gradient(135deg, rgba(245,166,35,0.15), rgba(245,166,35,0.05))`
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isPopular ? pkg.color : 'rgba(255,255,255,0.08)'}`,
        boxShadow: isPopular ? `0 0 60px rgba(245,166,35,0.15)` : 'none',
        transitionDelay: `${delay}ms`,
      }}
    >
      {pkg.badge && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-[#0A0F1E] whitespace-nowrap"
          style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)` }}
        >
          {pkg.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-bold text-2xl text-white mb-2">{pkg.name}</h3>
        <p className="text-gray-400 text-sm">{pkg.description}</p>
      </div>

      <div className="mb-8">
        <span className="font-display font-black text-4xl" style={{ color: pkg.color }}>
          {pkg.price}
        </span>
        <span className="text-gray-400 text-sm ml-2">/ month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${pkg.color}20`, border: `1px solid ${pkg.color}40` }}
            >
              <svg className="w-3 h-3" fill="none" stroke={pkg.color} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        style={
          isPopular
            ? { background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}CC)`, color: '#0A0F1E' }
            : { background: `${pkg.color}15`, color: pkg.color, border: `1px solid ${pkg.color}40` }
        }
        onMouseEnter={(e) => {
          if (!isPopular) {
            (e.currentTarget as HTMLButtonElement).style.background = `${pkg.color}25`
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = `0 10px 30px ${pkg.color}30`
          }
        }}
        onMouseLeave={(e) => {
          if (!isPopular) {
            (e.currentTarget as HTMLButtonElement).style.background = `${pkg.color}15`
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
          }
        }}
        onClick={() => {
          const contact = document.querySelector('#contact')
          if (contact) contact.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Get Started
      </button>
    </div>
  )
}
