"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { spacing, text } from "@/styles/design-tokens";
import { cms } from "@/cms/mockContent";

// ServicesSection
// ---------------
// Sección de valor del producto.
// Aquí mostramos capacidades principales del sistema.

export function ServicesSection() {
  const [services, setServices] = useState(cms.services.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();

        setServices(data.items);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  return (
    <section className="bg-white border-t border-gray-100">
      <Container className={spacing.section}>
        {/* HEADER */}
        <div className="text-center mb-10 space-y-2">
          <h2 className={text.h2}>Servicios</h2>

          <p className={text.body}>Soluciones principales del producto</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                rounded-2xl border border-gray-200 bg-white p-6
                shadow-sm hover:shadow-md transition-all duration-300
                hover:-translate-y-1
                ${index === 0 ? "md:col-span-1" : ""}
              `}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
