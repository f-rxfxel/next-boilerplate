'use client'

import { useState, useMemo, useEffect } from 'react'
import Lenis from 'lenis'
import { SunBeams } from '@/components/sun-beams'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Libre_Caslon_Text } from 'next/font/google'
import { motion } from 'motion/react'
import { GlassContainer } from '@/components/glass-card'
import Image from 'next/image'

const libreCaslonText = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function Component() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <ViewTransition>
      <main className='min-h-screen flex flex-col'>
        <section className='mx-6 mt-24 md:mx-32 md:mt-32 lg:mx-44 lg:mt-64 flex flex-col gap-4'>
          <HeroTitle />
          <div className='flex flex-col gap-6 mt-12 md:mt-16 lg:mt-24'>
            <img
              src='https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Imóvel'
              className='w-full h-64 object-cover rounded-3xl shadow-lg'
            />
            <img
              src='https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Imóvel'
              className='w-full h-64 object-cover rounded-3xl shadow-lg'
            />
            <img
              src='https://images.unsplash.com/photo-1612801356940-8fdcde8aef61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Imóvel'
              className='w-full h-64 object-cover rounded-3xl shadow-lg'
            />
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
