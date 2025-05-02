// app/api/chat/save/route.ts
import { writeFile, readFile } from 'fs/promises'
import path from 'path'

const filePath = path.resolve(process.cwd(), 'public/data/chat-history.json')

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const mensagens = JSON.parse(await readFile(filePath, 'utf-8'))
    mensagens.push({ ...body, timestamp: new Date().toISOString() })

    await writeFile(filePath, JSON.stringify(mensagens, null, 2), 'utf-8')

    return Response.json({ success: true })
  } catch (e) {
    console.error('Erro ao salvar mensagem do chatbot:', e)
    return Response.json({ error: 'Erro ao salvar mensagem.' }, { status: 500 })
  }
}

