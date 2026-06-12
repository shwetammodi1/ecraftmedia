import { useTheme } from '../../contexts/ThemeContext'

const logos = [
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A1.png', alt: 'Client 1' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A3.png', alt: 'Client 3' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A4.png', alt: 'Client 4' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A6.png', alt: 'Client 6' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A7.png', alt: 'Client 7' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/A9.png', alt: 'Client 9' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/10pl-new-logo.png', alt: '10PL' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2015/11/Untitled-3.png', alt: 'Client' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2022/08/A1-copy-1.png', alt: 'Client' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2022/08/A112.png', alt: 'Client' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2022/09/free-press-j.png', alt: 'Free Press' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2021/03/liberty.jpg', alt: 'Liberty' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Finance360-Purple.png', alt: 'Finance360' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Sandstone.png', alt: 'Sandstone' },
]

export default function ClientLogos() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const doubled = [...logos, ...logos]

  /* Per logo: wrap in a subtle pill card so white-bg logos (JPEGs etc.)
     also look clean instead of becoming a solid rectangle */
  const cardBg = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)'
  const cardBorder = isLight ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.08)'
  /* Grayscale + brightness keeps logos readable on any bg type */
  const imgFilter = isLight
    ? 'grayscale(1) brightness(0.35) contrast(1.2)'
    : 'grayscale(1) brightness(2.5) contrast(0.9)'

  return (
    <div
      className="relative py-10 overflow-hidden"
      style={{
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Label */}
      <p
        className="text-center text-[10px] font-bold tracking-[0.22em] uppercase mb-7"
        style={{ color: 'var(--text-3)' }}
      >
        Trusted by 500+ businesses across India
      </p>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--page-bg), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, var(--page-bg), transparent)' }}
      />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-4 flex-shrink-0 transition-all duration-300 hover:opacity-100"
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: '12px',
              padding: '8px 18px',
              height: '54px',
              width: '130px',
              opacity: 0.65,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.65' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxHeight: '32px',
                maxWidth: '100px',
                objectFit: 'contain',
                filter: imgFilter,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
