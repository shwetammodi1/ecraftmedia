import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import EcraftHome from '../pages/EcraftHome'
import PageLayout from '../components/ecraft/PageLayout'
import AboutUs from '../pages/AboutUs'
import SeoServices from '../pages/SeoServices'
import WebDevelopment from '../pages/WebDevelopment'
import DigitalMarketing from '../pages/DigitalMarketing'
import AppDevelopment from '../pages/AppDevelopment'
import Blogs from '../pages/Blogs'
import Contacts from '../pages/Contacts'

function PL({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(.22,1,.36,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
    return () => cancelAnimationFrame(t)
  }, [location.pathname])
  return <div ref={ref}>{children}</div>
}

export default function AppRoutes() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<EcraftHome />} />
        <Route path="/home" element={<EcraftHome />} />
        <Route path="/about-us" element={<PL><AboutUs /></PL>} />
        <Route path="/seo" element={<PL><SeoServices /></PL>} />
        <Route path="/web-development" element={<PL><WebDevelopment /></PL>} />
        <Route path="/digital-marketing" element={<PL><DigitalMarketing /></PL>} />
        <Route path="/app-development" element={<PL><AppDevelopment /></PL>} />
        <Route path="/blog" element={<PL><Blogs /></PL>} />
        <Route path="/contacts" element={<PL><Contacts /></PL>} />
      </Routes>
    </PageWrapper>
  )
}

import React from 'react'
