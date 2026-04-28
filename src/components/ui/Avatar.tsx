'use client'
import { initials } from '@/lib/utils'

interface AvatarProps {
  src?: string
  name: string
  size?: number
  className?: string
}

export function Avatar({ src, name, size = 40, className = '' }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className={`avatar ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <div
      className={`avatar flex items-center justify-center bg-[#EFF6FF] text-[#2563EB] font-semibold ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {initials(name)}
    </div>
  )
}
