import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

// DashboardLayout
// ----------------
// Layout principal del CRM SaaS.
// Define:
// - sidebar fija
// - topbar
// - content area responsive

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* SIDEBAR */}
        <aside
          className="
          hidden md:flex md:w-64
          flex-col
          border-r border-gray-200
          bg-white
          p-6
        "
        >
          {/* BRAND */}
          <div className="mb-10">
            <h1 className="text-xl font-bold text-gray-900">Klastr CRM</h1>

            <p className="text-sm text-gray-500">Dashboard foundation</p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-2">
            <button
              className="
              rounded-xl bg-gray-900 px-4 py-3
              text-left text-sm font-medium text-white
            "
            >
              Dashboard
            </button>

            <button
              className="
              rounded-xl px-4 py-3
              text-left text-sm text-gray-600
              hover:bg-gray-100
              transition-colors
            "
            >
              Students
            </button>

            <button
              className="
              rounded-xl px-4 py-3
              text-left text-sm text-gray-600
              hover:bg-gray-100
              transition-colors
            "
            >
              Companies
            </button>

            <button
              className="
              rounded-xl px-4 py-3
              text-left text-sm text-gray-600
              hover:bg-gray-100
              transition-colors
            "
            >
              Reports
            </button>
          </nav>
        </aside>

        {/* MAIN AREA */}
        <main className="flex-1">
          {/* TOPBAR */}
          <header
            className="
            flex items-center justify-between
            border-b border-gray-200
            bg-white
            px-6 py-4
          "
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>

              <p className="text-sm text-gray-500">Welcome back</p>
            </div>

            <div
              className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-gray-900
              text-sm font-semibold text-white
            "
            >
              LC
            </div>
          </header>

          {/* CONTENT */}
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
