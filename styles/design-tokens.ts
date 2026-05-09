// design-tokens.ts
// ----------------
// Sistema base de consistencia visual.
// En proyectos SaaS reales esto evita caos de estilos.

export const spacing = {
  hero: "py-20 lg:py-24",
  section: "py-14 lg:py-18",
  sectionCompact: "py-10 lg:py-14",
}

// Typography system
// ------------------
// Definimos jerarquía clara y reutilizable

export const text = {
  h1: "text-4xl lg:text-6xl font-bold tracking-tight text-gray-900",
  h2: "text-2xl lg:text-3xl font-semibold text-gray-900",
  body: "text-base lg:text-lg text-gray-600 leading-relaxed",
  small: "text-sm text-gray-600 leading-relaxed",
}

// Layout system
// -------------
// Evitamos inconsistencias en ancho de contenido

export const container = {
  base: "max-w-6xl mx-auto px-4",
}