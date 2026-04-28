import { MOCK_ATHLETES, MOCK_PACKAGES, EVENT_LABELS, LEVEL_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

export default function AthletesPage() {
  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[24px]">Athletes</h1>
          <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
            {MOCK_ATHLETES.length} active athletes on your roster
          </p>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Table header */}
        <div
          className="grid px-4 py-3 text-[12px] font-semibold uppercase tracking-wide border-b"
          style={{ gridTemplateColumns: '40px 1fr auto auto auto', gap: '16px', borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg-secondary)' }}
        >
          <div />
          <div>Athlete</div>
          <div>Event</div>
          <div>Package</div>
          <div>Status</div>
        </div>

        {MOCK_ATHLETES.map(athlete => {
          const pkg = MOCK_PACKAGES.find(p => p.id === athlete.currentPackageId)
          return (
            <Link
              key={athlete.id}
              href={`/coach/athletes/${athlete.id}`}
              className="table-row"
              style={{ gridTemplateColumns: '40px 1fr auto auto auto', gap: '16px', textDecoration: 'none', color: 'inherit' }}
            >
              <Avatar src={athlete.avatar} name={athlete.name} size={36} />
              <div>
                <div className="font-medium text-[14px]">{athlete.name}</div>
                <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  {athlete.location} · PR: {athlete.prs[athlete.primaryEvent]}
                </div>
              </div>
              <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{EVENT_LABELS[athlete.primaryEvent]}</div>
              <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{pkg?.name ?? 'No package'}</div>
              <span className="badge badge-green">Active</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
