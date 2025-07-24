import type React from 'react'
import type { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'MAGNA • Painel',
  description:
    'Plataforma imobiliária completa para listar, buscar e gerenciar imóveis — ideal para corretores e compradores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className='flex-1 overflow-auto'>{children}</main>
      <Toaster />
    </SidebarProvider>
  )
}
