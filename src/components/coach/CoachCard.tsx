import Link from 'next/link'
import type { CoachProfile } from '@/lib/types'
import { EVENT_LABELS } from '@/lib/mock-data'

interface CoachCardProps {
  coach: CoachProfile
  packages?: { price: number }[]
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5 3 10l.6-3.2L1.2 4.5l3.3-.5L6 1z"/>
    </svg>
  )
}

export function CoachCard({ coach, packages }: CoachCardProps) {
  const startingPrice = packages?.length ? Math.min(...packages.map(p => p.price)) : null
  const capacityPct = Math.round((coach.activeAthletes / coach.maxAthletes) * 100)

  return (
    <Link
      href={`/coaches/${coach.id}`}
      className="block card hover:shadow-md transition-shadow"
      style={{ padding: 0, overflow: 'hidden' }}
    >
      {/* Top section */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="avatar"
            width={56}
            height={56}
            style={{ width: 56, height: 56 }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>{coach.name}</div>
                <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{coach.location}</div>
              </div>
              {coach.verificationStatus === 'verified' && (
                <span className="badge badge-blue shrink-0">Verified</span>
              )}
            </div>

            <div className="flex items-center gap-1 mt-1.5">
              <span className="text-[var(--amber)]"><StarIcon /></span>
              <span className="text-[13px] font-semibold">{coach.rating.toFixed(1)}</span>
              <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>({coach.reviewCount})</span>
            </div>
          </div>
        </div>

        <p className="text-[13px] mt-3 leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
          {coach.headline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {coach.specialties.map(s => (
            <span key={s} className="badge badge-gray">{EVENT_LABELS[s]}</span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Stats row */}
      <div className="px-4 py-3 grid grid-cols-3 gap-2">
        <div>
          <div className="text-[12px]" style={{ color: 'var(--text-muted)' }}>Athletes</div>
          <div className="text-[14px] font-semibold mt-0.5">{coach.activeAthletes}/{coach.maxAthletes}</div>
        </div>
        <div>
          <div className="text-[12px]" style={{ color: 'var(--text-muted)' }}>Response</div>
          <div className="text-[14px] font-semibold mt-0.5">{coach.estimatedResponseTime}</div>
        </div>
        <div>
          <div className="text-[12px]" style={{ color: 'var(--text-muted)' }}>Intake</div>
          <div className="text-[14px] font-semibold mt-0.5">
            {coach.intakeMode === 'instant' ? 'Instant join' : 'Application'}
          </div>
        </div>
      </div>

      {/* Capacity bar */}
      <div className="px-4 pb-3">
        <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${capacityPct}%`, background: capacityPct > 80 ? 'var(--amber)' : 'var(--blue)' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-4 py-3 flex items-center justify-between border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div>
          {startingPrice !== null ? (
            <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
              From <span className="font-bold text-[15px]" style={{ color: 'var(--text-primary)' }}>${startingPrice}</span>/mo
            </span>
          ) : (
            <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>Contact for pricing</span>
          )}
        </div>
        <span className="text-[13px] font-semibold" style={{ color: 'var(--blue)' }}>View profile</span>
      </div>
    </Link>
  )
}
