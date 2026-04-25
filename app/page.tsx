import Nav from './components/Nav'
import Hero from './components/Hero'
import TechBar from './components/TechBar'
import AgentNetwork from './components/AgentNetwork'
import ProductShowcase from './components/ProductShowcase'
import ProblemSolution from './components/ProblemSolution'
import Demo from './components/Demo'
import HowItWorks from './components/HowItWorks'
import FeaturesCarousel from './components/FeaturesCarousel'
import FeaturesGrid from './components/FeaturesGrid'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="pt-16">
      <Nav />
      <Hero />
      <TechBar />
      <AgentNetwork />
      <ProductShowcase />
      <ProblemSolution />
      <Demo />
      <HowItWorks />
      <FeaturesCarousel />
      <FeaturesGrid />
      <FinalCTA />
      <Footer />
    </main>
  )
}
