import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

const cols = [
  {
    title: 'Company',
    links: [
      { l: 'About Us', h: '/about-us' },
      { l: 'Our Work', h: '/' },
      { l: 'Blog', h: '/blog' },
      { l: 'Testimonials', h: '/' },
      { l: 'Contact', h: '/contacts' },
    ],
  },
  {
    title: 'Services',
    links: [
      { l: 'SEO Services', h: '/seo' },
      { l: 'Web Development', h: '/web-development' },
      { l: 'App Development', h: '/app-development' },
      { l: 'Digital Marketing', h: '/digital-marketing' },
      { l: 'Google Ads', h: '/contacts' },
    ],
  },
  {
    title: 'SEO Plans',
    links: [
      { l: 'Standard Plan', h: '/seo' },
      { l: 'Premium Plan', h: '/seo' },
      { l: 'Delux Plan', h: '/seo' },
      { l: 'Custom Quote', h: '/contacts' },
      { l: 'Free Audit', h: '/contacts' },
    ],
  },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/ecraftmediaa',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ecraftmedia1',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  return (
    <footer
      className="relative pt-0 pb-8 px-4"
      style={{ background: 'var(--page-bg-alt, var(--page-bg))', borderTop: '1px solid var(--border)' }}
    >
      {/* ── CTA strip ── */}
      <div
        className="max-w-[1320px] mx-auto py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight mb-2">
            Ready to grow your business?
          </h2>
          <p className="text-slate-500 text-base max-w-md">
            Book a free strategy call. No obligations, just real insights for your brand.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <Link to="/contacts" className="btn-primary">
            Get Free Consultation
          </Link>
          <a
            href="tel:+918850183944"
            className="btn-ghost"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 88501 83944
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="max-w-[1320px] mx-auto pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-6 block">
              <img
                src="https://ecraftmedia.com/wp-content/uploads/2018/05/ecraft_logo1.png"
                alt="Ecraft Media"
                className="h-9 w-auto object-contain transition-all duration-300"
                style={{ filter: isLight ? 'none' : 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-1 max-w-xs">
              India's premier digital marketing agency.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Founded in 2014 by Khalid Shaikh, Mumbai. We help businesses grow online through SEO, web development, app development, and result-driven digital marketing.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200 hover:text-white"
                  style={{ background: 'var(--card-bg-h)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'rgba(245,158,11,0.35)'
                    el.style.background = 'rgba(245,158,11,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--border)'
                    el.style.background = 'var(--card-bg-h)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.l}>
                    <Link
                      to={link.h}
                      className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
                    >
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div
          className="mb-10 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
        >
          <a href="tel:+918850183944"
            className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-amber-400"
              style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            +91 8850183944
          </a>
          <a href="mailto:info@ecraftmedia.com"
            className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-400"
              style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            info@ecraftmedia.com
          </a>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-400"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            Mumbai, Maharashtra, India
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[12px] text-slate-600">
            © 2026 Ecraft Media. All rights reserved. Mumbai, India.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(t => (
              <a key={t} href="#" className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
