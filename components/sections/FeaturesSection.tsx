import { Container } from "@/components/ui/Container";
import { spacing, text } from "@/styles/design-tokens";
import { cms } from "@/cms/mockContent";

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
          <h2 className={text.h2}>Next Foundation</h2>

          <p className={text.body}>
            UI system initialized for professional workflow
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cms.features.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
