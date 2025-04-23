// app/api/classify-movement/route.ts

import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const message = body.message
    const prompt = body.prompt || 'Classifique esta movimentação bancária como Receita ou Despesa com categoria.'

    if (!message) {
      return NextResponse.json({ error: 'Mensagem não fornecida' }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: message }
      ],
      temperature: 0.3
    })

    const resposta = completion.choices[0].message.content

    return NextResponse.json({ result: resposta })
  } catch (error) {
    console.error('Erro na rota classify-movement:', error)
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 })
  }
}

