import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const packages = [
  {
    name: 'Standard',
    label: 'TIMING – 20 DAYS',
    color: '#8B5CF6',
    notes: [
      'Non-Responsive Design',
      'Unlimited Disk Space',
      'Unlimited Pages',
      'Domain + Hosting Free',
      'Payment Gateway Integration',
      'Login / Register / My Account',
      'Unlimited Multiple Categories',
      'Admin Panel (you can manage)',
    ],
  },
  {
    name: 'Premium',
    label: 'On page optimization',
    color: '#F59E0B',
    popular: true,
    notes: [
      'Responsive Design',
      'Unlimited Disk Space',
      'Unlimited Pages',
      'Domain + Hosting Free',
      'Payment Gateway Integration',
      'Login / Register / My Account',
      'Unlimited Multiple Categories',
      'Admin Panel (you can manage)',
      'Filter Option (Price, Brand, Colors)',
    ],
  },
  {
    name: 'Delux',
    label: 'On page optimization',
    color: '#10B981',
    notes: [
      'Responsive Design',
      'Unlimited Disk Space',
      'Unlimited Pages',
      'Domain + Hosting Free',
      'Payment Gateway Integration',
      'Login / Register / My Account',
      'Unlimited Multiple Categories',
      'Admin Panel (you can manage)',
      'Filter Option (Price, Brand, Colors)',
    ],
  },
]

const features = [
  'Static and responsive websites by using Administrator Dashboard which helps in updating the website by the website owner itself.',
  'Exclusive document & other source management',
  'Business to Business Application Management using web development tool',
  'Database Maintenance.',
]

export default function WebDevelopment() {
  usePageMeta(
    'Web Development — Ecraft Media',
    'Ecraft Media web development services deliver innovative modern websites, responsive design, and performance-led launches.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.16),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-16">
            <div className="section-tag section-tag-violet mx-auto mb-5">Web Development</div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight tracking-tight">
              Web <span className="text-violet">Development</span>
            </h1>
          </div>

          {/* Content + packages */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start mb-16">
            {/* Left */}
            <div className="space-y-8">
              {/* Visual */}
              <div className="rounded-[24px] overflow-hidden p-6" style={{ background: '#FFFFFF' }}>
                <img
                  src="https://ecraftmedia.com/wp-content/uploads/2018/06/Custom-Web-Development.png"
                  alt="Custom Web Development"
                  className="w-full h-auto object-contain"
                />
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                Ecraftmedia is eager to pushing the drawbacks of design and technology by constructing innovative and modernized web technology. In this modernized world, the website are playing a vital role in each and every business domain. As the day progress, the technology keep on upgrades similarly web service also enhances its service by making use of modern technology.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                For the past one decade, our web design team place a vital role and supporting the customer from all part of the world. We are recognized for development of website around several region with International business clients and government project are undertaken from our end. In current situation, web development places the major part in International marketing.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                As a web design company, Ecraftmedia supports huge part in development of website and performing testing operation with various technologies. We mainly target to transform dream comes to reality as well as help the users to access in friendly manner. Our company is well known and most popular in India and other part of the world for launching websites in multiple platforms in standard manner.
              </p>

              {/* Features card */}
              <div
                className="rounded-[24px] p-8"
                style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <h2 className="font-display font-bold text-xl text-white mb-5">
                  Our company run the web development project with various features that enhance the security and quality of the products:
                </h2>
                <ul className="space-y-4">
                  {features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                        style={{ background: 'rgba(139,92,246,0.2)', color: '#A78BFA' }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[14px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {['Fast Delivery', 'Source Code Included', 'Free Domain Setup', '3 Months Support', 'Responsive Design'].map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 text-[12px] text-slate-400 px-3 py-1.5 rounded-full"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                  >
                    <svg className="w-3 h-3 text-violet" fill="none" stroke="#A78BFA" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — packages */}
            <div className="space-y-5">
              {packages.map(pkg => (
                <div
                  key={pkg.name}
                  className="relative card border-glow-card rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1"
                  style={
                    pkg.popular
                      ? {
                          background: `linear-gradient(135deg, ${pkg.color}12, ${pkg.color}06)`,
                          border: `1px solid ${pkg.color}35`,
                          boxShadow: `0 0 40px ${pkg.color}15`,
                        }
                      : {}
                  }
                >
                  {pkg.popular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold text-black whitespace-nowrap"
                      style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)` }}
                    >
                      Most Requested
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">{pkg.name}</div>
                      <h2 className="font-display font-bold text-2xl text-white">Web Development</h2>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${pkg.color}15`, border: `1px solid ${pkg.color}25` }}
                    >
                      💻
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: pkg.color }}>{pkg.label}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.notes.map(note => (
                      <li key={note} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                        <svg
                          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke={pkg.color}
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {note}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center justify-center w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-300"
                    style={
                      pkg.popular
                        ? {
                            background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                            color: '#030712',
                            boxShadow: `0 8px 24px ${pkg.color}40`,
                          }
                        : {
                            background: `${pkg.color}10`,
                            color: pkg.color,
                            border: `1px solid ${pkg.color}25`,
                          }
                    }
                  >
                    Get a Free Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-[28px] p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.07), rgba(245,158,11,0.05))', border: '1px solid rgba(139,92,246,0.12)' }}
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
