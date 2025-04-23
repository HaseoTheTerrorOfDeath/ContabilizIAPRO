'use client'

import Sidebar from '@/components/Sidebar'

export default function DemonstracoesPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-8">
          Demonstrações Contábeis
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card title="Balanço Patrimonial (BP)" description="Situação patrimonial da empresa em um período." />
          <Card title="DRE" description="Demonstra o resultado líquido da empresa." />
          <Card title="DFC" description="Entradas e saídas de caixa no período." />
          <Card title="DMPL" description="Evolução do patrimônio líquido." />
          <Card title="DLPA" description="Lucros ou prejuízos acumulados." />
          <Card title="DVA" description="Valor gerado e distribuído pela empresa." />
        </div>
      </main>
    </div>
  )
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-neutral-800 p-6 rounded-lg shadow hover:shadow-yellow-500/20 transition duration-200 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
          {title}
        </h2>
        <p className="text-white/80 text-sm">{description}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => alert(`Visualizando: ${title}`)}
          className="flex-1 bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-black font-semibold py-2 px-4 rounded transition"
        >
          Preview
        </button>
        <button
          onClick={() => alert(`Baixando PDF: ${title}`)}
          className="flex-1 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-2 px-4 rounded transition border border-neutral-600"
        >
          Baixar PDF
        </button>
      </div>
    </div>
  )
}

