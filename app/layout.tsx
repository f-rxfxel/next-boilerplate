import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Beams } from '@/components/beams'

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
    <html lang='pt-br'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Beams>{children}</Beams>
        </ThemeProvider>
      </body>
    </html>
  )
}
