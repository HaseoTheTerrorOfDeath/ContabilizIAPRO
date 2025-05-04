'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function GestaoEmpresasPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">Gestão de Empresas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Empresa XYZ LTDA" value="CNPJ: 12.345.678/0001-90" color="border-green-500" />
          <Card title="Alfa Soluções ME" value="Status: Em Abertura" color="border-yellow-500" />
          <Card title="Beta Digital S/A" value="Status: Encerrando" color="border-red-500" />
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Cadastrar Nova Empresa
          </button>
          <button className="bg-[#1a1a1a] border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
            Gerar Contrato Social
          </button>
        </div>
      </main>
    </div>
  );
}

