'use client'
// TODO botar um title, mas é client ent n sei

import Lenis from 'lenis'
import { useEffect } from 'react'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Libre_Caslon_Text } from 'next/font/google'
import { motion } from 'motion/react'
import Link from 'next/link'

const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function Properties() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  // TODO se der error, chamar 'throw new Error("Erro ao carregar os imóveis")'
  // TODO ajustar o roteamento para o id do imóvel correto
  const imovelId = 1

  return (
    <ViewTransition>
      <main className='min-h-screen flex flex-col'>
        <section className='mx-6 mt-24 md:mx-32 md:mt-32 lg:mx-44 lg:mt-64 flex flex-col gap-4'>
          <HeroTitle />
          <div className='flex flex-col gap-6 mt-12 md:mt-16 lg:mt-24'>
            <ul>
              <li>
                <Link href={`/imoveis/${imovelId}`}>Imóvel 1</Link>
              </li>
              <li>
                <Link href={`/imoveis/${imovelId}`}>Imóvel 2</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </ViewTransition>
  )
}

function HeroTitle() {
  return (
    <section
      className={`${libreCaslonText.className} text-4xl md:text-5xl lg:text-6xl`}
    >
      <motion.h2
        initial={{ filter: 'blur(20px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className=''>seu </span>
        <span className='italic'>lugar,</span>
      </motion.h2>
      <motion.h2
        initial={{ filter: 'blur(20px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <span className=''>sua </span>
        <span className='italic'>essência.</span>
      </motion.h2>
    </section>
  )
}
