import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setPct(max > 0 ? (scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[200] h-[3px] pointer-events-none"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #8B5CF6 100%)',
        boxShadow: '0 0 12px rgba(245,158,11,0.7)',
        transition: 'width 0.08s linear',
      }}
    />
  )
}
