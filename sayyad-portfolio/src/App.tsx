import { Analytics } from '@vercel/analytics/react'
import HeroSection from '@/components/ui/glassmorphism-trust-hero'
import NavigationMenu from '@/components/ui/navigation-menu'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import CurrentFocus from '@/components/CurrentFocus'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-white selection:text-black">
      <NavigationMenu />
      <HeroSection />
      <div className="space-y-0">
        <About />
        <Services />
        <Skills />
        <Projects />
        <CurrentFocus />
        <Contact />
      </div>
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
