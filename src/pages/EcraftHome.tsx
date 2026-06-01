import { useEffect } from 'react'
import Navbar from '../components/ecraft/Navbar'
import Hero from '../components/ecraft/Hero'
import StatsBar from '../components/ecraft/StatsBar'
import Services from '../components/ecraft/Services'
import SeoPackages from '../components/ecraft/SeoPackages'
import WebDevPackage from '../components/ecraft/WebDevPackage'
import WhyChooseUs from '../components/ecraft/WhyChooseUs'
import WorkProcess from '../components/ecraft/WorkProcess'
import ContactForm from '../components/ecraft/ContactForm'
import Footer from '../components/ecraft/Footer'

export default function EcraftHome() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0F1E' }}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <SeoPackages />
        <WebDevPackage />
        <WhyChooseUs />
        <WorkProcess />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
