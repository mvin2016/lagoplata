import './App.css'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import ExecutiveSummary from './components/sections/ExecutiveSummary'
import Concept from './components/sections/Concept'
import Location from './components/sections/Location'
import Market from './components/sections/Market'
import Timeline from './components/sections/Timeline'
import Financials from './components/sections/Financials'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'
import Footer from './components/ui/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Concept />
        <Location />
        <Market />
        <Timeline />
        <Financials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App