"use client"

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

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm">

            {["Features", "Services", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  relative text-gray-500 hover:text-gray-900
                  transition-colors duration-200
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-gray-900
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}

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