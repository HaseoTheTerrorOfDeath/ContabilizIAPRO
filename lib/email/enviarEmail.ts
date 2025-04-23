export async function enviarEmail(destinatario: string, mensagem: string) {
  console.log('\n📧 --- E-MAIL ENVIADO --- 📧')
  console.log(`Para: ${destinatario}`)
  console.log(`Mensagem:\n${mensagem}`)
  console.log('-----------------------------\n')
}

