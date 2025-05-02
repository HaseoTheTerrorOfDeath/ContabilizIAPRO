import '../styles/globals.css'
import { Providers } from '@/components/Providers'

export const metadata = {
  title: 'ContabilizIA',
  description: 'Conecte sua conta bancária com segurança via Pluggy',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

