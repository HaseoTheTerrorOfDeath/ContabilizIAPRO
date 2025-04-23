'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'
import { usePathname, useRouter } from 'next/navigation'

export default function AutoAnalyzer() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/') return // ignora home

    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/analise-financeira', { method: 'POST' })
        const data = await res.json()

        if (data?.resposta) {
          // ✅ Envia mensagem pro chatbot
          await fetch('/api/chat/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              role: 'assistant',
              content: data.resposta,
              origin: 'ia-auto'
            })
          })

          // ✅ Mostra toast clicável
          toast(
            `📣 IA tem uma sugestão para você!`,
            {
              description: 'Clique para ver no chat.',
              action: {
                label: 'Ver agora',
                onClick: () => router.push('/assistente')
              }
            }
          )
        }
      } catch (err) {
        console.error('Erro ao executar análise automática:', err)
      }
    }, 30_000) // a cada 30s

    return () => clearInterval(interval)
  }, [pathname, router])

  return null
}

