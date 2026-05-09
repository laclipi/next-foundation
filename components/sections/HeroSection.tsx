import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { spacing, text } from "@/styles/design-tokens"

// HeroSection
// ------------
// Primera impresión visual del producto.
// Ahora completamente alineado con design system (spacing + typography)

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">

      <Container className={spacing.hero}>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
         <div className="space-y-6 lg:space-y-8">

            {/* BADGE */}
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1 text-sm text-gray-600 shadow-sm">
              Modern SaaS Foundation
            </div>

            {/* TITLE BLOCK */}
            <div className="space-y-5">

              <h1 className={text.h1}>
                Build modern digital experiences
                <span className="text-gray-500"> with confidence</span>
              </h1>

              <p className={text.body + " max-w-xl"}>
                Professional UI architecture designed for scalable frontend workflows,
                migrations and modern SaaS products.
              </p>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              <Button>
                Start Project
              </Button>

              <Button variant="secondary">
                Explore Services
              </Button>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">

              {/* TOP BAR */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              </div>

              {/* MOCK UI */}
              <div className="space-y-4">

                <div className="h-10 rounded-xl bg-gray-100"></div>

                <div className="grid grid-cols-3 gap-3">

                  <div className="h-28 lg:h-32 rounded-2xl bg-gray-100"></div>
                  <div className="h-28 lg:h-32 rounded-2xl bg-gray-100"></div>
                  <div className="h-28 lg:h-32 rounded-2xl bg-gray-100"></div>

                </div>

                <div className="h-20 lg:h-24 rounded-2xl bg-gray-100"></div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  )
}