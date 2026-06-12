import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const channels = [
  { icon: '🔍', title: 'Search Engine Marketing', desc: 'Google Ads and paid search campaigns that reach high-intent buyers.' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Facebook, Instagram, LinkedIn campaigns with creative strategy.' },
  { icon: '✍️', title: 'Content Marketing', desc: 'Blogs, articles, and videos that build authority and organic traffic.' },
  { icon: '📧', title: 'Email Campaigns', desc: 'Targeted email marketing for nurturing and converting leads.' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Data-driven insights to measure ROI and optimise your campaigns.' },
  { icon: '🌐', title: 'Global Reach', desc: 'Multi-country campaigns reaching audiences across all major markets.' },
]

export default function DigitalMarketing() {
  usePageMeta(
    'Digital Marketing — Ecraft Media',
    'Ecraft Media digital marketing services help brands become visible, generate leads, and build creative international campaigns.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.14),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-16">
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
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start mb-16">
            {/* Left — content */}
            <div className="space-y-8 text-slate-300 leading-relaxed text-base">
              <p>
                Ecraftmedia is integrate with all digital marketing strategies which help to enhance your business and become more visible and generate leads at best price. Applying the strategies of various online channels, we adopt the best and latest practices of digital marketing in all countries to achieve maximum ROI for your business and help your brand grown online.
              </p>
              <p>
                We support digital marketing service in all part of the world where you can find wide creativity and novelty in each and every part of work. As a web design company, Ecraftmedia supports huge part in development of website and performing testing operation with various technologies.
              </p>
              <p>
                We mainly target to transform dream comes to reality as well as help the users to access in friendly manner. Our company is well known and most popular in India and other part of the countries for launching websites in multiple platforms in standard manner.
              </p>

              {/* Channel grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {channels.map(ch => (
                  <div key={ch.title} className="card border-glow-card rounded-[18px] p-5 group transition-all duration-300 hover:-translate-y-1">
                    <div className="text-2xl mb-3">{ch.icon}</div>
                    <h3 className="font-semibold text-white text-sm mb-1.5">{ch.title}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA card */}
            <aside className="space-y-5">
              {/* Visual */}
              <div className="rounded-[28px] overflow-hidden p-6" style={{ background: '#FFFFFF' }}>
                <img
                  src="https://ecraftmedia.com/wp-content/uploads/2018/06/1-2.jpg"
                  alt="Digital Marketing"
                  className="w-full h-auto object-contain rounded-[18px]"
                />
              </div>

              <div
                className="card border-glow-card rounded-[28px] p-8"
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
              <div className="card rounded-[24px] p-6">
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
                className="card rounded-[24px] p-6 text-center"
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
            className="rounded-[28px] p-10 text-center"
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
