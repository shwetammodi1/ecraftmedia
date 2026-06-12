import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const links = [
  { label: 'Home', href: '/' },
  { label: 'SEO', href: '/seo' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'App Development', href: '/app-development' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '/home'
    return pathname === href
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-0' : 'py-2'
      }`}
    >
      <div
        className={`mx-auto max-w-[1320px] px-4 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)]' : ''
        }`}
        style={scrolled ? {
          background: 'var(--nav-bg)',
          borderBottom: '1px solid var(--nav-border)',
        } : {}}
      >
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://ecraftmedia.com/wp-content/uploads/2018/05/ecraft_logo1.png"
              alt="Ecraft Media"
              className="h-8 w-auto object-contain flex-shrink-0 transition-all duration-300"
              style={{ filter: isLight ? 'none' : 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden xl:flex items-center">
            {links.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`relative px-2.5 py-2 text-[12.5px] font-medium transition-colors duration-200 rounded-lg whitespace-nowrap group ${
                  isActive(l.href)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={isActive(l.href)
                  ? { color: 'var(--text-1)' }
                  : { color: 'var(--text-2)' }
                }
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                onMouseLeave={e => {
                  if (!isActive(l.href)) (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)'
                }}
              >
                {l.label}
                <span
                  className={`absolute bottom-1 left-2.5 right-2.5 h-[2px] transition-transform duration-300 origin-left rounded-full ${
                    isActive(l.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  style={{ background: 'linear-gradient(90deg, #F59E0B, #FBBF24)' }}
                />
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            {/* Phone */}
            <a
              href="tel:+918850183944"
              className="flex items-center gap-1.5 text-[12px] font-medium transition-colors whitespace-nowrap px-2 py-1.5 rounded-lg"
              style={{ color: 'var(--text-2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F59E0B' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 88501 83944
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement
                el.style.borderColor = 'rgba(245,158,11,0.4)'
                el.style.color = '#F59E0B'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text-2)'
              }}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>

            <Link to="/contacts" className="btn-primary text-[12.5px] px-5 py-2.5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile right: theme toggle + hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
              }}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              className="p-2 transition-colors"
              style={{ color: 'var(--text-2)' }}
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div
          className="backdrop-blur-2xl px-4 py-4 space-y-0.5"
          style={{
            background: 'var(--nav-bg)',
            borderTop: '1px solid var(--nav-border)',
          }}
        >
          {links.map(l => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all"
              style={{
                color: isActive(l.href) ? 'var(--text-1)' : 'var(--text-2)',
                background: isActive(l.href) ? 'var(--card-bg-h)' : 'transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="pt-3 mt-3 space-y-3"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <a
              href="tel:+918850183944"
              className="flex items-center gap-2 px-4 py-2 text-sm"
              style={{ color: 'var(--text-2)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 88501 83944
            </a>
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
