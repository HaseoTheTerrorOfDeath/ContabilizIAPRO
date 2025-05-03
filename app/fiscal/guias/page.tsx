'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function GuiasPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Guias Geradas - Abril/2025</h1>

        {/* Grid com as guias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Guia IRPJ" value="R$ 2.000,00" color="border-red-500" />
          <Card title="Guia CSLL" value="R$ 1.500,00" color="border-purple-500" />
          <Card title="Guia PIS" value="R$ 500,00" color="border-blue-500" />
          <Card title="Guia COFINS" value="R$ 2.000,00" color="border-indigo-500" />
          <Card title="Guia ISS" value="R$ 900,00" color="border-green-500" />
          <Card title="Total de Guias" value="R$ 6.900,00" color="border-yellow-500" />
        </div>

        {/* Ações */}
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Baixar Todas
          </button>
          <button className="bg-[#1a1a1a] border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
            Marcar como Pagas
          </button>
        </div>
      </main>
    </div>
  );
}

