import { MOCK_ATHLETES, MOCK_PACKAGES, MOCK_COACHES } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

const athlete = MOCK_ATHLETES[0]
const pkg = MOCK_PACKAGES.find(p => p.id === athlete.currentPackageId)
const coach = MOCK_COACHES.find(c => c.id === athlete.currentCoachId)

export default function AthleteBillingPage() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Billing</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Active package, payments, and subscription management
        </p>
      </div>

      {/* Active package */}
      {pkg && coach && (
        <div className="card mb-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-[13px] mb-1" style={{ color: 'var(--text-muted)' }}>Active package</div>
              <div className="font-semibold text-[18px]">{pkg.name}</div>
              <div className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>with {coach.name}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-[24px] tracking-tight">{formatCurrency(pkg.price)}</div>
              <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
                {pkg.billingCadence === 'monthly' ? 'per month' : pkg.billingCadence === 'weekly' ? 'per week' : 'one-time'}
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="flex items-center justify-between mb-3">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Next renewal</span>
            <span className="font-medium text-[14px]">May 15, 2024</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Status</span>
            <span className="badge badge-green">Active</span>
          </div>

          <div className="flex gap-2">
            <button className="btn-secondary btn-sm">Change package</button>
            <button className="btn-secondary btn-sm">Cancel subscription</button>
          </div>
        </div>
      )}

      {/* Payment history */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <h3>Payment history</h3>
        </div>
        {[
          { date: 'Apr 15, 2024', desc: 'Full Remote Coaching — April', amount: 285, status: 'paid' },
          { date: 'Mar 15, 2024', desc: 'Full Remote Coaching — March', amount: 285, status: 'paid' },
          { date: 'Feb 15, 2024', desc: 'Full Remote Coaching — February', amount: 285, status: 'paid' },
        ].map((payment, i) => (
          <div key={i} className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <div>
              <div className="font-medium text-[14px]">{payment.desc}</div>
              <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{payment.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[14px]">{formatCurrency(payment.amount)}</span>
              <span className="badge badge-green">{payment.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
