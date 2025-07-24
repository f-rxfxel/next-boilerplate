import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'MAGNA',
  description: 'Onde o mercado imobiliário encontra sofisticação',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
