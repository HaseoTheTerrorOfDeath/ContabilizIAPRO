'use client'

import Sidebar from '@/components/Sidebar'

export default function MovimentacoesPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">Movimentações Financeiras</h1>

        {/* Grid dos 4 quadrantes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quadrante 1 - Gráfico */}
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 rounded-xl shadow-lg border border-zinc-700">
            <h2 className="text-lg font-semibold text-yellow-300 mb-4">
              Saúde Financeira - Abril/2025
            </h2>
            <div className="text-sm text-white/70">
              {/* Futuro: Componente de gráfico */}
              <div className="h-48 flex items-center justify-center text-white/40 italic">
                [Gráfico financeiro aqui]
              </div>
            </div>
          </div>

          {/* Quadrante 2 - Contas Pluggy */}
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 rounded-xl shadow-lg border border-zinc-700">
            <h2 className="text-lg font-semibold text-yellow-300 mb-4">
              Contas bancárias conectadas
            </h2>
            <div className="text-sm text-white/70">
              Nenhuma conta conectada.
              <br />
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded">
                Conectar via Pluggy
              </button>
            </div>
          </div>

          {/* Quadrante 3 - Entradas */}
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 rounded-xl shadow-lg border border-zinc-700">
            <h2 className="text-lg font-semibold text-green-400 mb-4">
              Entradas do mês
            </h2>
            <ul className="text-sm text-white/80 space-y-2">
              <li>+ R$ 2.500,00 - Venda de serviços</li>
              <li>+ R$ 1.200,00 - Projeto X</li>
              {/* ... */}
            </ul>
          </div>

          {/* Quadrante 4 - Saídas */}
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700">
            <h2 className="text-lg font-semibold text-red-400 mb-4">
              Saídas do mês
            </h2>
            <ul className="text-sm text-white/80 space-y-2">
              <li>- R$ 800,00 - Aluguel</li>
              <li>- R$ 450,00 - Despesas com software</li>
              {/* ... */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

