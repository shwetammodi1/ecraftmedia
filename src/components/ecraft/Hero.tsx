import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  const handleScroll = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #0F1729 50%, #0A0F1E 100%)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float-delayed"
          style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6C63FF 0%, #F5A623 50%, transparent 70%)', filter: 'blur(80px)' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 2 === 0 ? '#F5A623' : '#6C63FF',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          <span className="text-[#F5A623] text-sm font-medium">India's Premier Digital Marketing Agency</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          India's{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ background: 'linear-gradient(135deg, #F5A623, #F7B94A, #F5A623)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            #1 Digital
          </span>
          <br />
          Marketing &{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ background: 'linear-gradient(135deg, #6C63FF, #8B85FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            SEO Agency
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          We help businesses grow online with <span className="text-white font-medium">SEO</span>,{' '}
          <span className="text-white font-medium">Web Development</span>,{' '}
          <span className="text-white font-medium">Digital Marketing</span> &{' '}
          <span className="text-white font-medium">App Development</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-gold text-base px-8 py-4 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Get Free Quote
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="btn-outline text-base px-8 py-4 w-full sm:w-auto"
          >
            Our Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Floating service tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {['SEO Optimization', 'Web Development', 'App Development', 'Social Media', 'PPC Advertising'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#F5A623]/50 hover:text-[#F5A623] transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-[#F5A623] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
