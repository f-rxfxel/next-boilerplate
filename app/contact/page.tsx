'use client'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Contact() {
  return (
    <ViewTransition>
      <section className='text-gray-600 body-font'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white'>
          Contato
        </h1>
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
          Entre em contato conosco preenchendo o formulário abaixo. Retornaremos
          o mais breve possível!
        </p>
      </section>
    </ViewTransition>
  )
}
