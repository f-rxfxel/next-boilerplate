import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealEstate Pro - Agent Dashboard',
  description: 'Professional real estate management platform for agents',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <main className='flex-1 overflow-auto'>{children}</main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  )
}
