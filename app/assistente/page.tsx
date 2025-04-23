'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '@/components/Sidebar' // ajuste o path se necessário

type Mensagem = {
  role: 'user' | 'assistant'
  content: string
  origin?: string
  timestamp?: string
}

export default function AssistentePage() {
  const [messages, setMessages] = useState<Mensagem[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('/data/chat-history.json')
      .then((res) => res.json())
      .then((data) => setMessages(data))
  }, [])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Mensagem = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const res = await axios.post('/api/gpt-4', { message: input })
      const botReply: Mensagem = {
        role: 'assistant',
        content: res.data.response,
        origin: 'chat',
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, botReply])
    } catch (err) {
      const fallback: Mensagem = {
        role: 'assistant',
        content: '❌ Erro ao enviar mensagem. Tente novamente.',
      }
      setMessages((prev) => [...prev, fallback])
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-black to-neutral-900 text-white">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-start p-6">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          ContabilizIA Chatbot 🤖
        </h1>

        <div className="bg-neutral-900 border border-yellow-500/20 rounded-lg shadow p-6 w-full max-w-2xl flex flex-col space-y-4 overflow-y-auto h-96">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-yellow-600 text-black self-end'
                  : 'bg-neutral-800 text-yellow-300 self-start'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="flex mt-6 w-full max-w-2xl">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 border border-yellow-500 rounded-l-lg p-3 bg-neutral-800 text-white focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-r-lg p-3 font-semibold"
          >
            Enviar
          </button>
        </div>
      </main>
    </div>
  )
}

