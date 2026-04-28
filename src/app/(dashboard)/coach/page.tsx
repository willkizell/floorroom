import { StatCard } from '@/components/ui/StatCard'
import { MOCK_COACHES, MOCK_ATHLETES, MOCK_APPLICATIONS, MOCK_VIDEOS, MOCK_THREADS, MOCK_BILLING, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import { formatCurrency, timeAgo } from '@/lib/utils'
import Link from 'next/link'

const coach = MOCK_COACHES[0]

export default function CoachOverviewPage() {
  const pendingVideos = MOCK_VIDEOS.filter(v => v.status === 'pending_review')
  const pendingApps = MOCK_APPLICATIONS.filter(a => a.status === 'pending')
  const unreadMessages = MOCK_THREADS.reduce((acc, t) => acc + t.unreadCount, 0)

  return (
    <div className="p-6 max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[24px]">Good morning, {coach.name.split(' ')[0]}.</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Here is what needs your attention today.
        </p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatCard label="Active athletes" value={coach.activeAthletes} sub={`${coach.maxAthletes - coach.activeAthletes} spots open`} />
        <StatCard label="Monthly revenue" value={formatCurrency(MOCK_BILLING.monthlyRecurring)} sub="MRR" />
        <StatCard label="Pending videos" value={pendingVideos.length} sub="Awaiting review" />
        <StatCard label="Applications" value={pendingApps.length} sub="Pending review" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Video queue preview */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <h3>Pending video review</h3>
            <Link href="/coach/video" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>View all</Link>
          </div>
          {pendingVideos.length === 0 ? (
            <div className="p-6 text-center text-[14px]" style={{ color: 'var(--text-secondary)' }}>No pending videos</div>
          ) : (
            pendingVideos.map(v => {
              const athlete = MOCK_ATHLETES.find(a => a.id === v.athleteId)
              return (
                <div key={v.id} className="table-row grid-cols-[40px_1fr_auto]">
                  <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={36} />
                  <div className="min-w-0">
                    <div className="font-medium text-[14px] truncate">{v.title}</div>
                    <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {athlete?.name} · {EVENT_LABELS[v.event]} · {timeAgo(v.uploadedAt)}
                    </div>
                  </div>
                  <Link href="/coach/video" className="badge badge-amber shrink-0">Review</Link>
                </div>
              )
            })
          )}
        </div>

        {/* Applications preview */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <h3>Pending applications</h3>
            <Link href="/coach/applications" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>View all</Link>
          </div>
          {pendingApps.length === 0 ? (
            <div className="p-6 text-center text-[14px]" style={{ color: 'var(--text-secondary)' }}>No pending applications</div>
          ) : (
            pendingApps.map(app => (
              <div key={app.id} className="table-row grid-cols-[40px_1fr_auto]">
                <Avatar src={app.athlete.avatar} name={app.athlete.name} size={36} />
                <div className="min-w-0">
                  <div className="font-medium text-[14px] truncate">{app.athlete.name}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {EVENT_LABELS[app.athlete.primaryEvent]} · {timeAgo(app.submittedAt)}
                  </div>
                </div>
                <Link href="/coach/applications" className="badge badge-blue shrink-0">Review</Link>
              </div>
            ))
          )}
        </div>

        {/* Recent messages */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <h3>Messages <span className="badge badge-blue ml-1">{unreadMessages}</span></h3>
            <Link href="/coach/messages" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>Open inbox</Link>
          </div>
          {MOCK_THREADS.map(thread => {
            const athlete = MOCK_ATHLETES.find(a => a.id === thread.athleteId)
            return (
              <div key={thread.id} className="table-row grid-cols-[40px_1fr_auto]">
                <Avatar src={athlete?.avatar} name={athlete?.name ?? 'A'} size={36} />
                <div className="min-w-0">
                  <div className="font-medium text-[14px]">{athlete?.name}</div>
                  <div className="text-[12px] mt-0.5 truncate" style={{ color: 'var(--text-secondary)' }}>
                    {thread.lastMessage.text}
                  </div>
                </div>
                <div className="text-[12px] shrink-0" style={{ color: 'var(--text-muted)' }}>{timeAgo(thread.updatedAt)}</div>
              </div>
            )
          })}
        </div>

        {/* Recent activity */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <h3>Recent billing</h3>
            <Link href="/coach/billing" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>View all</Link>
          </div>
          {MOCK_BILLING.recentTransactions.slice(0, 4).map(tx => (
            <div key={tx.id} className="table-row grid-cols-[1fr_auto_auto]">
              <div>
                <div className="font-medium text-[14px]">{tx.athleteName}</div>
                <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{tx.type}</div>
              </div>
              <div className="font-semibold text-[14px]">{formatCurrency(tx.amount)}</div>
              <span className={`badge ${tx.status === 'completed' ? 'badge-green' : 'badge-amber'}`}>{tx.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
