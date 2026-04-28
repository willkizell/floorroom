import { MOCK_ATHLETES, MOCK_COACHES, MOCK_PROGRAMS, MOCK_VIDEOS, EVENT_LABELS } from '@/lib/mock-data'
import { Avatar } from '@/components/ui/Avatar'
import Link from 'next/link'

const athlete = MOCK_ATHLETES[0]
const coach = MOCK_COACHES.find(c => c.id === athlete.currentCoachId)
const program = MOCK_PROGRAMS[0]
const pendingFeedback = MOCK_VIDEOS.filter(v => v.athleteId === athlete.id && v.status === 'reviewed')
const todaySession = program.weeks[0].sessions[0]

export default function AthleteHomePage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[24px]">Good morning, {athlete.name.split(' ')[0]}.</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          Here is what is on your plate today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Today's plan */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="flex items-center justify-between mb-4">
            <h3>Today&apos;s training</h3>
            <Link href="/athlete/plan" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>Full plan</Link>
          </div>
          <div className="mb-3">
            <div className="font-semibold text-[15px]">{todaySession.title}</div>
            <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {todaySession.type.charAt(0).toUpperCase() + todaySession.type.slice(1)} session · {todaySession.day}
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {todaySession.exercises.map((ex, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}
              >
                <div
                  className="w-1 h-8 rounded-full shrink-0"
                  style={{ background: 'var(--blue)' }}
                />
                <div className="flex-1">
                  <div className="font-medium text-[14px]">{ex.name}</div>
                  {(ex.sets || ex.reps) && (
                    <div className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {ex.sets && `${ex.sets} sets`}{ex.sets && ex.reps && ' × '}{ex.reps && ex.reps}
                      {ex.weight && ` · ${ex.weight}`}
                    </div>
                  )}
                </div>
                {ex.notes && (
                  <div className="text-[12px] italic max-w-[180px] text-right" style={{ color: 'var(--text-muted)' }}>
                    {ex.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Link href="/athlete/log" className="btn-primary btn-sm">Log this session</Link>
            <Link href="/athlete/video" className="btn-secondary btn-sm">Upload video</Link>
          </div>
        </div>

        {/* Coach card */}
        {coach && (
          <div className="card">
            <h3 className="mb-3">My coach</h3>
            <div className="flex items-center gap-3 mb-3">
              <Avatar src={coach.avatar} name={coach.name} size={44} />
              <div>
                <div className="font-semibold text-[15px]">{coach.name}</div>
                <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Full Remote Coaching · {coach.location}</div>
              </div>
            </div>
            <div className="divider" />
            <div className="text-[13px] mb-3" style={{ color: 'var(--text-secondary)' }}>
              Response time: {coach.estimatedResponseTime} · Video feedback: {coach.videoTurnaround}
            </div>
            <Link href="/athlete/coach" className="btn-secondary btn-sm">View coach page</Link>
          </div>
        )}

        {/* Pending feedback */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3>Recent feedback</h3>
            <Link href="/athlete/video" className="text-[13px] font-medium" style={{ color: 'var(--blue)' }}>All videos</Link>
          </div>
          {pendingFeedback.length === 0 ? (
            <div className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>No feedback yet. Upload a video to get started.</div>
          ) : (
            pendingFeedback.map(v => (
              <div key={v.id}>
                <div className="font-medium text-[14px] mb-1">{v.title}</div>
                <div className="text-[13px] mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {EVENT_LABELS[v.event]}
                </div>
                {v.feedback && (
                  <div
                    className="p-3 rounded-lg text-[13px]"
                    style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}
                  >
                    {v.feedback.text.slice(0, 120)}...
                  </div>
                )}
                <Link href="/athlete/video" className="btn-secondary btn-sm mt-2 inline-block">Read full feedback</Link>
              </div>
            ))
          )}
        </div>

        {/* Quick actions */}
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <h3 className="mb-3">Quick actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Log session', href: '/athlete/log', desc: 'Record throws and lifts' },
              { label: 'Upload video', href: '/athlete/video', desc: 'Submit for coach review' },
              { label: 'Message coach', href: '/athlete/messages', desc: 'Ask a question' },
              { label: 'View progress', href: '/athlete/progress', desc: 'PR timeline and charts' },
            ].map(action => (
              <Link
                key={action.href}
                href={action.href}
                className="p-3 rounded-lg border transition-all"
                style={{ borderColor: 'var(--border)', textDecoration: 'none', color: 'inherit' }}
              >
                <div className="font-semibold text-[14px] mb-0.5">{action.label}</div>
                <div className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{action.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
