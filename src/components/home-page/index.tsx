import React from 'react'
import { Navbar } from '../global/navbar'
import HeroSection from './hero-section'
import FeatureSection from './feature-section'
import ServicesSection from './services-section'
import TestimonialsSection from './testimonials-section'
import FAQSection from './faq-section'
import Footer from '../global/footer'
import CallToSection from './call-to-section'
import Contact from './Contact'

function HomePage() {
  return (
    <main className="min-h-screen relative ">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToSection />
      <Contact />
      <Footer />
      

      
    </main>
  )
}

export default HomePage