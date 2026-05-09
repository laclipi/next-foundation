import { ReactNode } from "react"

// RootLayout
// ----------
// Layout global del sistema UI.
//
// Objetivo:
// - unificar spacing vertical
// - definir ancho máximo consistente
// - crear ritmo visual SaaS real

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* CONTENEDOR GLOBAL DE FLUJO */}
      <div className="flex flex-col">

        {children}

      </div>

    </div>
  )
}