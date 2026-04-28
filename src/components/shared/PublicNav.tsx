'use client'
import Link from 'next/link'
import { useState } from 'react'

export function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-5 h-[60px] flex items-center justify-between">
          <Link href="/" className="font-bold text-[18px] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            FloorRoom
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/marketplace" className="nav-item text-[14px]">Browse coaches</Link>
            <Link href="/onboarding/coach" className="nav-item text-[14px]">Become a coach</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/sign-in" className="btn-secondary btn-sm">Sign in</Link>
            <Link href="/onboarding/athlete" className="btn-primary btn-sm">Get started</Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="fixed top-[60px] right-0 bottom-0 w-72 border-l shadow-xl p-5 flex flex-col gap-2"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
            onClick={e => e.stopPropagation()}
          >
            <Link href="/marketplace" className="nav-item" onClick={() => setMobileOpen(false)}>Browse coaches</Link>
            <Link href="/onboarding/coach" className="nav-item" onClick={() => setMobileOpen(false)}>Become a coach</Link>
            <div className="divider" />
            <Link href="/sign-in" className="btn-secondary w-full text-center" onClick={() => setMobileOpen(false)}>Sign in</Link>
            <Link href="/onboarding/athlete" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>Get started</Link>
          </div>
        </div>
      )}
    </>
  )
}
