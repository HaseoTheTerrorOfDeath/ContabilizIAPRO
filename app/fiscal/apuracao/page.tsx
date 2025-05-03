'use client';

import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';
import { useState } from 'react';

export default function ApuracaoPage() {
  const [mesSelecionado, setMesSelecionado] = useState('Abril/2025');

  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        {/* Cabeçalho com seleção de mês e ações */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-yellow-500">
            Apuração Tributária - {mesSelecionado}
          </h1>

          <div className="flex gap-2">
            <select
              className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-white"
              value={mesSelecionado}
              onChange={(e) => setMesSelecionado(e.target.value)}
            >
              <option>Abril/2025</option>
              <option>Março/2025</option>
              <option>Fevereiro/2025</option>
            </select>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
              Recalcular
            </button>
            <button className="bg-[#1a1a1a] border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
              Baixar Relatório
            </button>
          </div>
        </div>

        {/* Grid de Cards de Tributos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="IRPJ" value="R$ 2.000,00" color="border-red-500" />
          <Card title="CSLL" value="R$ 1.500,00" color="border-purple-500" />
          <Card title="PIS" value="R$ 500,00" color="border-blue-500" />
          <Card title="COFINS" value="R$ 2.000,00" color="border-indigo-500" />
          <Card title="ISS" value="R$ 900,00" color="border-green-500" />
          <Card title="Total de Tributos" value="R$ 6.900,00" color="border-yellow-500" />
        </div>

        {/* Status da Apuração */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Status da Apuração" value="Revisado" color="border-green-500" />
          <Card title="Última Atualização" value="30/04/2025 - 14:32" color="border-gray-500" />
        </div>
      </main>
    </div>
  );
}

