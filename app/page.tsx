import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Container>
        <Section
          title="Next Foundation"
          description="UI system initialized for professional workflow"
        >
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

          <div className="flex gap-3">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </Section>
      </Container>
    </main>
  )
}