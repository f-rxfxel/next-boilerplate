import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MAGNA • Erro 404',
  description: 'Onde o mercado imobiliário encontra sofisticação',
}

export default function NotFound() {
  return (
    <div className='flex items-center flex-col justify-center h-screen'>
      <div className='flex items-center gap-4'>
        <h1 className='text-2xl font-medium tracking-tight italic'>404</h1>

        <div className='h-12 w-px bg-white/30' />

        <p>Esta página não existe</p>
      </div>
    </div>
  )
}
