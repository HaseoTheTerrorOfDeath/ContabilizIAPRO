'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function EncargosPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Encargos Mensais</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="INSS a Recolher" value="R$ 9.000,00" color="border-blue-500" />
          <Card title="FGTS a Recolher" value="R$ 3.600,00" color="border-green-500" />
          <Card title="IRRF a Recolher" value="R$ 2.200,00" color="border-red-500" />
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Gerar Guias
          </button>
        </div>
      </main>
    </div>
  );
}

