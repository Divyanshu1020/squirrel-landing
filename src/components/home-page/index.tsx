import React from "react";
import CallToSection from "./call-to-section";
import Contact from "./Contact";
import FAQSection from "./faq-section";
import FeatureSection from "./feature-section";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import TestimonialsSection from "./testimonials-section";

function HomePage() {
  return (
    <>

      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToSection />
      <Contact />

    </>
  );
}

export default HomePage;
