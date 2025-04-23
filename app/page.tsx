"use client";

import { useRouter } from "next/navigation";
import {
  FileText,
  PieChart,
  Wallet,
  MessageSquare,
  Calculator,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col text-white">
      {/* Top bar */}
      <div className="w-full flex items-center gap-2 p-4 bg-zinc-900 shadow-md border-b border-zinc-800">
        <Calculator className="text-yellow-400 w-8 h-8" />
        <h1 className="text-2xl font-bold text-white">ContabilizIA</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-yellow-500">
            Contabilidade Inteligente de Alto Nível
          </h2>
          <p className="text-lg text-zinc-400 mt-4">
            Gerencie seu negócio com precisão, segurança e sofisticação.
          </p>
        </div>

        {/* Features + Login */}
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl justify-center items-start">
          {/* Features */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-yellow-400" />}
              title="Declaração de Imposto"
              description="Automatize sua declaração com inteligência fiscal"
              onClick={() => router.push("/dashboard")}
            />
            <FeatureCard
              icon={<PieChart className="h-10 w-10 text-yellow-400" />}
              title="Dashboard Financeiro"
              description="Visualize lucros, despesas e projeções"
              onClick={() => router.push("/dashboard")}
            />
            <FeatureCard
              icon={<Wallet className="h-10 w-10 text-yellow-400" />}
              title="Upload de Documentos"
              description="Armazene recibos e extratos com segurança"
              onClick={() => router.push("/dashboard")}
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-yellow-400" />}
              title="Assistente IA"
              description="Receba sugestões contábeis em tempo real"
              onClick={() => router.push("/dashboard")}
            />
          </div>

          {/* Login Card */}
          <div className="flex justify-center items-start flex-1">
            <div className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center max-w-md w-full border border-zinc-800">
              {/* Top gold part */}
              <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-black">Acesse sua conta</h3>
                <p className="text-black text-sm mt-1">Conecte-se com segurança</p>
              </div>

              {/* Content */}
              <div className="p-6 w-full flex flex-col items-center">
                <p className="text-zinc-400 text-center text-sm mb-6">
                  Faça login para acessar todos os recursos premium do ContabilizIA.
                </p>

                {/* Botões de login com animação e alinhamento */}
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  {/* Apple */}
                  <LoginButton icon="/icons/apple.svg" text="Entrar com Apple" />
                  {/* Google */}
                  <LoginButton icon="/icons/google.svg" text="Entrar com Google" />
                  {/* Microsoft */}
                  <LoginButton icon="/icons/microsoft.svg" text="Entrar com Microsoft" />
                </div>

                <p className="text-xs text-zinc-500 text-center mt-4">
                  Ao fazer login, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Security */}
        <div className="mt-12 text-center text-sm bg-zinc-900 p-4 rounded-lg shadow-md max-w-3xl border border-zinc-800">
          <span className="text-yellow-400 font-semibold">Segurança de padrão bancário: </span>
          Seus dados são criptografados com tecnologia de ponta.
        </div>
      </div>
    </main>
  );
}

// FeatureCard component
function FeatureCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-yellow-400 shadow-lg hover:shadow-yellow-500/20 transition duration-300 p-6 flex flex-col items-center cursor-pointer hover:scale-105"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-zinc-400 text-center">{description}</p>
    </div>
  );
}

// LoginButton component
function LoginButton({ icon, text }: { icon: string; text: string }) {
  return (
    <button
      disabled
      className="flex items-center gap-3 bg-zinc-800 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-not-allowed"
    >
      <span className="w-5 h-5 flex items-center justify-center">
        <img src={icon} alt={text} className="w-full h-full" />
      </span>
      <span className="flex-1 text-center">{text}</span>
    </button>
  );
}

