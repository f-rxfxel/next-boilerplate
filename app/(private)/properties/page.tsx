import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Eye,
  MessageSquare,
  Edit,
  Archive,
  Trash2,
  Plus,
  Search,
  Filter,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    description:
      'Beautiful 2-bedroom apartment in the heart of downtown with stunning city views.',
    address: '123 Main St, Downtown',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: 'apartment',
    status: 'available',
    visits: 24,
    messages: 3,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'Family House with Garden',
    description:
      'Spacious family home with large garden, perfect for children.',
    address: '456 Oak Ave, Suburbs',
    price: 680000,
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    type: 'house',
    status: 'pending',
    visits: 18,
    messages: 7,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    description:
      'Exclusive penthouse with panoramic views and premium finishes.',
    address: '789 High St, Uptown',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    type: 'apartment',
    status: 'available',
    visits: 45,
    messages: 12,
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 4,
    title: 'Cozy Studio Apartment',
    description: 'Perfect starter home in a quiet neighborhood.',
    address: '321 Pine St, Midtown',
    price: 280000,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: 'apartment',
    status: 'sold',
    visits: 12,
    messages: 2,
    image: '/placeholder.svg?height=200&width=300',
  },
]

export default function PropertiesPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex items-center justify-between px-6 py-4 border-b'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger />
          <h1 className='text-2xl font-bold'>Properties</h1>
        </div>
        <Button asChild>
          <Link href='/properties/new'>
            <Plus className='mr-2 h-4 w-4' />
            Add Property
          </Link>
        </Button>
      </header>

      <div className='flex-1 p-6 space-y-6'>
        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Filter className='h-5 w-5' />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div className='space-y-2'>
                <label htmlFor='search' className='text-sm font-medium'>
                  Search
                </label>
                <div className='relative'>
                  <Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='search'
                    placeholder='Search properties...'
                    className='pl-10'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='All statuses' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>All statuses</SelectItem>
                    <SelectItem value='available'>Available</SelectItem>
                    <SelectItem value='pending'>Pending</SelectItem>
                    <SelectItem value='sold'>Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='All types' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>All types</SelectItem>
                    <SelectItem value='house'>House</SelectItem>
                    <SelectItem value='apartment'>Apartment</SelectItem>
                    <SelectItem value='condo'>Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Price Range</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='All prices' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>All prices</SelectItem>
                    <SelectItem value='0-300000'>$0 - $300,000</SelectItem>
                    <SelectItem value='300000-600000'>
                      $300,000 - $600,000
                    </SelectItem>
                    <SelectItem value='600000-1000000'>
                      $600,000 - $1,000,000
                    </SelectItem>
                    <SelectItem value='1000000+'>$1,000,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {properties.map((property) => (
            <Card key={property.id} className='overflow-hidden'>
              <div className='relative'>
                <Image
                  src={property.image || '/placeholder.svg'}
                  alt={property.title}
                  width={300}
                  height={200}
                  className='w-full h-48 object-cover'
                />
                <Badge
                  className='absolute top-2 right-2'
                  variant={
                    property.status === 'available'
                      ? 'default'
                      : property.status === 'pending'
                      ? 'secondary'
                      : 'destructive'
                  }
                >
                  {property.status}
                </Badge>
              </div>
              <CardContent className='p-4 space-y-3'>
                <div>
                  <h3 className='font-semibold text-lg'>{property.title}</h3>
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {property.description}
                  </p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {property.address}
                  </p>
                </div>

                <div className='flex justify-between items-center'>
                  <span className='text-2xl font-bold text-primary'>
                    ${property.price.toLocaleString()}
                  </span>
                  <div className='text-sm text-muted-foreground'>
                    {property.bedrooms}bd • {property.bathrooms}ba •{' '}
                    {property.area}m²
                  </div>
                </div>

                <div className='flex items-center justify-between text-sm text-muted-foreground'>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                      <Eye className='h-4 w-4' />
                      {property.visits}
                    </div>
                    <div className='flex items-center gap-1'>
                      <MessageSquare className='h-4 w-4' />
                      {property.messages}
                    </div>
                  </div>
                  <Badge variant='outline' className='capitalize'>
                    {property.type}
                  </Badge>
                </div>

                <div className='flex gap-2 pt-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1 bg-transparent'
                    asChild
                  >
                    <Link href={`/properties/${property.id}`}>
                      <Eye className='mr-2 h-4 w-4' />
                      View
                    </Link>
                  </Button>
                  <Button
                    className='cursor-pointer'
                    variant='outline'
                    size='sm'
                    asChild
                  >
                    <Link href={`/properties/${property.id}/edit`}>
                      <Edit className='h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    className='cursor-pointer'
                    variant='outline'
                    size='sm'
                  >
                    <Archive className='h-4 w-4' />
                  </Button>
                  <Button
                    className='cursor-pointer'
                    variant='outline'
                    size='sm'
                  >
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
