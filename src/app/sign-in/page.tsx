import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5" style={{ background: 'var(--bg-secondary)' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-[20px]">FloorRoom</Link>
          <div className="text-[15px] mt-1" style={{ color: 'var(--text-secondary)' }}>Sign in to your account</div>
        </div>

        <div className="card">
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[13px] font-medium">Password</label>
                <a href="#" className="text-[13px]" style={{ color: 'var(--blue)' }}>Forgot?</a>
              </div>
              <input type="password" placeholder="Your password" className="w-full" />
            </div>
            <button className="btn-primary w-full">Sign in</button>
          </div>

          <div className="divider" />

          <div className="text-center text-[14px]" style={{ color: 'var(--text-secondary)' }}>
            New to FloorRoom?{' '}
            <Link href="/onboarding/athlete" style={{ color: 'var(--blue)', fontWeight: 600 }}>Create account</Link>
          </div>
        </div>

        {/* Dev shortcuts */}
        <div className="mt-6 card" style={{ background: 'var(--bg-tertiary)' }}>
          <div className="text-[12px] font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>Dev shortcuts</div>
          <div className="space-y-1.5">
            <Link href="/coach" className="block text-[13px] font-medium" style={{ color: 'var(--blue)' }}>Coach dashboard</Link>
            <Link href="/athlete" className="block text-[13px] font-medium" style={{ color: 'var(--blue)' }}>Athlete dashboard</Link>
            <Link href="/admin" className="block text-[13px] font-medium" style={{ color: 'var(--blue)' }}>Admin panel</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
