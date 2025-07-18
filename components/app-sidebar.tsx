'use client'
import { Building2, Home, Users, BarChart3, Settings } from 'lucide-react'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { motion } from 'framer-motion'
import { Tenor_Sans } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './theme-switcher'

const tenor = Tenor_Sans({ subsets: ['latin'], weight: '400' })

const navigation = [
  {
    title: 'Painel',
    url: '/painel',
    icon: Home,
  },
  {
    title: 'Propriedades',
    url: '/properties',
    icon: Building2,
  },
  {
    title: 'Leads',
    url: '/leads',
    icon: Users,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: BarChart3,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar>
      <SidebarHeader className='border-b border-sidebar-border'>
        <div className='flex items-center justify-center px-2 py-2'>
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Link
              className={`${tenor.className} text-lg text-center tracking-[15px] `}
              href='/'
            >
              MAGNA
            </Link>
          </motion.div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={
                          isActive
                            ? 'bg-primary/10 text-primary transition-colors duration-150' // destaque com transição
                            : 'hover:bg-muted/50 transition-colors duration-150'
                        }
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='border-t border-sidebar-border'>
        <SidebarMenu>
          <SidebarMenuItem>
            <ModeToggle />

            <SidebarMenuButton asChild>
              <Link
                href='/settings'
                className={
                  pathname === '/settings'
                    ? 'bg-primary/10 text-primary font-semibold transition-colors duration-150'
                    : 'hover:bg-muted/50 transition-colors duration-150'
                }
              >
                <Settings />
                <span>Configurações</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
