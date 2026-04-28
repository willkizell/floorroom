import { MOCK_ATHLETES, MOCK_COACHES, MOCK_PACKAGES, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

const athlete = MOCK_ATHLETES[0]
const coach = MOCK_COACHES.find(c => c.id === athlete.currentCoachId)
const pkg = MOCK_PACKAGES.find(p => p.id === athlete.currentPackageId)

export default function MyCoachPage() {
  if (!coach || !pkg) {
    return (
      <div className="p-6">
        <h1 className="text-[24px] mb-4">My coach</h1>
        <div className="card text-center py-12">
          <div className="font-semibold text-[17px] mb-2">No coach yet</div>
          <p className="text-[14px] mb-4" style={{ color: 'var(--text-secondary)' }}>Browse the marketplace to find a throws coach that fits your goals.</p>
          <Link href="/athlete/discover" className="btn-primary">Browse coaches</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-[24px]">My coach</h1>
      </div>

      <div className="card mb-6">
        <div className="flex items-start gap-4 mb-4">
          <img src={coach.avatar} alt="" className="avatar" width={72} height={72} style={{ width: 72, height: 72 }} />
          <div className="flex-1">
            <h2 className="text-[20px] mb-1">{coach.name}</h2>
            <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{coach.headline}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {coach.specialties.map(s => (
                <span key={s} className="badge badge-blue">{EVENT_LABELS[s]}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Package</div>
            <div className="font-medium text-[14px]">{pkg.name}</div>
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Response time</div>
            <div className="font-medium text-[14px]">{coach.estimatedResponseTime}</div>
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Video turnaround</div>
            <div className="font-medium text-[14px]">{coach.videoTurnaround}</div>
          </div>
          <div>
            <div className="text-[12px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>Video reviews</div>
            <div className="font-medium text-[14px]">{pkg.videoReviewsPerMonth}/month</div>
          </div>
        </div>

        <Link href="/athlete/messages" className="btn-primary btn-sm">Message coach</Link>
      </div>

      <div className="card">
        <h3 className="mb-3">Package includes</h3>
        <ul className="space-y-2">
          {pkg.includes.map(item => (
            <li key={item} className="flex gap-2 text-[14px]" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--green)' }}>+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
