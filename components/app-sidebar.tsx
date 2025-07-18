import { Building2, Home, Plus, Users, BarChart3, Settings } from 'lucide-react'
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
    title: 'Adicionar Propriedade',
    url: '/properties/new',
    icon: Plus,
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
  return (
    <Sidebar>
      <SidebarHeader className='border-b border-sidebar-border'>
        <div className='flex items-center justify-center px-2 py-2'>
          {/* <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Link
              className={`${tenor.className} text-lg text-center tracking-[15px] bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent transition-all duration-300 hover:from-pink-500 hover:to-yellow-400 hover:via-orange-400`}
              href='/'
            >
              MAGNA
            </Link>
          </motion.div> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='border-t border-sidebar-border'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='/settings'>
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
