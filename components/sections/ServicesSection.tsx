import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { spacing, text } from "@/styles/design-tokens"

// ServicesSection
// ---------------
// Sección de valor del producto.
// Aquí mostramos capacidades principales del sistema.

export function ServicesSection() {
  return (
    <section className="bg-white border-t border-gray-100">

      <Container className={spacing.section}>

        {/* HEADER */}
        <div className="text-center mb-10 space-y-2">

          <h2 className={text.h2}>
            Servicios
          </h2>

          <p className={text.body}>
            Soluciones principales del producto
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card title="Desarrollo Web" variant="elevated">
            Creación de sitios web modernos y escalables
          </Card>

          <Card title="SEO">
            Mejora de posicionamiento en motores de búsqueda
          </Card>

          <Card title="Automatización">
            Optimización de procesos empresariales
          </Card>

        </div>

      </Container>

    </section>
  )
}