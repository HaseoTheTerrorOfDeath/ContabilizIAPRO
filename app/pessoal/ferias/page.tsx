'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function FeriasPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Controle de Férias</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Lucas Feliciano" value="Agendada: 15/07/2025" color="border-blue-500" />
          <Card title="Fernanda Lima" value="Saldo: 12 dias" color="border-blue-500" />
          <Card title="Carlos Mendes" value="Aquisitivo: 01/03/2024" color="border-blue-500" />
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Gerenciar Férias
          </button>
        </div>
      </main>
    </div>
  );
}

