// design-tokens.ts
// ----------------
// Sistema base de consistencia visual.
// En proyectos SaaS reales esto evita caos de estilos.

export const spacing = {
  hero: "py-20 lg:py-28",

  // Sección estándar (equilibrada)
  section: "py-16 lg:py-20",

  // Sección compacta (más densidad, UI tipo SaaS real)
  sectionCompact: "py-12 lg:py-16",
}

// Typography system
// ------------------
// Jerarquía tipográfica consistente

export const text = {
  h1: "text-4xl lg:text-6xl font-bold tracking-tight text-gray-900",
  h2: "text-2xl lg:text-3xl font-semibold text-gray-900",
  body: "text-base lg:text-lg text-gray-600 leading-relaxed",
  small: "text-sm text-gray-600 leading-relaxed",
}

// Layout system
// -------------
// Contenedor central del sistema

export const container = {
  base: "max-w-6xl mx-auto px-4",
}