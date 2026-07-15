import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StickyCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (dismissed || !show) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[150] -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl"
      style={{
        background: 'rgba(5,6,12,0.92)',
        border: '1px solid rgba(245,158,11,0.25)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,158,11,0.1)',
        animation: 'slideUp 0.4s cubic-bezier(.22,1,.36,1)',
      }}
    >
      {/* Pulse dot */}
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
      </span>

      <span className="text-[13px] font-medium text-slate-300 whitespace-nowrap">
        Free SEO Audit — Limited Slots Available
      </span>

      <Link
        to="/contacts"
        className="btn-primary text-[12px] px-4 py-2 rounded-lg"
        style={{ padding: '8px 18px', fontSize: '12px' }}
      >
        Claim Free Audit
      </Link>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="ml-1 text-slate-600 hover:text-slate-400 transition-colors flex-shrink-0"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
