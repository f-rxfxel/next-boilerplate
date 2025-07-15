'use client'
import { unstable_ViewTransition as ViewTransition } from 'react'
import ImmersiveScrollGallery from './immersive-scroll-gallery'

export default function About() {
  return (
    <ViewTransition>
      <div className='mx-auto relative h-dvh'>
        <ImmersiveScrollGallery />
      </div>
    </ViewTransition>
  )
}
