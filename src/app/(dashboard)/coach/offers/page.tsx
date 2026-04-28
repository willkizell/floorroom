import { MOCK_PACKAGES } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

const coachPackages = MOCK_PACKAGES.filter(p => p.coachId === 'coach-1')

export default function OffersPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px]">Offers</h1>
          <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            Manage your coaching packages and pricing
          </p>
        </div>
        <button className="btn-primary btn-sm">Add package</button>
      </div>

      <div className="space-y-4">
        {coachPackages.map(pkg => (
          <div key={pkg.id} className="card">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-semibold text-[16px]">{pkg.name}</div>
                  <span className={`badge ${pkg.isVisible ? 'badge-green' : 'badge-gray'}`}>
                    {pkg.isVisible ? 'Visible' : 'Hidden'}
                  </span>
                </div>
                <div className="font-bold text-[20px] mb-2">
                  {formatCurrency(pkg.price)}
                  <span className="text-[14px] font-normal" style={{ color: 'var(--text-muted)' }}>
                    {pkg.billingCadence === 'monthly' ? '/mo' : pkg.billingCadence === 'weekly' ? '/wk' : ' one-time'}
                  </span>
                </div>
                <p className="text-[14px] mb-3" style={{ color: 'var(--text-secondary)' }}>{pkg.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-muted)' }}>Video reviews</div>
                    <div className="text-[14px] font-medium">{pkg.videoReviewsPerMonth}/mo</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-muted)' }}>Messaging</div>
                    <div className="text-[14px] font-medium">{pkg.messagingAccess ? 'Included' : 'Not included'}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-muted)' }}>Program updates</div>
                    <div className="text-[14px] font-medium">{pkg.programUpdates ? 'Included' : 'Not included'}</div>
                  </div>
                  {pkg.athleteCap && (
                    <div>
                      <div className="text-[11px] uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-muted)' }}>Athlete cap</div>
                      <div className="text-[14px] font-medium">{pkg.athleteCap} athletes</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 shrink-0">
                <button className="btn-secondary btn-sm">Edit</button>
                <button className="btn-secondary btn-sm">{pkg.isVisible ? 'Hide' : 'Show'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
