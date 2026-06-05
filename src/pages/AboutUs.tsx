import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

const services = [
  { icon: '🔍', name: 'Search Engine Optimization' },
  { icon: '📣', name: 'Online Digital Marketing' },
  { icon: '💻', name: 'Web Development' },
  { icon: '📱', name: 'Application Development' },
  { icon: '🌐', name: 'Internet Standards' },
]

const milestones = [
  { year: '2014', event: 'Founded by Khalid Shaikh in Mumbai, India' },
  { year: '2016', event: 'Expanded to International client partnerships' },
  { year: '2019', event: 'Grew to 20+ expert consultants' },
  { year: '2024', event: '500+ successful projects delivered globally' },
]

export default function AboutUs() {
  usePageMeta(
    'About Us — Ecraft Media',
    'Ecraft media is a globalized digital marketing agency focusing on SEO, web development, application development, and global digital services.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),_transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.08),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-16">
            <div className="section-tag mx-auto mb-5">About Us</div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight tracking-tight">
              About <span className="text-gold">Ecraft Media</span>
            </h1>
          </div>

          {/* Main grid */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start mb-16">
            {/* Left — story */}
            <div className="space-y-8 text-slate-300 text-base leading-relaxed">
              <p>
                Ecraft media is a globalized Digital marketing agency which mainly focuses on modernized SEO marketing strategies and web development service to grab the attention of people from various part of the world. Ecraft media specially want to enhance the online service in India as well as in all other countries.
              </p>
              <p>
                With wide range of experience and knowledge in web development and SEO strategies, our professionals wants to spread themselves and show the unique identity in this domain. Some of the expertise is as follows: Search Engine Optimization, Online Digital Marketing, Web Development, Application Development and other Internet standards to improve the business of our clients.
              </p>
              <p>
                Currently we are partner with wide range of clients in all part of the world and providing the best support in Internet service.
              </p>
              <p>
                Founded by Khalid Shaikh Mumbai India in 2014, the Ecraftmedia comprises of more than 20 experts from various backgrounds covering every aspect of web development, creative design, SEO operation other digital services.
              </p>
              <p>
                For the past few years, our team has shown their class performance globally and attracted the maximum number of clients to enhance and research in Digital marketing. Till now there are very few companies which can match the service with Ecraftmedia and we have successful client for long period time with great rapport.
              </p>
              <p>
                If you desire to go with digital marketing in world wide, we are here to you by expertise and implement high performance online campaigns tailored to all country areas.
              </p>

              {/* Services list */}
              <div>
                <h2 className="font-display font-bold text-xl text-white mb-5">Our Core Expertise</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map(s => (
                    <div key={s.name} className="card border-glow-card rounded-[16px] px-4 py-3 flex items-center gap-3 group transition-all duration-300 hover:-translate-y-0.5">
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sidebar */}
            <aside className="space-y-6">
              {/* Fast Facts */}
              <div className="card border-glow-card rounded-[28px] p-8">
                <div className="text-[11px] text-slate-500 uppercase tracking-[0.22em] mb-5 font-bold">Fast Facts</div>
                <div className="space-y-4">
                  {[
                    { icon: '🌍', label: 'Global SEO & Web Development' },
                    { icon: '📅', label: '10+ Years Experience' },
                    { icon: '👥', label: '20+ Expert Consultants' },
                    { icon: '🤝', label: 'Worldwide Client Partnerships' },
                    { icon: '🏆', label: '500+ Projects Delivered' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="text-slate-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="card rounded-[28px] p-8">
                <div className="text-[11px] text-slate-500 uppercase tracking-[0.22em] mb-5 font-bold">Our Journey</div>
                <div className="space-y-5">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                          style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}
                        >
                          {m.year.slice(2)}
                        </div>
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 mt-1" style={{ background: 'rgba(245,158,11,0.15)', minHeight: 20 }} />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="text-gold text-xs font-bold mb-1">{m.year}</div>
                        <div className="text-slate-400 text-[13px] leading-relaxed">{m.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-[28px] p-7 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(139,92,246,0.06))', border: '1px solid rgba(245,158,11,0.15)' }}
              >
                <div className="section-tag mx-auto mb-4">Join Our Growth</div>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Speak with our team to discover how Ecraft Media can launch your next global growth campaign.
                </p>
                <Link to="/contacts" className="btn-primary w-full justify-center text-sm">
                  Request a Quote
                </Link>
              </div>
            </aside>
          </div>

          {/* Stats row */}
          <div
            className="rounded-[28px] p-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-8"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
          >
            {[
              { v: '2014', l: 'Founded', c: '#F59E0B' },
              { v: '20+', l: 'Expert Consultants', c: '#8B5CF6' },
              { v: '500+', l: 'Projects Delivered', c: '#10B981' },
              { v: '10+', l: 'Years Experience', c: '#EC4899' },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display font-black text-3xl mb-1" style={{ color: s.c }}>{s.v}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
