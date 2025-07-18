import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Building2,
  Eye,
  MessageSquare,
  DollarSign,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'

const recentProperties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: '$450,000',
    status: 'available',
    visits: 24,
    messages: 3,
  },
  {
    id: 2,
    title: 'Family House with Garden',
    price: '$680,000',
    status: 'pending',
    visits: 18,
    messages: 7,
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    price: '$1,200,000',
    status: 'available',
    visits: 45,
    messages: 12,
  },
]

const recentLeads = [
  {
    name: 'Sarah Johnson',
    contact: 'sarah@email.com',
    property: 'Modern Downtown Apartment',
    status: 'hot',
  },
  {
    name: 'Mike Chen',
    contact: 'mike.chen@email.com',
    property: 'Family House with Garden',
    status: 'warm',
  },
  {
    name: 'Emma Davis',
    contact: 'emma.davis@email.com',
    property: 'Luxury Penthouse',
    status: 'cold',
  },
]

export default function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex items-center gap-2 px-6 py-4 border-b'>
        <SidebarTrigger />
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </header>

      <div className='flex-1 p-6 space-y-6'>
        {/* Stats Cards */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='gap-0'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Properties
              </CardTitle>
              <Building2 className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
              <div className='text-2xl font-bold'>24</div>
              <p className='text-xs text-muted-foreground'>
                <span className='text-green-600'>+2</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className='gap-0'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Visits
              </CardTitle>
              <Eye className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
              <div className='text-2xl font-bold'>1,247</div>
              <p className='text-xs text-muted-foreground'>
                <span className='text-green-600'>+15%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className='gap-0'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Messages</CardTitle>
              <MessageSquare className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
              <div className='text-2xl font-bold'>89</div>
              <p className='text-xs text-muted-foreground'>
                <span className='text-green-600'>+7</span> new today
              </p>
            </CardContent>
          </Card>

          <Card className='gap-0'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Revenue</CardTitle>
              <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
              <div className='text-2xl font-bold'>$45,231</div>
              <p className='text-xs text-muted-foreground'>
                <span className='text-green-600'>+20.1%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {/* Recent Properties */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle>Recent Properties</CardTitle>
              <Button variant='outline' size='sm' asChild>
                <Link href='/properties'>
                  View All
                  <ArrowUpRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className='space-y-4'>
              {recentProperties.map((property) => (
                <div
                  key={property.id}
                  className='flex items-center justify-between p-3 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer'
                >
                  <div className='space-y-1'>
                    <p className='font-medium'>{property.title}</p>
                    <p className='text-sm text-muted-foreground'>
                      {property.price}
                    </p>
                    <Badge
                      variant={
                        property.status === 'available'
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {property.status}
                    </Badge>
                  </div>
                  <div className='text-right space-y-1'>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <Eye className='h-3 w-3' />
                      {property.visits}
                    </div>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                      <MessageSquare className='h-3 w-3' />
                      {property.messages}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Leads */}
          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <CardTitle>Recent Leads</CardTitle>
              <Button variant='outline' size='sm' asChild>
                <Link href='/leads'>
                  View All
                  <ArrowUpRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className='space-y-4'>
              {recentLeads.map((lead, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer'
                >
                  <div className='space-y-1'>
                    <p className='font-medium'>{lead.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {lead.contact}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {lead.property}
                    </p>
                  </div>
                  <Badge
                    variant={
                      lead.status === 'hot'
                        ? 'destructive'
                        : lead.status === 'warm'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {lead.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
