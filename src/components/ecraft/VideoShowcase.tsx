import { useRef, useState } from 'react'

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'var(--page-bg)' }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="section-tag mx-auto mb-5">Our Work in Action</div>
          <h2
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            See How We Drive{' '}
            <span className="text-brand-gradient">Real Results</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            A glimpse into how Ecraft Media transforms brands through strategy, creativity,
            and measurable digital growth.
          </p>
        </div>

        {/* Video player */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-[28px] overflow-hidden group cursor-pointer"
            style={{
              border: '1px solid rgba(245,158,11,0.2)',
              boxShadow: '0 0 80px rgba(245,158,11,0.08), 0 32px 64px rgba(0,0,0,0.4)',
            }}
            onClick={toggle}
          >
            <video
              ref={videoRef}
              src="/showcase.mp4"
              className="w-full h-auto block"
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
            />

            {/* Play / Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
              style={{ background: playing ? 'rgba(0,0,0,0)' : 'rgba(5,6,12,0.45)' }}
            >
              <button
                aria-label={playing ? 'Pause video' : 'Play video'}
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                  boxShadow: '0 0 40px rgba(245,158,11,0.5)',
                }}
              >
                {playing ? (
                  /* Pause icon */
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  /* Play icon */
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Below-video trust strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {[
              { v: '500+', l: 'Brands Served' },
              { v: '10+', l: 'Years Experience' },
              { v: '98%', l: 'Client Retention' },
              { v: '₹50Cr+', l: 'Revenue Generated' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display font-black text-2xl text-white leading-none">{s.v}</div>
                <div className="text-[11px] text-slate-500 font-medium mt-1 tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
