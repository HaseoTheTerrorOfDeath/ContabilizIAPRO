'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function BalancoPatrimonialPage() {
  const [ativos, setAtivos] = useState([{ nome: '', valor: '' }]);
  const [passivos, setPassivos] = useState([{ nome: '', valor: '' }]);

  const calcularTotal = (items: { valor: string }[]) =>
    items.reduce((acc, curr) => acc + parseFloat(curr.valor || '0'), 0);

  const handleChange = (
    index: number,
    key: 'nome' | 'valor',
    value: string,
    type: 'ativo' | 'passivo'
  ) => {
    const list = type === 'ativo' ? [...ativos] : [...passivos];
    list[index][key] = value;
    type === 'ativo' ? setAtivos(list) : setPassivos(list);
  };

  const addLinha = (type: 'ativo' | 'passivo') => {
    const novaLinha = { nome: '', valor: '' };
    type === 'ativo' ? setAtivos([...ativos, novaLinha]) : setPassivos([...passivos, novaLinha]);
  };

  const totalAtivos = calcularTotal(ativos);
  const totalPassivos = calcularTotal(passivos);
  const patrimonioLiquido = totalAtivos - totalPassivos;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Título */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 tracking-wide">Balanço Patrimonial</h1>

        {/* Barra de inserção manual */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Nome do item"
            className="flex-1 px-4 py-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-md text-white placeholder-gray-400"
          />
          <input
            type="number"
            placeholder="Valor (R$)"
            className="w-40 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder-gray-400"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow transition">
            Adicionar
          </button>
        </div>

        {/* Quadrantes de Ativos e Passivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card title="Ativos Circulantes" description="Recursos de curto prazo" />
          <Card title="Passivos Circulantes" description="Dívidas e obrigações imediatas" />
          <Card title="Ativos Não Circulantes" description="Bens e direitos a longo prazo" />
          <Card title="Passivos Não Circulantes" description="Obrigações de longo prazo" />
        </div>

        {/* Resumo */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 shadow-lg max-w-2xl">
          <h3 className="text-lg font-bold text-yellow-400 mb-2">Resumo:</h3>
          <p className="text-white/90">Total de Ativos: <strong>R$ {totalAtivos.toFixed(2)}</strong></p>
          <p className="text-white/90">Total de Passivos: <strong>R$ {totalPassivos.toFixed(2)}</strong></p>
          <p className="text-white/90">Patrimônio Líquido: <strong>R$ {patrimonioLiquido.toFixed(2)}</strong></p>
        </div>
      </main>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 p-6 rounded-lg shadow hover:shadow-yellow-500/10 transition duration-200">
      <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  );
}

