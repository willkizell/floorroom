'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Overview', href: '/coach', icon: GridIcon },
  { label: 'Athletes', href: '/coach/athletes', icon: UsersIcon },
  { label: 'Applications', href: '/coach/applications', icon: InboxIcon },
  { label: 'Programs', href: '/coach/programs', icon: ClipboardIcon },
  { label: 'Video Review', href: '/coach/video', icon: VideoIcon },
  { label: 'Messages', href: '/coach/messages', icon: MessageIcon },
  { label: 'Offers', href: '/coach/offers', icon: TagIcon },
  { label: 'Marketplace Profile', href: '/coach/profile', icon: UserIcon },
  { label: 'Billing', href: '/coach/billing', icon: CreditCardIcon },
]

export function CoachSidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="hidden md:flex flex-col w-[220px] shrink-0 border-r h-screen sticky top-0 overflow-y-auto"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="p-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <Link href="/" className="font-bold text-[16px]" style={{ color: 'var(--text-primary)' }}>FloorRoom</Link>
        <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>Coach workspace</div>
      </div>
      <nav className="p-3 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/coach' && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} className={`nav-item mb-0.5 ${isActive ? 'active' : ''}`}>
              <item.icon size={16} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <Link href="/marketplace" className="nav-item text-[13px]">
          <GlobeIcon size={14} />
          View marketplace
        </Link>
        <Link href="/sign-in" className="nav-item text-[13px]">
          <LogOutIcon size={14} />
          Sign out
        </Link>
      </div>
    </aside>
  )
}

function GridIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}
function UsersIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 13.5c0-2.485 2.239-4.5 5-4.5s5 2.015 5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M11 7.5c1.657 0 3 1.343 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="11" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}
function InboxIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1.5 9.5h3.5l1.5 2h3l1.5-2H14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
function ClipboardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2.5" y="2.5" width="11" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 2.5A2 2 0 0 1 10 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5 7.5h6M5 10.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
function VideoIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M11 7l4-2v6l-4-2V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  )
}
function MessageIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M14 10a2 2 0 0 1-2 2H5l-3 2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  )
}
function TagIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 2h5l7 7-5 5-7-7V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <circle cx="5.5" cy="5.5" r="1" fill="currentColor"/>
    </svg>
  )
}
function UserIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
function CreditCardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3.5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 6.5h14" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="3" y="9" width="3" height="1.5" rx="0.5" fill="currentColor"/>
    </svg>
  )
}
function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1.5 8h13M8 1.5c-2 2-3 3.5-3 6.5s1 4.5 3 6.5M8 1.5c2 2 3 3.5 3 6.5s-1 4.5-3 6.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}
function LogOutIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M10 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M11 5l3 3-3 3M14 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
