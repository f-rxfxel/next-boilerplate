'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SearchModal from './ui/search-modal'
import { GlassContainer } from './glass-card'

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Imóveis', path: '/imoveis' },
  { name: 'Agentes', path: '/about' },
]

const Header = () => {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 120) {
        setShow(true)
      } else if (window.scrollY === 0) {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <header
      className={`flex justify-center gap-2 z-50 transition-all duration-300 fixed top-2 left-0 w-full ${
        show
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <GlassContainer className='flex gap-2 rounded-full'>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.path ||
            (pathname.startsWith(link.path) && link.path !== '/')
          return (
            <Link
              className={`$${
                isActive ? 'font-bold' : ''
              } px-3 cursor-pointer hover:bg-white/30 rounded-full transition-colors duration-300 text-sm flex items-center`}
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          )
        })}
      </GlassContainer>
      <GlassContainer className='rounded-full'>
        <SearchModal />
      </GlassContainer>
    </header>
  )
}

export default Header
