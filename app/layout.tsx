import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import Header from '@/components/header'
import { SunBeams } from '@/components/sun-beams'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SunBeams>{children}</SunBeams>
        </ThemeProvider>
      </body>
    </html>
  )
}
