import HeroSection from '@/components/ui/glassmorphism-trust-hero'
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
    </main>
  )
}

export default App
