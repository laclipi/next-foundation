import { ReactNode } from "react"

type SectionProps = {
  title?: string
  description?: string
  children: ReactNode
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-6 py-8">
      {(title || description) && (
        <header className="space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600">
              {description}
            </p>
          )}
        </header>
      )}

      {children}
    </section>
  )
}