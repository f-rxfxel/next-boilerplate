import React from 'react'

interface GlassContainerProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
  className?: string
}

export function GlassContainer({
  children,
  className = '',
  ...rest
}: GlassContainerProps) {
  return (
    <div
      className={`p-1 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
