'use client'
import { unstable_ViewTransition as ViewTransition } from 'react'

const About = () => {
  return (
    <ViewTransition>
      <section className='text-gray-600 body-font'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white'>
          Sobre
        </h1>
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
          Somos apaixonados por tecnologia, design e inovação. Nossa missão é
          criar experiências digitais incríveis e acessíveis para todos. Aqui
          você encontra informações sobre nossa equipe, valores e projetos.
        </p>
      </section>
    </ViewTransition>
  )
}

export default About
