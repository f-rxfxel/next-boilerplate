/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z3QBPGzZ2Xp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'

import { useState, useMemo } from 'react'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { Slider } from '@/components/ui/slider'
import Link from 'next/link'

export default function Component() {
  const products = useMemo(
    () => [
      {
        id: 1,
        image: '/placeholder.svg',
        name: 'Cozy Knit Sweater',
        description: 'Soft and warm knit sweater perfect for fall',
        price: 49.99,
        category: 'Clothing',
        rating: 4.5,
      },
      {
        id: 2,
        image: '/placeholder.svg',
        name: 'Sleek Leather Backpack',
        description: 'Durable and stylish leather backpack',
        price: 89.99,
        category: 'Accessories',
        rating: 4.2,
      },
      {
        id: 3,
        image: '/placeholder.svg',
        name: 'Ergonomic Office Chair',
        description: 'Comfortable and supportive office chair',
        price: 199.99,
        category: 'Furniture',
        rating: 4.8,
      },
      {
        id: 4,
        image: '/placeholder.svg',
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'High-quality audio experience with noise-cancellation',
        price: 299.99,
        category: 'Electronics',
        rating: 4.6,
      },
      {
        id: 5,
        image: '/placeholder.svg',
        name: 'Rustic Wood Dining Table',
        description: 'Handcrafted solid wood dining table',
        price: 599.99,
        category: 'Furniture',
        rating: 4.7,
      },
      {
        id: 6,
        image: '/placeholder.svg',
        name: 'Stylish Leather Tote Bag',
        description: 'Versatile and durable leather tote bag',
        price: 79.99,
        category: 'Accessories',
        rating: 4.3,
      },
    ],
    []
  )
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedRating, setSelectedRating] = useState(0)
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        selectedCategory.length > 0 &&
        !selectedCategory.includes(product.category)
      ) {
        return false
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }
      if (selectedRating > 0 && product.rating < selectedRating) {
        return false
      }
      return true
    })
  }, [selectedCategory, priceRange, selectedRating, products])
  return (
    <div className='grid md:grid-cols-[240px_1fr] gap-8 p-4 md:p-6 mt-16'>
      <div className='bg-background rounded-lg shadow-sm p-4 md:p-6'>
        <h2 className='text-lg font-semibold mb-4'>Filters</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-base font-medium mb-2'>Category</h3>
            <div className='space-y-2'>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedCategory.includes('Clothing')}
                  onCheckedChange={() => {
                    setSelectedCategory((prev) =>
                      prev.includes('Clothing')
                        ? prev.filter((c) => c !== 'Clothing')
                        : [...prev, 'Clothing']
                    )
                  }}
                />
                Clothing
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedCategory.includes('Accessories')}
                  onCheckedChange={() => {
                    setSelectedCategory((prev) =>
                      prev.includes('Accessories')
                        ? prev.filter((c) => c !== 'Accessories')
                        : [...prev, 'Accessories']
                    )
                  }}
                />
                Accessories
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedCategory.includes('Furniture')}
                  onCheckedChange={() => {
                    setSelectedCategory((prev) =>
                      prev.includes('Furniture')
                        ? prev.filter((c) => c !== 'Furniture')
                        : [...prev, 'Furniture']
                    )
                  }}
                />
                Furniture
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedCategory.includes('Electronics')}
                  onCheckedChange={() => {
                    setSelectedCategory((prev) =>
                      prev.includes('Electronics')
                        ? prev.filter((c) => c !== 'Electronics')
                        : [...prev, 'Electronics']
                    )
                  }}
                />
                Electronics
              </Label>
            </div>
          </div>
          <div>
            <h3 className='text-base font-medium mb-2'>Price Range</h3>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className='mb-2'
            />
            <div className='flex justify-between text-sm text-muted-foreground'>
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <div>
            <h3 className='text-base font-medium mb-2'>Rating</h3>
            <div className='space-y-2'>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedRating === 0}
                  onCheckedChange={() => setSelectedRating(0)}
                />
                Any
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedRating === 4}
                  onCheckedChange={() => setSelectedRating(4)}
                />
                4 stars and above
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedRating === 3}
                  onCheckedChange={() => setSelectedRating(3)}
                />
                3 stars and above
              </Label>
              <Label className='flex items-center gap-2'>
                <Checkbox
                  checked={selectedRating === 2}
                  onCheckedChange={() => setSelectedRating(2)}
                />
                2 stars and above
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='bg-background rounded-lg shadow-sm overflow-hidden'
          >
            <Link href='#' prefetch={false}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className='w-full h-48 object-cover'
                style={{ aspectRatio: '400/300', objectFit: 'cover' }}
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {product.description}
                </p>
                <div className='flex items-center justify-between mt-4'>
                  <div className='flex items-center gap-1'>
                    <StarIcon className='w-5 h-5 fill-primary' />
                    <span className='text-sm text-muted-foreground'>
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className='text-lg font-semibold'>
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  )
}
