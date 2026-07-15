import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { AppleIcon, AndroidIcon } from '../components/ecraft/icons'

const platforms = [
  {
    Icon: AppleIcon,
    title: 'iPhone Application',
    subtitle: 'iOS Platform',
    color: '#8B5CF6',
    desc: 'IOS is considered to the most securable platform as compare to other platform. We support best and quality service in development of any mobile application.',
    tags: ['Swift / Objective-C', 'App Store Ready', 'Secure Architecture', 'High Performance'],
  },
  {
    Icon: AndroidIcon,
    title: 'Android Application',
    subtitle: 'Android Platform',
    color: '#10B981',
    desc: 'Android is one of the commonly used mobile device in which you can download and install any number of application. We support quality and secure application development.',
    tags: ['Kotlin / Java', 'Play Store Ready', 'Google Guidelines', 'Wide Device Support'],
  },
]

const verticals = [
  'Cab Booking',
  'Weather Tracking',
  'Ecommerce Shopping',
  'Food Delivery',
  'Health & Fitness',
  'Social Networking',
  'Finance & Banking',
  'Education & eLearning',
]

export default function AppDevelopment() {
  usePageMeta(
    'App Development — Ecraft Media',
    'Ecraft Media delivers mobile apps with expert design, testing, and deployment for both iOS and Android platforms.'
  )

  return (
    <main className="min-h-screen bg-base text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.14),_transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_35%)] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Page header */}
          <div className="text-center mb-20">
            <div
              className="section-tag mx-auto mb-5"
              style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)', color: '#A78BFA' }}
            >
              App Development
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-tight tracking-tight">
              App <span className="text-violet">Development</span>
            </h1>
          </div>

          {/* Main grid */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start mb-20">
            {/* Left — content */}
            <div className="space-y-8 text-slate-300 leading-relaxed text-base">
              <p>
                Ecraftmedia have the expert and experience professional team to create mobile application and perform various test operation to make it more compact and secure. Mobile App is something that exposes your brand popularity within a limited period of time in wide areas and the completion would be huge and it is really important to initiate and implement some unique identity so that it will be easy to grab the attention of business man.
              </p>
              <p>
                You should be very careful before taking decision and make sure that application should be versatile and user friendly to access.
              </p>
              <p>
                For the past few years, our expertise are focusing more on development of Mobile Application which is playing the major part in the valuable digital market. We have specialized testing team to operate finally once the coding operations are updated and ready for deployment in play store or app store.
              </p>
              <p>
                Currently there are more than <strong className="text-white">300 verticals</strong> are run under mobile application like Cab booking, Weather Tracking, Ecommerce shopping etc…
              </p>

              {/* Verticals grid */}
              <div>
                <h3 className="font-semibold text-white text-base mb-4">Industry Verticals We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {verticals.map(v => (
                    <span
                      key={v}
                      className="px-3 py-1.5 rounded-full text-[12px] font-medium text-slate-300"
                      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                    >
                      {v}
                    </span>
                  ))}
                  <span
                    className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                    style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}
                  >
                    300+ More
                  </span>
                </div>
              </div>

              <p className="font-semibold text-white">
                Ecraftmedia supports mobile application service in various platform are as follows:
              </p>

              {/* Platform cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {platforms.map(p => (
                  <div
                    key={p.title}
                    className="card border-glow-card rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-2 group"
                    style={{ border: `1px solid ${p.color}20` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-[20px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${p.color}12`, border: `1px solid ${p.color}25`, color: p.color }}
                      >
                        <p.Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-base">{p.title}</h3>
                        <p className="text-[11px] font-medium" style={{ color: p.color }}>{p.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-[13px] leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — aside */}
            <aside className="space-y-5">
              {/* Visual */}
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                  alt="Mobile App Development"
                  className="w-full h-auto object-cover rounded-[18px]"
                />
              </div>

              <div
                className="card border-glow-card rounded-[32px] p-8"
                style={{ background: 'rgba(139,92,246,0.04)', border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <h2 className="font-display font-bold text-2xl text-white mb-4">Mobile App Excellence</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Our mobile applications are built to be secure, scalable, and easy for end users to adopt across all modern devices.
                </p>
                <Link to="/contacts" className="btn-primary w-full justify-center py-3 text-sm">
                  Speak With Our Team
                </Link>
              </div>

              {/* Stats */}
              <div className="card rounded-[28px] p-6">
                <h3 className="text-[11px] uppercase tracking-widest text-slate-500 mb-5 font-bold">App Performance</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Apps Delivered', value: '50+', color: '#8B5CF6' },
                    { label: 'Play Store Rating', value: '4.8★', color: '#F59E0B' },
                    { label: 'Total Downloads', value: '1M+', color: '#10B981' },
                    { label: 'Industries Covered', value: '300+', color: '#EC4899' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{s.label}</span>
                      <span className="font-display font-bold text-lg" style={{ color: s.color }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="card rounded-[28px] p-6 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07), rgba(139,92,246,0.05))', border: '1px solid rgba(245,158,11,0.12)' }}
              >
                <p className="text-slate-400 text-sm mb-4">Have an app idea? Let's build it together.</p>
                <a href="tel:+918850183944" className="btn-primary w-full justify-center text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Us Now
                </a>
              </div>
            </aside>
          </div>

          {/* CTA */}
          <div
            className="rounded-[32px] p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.07), rgba(16,185,129,0.05))', border: '1px solid rgba(139,92,246,0.12)' }}
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
