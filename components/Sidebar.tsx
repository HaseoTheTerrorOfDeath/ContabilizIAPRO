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
    items: [
      { label: 'Folha de Pagamento', href: '/pessoal/folha' },
      { label: 'Funcionários', href: '/pessoal/funcionarios' },
      { label: 'Contracheques', href: '/pessoal/contracheques' },
      { label: 'Férias', href: '/pessoal/ferias' },
      { label: '13º Salário', href: '/pessoal/decimo-terceiro' },
      { label: 'Encargos', href: '/pessoal/encargos' },
    ],
  },
  {
    title: 'Abertura & Encerramento',
    icon: Briefcase,
    items: [
      { label: 'Gestão de Empresas', href: '/empresa/gestao' },
      { label: 'Abertura de Empresa', href: '/empresa/abertura' },
      { label: 'Encerramento de Empresa', href: '/empresa/encerramento' },
    ],
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
        'h-screen text-white flex flex-col justify-between border-r border-zinc-800 transition-all duration-300',
        'bg-gradient-to-br from-black via-zinc-900 to-black',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* TOPO */}
      <div className="h-12 flex items-center px-4">
        <button
          onClick={toggleSidebar}
          className="text-yellow-400 hover:text-yellow-300 transition flex-shrink-0"
          title={isCollapsed ? 'Abrir menu' : 'Fechar menu'}
        >
          <Menu className="w-5 h-5" />
        </button>

        {!isCollapsed && (
          <span className="ml-3 text-base font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent leading-none">
            ContabilizIA
          </span>
        )}
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto space-y-2 px-2">
        {menuItems.map((group) => {
          const Icon = group.icon
          const isOpen = openGroup === group.title

          return (
            <div key={group.title}>
              <button
                onClick={() => toggleGroup(group.title)}
                className={clsx(
                  'w-full flex items-center px-3 py-2 rounded-md font-medium text-sm transition-all group',
                  'hover:bg-zinc-800 hover:border hover:border-yellow-400',
                  isCollapsed ? 'justify-center' : 'justify-between'
                )}
                title={isCollapsed ? group.title : undefined}
              >
                <div className={clsx('flex items-center gap-2', isCollapsed && 'justify-center')}>
                  <Icon className="w-5 h-5 text-yellow-400" />
                  {!isCollapsed && (
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition">
                      {group.title}
                    </span>
                  )}
                </div>
                {!isCollapsed &&
                  (isOpen ? (
                    <ChevronDown className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                  ))}
              </button>

              {!isCollapsed && isOpen && (
                <ul className="mt-1 pl-6 space-y-1 text-sm">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(
                            'block px-3 py-1 rounded transition-all font-medium',
                            isActive
                              ? 'border border-yellow-400 bg-yellow-500/20 text-yellow-300'
                              : 'hover:bg-zinc-800 hover:border hover:border-yellow-400'
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>

      {/* RODAPÉ */}
      <div className="mt-6 pt-4 border-t border-zinc-800 px-2 pb-4">
        <Link
          href="/assistente"
          title="Assistente IA"
          className={clsx(
            'flex items-center text-black font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out w-full',
            'bg-gradient-to-r from-amber-400 to-yellow-500 hover:opacity-90 hover:scale-105',
            isCollapsed ? 'justify-center p-2' : 'justify-center'
          )}
        >
          <Bot className="w-4 h-4" />
          {!isCollapsed && <span className="ml-2">Assistente IA</span>}
        </Link>
        {!isCollapsed && (
          <p className="text-xs text-zinc-500 mt-4 text-center">© 2025 ContabilizIA</p>
        )}
      </div>
    </aside>
  )
}

