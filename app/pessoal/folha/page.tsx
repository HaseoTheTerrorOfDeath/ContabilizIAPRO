'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import { useState } from 'react';

export default function FolhaPagamentoPage() {
  const [mesSelecionado, setMesSelecionado] = useState('Abril/2025');

  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-yellow-500">
            Folha de Pagamento - {mesSelecionado}
          </h1>

          <select
            className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-white"
            value={mesSelecionado}
            onChange={(e) => setMesSelecionado(e.target.value)}
          >
            <option>Abril/2025</option>
            <option>Março/2025</option>
            <option>Fevereiro/2025</option>
          </select>
        </div>

        {/* Cards com resumo da folha */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Total Salários Brutos" value="R$ 45.000,00" color="border-yellow-500" />
          <Card title="INSS Patronal" value="R$ 9.000,00" color="border-blue-500" />
          <Card title="FGTS" value="R$ 3.600,00" color="border-green-500" />
          <Card title="IRRF Retido" value="R$ 2.200,00" color="border-red-500" />
          <Card title="Total da Folha" value="R$ 59.800,00" color="border-purple-500" />
        </div>

        {/* Ações */}
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Fechar Folha
          </button>
          <button className="bg-[#1a1a1a] border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
            Emitir Contracheques
          </button>
        </div>
      </main>
    </div>
  );
}

