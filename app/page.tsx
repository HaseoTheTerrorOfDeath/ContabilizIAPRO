'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import {
  FileText,
  PieChart,
  Wallet,
  MessageSquare,
  Calculator,
} from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col">
      {/* Top bar */}
      <div className="w-full flex items-center gap-2 p-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-md border-b border-zinc-800">
        <Calculator className="w-8 h-8 text-yellow-400" />
        <h1 className="text-2xl font-bold text-white">ContabilizIA</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Contabilidade Inteligente de Alto Nível
          </h2>
          <p className="text-lg text-zinc-400 mt-4">
            Gerencie seu negócio com precisão, segurança e sofisticação.
          </p>
        </div>

        {/* Features + Login */}
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl justify-center items-start">
          {/* Feature Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-yellow-400 hover:shadow-yellow-500/50 transition" />}
              title="Declaração de Imposto"
              description="Automatize sua declaração com inteligência fiscal"
            />
            <FeatureCard
              icon={<PieChart className="h-10 w-10 text-yellow-400 hover:shadow-yellow-500/50 transition" />}
              title="Dashboard Financeiro"
              description="Visualize lucros, despesas e projeções"
            />
            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-yellow-400 hover:shadow-yellow-500/50 transition" />}
              title="Upload de Documentos"
              description="Armazene recibos e extratos com segurança"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-yellow-400 hover:shadow-yellow-500/50 transition" />}
              title="Assistente IA"
              description="Receba sugestões contábeis em tempo real"
            />
          </div>

          {/* Login Card */}
          <div className="flex justify-center items-start flex-1">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center max-w-md w-full border border-zinc-800">
              {/* Top gold part */}
              <div className="w-full bg-gradient-to-r from-amber-400 to-yellow-600 p-6 text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
                  Acesse sua conta
                </h3>
                <p className="text-black text-sm mt-1">Conecte-se com segurança</p>
              </div>

              {/* Content */}
              <div className="p-6 w-full flex flex-col items-center">
                <p className="text-zinc-400 text-center text-sm mb-6">
                  Faça login para acessar todos os recursos premium do ContabilizIA.
                </p>

                {/* Botões de login */}
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <LoginButton icon="/icons/apple.svg" text="Entrar com Apple" disabled />
                  <LoginButton icon="/icons/google.svg" text="Entrar com Google" onClick={() => signIn('google')} />
                  <LoginButton icon="/icons/microsoft.svg" text="Entrar com Microsoft" disabled />
                </div>

                <p className="text-xs text-zinc-500 text-center mt-4">
                  Ao fazer login, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm bg-zinc-900 p-4 rounded-lg shadow-md max-w-3xl border border-zinc-800">
          <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
            Segurança de padrão bancário:
          </span>{' '}
          Seus dados são criptografados com tecnologia de ponta.
        </div>
      </div>
    </main>
  )
}

// FeatureCard component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl border border-zinc-800 hover:border-yellow-400 shadow-lg hover:shadow-yellow-500/20 transition duration-300 p-6 flex flex-col items-center cursor-pointer hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 text-center">{description}</p>
    </div>
  )
}

// LoginButton component
function LoginButton({
  icon,
  text,
  disabled = false,
  onClick,
}: {
  icon: string
  text: string
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-3 w-full ${
        disabled
          ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 cursor-not-allowed border border-zinc-700'
          : 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:shadow-yellow-500/30'
      } text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105`}
    >
      <span className="w-5 h-5 flex items-center justify-center">
        <img src={icon} alt={text} className="w-full h-full" />
      </span>
      <span className="flex-1 text-center">{text}</span>
    </button>
  )
}

