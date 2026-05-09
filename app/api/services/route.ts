import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    items: [
      {
        title: "Desarrollo Web",
        text: "Creación de sitios web modernos y escalables",
      },
      {
        title: "SEO",
        text: "Mejora de posicionamiento en motores de búsqueda",
      },
      {
        title: "Automatización",
        text: "Optimización de procesos empresariales",
      },
    ],
  })
}