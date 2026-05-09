import { ReactNode } from "react"

type CardProps = {
  title?: string
  children: ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-sm transition bg-white">
      {title && (
        <h3 className="font-semibold text-lg mb-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}