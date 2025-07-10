'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './theme-switcher'

export default function Header() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ]
  return (
    <header>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-indigo-600 font-bold underline underline-offset-4'
                    : 'text-gray-700 hover:text-indigo-500'
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
