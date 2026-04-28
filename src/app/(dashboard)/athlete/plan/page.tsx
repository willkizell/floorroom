import { MOCK_PROGRAMS } from '@/lib/mock-data'

const program = MOCK_PROGRAMS[0]

export default function AthletePlanPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[24px]">My plan</h1>
        <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
          {program.name}
        </p>
      </div>

      {/* Week tabs */}
      <div className="flex border-b mb-6 overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
        {program.weeks.map((week, i) => (
          <button
            key={week.weekNumber}
            className="px-5 py-3 text-[14px] font-medium shrink-0 border-b-2"
            style={{
              borderColor: i === 0 ? 'var(--blue)' : 'transparent',
              color: i === 0 ? 'var(--blue)' : 'var(--text-secondary)',
            }}
          >
            Week {week.weekNumber}
          </button>
        ))}
      </div>

      {program.weeks.map(week => (
        <div key={week.weekNumber}>
          <div className="mb-4">
            <h3>{week.theme}</h3>
            {week.notes && (
              <p className="text-[14px] mt-1" style={{ color: 'var(--text-secondary)' }}>{week.notes}</p>
            )}
          </div>

          <div className="space-y-4">
            {week.sessions.map(session => (
              <div key={session.id} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[15px]">{session.title}</div>
                    <div className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {session.day} · {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                    </div>
                  </div>
                  {session.completedAt ? (
                    <span className="badge badge-green">Completed</span>
                  ) : (
                    <button className="btn-secondary btn-sm">Mark done</button>
                  )}
                </div>

                <div className="space-y-2">
                  {session.exercises.map((ex, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded"
                      style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}
                    >
                      <div className="font-medium text-[14px]">{ex.name}</div>
                      <div className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                        {ex.sets && `${ex.sets}×`}{ex.reps}{ex.weight && ` · ${ex.weight}`}
                      </div>
                    </div>
                  ))}
                </div>

                {session.notes && (
                  <div className="mt-3 pt-3 border-t text-[13px]" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                    <span className="font-medium text-[var(--text-primary)]">Coach note: </span>
                    {session.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
