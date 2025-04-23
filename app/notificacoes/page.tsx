'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'

type Notificacao = {
  id: number
  mensagem: string
  data: string
}

export default function NotificacoesPage() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([])

  useEffect(() => {
    fetch('/app/data/notifications.json')
      .then((res) => res.json())
      .then((data) => setNotificacoes(data.reverse()))
  }, [])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-black to-neutral-900 text-white">
      <Sidebar />

      <main className="flex-1 p-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Notificações da Inteligência Artificial 📡</h1>

        {notificacoes.length === 0 ? (
          <p className="text-white/60">Nenhuma notificação registrada ainda.</p>
        ) : (
          <div className="space-y-6">
            {notificacoes.map((n) => (
              <div
                key={n.id}
                className="bg-neutral-900 border border-yellow-700/30 rounded-lg p-6 shadow-lg hover:shadow-yellow-500/20 transition"
              >
                <p className="text-white/90 whitespace-pre-wrap">{n.mensagem}</p>
                <p className="text-sm text-yellow-400 mt-4 text-right">
                  {new Date(n.data).toLocaleString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

