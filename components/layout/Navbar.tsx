import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <Container>

        <div className="flex items-center justify-between py-4">

          {/* BRAND */}
          <div className="font-semibold text-gray-900">
            Next Foundation
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900 transition" href="#">Features</a>
            <a className="hover:text-gray-900 transition" href="#">Services</a>
            <a className="hover:text-gray-900 transition" href="#">Docs</a>
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