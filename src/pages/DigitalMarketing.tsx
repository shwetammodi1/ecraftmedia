import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { SearchIcon, SmartphoneIcon, PencilIcon, MailIcon, ChartBarIcon, GlobeIcon } from '../components/ecraft/icons'

const channels = [
  { Icon: SearchIcon, title: 'Search Engine Marketing', desc: 'Google Ads and paid search campaigns that reach high-intent buyers.' },
  { Icon: SmartphoneIcon, title: 'Social Media Marketing', desc: 'Facebook, Instagram, LinkedIn campaigns with creative strategy.' },
  { Icon: PencilIcon, title: 'Content Marketing', desc: 'Blogs, articles, and videos that build authority and organic traffic.' },
  { Icon: MailIcon, title: 'Email Campaigns', desc: 'Targeted email marketing for nurturing and converting leads.' },
  { Icon: ChartBarIcon, title: 'Analytics & Reporting', desc: 'Data-driven insights to measure ROI and optimise your campaigns.' },
  { Icon: GlobeIcon, title: 'Global Reach', desc: 'Multi-country campaigns reaching audiences across all major markets.' },
]

export default function DigitalMarketing() {
  usePageMeta(
    'Digital Marketing — Ecraft Media',
    'Ecraft Media digital marketing services help brands become visible, generate leads, and build creative international campaigns.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.14),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-20">
            <div
              className="section-tag mx-auto mb-5"
              style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)', color: '#10B981' }}
            >
              Digital Marketing
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight tracking-tight">
              Digital <span style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Marketing</span>
            </h1>
          </div>

          {/* Main grid */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start mb-20">
            {/* Left — content */}
            <div className="space-y-8 text-slate-300 leading-relaxed text-base">
              <p>
                Ecraft Media is a full-spectrum digital marketing agency helping brands across India and globally grow their online presence, generate quality leads, and achieve measurable ROI. We combine data-driven strategy with creative execution to deliver results that matter.
              </p>
              <p>
                From SEO and paid advertising to social media and content marketing, we leverage the right mix of channels to reach your target audience at every stage of the buyer journey — turning awareness into conversions and conversions into loyalty.
              </p>
              <p>
                With over 10 years of experience and 500+ successful campaigns, Ecraft Media is trusted by businesses across India, UAE, UK, and beyond to drive consistent digital growth.
              </p>

              {/* Channel grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {channels.map(ch => (
                  <div key={ch.title} className="card border-glow-card rounded-[18px] p-5 group transition-all duration-300 hover:-translate-y-1">
                    <div className="text-emerald-400 mb-3"><ch.Icon className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{ch.title}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA card */}
            <aside className="space-y-5">
              {/* Visual */}
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
                  alt="Digital Marketing"
                  className="w-full h-auto object-cover rounded-[18px]"
                />
              </div>

              <div
                className="card border-glow-card rounded-[32px] p-8"
                style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)' }}
              >
                <h2 className="font-display font-bold text-2xl text-white mb-4">Global Digital Strategy</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Combine search, social, and creative campaigns to build brand authority, visibility, and measurable growth worldwide.
                </p>
                <Link to="/contacts" className="btn-primary w-full justify-center py-3 text-sm">
                  Talk to an Expert
                </Link>
              </div>

              {/* Stats */}
              <div className="card rounded-[28px] p-6">
                <h3 className="text-[11px] uppercase tracking-widest text-slate-500 mb-5 font-bold">Our Results</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Average ROI Increase', value: '240%', color: '#10B981' },
                    { label: 'Lead Generation Growth', value: '3×', color: '#F59E0B' },
                    { label: 'Countries Served', value: '20+', color: '#8B5CF6' },
                    { label: 'Campaigns Managed', value: '500+', color: '#EC4899' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{s.label}</span>
                      <span className="font-display font-bold text-lg" style={{ color: s.color }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call CTA */}
              <div
                className="card rounded-[28px] p-6 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(139,92,246,0.05))', border: '1px solid rgba(245,158,11,0.12)' }}
              >
                <p className="text-slate-400 text-sm mb-4">Ready to scale your brand globally?</p>
                <a href="tel:+918850183944" className="btn-primary w-full justify-center text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 8850183944
                </a>
              </div>
            </aside>
          </div>

          {/* CTA */}
          <div
            className="rounded-[32px] p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.07), rgba(245,158,11,0.05))', border: '1px solid rgba(16,185,129,0.12)' }}
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
