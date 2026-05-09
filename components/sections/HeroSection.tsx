import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { spacing, text } from "@/styles/design-tokens";
import { cms } from "@/cms/mockContent";

// HeroSection
// ------------
// Primera impresión visual del producto.
// Ahora completamente data-driven (CMS mock)

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
              {cms.hero.badge}
            </div>

            {/* TITLE BLOCK */}
            <div className="space-y-5">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                {cms.hero.title}
                <span className="text-gray-500"> {cms.hero.highlight}</span>
              </h1>

              <p className={`${text.body} max-w-xl`}>{cms.hero.description}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button>{cms.hero.ctaPrimary}</Button>

              <Button variant="secondary">{cms.hero.ctaSecondary}</Button>
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
  );
}
