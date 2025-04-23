import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function analisarConteudoCritico(dados: any) {
  const prompt = `
Você é um assistente financeiro. Avalie os dados abaixo e diga se há algo que exija um alerta real. Retorne apenas JSON.

${JSON.stringify(dados)}

Formato:
{
  "alerta": true,
  "mensagem": "descrição objetiva"
}
`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Você é um analista financeiro crítico e objetivo.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.4
  })

  const response = completion.choices[0].message.content

  try {
    return JSON.parse(response || '{}')
  } catch (e) {
    return {
      alerta: false,
      mensagem: 'Erro ao interpretar resposta da IA.'
    }
  }
}

