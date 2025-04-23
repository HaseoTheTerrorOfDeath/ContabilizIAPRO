import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const prompt = `
Você é um assistente financeiro inteligente. Com base nos dados abaixo, diga se há algo que exija um alerta. Seja crítico. Retorne somente o JSON.

${JSON.stringify(body)}

Formato:
{
  "alerta": true/false,
  "mensagem": "explicação objetiva"
}
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Você é um analista contábil que responde com precisão e sem alarmismo.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.4,
  })

  const response = completion.choices[0].message.content

  try {
    return NextResponse.json(JSON.parse(response!))
  } catch (err) {
    return NextResponse.json({
      alerta: false,
      mensagem: 'Não foi possível interpretar a resposta da IA.',
    })
  }
}

