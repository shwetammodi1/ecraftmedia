import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  { category: 'Design & Development', items: ['Custom UI/UX Design', 'Responsive Mobile-First Design', 'Cross-Browser Compatibility', 'Speed & Performance Optimization'] },
  { category: 'Pages & Content', items: ['Up to 10 Web Pages', 'Custom Contact Forms', 'Blog / News Section', 'Gallery / Portfolio Section'] },
  { category: 'SEO & Marketing', items: ['Basic On-Page SEO', 'Google Analytics Integration', 'Social Media Integration', 'XML Sitemap & Robots.txt'] },
  { category: 'Technical Features', items: ['SSL Certificate Setup', 'CMS (WordPress/Custom)', 'Domain & Hosting Guidance', '3 Months Free Support'] },
]

export default function WebDevPackage() {
  const titleRef = useScrollAnimation()
  const cardRef = useScrollAnimation()

  return (
    <section id="web-dev" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(108,99,255,0.2) 0%, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={titleRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#6C63FF] border border-[#6C63FF]/30 bg-[#6C63FF]/10 mb-4">
            Web Development
          </span>
          <h2 className="section-title">
            Build Your{' '}
            <span className="text-gradient-purple">Dream Website</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to establish a powerful online presence — designed to convert visitors into customers.
          </p>
        </div>

        <div
          ref={cardRef}
          className="animate-on-scroll rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(108,99,255,0.04))', border: '1px solid rgba(108,99,255,0.25)' }}
        >
          {/* Header */}
          <div
            className="px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(108,99,255,0.1))', borderBottom: '1px solid rgba(108,99,255,0.2)' }}
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#0A0F1E] mb-3"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #8B85FF)' }}>
                Standard Package
              </div>
              <h3 className="font-display font-bold text-3xl text-white">Complete Web Solution</h3>
              <p className="text-gray-400 mt-1">Everything included — launch-ready from day one</p>
            </div>
            <button
              className="flex-shrink-0 px-8 py-3.5 rounded-2xl font-bold text-sm text-[#0A0F1E] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #8B85FF)', boxShadow: '0 10px 30px rgba(108,99,255,0.3)' }}
              onClick={() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get a Quote
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {features.map((group, gi) => (
              <FeatureGroup key={group.category} group={group} delay={gi * 100} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-6">
              {['Fast Delivery', 'Revisions Included', 'Source Code Provided'].map((tag) => (
                <span key={tag} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-gray-500 text-sm">Need a custom quote? <a href="tel:+918850183944" className="text-[#6C63FF] hover:underline">Call us</a></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureGroup({ group, delay }: { group: typeof features[0]; delay: number }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`animate-on-scroll delay-${delay} p-6`}>
      <h4 className="font-semibold text-sm text-[#6C63FF] uppercase tracking-wider mb-4">{group.category}</h4>
      <ul className="space-y-3">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
            <svg className="w-4 h-4 text-[#6C63FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
