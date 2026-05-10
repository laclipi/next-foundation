import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Dashboard Page
// --------------
// Página principal del CRM.
// Aquí vivirán métricas, tablas y widgets.

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* PAGE HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor platform activity and performance
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="
            rounded-2xl border border-gray-200
            bg-white p-6 shadow-sm
          "
          >
            <p className="text-sm text-gray-500">Active Students</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">128</h2>
          </div>

          <div
            className="
            rounded-2xl border border-gray-200
            bg-white p-6 shadow-sm
          "
          >
            <p className="text-sm text-gray-500">Companies</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">24</h2>
          </div>

          <div
            className="
            rounded-2xl border border-gray-200
            bg-white p-6 shadow-sm
          "
          >
            <p className="text-sm text-gray-500">Active Internships</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">56</h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
