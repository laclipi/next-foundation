import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"

export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <Container>

        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-semibold">
            Servicios
          </h2>

          <p className="text-gray-600">
            Soluciones principales del producto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card title="Desarrollo Web">
            Creación de sitios web modernos
          </Card>

          <Card title="SEO">
            Mejora de posicionamiento en Google
          </Card>

          <Card title="Automatización">
            Optimización de procesos empresariales
          </Card>

        </div>

      </Container>
    </section>
  )
}