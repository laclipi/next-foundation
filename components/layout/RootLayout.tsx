import { ReactNode } from "react"

// RootLayout
// ----------
// Layout global del sistema UI.
// Define el frame base del producto.

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* APP FRAME */}
      <main className="flex flex-col">
        {children}
      </main>

    </div>
  )
}