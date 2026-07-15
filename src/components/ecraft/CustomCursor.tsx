import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [clicking, setClicking]   = useState(false)
  const [hovering, setHovering]   = useState(false)
  const [visible,  setVisible]    = useState(false)

  useEffect(() => {
    let rx = -200, ry = -200   // ring current position (lerped)
    let mx = -200, my = -200   // mouse position
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
      }
    }
    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const checkHover = (e: MouseEvent) => {
      const el = e.target as Element
      setHovering(!!(el.closest('a, button, [role="button"]')))
    }

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mousemove',  checkHover)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mousemove',  checkHover)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  if (typeof window === 'undefined') return null

  const scale = clicking ? 0.6 : hovering ? 1.6 : 1

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          width: 8, height: 8,
          marginLeft: -4, marginTop: -4,
          borderRadius: '50%',
          background: '#F59E0B',
          boxShadow: '0 0 8px rgba(245,158,11,0.8)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] top-0 left-0"
        style={{
          width: 36, height: 36,
          marginLeft: -18, marginTop: -18,
          borderRadius: '50%',
          border: `1.5px solid rgba(245,158,11,${hovering ? 0.9 : 0.45})`,
          background: hovering ? 'rgba(245,158,11,0.06)' : 'transparent',
          opacity: visible ? 1 : 0,
          transform: `scale(${scale})`,
          transition: 'opacity 0.2s, border-color 0.2s, background 0.2s, transform 0.25s cubic-bezier(.22,1,.36,1)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
