import HeroSection from '@/components/ui/glassmorphism-trust-hero'
import NavigationMenu from '@/components/ui/navigation-menu'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Journey from '@/components/Journey'
import Testimonials from '@/components/Testimonials'
import Projects from '@/components/Projects'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

function App() {
  return (
    <main className="min-h-screen bg-bg-deep bg-aurora font-sans selection:bg-ai-cyan selection:text-black relative">
      <div className="fixed inset-0 bg-noise z-[9999] pointer-events-none" />
      <NavigationMenu />
      <HeroSection />
      <div className="space-y-0">
        <About />
        <Services />
        <Skills />
        <Journey />
        <Testimonials />
        <Projects />
        <Newsletter />
        <Contact />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  )
}

export default App
