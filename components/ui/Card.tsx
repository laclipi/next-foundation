import React from "react"

interface CardProps {
  title: string
  children: React.ReactNode
  variant?: "default" | "elevated"
}

// Card
// ----
// Microinteracciones SaaS:
// - hover lift suave
// - borde dinámico
// - contenido reactivo
// - sensación de componente vivo

export function Card({
  title,
  children,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`
        group rounded-2xl border p-6
        transition-all duration-300 ease-out
        cursor-default

        ${
          variant === "elevated"
            ? "bg-white shadow-sm border-gray-200 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
            : "bg-white shadow-sm border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-gray-300"
        }
      `}
    >

      {/* TITLE */}
      <h3
        className="
          text-lg font-semibold text-gray-900 mb-2
          transition-colors duration-200
          group-hover:text-gray-800
        "
      >
        {title}
      </h3>

      {/* CONTENT */}
      <p
        className="
          text-sm text-gray-600 leading-relaxed
          transition-colors duration-200
          group-hover:text-gray-700
        "
      >
        {children}
      </p>

    </div>
  )
}