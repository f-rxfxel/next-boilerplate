'use client'

import { unstable_ViewTransition as ViewTransition } from 'react'
import { motion } from 'motion/react'
import { Tenor_Sans } from 'next/font/google'
import Linguica from '@/components/linguica'

const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <ViewTransition>
      <main className='h-screen flex flex-col items-center justify-center'>
        <motion.h2
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${tenor.className} text-5xl text-center tracking-[15px]`}
        >
          MAGNA
        </motion.h2>
        <motion.p
          className='text-xl tracking-wide text-center font-light text-muted-foreground'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Seu acesso exclusivo ao extraordinário.
        </motion.p>
      </main>
      <Linguica /> {/* TODO REMOVER ISSO */}
    </ViewTransition>
  )
}
