import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { spacing, text } from "@/styles/design-tokens"

// FeaturesSection
// ---------------
// Sección de soporte visual del producto.
// Menor jerarquía que Hero.

export function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">

      <Container className={spacing.sectionCompact}>

        {/* HEADER */}
        <div className="text-center mb-10 space-y-2">

          <h2 className={text.h2}>
            Next Foundation
          </h2>

          <p className={text.body}>
            UI system initialized for professional workflow
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Card title="Performance">
            Optimized rendering structure
          </Card>

          <Card title="Scalability">
            Reusable UI components system
          </Card>

          <Card title="Architecture">
            Clean modular design
          </Card>

        </div>

      </Container>

    </section>
  )
}