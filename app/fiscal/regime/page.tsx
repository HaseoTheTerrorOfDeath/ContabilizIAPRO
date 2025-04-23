'use client';

import Sidebar from '@/components/Sidebar';

export default function BalancoPatrimonialPage() {
  return (
    <div className="min-h-screen flex bg-white text-black">
      {/* Sua sidebar atual */}
      <Sidebar />

      {/* Conteúdo principal (ainda em branco) */}
      <main className="flex-1 p-10">
        {/* Aqui você pode construir a UI do Balanço */}
      </main>
    </div>
  );
}

