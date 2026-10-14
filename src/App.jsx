import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Process from './components/Process'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Blur/slide elements in as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal, .split').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
