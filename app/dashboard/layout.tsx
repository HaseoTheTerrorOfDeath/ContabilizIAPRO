// app/dashboard/layout.tsx
import Sidebar from "../../components/Sidebar";
import "../../styles/globals.css";
import { FiscalProvider } from "../../contexts/FiscalContext";

export const metadata = {
  title: "Dashboard - ContabilizIA",
  description: "Área interna para gestão contábil inteligente",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FiscalProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">{children}</main>
      </div>
    </FiscalProvider>
  );
}

