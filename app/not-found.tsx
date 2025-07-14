// 'use client'

// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div className='flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden'>
//       <div className='w-full space-y-6 text-center'>
//         <div className='space-y-3'>
//           <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110'>
//             404
//           </h1>
//           <p className='text-gray-500'>
//             Looks like you've ventured into the unknown digital realm.
//           </p>
//         </div>
//         <Button onClick={() => window.history.back()}>Return to website</Button>
//       </div>
//     </div>
//   )
// }

import { NotFound, Illustration } from '@/components/error-page'

export default function Demo() {
  return (
    <div className='relative flex flex-col w-full justify-center min-h-svh bg-background p-6 md:p-10'>
      <div className='relative max-w-5xl mx-auto w-full'>
        <Illustration className='absolute inset-0 w-full h-[50vh] opacity-[0.04] dark:opacity-[0.03] text-foreground' />
        <NotFound
          title='Page not found'
          description='Lost, this page is. In another system, it may be.'
        />
      </div>
    </div>
  )
}
