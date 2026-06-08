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
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Finance360-Purple-150x127.png', alt: 'Finance 360' },
  { src: 'https://ecraftmedia.com/wp-content/uploads/2024/08/Logo-Sandstone-150x74.png', alt: 'Sandstone' },
]

export default function ClientLogos() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const doubled = [...logos, ...logos]

  return (
    <div
      className="relative py-12 overflow-hidden"
      style={{
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Label */}
      <p
        className="text-center text-[10.5px] font-bold tracking-[0.22em] uppercase mb-8"
        style={{ color: 'var(--text-3)' }}
      >
        Trusted by 500+ businesses across India
      </p>

      {/* Fade edges — uses page bg */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--page-bg), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, var(--page-bg), transparent)' }}
      />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-10 h-10 w-28 flex-shrink-0 transition-opacity duration-300"
            style={{ opacity: isLight ? 0.55 : 0.35 }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.85' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = isLight ? '0.55' : '0.35' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              style={{
                filter: isLight
                  ? 'grayscale(100%) brightness(0.3)'
                  : 'brightness(0) invert(1)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
