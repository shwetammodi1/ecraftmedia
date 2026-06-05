const logos = [
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A1.png', alt: 'Client 1' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A2.png', alt: 'Client 2' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A3.png', alt: 'Client 3' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A4.png', alt: 'Client 4' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A5.png', alt: 'Client 5' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A6.png', alt: 'Client 6' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A7.png', alt: 'Client 7' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A8.png', alt: 'Client 8' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A9.png', alt: 'Client 9' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2022/08/A1-copy-1.png', alt: 'Client 10' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2022/09/free-press-j.png', alt: 'Free Press' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Finance360-Purple-150x127.png', alt: 'Finance 360' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Sandstone-150x74.png', alt: 'Sandstone' },
]

export default function ClientLogos() {
  const doubled = [...logos, ...logos]

  return (
    <div className="relative py-12 overflow-hidden" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Heading */}
      <p className="text-center text-[11px] font-bold tracking-[0.25em] uppercase text-slate-600 mb-8">
        Trusted by 500+ Businesses
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #030712, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(-90deg, #030712, transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div key={i} className="inline-flex items-center justify-center mx-10 h-12 w-28 opacity-40 hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
