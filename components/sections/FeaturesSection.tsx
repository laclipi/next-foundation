import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"

// FeaturesSection
// ----------------
// Esta sección representa el bloque intermedio de "features"
// que antes estaba dentro de page.tsx.
//
// En migraciones reales:
// - suele ser código mezclado en la página principal
// - aquí lo aislamos como componente reutilizable
//
// Beneficios:
// - page.tsx más limpio
// - reutilización en otras páginas
// - escalabilidad del sistema

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>

        {/* HEADER DE SECCIÓN */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-semibold">
            Next Foundation
          </h2>

          <p className="text-gray-600">
            UI system initialized for professional workflow
          </p>
        </div>

        {/* GRID DE FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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