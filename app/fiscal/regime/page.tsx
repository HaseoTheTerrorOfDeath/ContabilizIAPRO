'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function RegimePage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Regime Tributário</h1>

        {/* Regime atual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Regime Atual" value="Lucro Presumido" color="border-yellow-500" />
          <Card title="Vigente Desde" value="01/01/2024" color="border-gray-500" />
        </div>

        {/* Histórico */}
        <h2 className="text-lg font-semibold mt-8 text-white">Histórico</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="2023" value="Simples Nacional" color="border-blue-500" />
          <Card title="2022" value="Simples Nacional" color="border-blue-500" />
          <Card title="2021" value="MEI" color="border-purple-500" />
        </div>

        {/* Ação */}
        <div className="mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Solicitar Alteração de Regime
          </button>
        </div>
      </main>
    </div>
  );
}

