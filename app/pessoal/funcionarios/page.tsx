'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function FuncionariosPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Funcionários</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Lucas Feliciano" value="Salário: R$ 5.000,00" color="border-yellow-500" />
          <Card title="Fernanda Lima" value="Salário: R$ 4.200,00" color="border-yellow-500" />
          <Card title="Carlos Mendes" value="Salário: R$ 6.100,00" color="border-yellow-500" />
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Adicionar Funcionário
          </button>
        </div>
      </main>
    </div>
  );
}

