import '../styles/globals.css'
import AutoAnalyzer from '@/components/AutoAnalyzer'

export const metadata = {
  title: 'ContabilizIA',
  description: 'Conecte sua conta bancária com segurança via Pluggy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AutoAnalyzer />
        {children}
      </body>
    </html>
  )
}

