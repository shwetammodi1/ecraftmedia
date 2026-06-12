import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const plans = [
  {
    tier: 'Standard',
    color: '#8B5CF6',
    pages: 'Size Of Website – 10 pages',
    keywords: 'Number of keywords – 10',
    items: [
      'On page optimization',
      'Complete keyword analysis',
      'Organic Ranking on Google Search',
      'Manage your Ad Campaign',
      'FaceBook expert promotions',
      'G+ expert business',
    ],
  },
  {
    tier: 'Premium',
    color: '#F59E0B',
    pages: 'Size Of Website – 15 Pages',
    keywords: 'Number of keywords – 25',
    popular: true,
    items: [
      'On page optimization',
      'Complete keyword analysis',
      'Organic Ranking on Google Search',
      'Manage your Ad Campaign',
      'FaceBook expert promotions',
      'G+ expert business',
    ],
  },
  {
    tier: 'Delux',
    color: '#10B981',
    pages: 'Size Of Website – 30 Pages',
    keywords: 'Number of keywords – 40',
    items: [
      'On page optimization',
      'Complete keyword analysis',
      'Organic Ranking on Google Search',
      'Manage your Ad Campaign',
      'FaceBook expert promotions',
      'G+ expert business',
    ],
  },
]

export default function SeoServices() {
  usePageMeta(
    'Best SEO company in India | Social Media, SEM, PPC, ORM | #1 Digital Marketing Agency in UAE, UK — Ecraft Media',
    'Comprehensive SEO services from Ecraft Media with Standard, Premium and Delux packages for page optimization and keyword ranking.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.10),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">SEO Services</div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight tracking-tight mb-6">
              Search Engine Optimization<br />
              <span className="text-gold">Services</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Search Engine Optimization is all about unique identification of your company brand and take you to the next level of business. Improving the digital recognization of an independent company is the true success for the online marketing team.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-start mb-16">
            {/* Left — content */}
            <div className="space-y-8">
              {/* Visual */}
              <div className="rounded-[24px] overflow-hidden p-6" style={{ background: '#FFFFFF' }}>
                <img
                  src="https://ecraftmedia.com/wp-content/uploads/2015/11/SEO-High-Quality-PNG.png"
                  alt="SEO Services"
                  className="w-full h-auto object-contain"
                />
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                There are thousands of techniques are involved in order to enhance the ranking in search engine but it is really important to track the day to day protocols that are updated in independent globalized search engine. Search Engine Optimization is integrated with various part of digital service such as content, code strategies, web development and optimization.
              </p>

              {/* Highlight box */}
              <div
                className="rounded-[24px] p-8"
                style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}
              >
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  ARE YOU SEARCHING FOR ENHANCEMENT OF WEBSITE RANKING?
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Here is the right place to cover the major search engines that are involved to gather the maximum organic search visibility and cover the people from all part of the world. Once you have planned to grow business popularity then get in touch with Ecraftmedia. If you are looking to create any kind of website and adwords through online then you can reach us at anytime to get upgraded.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🔍', title: 'On-Page SEO', desc: 'Technical optimization of every page for maximum search visibility.' },
                  { icon: '🔗', title: 'Link Building', desc: 'High-quality backlinks to boost domain authority and page rank.' },
                  { icon: '📊', title: 'Keyword Research', desc: 'Complete keyword analysis to target the right audience effectively.' },
                  { icon: '📱', title: 'Local & Global SEO', desc: 'Rank locally and globally across all major search engines.' },
                ].map(item => (
                  <div key={item.title} className="card border-glow-card rounded-[18px] p-5 group transition-all duration-300 hover:-translate-y-1">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — plans sidebar */}
            <div className="space-y-5">
              {/* Visual */}
              <div className="rounded-[24px] overflow-hidden p-6" style={{ background: '#FFFFFF' }}>
                <img
                  src="https://ecraftmedia.com/wp-content/uploads/2018/05/seo-slide.png"
                  alt="SEO Growth"
                  className="w-full h-auto object-contain"
                />
              </div>

              {plans.map(plan => (
                <div
                  key={plan.tier}
                  className="relative card border-glow-card rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1"
                  style={
                    plan.popular
                      ? {
                          background: `linear-gradient(135deg, ${plan.color}12, ${plan.color}06)`,
                          border: `1px solid ${plan.color}35`,
                          boxShadow: `0 0 40px ${plan.color}15`,
                        }
                      : {}
                  }
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold text-black whitespace-nowrap"
                      style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)` }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                        {plan.tier}
                      </div>
                      <h2 className="font-display font-bold text-2xl text-white">SEO</h2>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}
                    >
                      🔍
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm font-medium" style={{ color: plan.color }}>{plan.pages}</p>
                    <p className="text-sm font-medium" style={{ color: plan.color }}>{plan.keywords}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                        <svg
                          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke={plan.color}
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center justify-center w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300"
                    style={
                      plan.popular
                        ? {
                            background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                            color: '#030712',
                            boxShadow: `0 8px 24px ${plan.color}40`,
                          }
                        : {
                            background: `${plan.color}10`,
                            color: plan.color,
                            border: `1px solid ${plan.color}25`,
                          }
                    }
                  >
                    Request a Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison bar */}
          <div
            className="rounded-[28px] p-8 mb-12 grid sm:grid-cols-3 gap-8 text-center"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
          >
            {[
              { plan: 'Standard', pages: '10 Pages', kw: '10 Keywords', color: '#8B5CF6' },
              { plan: 'Premium', pages: '15 Pages', kw: '25 Keywords', color: '#F59E0B' },
              { plan: 'Delux', pages: '30 Pages', kw: '40 Keywords', color: '#10B981' },
            ].map(p => (
              <div key={p.plan}>
                <div className="font-display font-bold text-xl mb-2" style={{ color: p.color }}>{p.plan}</div>
                <div className="text-slate-400 text-sm">{p.pages} • {p.kw}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-[28px] p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(139,92,246,0.05))', border: '1px solid rgba(245,158,11,0.12)' }}
          >
            <h2 className="font-display font-bold text-3xl text-white mb-3">Not enough for your seo needs?</h2>
            <p className="text-slate-400 mb-6">We Support Globalized Digital Marketing &amp; SEO Service</p>
            <Link to="/contacts" className="btn-primary px-8 py-3 text-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
