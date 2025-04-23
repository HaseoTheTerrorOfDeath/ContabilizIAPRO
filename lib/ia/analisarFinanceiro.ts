export type FinanceData = {
  endividamentoAnterior: number
  endividamentoAtual: number
  eventos: { tipo: string; valor: number; data: string }[]
  balanco: {
    ativos: number
    passivos: number
  }
}

export async function analisarFinanceiro(data: FinanceData): Promise<string> {
  const prompt = `
Você é um contador especialista. Analise os dados financeiros abaixo e diga se há algum risco ou alerta. Caso haja, escreva a mensagem como se estivesse falando diretamente com o empresário:

- Endividamento anterior: ${data.endividamentoAnterior}%
- Endividamento atual: ${data.endividamentoAtual}%
- Evento recente: ${data.eventos[0].tipo} de R$${data.eventos[0].valor}
- Ativos: R$${data.balanco.ativos}
- Passivos: R$${data.balanco.passivos}
`

  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'Você é um contador especialista em finanças empresariais brasileiras. Seja objetivo, profissional e estratégico.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
    }),
  })

  const json = await openaiRes.json()
  return json.choices?.[0]?.message?.content || 'Não foi possível obter uma resposta da IA.'
}

