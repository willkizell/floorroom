'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Home', href: '/athlete', icon: HomeIcon },
  { label: 'Discover Coaches', href: '/athlete/discover', icon: SearchIcon },
  { label: 'My Coach', href: '/athlete/coach', icon: UserIcon },
  { label: 'My Plan', href: '/athlete/plan', icon: CalendarIcon },
  { label: 'Log Session', href: '/athlete/log', icon: PlusIcon },
  { label: 'Video', href: '/athlete/video', icon: VideoIcon },
  { label: 'Messages', href: '/athlete/messages', icon: MessageIcon },
  { label: 'Progress', href: '/athlete/progress', icon: TrendIcon },
  { label: 'Billing', href: '/athlete/billing', icon: CreditCardIcon },
  { label: 'Profile', href: '/athlete/profile', icon: SettingsIcon },
]

export function AthleteSidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="hidden md:flex flex-col w-[220px] shrink-0 border-r h-screen sticky top-0 overflow-y-auto"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="p-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <Link href="/" className="font-bold text-[16px]" style={{ color: 'var(--text-primary)' }}>FloorRoom</Link>
        <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>Athlete workspace</div>
      </div>
      <nav className="p-3 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/athlete' && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} className={`nav-item mb-0.5 ${isActive ? 'active' : ''}`}>
              <item.icon size={16} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-3 border-t" style={{ borderColor: 'var(--border)' }}>
        <Link href="/sign-in" className="nav-item text-[13px]">
          <LogOutIcon size={14} />
          Sign out
        </Link>
      </div>
    </aside>
  )
}

function HomeIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M2 7L8 2l6 5v7H10V9H6v5H2V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function SearchIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3"/><path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function UserIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function CalendarIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M5 1.5v2M11 1.5v2M1.5 6.5h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function PlusIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function VideoIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M11 7l4-2v6l-4-2V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function MessageIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M14 10a2 2 0 0 1-2 2H5l-3 2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
}
function TrendIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M2 12l4-4 3 3 5-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function CreditCardIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><rect x="1" y="3.5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 6.5h14" stroke="currentColor" strokeWidth="1.3"/><rect x="3" y="9" width="3" height="1.5" rx="0.5" fill="currentColor"/></svg>
}
function SettingsIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M12.7 3.3l-1.1 1.1M4.4 11.6l-1.1 1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
}
function LogOutIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M10 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M11 5l3 3-3 3M14 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
