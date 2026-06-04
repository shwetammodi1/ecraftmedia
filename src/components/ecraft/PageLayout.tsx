import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollToTop from './ScrollToTop'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#030712', minHeight: '100vh' }}>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

import React from 'react'
