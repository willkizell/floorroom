import { MOCK_APPLICATIONS, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { formatDate } from '@/lib/utils'

export default function ApplicationsPage() {
  const pending = MOCK_APPLICATIONS.filter(a => a.status === 'pending')

  return (
    <div className="p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Applications</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          {pending.length} pending application{pending.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="space-y-4">
        {pending.map(app => (
          <div key={app.id} className="card">
            <div className="flex items-start gap-4 mb-4">
              <Avatar src={app.athlete.avatar} name={app.athlete.name} size={48} />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[16px]">{app.athlete.name}</div>
                    <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {EVENT_LABELS[app.athlete.primaryEvent]} · {app.athlete.location} · PR: {app.athlete.prs[app.athlete.primaryEvent]}
                    </div>
                    <div className="text-[12px] mt-1" style={{ color: 'var(--text-muted)' }}>
                      Submitted {formatDate(app.submittedAt)}
                    </div>
                  </div>
                  <span className="badge badge-amber shrink-0">Pending</span>
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="space-y-3">
              {Object.entries(app.answers).map(([question, answer]) => (
                <div key={question}>
                  <div className="text-[13px] font-medium mb-0.5">{question}</div>
                  <div className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{answer}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button className="btn-primary btn-sm">Accept</button>
              <button className="btn-secondary btn-sm">Decline</button>
              <button className="btn-secondary btn-sm">Message athlete</button>
            </div>
          </div>
        ))}

        {pending.length === 0 && (
          <div className="py-16 text-center">
            <div className="font-semibold text-[17px] mb-1">No pending applications</div>
            <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>New applications will appear here for your review.</div>
          </div>
        )}
      </div>
    </div>
  )
}
