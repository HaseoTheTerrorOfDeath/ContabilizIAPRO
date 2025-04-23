import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { analisarFinanceiro } from '@/lib/ia/analisarFinanceiro'
import { enviarEmail } from '@/lib/email/enviarEmail'

export async function POST() {
  try {
    const filePath = path.resolve('./app/data/finance-data.json')
    const data = JSON.parse(await fs.readFile(filePath, 'utf-8'))

    const resposta = await analisarFinanceiro(data)

    // 📥 Salvar notificação
    const notifPath = path.resolve('./app/data/notifications.json')
    const notifs = JSON.parse(await fs.readFile(notifPath, 'utf-8'))

    const novaNotificacao = {
      id: Date.now(),
      mensagem: resposta,
      data: new Date().toISOString(),
    }

    notifs.push(novaNotificacao)
    await fs.writeFile(notifPath, JSON.stringify(notifs, null, 2), 'utf-8')

    // 💬 Salvar como mensagem no Chatbot
    const chatPath = path.resolve('./app/data/chat-history.json')
    const chat = JSON.parse(await fs.readFile(chatPath, 'utf-8'))

    const novaMensagem = {
      role: 'assistant',
      content: `📡 Análise automática:\n\n${resposta}`,
      origin: 'ia-analise',
      timestamp: new Date().toISOString()
    }

    chat.push(novaMensagem)
    await fs.writeFile(chatPath, JSON.stringify(chat, null, 2), 'utf-8')

    // 🚨 Se alerta sério → envia e-mail
    const alertaSerio = /endividamento.*(acima|excessivo|elevado|risco)|liquidez.*(baixa|preocupante)|risco/i.test(resposta)

    if (alertaSerio) {
      await enviarEmail('usuario@empresa.com', resposta)
    }

    return NextResponse.json({ success: true, resposta, alertaSerio })
  } catch (err) {
    console.error('Erro na análise:', err)
    return NextResponse.json({ error: 'Erro ao analisar dados.' }, { status: 500 })
  }
}

