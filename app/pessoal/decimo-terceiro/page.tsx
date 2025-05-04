import Sidebar from '@/components/Sidebar';
import Card from '@/components/Card';

export default function DecimoTerceiroPage() {
  return (
    <div className="flex min-h-screen bg-[#111] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-500">13º Salário</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Lucas Feliciano" value="Parcela 1: R$ 2.500,00" color="border-purple-500" />
          <Card title="Fernanda Lima" value="Parcela 2: R$ 2.100,00" color="border-purple-500" />
          <Card title="Carlos Mendes" value="Integral: R$ 6.100,00" color="border-purple-500" />
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
            Calcular 13º
          </button>
        </div>
      </main>
    </div>
  );
}

