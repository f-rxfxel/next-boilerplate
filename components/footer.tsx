'use client'
import React from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  FacebookIcon,
  FrameIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react'
import { ModeToggle } from './theme-switcher'
import { GlassContainer } from './glass-card'
import { LoginModal } from './ui/login-modal'
import Link from 'next/link'
import { Button } from './ui/button'

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface Footer {
  label: string
  links: FooterLink[]
}

const footerLinks: Footer[] = [
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Brand', href: '/brand' },
      { title: 'Help', href: '/help' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
]

export function Footer() {
  return (
    <GlassContainer className='rounded-3xl m-2'>
      <footer className=' flex flex-col items-center justify-center p-6'>
        <div className='grid w-full gap-8 xl:grid-cols-3 xl:gap-8'>
          <AnimatedContainer className='space-y-4'>
            <FrameIcon className='size-8' />
            <p className='text-muted-foreground mt-8 text-sm md:mt-0'>
              © {new Date().getFullYear()} MAGNA. Todos os direitos reservados.
            </p>
            <div className='flex gap-2 items-center'>
              <ModeToggle />
              <LoginModal />
              <Button variant='outline' asChild>
                <Link href='/painel'>Painel</Link>
              </Button>
            </div>
          </AnimatedContainer>

          <div className='mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:col-span-2 xl:mt-0'>
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className='mb-10 md:mb-0'>
                  <h3 className='text-xs'>{section.label}</h3>
                  <ul className='text-muted-foreground mt-4 space-y-2 text-sm'>
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className='hover:text-foreground inline-flex items-center transition-all duration-300'
                        >
                          {link.icon && <link.icon className='me-1 size-4' />}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </footer>
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
