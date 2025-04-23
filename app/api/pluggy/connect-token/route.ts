import { NextResponse } from 'next/server'

export async function POST() {
  const clientId = process.env.PLUGGY_CLIENT_ID?.toString()
  const clientSecret = process.env.PLUGGY_CLIENT_SECRET?.toString()

  console.log('🔐 PLUGGY_CLIENT_ID:', clientId)
  console.log('🔐 PLUGGY_CLIENT_SECRET:', clientSecret)

  if (!clientId || !clientSecret) {
    console.error('❌ Variáveis de ambiente ausentes')
    return NextResponse.json(
      { error: 'Pluggy client ID/secret não configurados' },
      { status: 500 }
    )
  }

  try {
    // ✅ Etapa 1: Obter API Key com nomes de campos corretos
    const authRes = await fetch('https://api.pluggy.ai/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
      }),
    })

    const authData = await authRes.json()

    if (!authRes.ok || !authData.apiKey) {
      console.error('❌ Erro ao obter API Key:', authData)
      return NextResponse.json({ error: 'Erro ao obter API Key' }, { status: 500 })
    }

    const apiKey = authData.apiKey
    console.log('✅ API Key obtida com sucesso.')

    // ✅ Etapa 2: Gerar o connect token
    const tokenRes = await fetch('https://api.pluggy.ai/connect_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({}),
    })

    const tokenData = await tokenRes.json()

    if (!tokenRes.ok || !tokenData.connectToken) {
      console.error('❌ Erro ao obter Connect Token:', tokenData)
      return NextResponse.json({ error: 'Erro ao obter Connect Token' }, { status: 500 })
    }

    console.log('✅ Connect Token gerado com sucesso.')
    return NextResponse.json({ connectToken: tokenData.connectToken })
  } catch (error) {
    console.error('❌ Erro interno ao gerar token:', error)
    return NextResponse.json({ error: 'Erro interno ao gerar token' }, { status: 500 })
  }
}

