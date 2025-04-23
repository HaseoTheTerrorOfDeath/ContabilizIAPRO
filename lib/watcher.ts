import fs from 'fs'
import path from 'path'
import { analisarConteudoCritico } from './ia/openai-analisador.ts'

const pastaMonitorada = path.join(process.cwd(), 'public/data/monitorados')

export function iniciarWatcher() {
  fs.watch(pastaMonitorada, async (eventType, filename) => {
    if (eventType === 'change' || eventType === 'rename') {
      const caminhoCompleto = path.join(pastaMonitorada, filename)

      try {
        const conteudo = fs.readFileSync(caminhoCompleto, 'utf-8')
        const json = JSON.parse(conteudo)

        console.log(`🔍 Arquivo modificado: ${filename}. Enviando para análise.`)

        const resultado = await analisarConteudoCritico(json)

        if (resultado.alerta) {
          // Aqui você pode acionar uma função global, um WebSocket, ou persistir o alerta
          console.log(`🚨 ALERTA: ${resultado.mensagem}`)
        } else {
          console.log(`✅ Nenhum problema detectado: ${resultado.mensagem}`)
        }

      } catch (err) {
        console.error(`❌ Erro ao processar ${filename}:`, err)
      }
    }
  })
}

