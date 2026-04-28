interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'green' | 'amber' | 'red' | 'gray'
  className?: string
}

export function Badge({ children, variant = 'gray', className = '' }: BadgeProps) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  )
}
