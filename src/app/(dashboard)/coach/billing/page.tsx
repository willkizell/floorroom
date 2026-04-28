import { MOCK_BILLING } from '@/lib/mock-data'
import { StatCard } from '@/components/ui/StatCard'
import { formatCurrency, formatDate } from '@/lib/utils'

export default function CoachBillingPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Billing</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Revenue, payouts, and subscription management
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Monthly recurring" value={formatCurrency(MOCK_BILLING.monthlyRecurring)} sub="MRR" />
        <StatCard label="Active subscriptions" value={MOCK_BILLING.activeSubscriptions} />
        <StatCard label="Pending payout" value={formatCurrency(MOCK_BILLING.pendingPayouts)} />
        <StatCard label="Total earned" value={formatCurrency(MOCK_BILLING.totalEarnings)} sub="All time" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Payout status */}
        <div className="card">
          <h3 className="mb-4">Next payout</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Amount</span>
            <span className="font-bold text-[18px]">{formatCurrency(MOCK_BILLING.pendingPayouts)}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Expected date</span>
            <span className="font-medium text-[14px]">{formatDate(MOCK_BILLING.nextPayoutDate)}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Platform fee</span>
            <span className="font-medium text-[14px]">{MOCK_BILLING.platformFeePercent}%</span>
          </div>
          <div className="divider" />
          <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
            Payouts are processed on the 1st and 15th of each month via Stripe.
          </div>
        </div>

        {/* Recent transactions */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4 border-b" style={{ borderColor: 'var(--border)' }}>
            <h3>Recent transactions</h3>
          </div>
          <div>
            {MOCK_BILLING.recentTransactions.map(tx => (
              <div
                key={tx.id}
                className="px-4 py-3 border-b flex items-center justify-between"
                style={{ borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="font-medium text-[14px]">{tx.athleteName}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {tx.type} · {formatDate(tx.date)}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-semibold text-[14px] ${tx.type === 'payout' ? 'text-[var(--green)]' : ''}`}>
                    {tx.type === 'refund' ? '-' : ''}{formatCurrency(tx.amount)}
                  </span>
                  <span className={`badge ${tx.status === 'completed' ? 'badge-green' : tx.status === 'pending' ? 'badge-amber' : 'badge-red'}`}>
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
