'use client'

import { usePathname } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import AutoAnalyzer from './AutoAnalyzer'

export default function ClientWrapper() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0e0e0e',
            color: '#facc15',
            border: '1px solid #facc15',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
          },
          success: { icon: '✅' },
          error: { icon: '🚨' },
        }}
      />
      {!isHome && <AutoAnalyzer />}
    </>
  )
}

