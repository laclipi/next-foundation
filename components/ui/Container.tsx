import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

// Container
// ---------
// Wrapper de layout base del sistema.
// Permite extensión con className sin romper consistencia.

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}