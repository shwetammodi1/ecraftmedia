import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-0' : 'py-2'
      }`}
    >
      <div
        className={`mx-auto max-w-[1320px] px-4 transition-all duration-500 ${
          scrolled
            ? 'bg-[#030712]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="relative w-8 h-8 rounded-xl overflow-hidden flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)' }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white font-display font-black text-sm">
                E
              </span>
            </div>
            <span className="font-display font-bold text-[17px] text-white whitespace-nowrap">
              Ecraft<span className="text-gold"> Media</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden xl:flex items-center gap-0">
            {links.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`relative px-2.5 py-2 text-[12.5px] font-medium transition-colors duration-200 rounded-lg hover:bg-white/[0.04] whitespace-nowrap group ${
                  isActive(l.href) ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-1 left-2.5 right-2.5 h-px bg-gold transition-transform duration-300 origin-left rounded-full ${
                    isActive(l.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918850183944"
              className="flex items-center gap-1.5 text-[12px] font-medium text-slate-400 hover:text-gold transition-colors whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 88501 83944
            </a>
            <Link to="/contacts" className="btn-primary text-[12.5px] px-5 py-2.5">
              Get Free Quote
            </Link>
          </div>

          {/* Hamburger (shown below xl) */}
          <button
            className="xl:hidden p-2 text-slate-400 hover:text-white"
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

      {/* Mobile / tablet drawer */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-[#030712]/98 backdrop-blur-2xl border-t border-white/[0.06] px-4 py-4 space-y-0.5">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center px-4 py-3 text-sm font-medium hover:bg-white/[0.04] rounded-xl transition-all ${
                isActive(l.href) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-white/[0.06] space-y-3">
            <a
              href="tel:+918850183944"
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
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
