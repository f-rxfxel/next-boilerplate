'use client'
import React from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ChevronUp,
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react'
import { ModeToggle } from './theme-switcher'
import { GlassContainer } from './glass-card'
import Link from 'next/link'
import { Button } from './ui/button'

export function Footer() {
  return (
    <GlassContainer className='rounded-3xl m-2'>
      <AnimatedContainer className=''>
        <footer className='py-12 px-4 text-center text-sm'>
          <div className='flex flex-col items-center gap-8'>
            <div>
              <h2 className=' text-sm tracking-widest mb-4'>Pra onde?</h2>
              <div className='flex flex-wrap justify-center gap-6 text-base font-light'>
                <a href='#outside' className=''>
                  Outside
                </a>
                <a href='#interior' className=''>
                  Interior
                </a>
                <a href='#location' className=''>
                  Location
                </a>
                <a href='#video' className=''>
                  Video
                </a>
                <a href='#team' className=''>
                  Team
                </a>
                <a href='#enquire' className=''>
                  Enquire
                </a>
              </div>
              <div className='flex gap-2 items-center'>
                <ModeToggle />
                <Button variant='outline' asChild>
                  <Link href='/painel'>Painel</Link>
                </Button>
              </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-5xl text-xs gap-4'>
              <div className='text-left'>
                <p className='text-muted-foreground'>
                  Designed and Developed by
                </p>
                <p className='font-semibold tracking-widest '>
                  FRANCISCO PORFIRIO
                </p>
              </div>

              <p className='text-center'>
                <ChevronUp />
              </p>

              <div className='text-right'>
                <p className='text-muted-foreground'>
                  Copyright © {new Date().getFullYear()} MAGNA
                </p>
                <p className=''>Todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </footer>
      </AnimatedContainer>
    </GlassContainer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: ReactNode
}

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
