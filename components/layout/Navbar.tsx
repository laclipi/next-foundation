import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

// Navbar
// ------
// Barra superior de navegación tipo SaaS.
//
// Objetivos:
// - Identidad del producto
// - Navegación simple
// - CTA visible siempre

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container>

        <div className="flex h-16 items-center justify-between">

          {/* LOGO / BRAND */}
          <div className="font-semibold text-gray-900">
            Next Foundation
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Features</a>
            <a href="#" className="hover:text-gray-900">Services</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">

            <Button variant="secondary">
              Login
            </Button>

            <Button>
              Get Started
            </Button>

          </div>

        </div>

      </Container>
    </header>
  )
}