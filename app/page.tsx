import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { Navbar } from "@/components/layout/Navbar"
import { RootLayout } from "@/components/layout/RootLayout"

export default function Home() {
  return (
    <RootLayout>

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <ServicesSection />

    </RootLayout>
  )
}