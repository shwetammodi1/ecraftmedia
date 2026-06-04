import { Routes, Route } from 'react-router-dom'
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

export default function AppRoutes() {
  return (
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
  )
}

import React from 'react'
