import React from 'react'
import Header from './header/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import ContactSection from './components/ContactSection.jsx'
import WhatsAppFloating from './components/WhatsAppFloating.jsx'
import Footer from './footer/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white relative isolate">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}

export default App
