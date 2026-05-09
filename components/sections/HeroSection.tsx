import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-6">
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Empresa Digital
          </h1>

          <p className="text-lg text-gray-600">
            Soluciones tecnológicas para negocios modernos
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <Button>Contactar</Button>
            <Button variant="secondary">Ver servicios</Button>
          </div>

        </div>
      </Container>
    </section>
  )
}