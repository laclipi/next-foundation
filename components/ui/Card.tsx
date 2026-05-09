interface CardProps {
  title: string
  children: React.ReactNode
  variant?: "default" | "elevated"
}

// Card
// ----
// Sistema de cards con jerarquía visual real.
// En SaaS se usa para diferenciar importancia de contenido.

export function Card({
  title,
  children,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border p-6 transition-all duration-300
        ${
          variant === "elevated"
            ? "bg-white shadow-lg border-gray-200 hover:shadow-xl"
            : "bg-white shadow-sm border-gray-200 hover:shadow-md"
        }
      `}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  )
}