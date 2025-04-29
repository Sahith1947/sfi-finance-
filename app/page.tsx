import SIPCalculator from "@/components/sip-calculator"
import InvestmentPlans from "@/components/investment-plans"
import Benefits from "@/components/benefits"
import CTA from "@/components/cta"
import Hero from "@/components/hero"
import Team from "@/components/team"
import Security from "@/components/security"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SIPCalculator />
      <InvestmentPlans />
      <HowItWorks />
      <Security />
      <Benefits />
      <Team />
      <Testimonials />
      <CTA />
    </main>
  )
}
