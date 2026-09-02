import Header from './header/Header.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import StoreCta from './components/StoreCta.jsx'
import Footer from './footer/Footer.jsx'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <StoreCta />
      <Footer />
    </main>
  )
}

export default App