'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  FileText,
  BarChart,
  Users,
  Briefcase,
  ClipboardList,
  ShieldCheck,
  Bot,
  ChevronDown,
  ChevronRight,
  Menu,
} from 'lucide-react'
import clsx from 'clsx'

const menuItems = [
  {
    title: 'Contabilidade Geral',
    icon: FileText,
    items: [
      { label: 'Movimentações', href: '/contabilidade/movimentacoes' },
      { label: 'Balanço Patrimonial', href: '/contabilidade/balanco' },
      { label: 'Demonstrações', href: '/contabilidade/demonstracoes' },
    ],
  },
  {
    title: 'Fiscal & Tributário',
    icon: BarChart,
    items: [
      { label: 'Apuração Fiscal', href: '/fiscal/apuracao' },
      { label: 'Resumo Tributário', href: '/fiscal/regime' },
      { label: 'Guias e Vencimentos', href: '/fiscal/guias' },
    ],
  },
  {
    title: 'Departamento Pessoal',
    icon: Users,
    items: [{ label: 'Folha de Pagamento', href: '/pessoal/folha' }],
  },
  {
    title: 'Abertura & Encerramento',
    icon: Briefcase,
    items: [{ label: 'Gestão de Empresas', href: '/empresa/gestao' }],
  },
  {
    title: 'Consultoria',
    icon: ClipboardList,
    items: [{ label: 'Financeira', href: '/consultoria/financeira' }],
  },
  {
    title: 'Compliance',
    icon: ShieldCheck,
    items: [{ label: 'Fiscal & Certidões', href: '/compliance/regularizacoes' }],
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleGroup = (title: string) => {
    setOpenGroup((prev) => (prev === title ? null : title))
  }

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <aside
      className={clsx(
        'h-screen text-white flex flex-col justify-between border-r border-neutral-800 transition-all duration-300',
        'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div>
        {/* Botão colapsável com título em gradiente */}
        <div className="flex items-center p-4 space-x-2">
          <button
            onClick={toggleSidebar}
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          {!isCollapsed && (
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              ContabilizIA
            </span>
          )}
        </div>

        {/* Menu principal */}
        <nav className="space-y-4 px-2">
          {menuItems.map((group) => {
            const Icon = group.icon

            return (
              <div key={group.title}>
                <button
                  onClick={() => toggleGroup(group.title)}
                  className={clsx(
                    'w-full transition-all text-left font-semibold uppercase text-sm hover:text-yellow-300',
                    isCollapsed
                      ? 'flex justify-center py-3 text-yellow-400'
                      : 'flex items-center justify-between'
                  )}
                >
                  <span className={clsx('flex items-center', isCollapsed && 'justify-center')}>
                    <Icon className="w-4 h-4 text-yellow-400" />
                    {!isCollapsed && (
                      <span className="ml-2 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                        {group.title}
                      </span>
                    )}
                  </span>
                  {!isCollapsed &&
                    (openGroup === group.title ? (
                      <ChevronDown className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-yellow-400" />
                    ))}
                </button>

                {openGroup === group.title && !isCollapsed && (
                  <ul className="mt-2 pl-6 space-y-1 text-sm">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(
                            'block py-1 px-2 rounded hover:bg-yellow-500 hover:text-black transition',
                            pathname === item.href && 'bg-yellow-400 text-black font-semibold'
                          )}
                        >
                          <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </div>

      {/* Rodapé com Assistente IA — gradiente no fundo */}
      <div className="mt-6 pt-6 border-t border-neutral-800 px-2 pb-4">
        <Link
          href="/assistente"
          className={clsx(
            'flex items-center text-black font-bold py-2 px-4 rounded hover:opacity-90 transition w-full',
            'bg-gradient-to-r from-amber-400 to-yellow-500',
            isCollapsed ? 'justify-center p-2' : 'justify-center'
          )}
        >
          <Bot className="w-4 h-4" />
          {!isCollapsed && <span className="ml-2">Assistente IA</span>}
        </Link>
        {!isCollapsed && (
          <p className="text-xs text-gray-500 mt-4 text-center">© 2025 ContabilizIA</p>
        )}
      </div>
    </aside>
  )
}

