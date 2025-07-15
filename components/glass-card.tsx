interface GlassNavProps {
  children: React.ReactNode
  className?: string
}

export function GlassContainer({ children, className = '' }: GlassNavProps) {
  return (
    <nav
      className={`p-1 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 ${className}`}
    >
      {children}
    </nav>
  )
}
