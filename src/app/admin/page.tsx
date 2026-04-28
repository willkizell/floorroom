import { MOCK_COACHES, MOCK_ATHLETES } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { StatCard } from '@/components/ui/StatCard'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'

export default function AdminPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Admin header */}
      <div className="border-b px-6 h-[60px] flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-[16px]">FloorRoom</Link>
          <span className="badge badge-red">Admin</span>
        </div>
        <Link href="/sign-in" className="btn-secondary btn-sm">Sign out</Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-[24px]">Admin panel</h1>
          <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>Platform management and oversight</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard label="Total coaches" value={MOCK_COACHES.length} />
          <StatCard label="Total athletes" value={MOCK_ATHLETES.length} />
          <StatCard label="Marketplace GMV" value={formatCurrency(28400)} sub="This month" />
          <StatCard label="Platform revenue" value={formatCurrency(2272)} sub="8% fee" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Coach approval queue */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3>Coach approvals</h3>
            </div>
            {MOCK_COACHES.slice(0, 3).map(coach => (
              <div key={coach.id} className="table-row" style={{ gridTemplateColumns: '36px 1fr auto', gap: 12 }}>
                <Avatar src={coach.avatar} name={coach.name} size={36} />
                <div>
                  <div className="font-medium text-[14px]">{coach.name}</div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{coach.location} · {coach.specialties.length} events</div>
                </div>
                <div className="flex gap-1">
                  <button className="btn-primary btn-sm" style={{ height: 28, padding: '0 10px', fontSize: 12 }}>Approve</button>
                  <button className="btn-secondary btn-sm" style={{ height: 28, padding: '0 10px', fontSize: 12 }}>Review</button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured coaches manager */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3>Featured coaches</h3>
            </div>
            {MOCK_COACHES.slice(0, 2).map(coach => (
              <div key={coach.id} className="table-row" style={{ gridTemplateColumns: '36px 1fr auto', gap: 12 }}>
                <Avatar src={coach.avatar} name={coach.name} size={36} />
                <div>
                  <div className="font-medium text-[14px]">{coach.name}</div>
                  <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Rating: {coach.rating} · {coach.reviewCount} reviews</div>
                </div>
                <button className="btn-secondary btn-sm" style={{ height: 28, padding: '0 10px', fontSize: 12 }}>Remove</button>
              </div>
            ))}
            <div className="p-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <button className="btn-secondary btn-sm">Add featured coach</button>
            </div>
          </div>

          {/* Payout review */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3>Payout review</h3>
            </div>
            {[
              { coach: 'Marcus Eaton', amount: 1840, status: 'pending' },
              { coach: 'Priya Nair', amount: 1520, status: 'pending' },
              { coach: 'James Okonkwo', amount: 3060, status: 'pending' },
            ].map(payout => (
              <div key={payout.coach} className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <div>
                  <div className="font-medium text-[14px]">{payout.coach}</div>
                  <span className="badge badge-amber">{payout.status}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[14px]">{formatCurrency(payout.amount)}</span>
                  <button className="btn-primary btn-sm" style={{ height: 28, padding: '0 10px', fontSize: 12 }}>Process</button>
                </div>
              </div>
            ))}
          </div>

          {/* Elite verification */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3>Elite verification queue</h3>
            </div>
            <div className="p-4 text-center" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
              No verification requests pending.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
