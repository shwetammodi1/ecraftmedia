import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'var(--page-bg)', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

import React from 'react'
