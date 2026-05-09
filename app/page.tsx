import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ServicesSection } from "@/components/sections/ServicesSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      <HeroSection />

      <FeaturesSection />

      <ServicesSection />

    </main>
  )
}