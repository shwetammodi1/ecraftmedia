import { useState, useEffect } from 'react'
import { ChatIcon } from './icons'

const PHONE = '918850183944'
const MESSAGE = 'Hi! I visited your website and would like to know more about your services.'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    // Show button after 2s
    const t1 = setTimeout(() => setVisible(true), 2000)
    // Hide tooltip after 6s
    const t2 = setTimeout(() => setTooltip(false), 6000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Tooltip bubble */}
      {tooltip && (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-[20px] text-sm font-medium text-white shadow-2xl animate-fade-up"
          style={{
            background: 'rgba(10,14,26,0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            maxWidth: '220px',
          }}
        >
          <span className="text-emerald-400 flex-shrink-0"><ChatIcon className="w-[18px] h-[18px]" /></span>
          <div>
            <div className="font-semibold text-white text-xs">Chat with us!</div>
            <div className="text-slate-400 text-[11px] mt-0.5">We reply in minutes</div>
          </div>
          <button
            onClick={() => setTooltip(false)}
            className="text-slate-500 hover:text-white transition-colors ml-1 flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Arrow */}
          <div
            className="absolute -bottom-2 right-6 w-3 h-3 rotate-45"
            style={{ background: 'rgba(10,14,26,0.95)', borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          />
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(37,211,102,0.6), 0 2px 8px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(37,211,102,0.4), 0 2px 8px rgba(0,0,0,0.3)'
        }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: '#25D366' }} />

        {/* WhatsApp SVG icon */}
        <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
