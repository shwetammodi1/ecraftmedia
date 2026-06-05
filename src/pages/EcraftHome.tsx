import { useScrollAnimateChildren } from '../hooks/useScrollAnimation'
import Navbar from '../components/ecraft/Navbar'
import Hero from '../components/ecraft/Hero'
import Marquee from '../components/ecraft/Marquee'
import StatsBar from '../components/ecraft/StatsBar'
import Services from '../components/ecraft/Services'
import Portfolio from '../components/ecraft/Portfolio'
import SeoPackages from '../components/ecraft/SeoPackages'
import WebDevPackage from '../components/ecraft/WebDevPackage'
import Testimonials from '../components/ecraft/Testimonials'
import WhyChooseUs from '../components/ecraft/WhyChooseUs'
import WorkProcess from '../components/ecraft/WorkProcess'
import ContactForm from '../components/ecraft/ContactForm'
import Footer from '../components/ecraft/Footer'
import WhatsAppButton from '../components/ecraft/WhatsAppButton'
import ClientLogos from '../components/ecraft/ClientLogos'

export default function EcraftHome() {
  useScrollAnimateChildren('.fade-up, .fade-in')

  return (
    <div style={{ backgroundColor: 'var(--page-bg)', minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatsBar />
        <ClientLogos />
        <Services />
        <Portfolio />
        <SeoPackages />
        <WebDevPackage />
        <Testimonials />
        <WhyChooseUs />
        <WorkProcess />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
