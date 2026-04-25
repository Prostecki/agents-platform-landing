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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Athlete AI",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "The world's most advanced AI training management system for elite athletes. Nutrition and training coaches that share information in real time."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  )
}
